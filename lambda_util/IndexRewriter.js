exports.handler = (event, _, callback) => {
  var request = event.Records[0].cf.request,
    oldUri = request.uri,
    newUri = oldUri.replace(/\/$/, '\/index.html');

  console.log('old: ' + oldUri);
  console.log('new: ' + newUri);

  request.uri = newUri;
  return callback(null, request);
}
