export const updateObjects = (oldObject, updatedProperties) => ({
	...oldObject,
	...updatedProperties,
});

export const tokenConfig = (getState) => {
	const token = getState && getState().auth.token;

	const config = {
		headers: {
			'Content-type': 'application/json',
			Authorization: `Bearer ${token}`,
		},
	};

	if (token) {
		config.headers['x-auth-token'] = token;
	}

	return config;
};
