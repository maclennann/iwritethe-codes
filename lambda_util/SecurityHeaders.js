'use strict';
exports.handler = (event, _, callback) => {
    const response = event.Records[0].cf.response;
    const headers = response.headers;
    
    headers['Strict-Transport-Security'] = [{key:'Strict-Transport-Security', value: "max-age=31536000; preload"}];
    // headers['Content-Security-Policy']   = [{key: 'Content-Security-Policy', value: "default-src 'none';"}];
    headers['X-Content-Type-Options']    = [{key: 'X-Content-Type-Options', value: "nosniff"}];
    headers['X-Frame-Options']           = [{key: 'X-Frame-Options', value: "DENY"}];
    headers['X-XSS-Protection']          = [{key: 'X-XSS-Protection', value: "1; mode=block"}];
    headers['Referrer-Policy']           = [{key: 'Referrer-Policy', value: "same-origin"}];

    delete headers['server'];

    callback(null, response);
};