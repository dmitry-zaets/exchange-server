const request = require('request');

const url = 'https://github.com/login/oauth/access_token'

const client_id = process.env.CLIENT_ID;
const client_secret = process.env.CLIENT_SECRET;

function getAuthToken(code) {
	return new Promise(function(resolve, reject) {
		request.post(url, {
			form: {
				client_id,
				client_secret,
        code
			},
			json: true
		}, function(err, res, body) {
			if (err) {
				reject(err);
        return;
			}
      if (body['access_token']){
        resolve(body['access_token']);
      } else {
        reject('Access token not found in the response');
      }
		});
	});
}

module.exports = getAuthToken