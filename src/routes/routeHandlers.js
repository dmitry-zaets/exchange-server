const getAuthToken = require('../github/getAuthToken');
const storage = {};

function authorize(req, res) {
	const id = req.query.state;
	const code = req.query.code;
	storage[id] = code;

	res.send('You have been successfully logged in. Now you can close this tab.');
}

function receive(req, res) {
	const id = req.params.id;
	const code = storage[id];
	if (id && code) {
    delete storage[id];
		getAuthToken(code).then((token) => {
			if (token) {
				res.json({token});
			}
		}).catch(() => {
      res.status(500).send();
    });
	} else {
		res.status(204).send();
	}
}

module.exports = {
	authorize,
	receive
};