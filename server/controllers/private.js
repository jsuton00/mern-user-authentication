const getPrivateData = (req, res, next) => {
	res.status(200).json({
		success: true,
		data: 'Access Allowed',
	});
};

exports.getPrivateData = getPrivateData;
