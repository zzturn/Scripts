/**
 * @fileoverview Example of HTTP rewrite of request header.
 *
 * @supported Quantumult X (v1.0.5-build188)
 *
 * [rewrite_local]
 * ^http://img\.hellogithub\.com\/i\/.* url script-request-header sample-rewrite-request-header.js
 */

// $request.scheme, $request.method, $request.url, $request.path, $request.headers

var modifiedHeaders = $request.headers;
modifiedHeaders['Referer'] = 'https://hellogithub.com/';

$done({headers : modifiedHeaders});
// $done({path : modifiedPath});
// $done({}); // Not changed.
