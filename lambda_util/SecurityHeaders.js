'use strict';
exports.handler = (event, _, callback) => {
    const response = event.Records[0].cf.response;
    const headers = response.headers;
    
    const csps = [
        "default-src 'none'",
        "font-src 'self' https://fonts.gstatic.com",
        "img-src 'self' https://s.gravatar.com",
        "script-src 'self'",
        "style-src 'self' https://fonts.googleapis.com/",
        "report-uri https://iwritethecodes.report-uri.com/r/d/csp/reportOnly"
    ];

    headers['Strict-Transport-Security']            = [{key: 'Strict-Transport-Security', value: "max-age=31536000; preload"}];
    headers['Content-Security-Policy-Report-Only']  = [{key: 'Content-Security-Policy-Report-Only', value: csps.join('; ')}];
    headers['X-Content-Type-Options']               = [{key: 'X-Content-Type-Options', value: "nosniff"}];
    headers['X-Frame-Options']                      = [{key: 'X-Frame-Options', value: "DENY"}];
    headers['X-XSS-Protection']                     = [{key: 'X-XSS-Protection', value: "1; mode=block"}];
    headers['Referrer-Policy']                      = [{key: 'Referrer-Policy', value: "same-origin"}];

    delete headers['server'];

    callback(null, response);
};