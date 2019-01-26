exports.handler = (event, _, callback) => {
  var request = event.Records[0].cf.request,
    oldUri = request.uri;
  
  let newUri = oldUri;

  // Rewrite `/blog` to `/blog/index.html` to blog home
  if(oldUri.endsWith('/blog')) {
    newUri = oldUri.replace(/\/blog$/, '\/blog/index.html');
  // Rewrite `/blog/my-post` to `/blog/index.html` while leaving `/blog/js/site.js` alone
  } else if (oldUri.match(/\/blog\/[^\.]+$/)) {
    newUri = oldUri.split('/')[0] + '/blog/index.html';
  // Rewrite `/blog/` to `/blog/index.html` and `/` to `/index.html`
  } else if (oldUri.endsWith('/')) {
    newUri = oldUri.replace(/\/$/, '\/index.html');
  }

  console.log('old: ' + oldUri);
  console.log('new: ' + newUri);

  request.uri = newUri;
  return callback(null, request);
}