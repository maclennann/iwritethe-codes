set -e

: ${CI?Deploys will only run from a CI job.}
: ${TRAVIS_TAG?Deploys should only run on tagged commits.}
: ${SAM_DEPLOYMENT_BUCKET?Need S3 bucket name for artifacts.}
: ${APPLICATION_NAME?Need name for CloudFormation stack.}
: ${DOMAIN_NAME?Need name for custom domain.}
: ${HOSTED_ZONE_ID?Need zone id for route53 zone.}
: ${EMAIL_ADDRESS?Need email address for contact form.}

# git_sha="$(git rev-parse --short HEAD)"
# IWTC_VERSION="$TRAVIS_TAG-$git_sha"

echo "Attempting deployment of version $IWTC_VERSION"

echo "Checking AWS credentials before starting..."
aws sts get-caller-identity > /dev/null
echo " -> Credentials okay! Continuing..."

echo "Checking for deployment bucket $SAM_DEPLOYMENT_BUCKET..."
bucketCheck=`aws s3api list-buckets --query "contains(Buckets[].[Name][], '$SAM_DEPLOYMENT_BUCKET')"`  
if [ $bucketCheck = "false" ] ; then
  echo " -> Bucket not found, creating..."
  aws s3api create-bucket --bucket $SAM_DEPLOYMENT_BUCKET \
    --region us-east-1
  
  aws s3api put-bucket-encryption --bucket $SAM_DEPLOYMENT_BUCKET --region us-east-1 \
    --server-side-encryption-configuration '{
      "Rules":[{
        "ApplyServerSideEncryptionByDefault":{"SSEAlgorithm":"AES256"}
      }]}'
  echo " -> Success!"
else
  echo " -> Bucket already exists, continuing..."
fi

echo " Packaging and uploading infra to S3"
aws cloudformation package --template-file template.yaml \
  --s3-bucket $SAM_DEPLOYMENT_BUCKET \
  --output-template-file deploy-template.yaml \
  --region us-east-1
echo " -> Done!"

echo " Deploying infra"
aws cloudformation deploy --template-file deploy-template.yaml \
  --stack-name $APPLICATION_NAME \
  --capabilities CAPABILITY_IAM \
  --parameter-overrides DomainName=$DOMAIN_NAME HostedZoneId=$HOSTED_ZONE_ID EmailAddress=$EMAIL_ADDRESS \
  --no-fail-on-empty-changeset \
  --region us-east-1

echo " -> Done!"

echo "Discovering static asset bucket..."
site_bucket="$(aws cloudformation describe-stacks --stack-name $APPLICATION_NAME \
            --region us-east-1 --query 'Stacks[].Outputs[?OutputKey==`SiteS3Bucket`].OutputValue' --output text)"
echo " -> Discovered: $site_bucket"

echo " Deploying static content"
cd ./ui
npm run build
cd ..
aws s3 sync ./ui/dist s3://$site_bucket
echo " -> Done!"