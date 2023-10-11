import jwt from 'jsonwebtoken';

export default defineEventHandler(async (event) => {
	const { userType, password } = await readBody(event);

	const user_pws = {
		user: useRuntimeConfig().userPw,
		groupLeader: useRuntimeConfig().groupleaderPw
	}

	if(user_pws.hasOwnProperty(userType)) {
		if (password === user_pws[userType]) {
			// Create a JWT token
			const token = jwt.sign(userType, useRuntimeConfig().jwtSecret);
		
			// Return the token to the client
			//return res.json({ token });
			setCookie(event, 'token',token)
			return {
				statusCode: 200,
				statusMessage: 'success',
			};
		} else {
			console.log("wrong password")
			throw createError({
				statusCode: 401,
				statusMessage: 'Wrong password',
			})
		}
	} else {
		console.log("invalid type")
		console.log(userType)
		throw createError({
			statusCode: 401,
			statusMessage: 'Invalid usertype',
		})
	}
})