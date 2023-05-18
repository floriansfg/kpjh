import jwt from 'jsonwebtoken';

export default defineEventHandler(async (event) => {
	const { userType, password } = await readBody(event);
	
	const user_pws = {
		user: process.env.USER_PW,
		groupLeader: process.env.GROUPLEADER_PW
	}

	if(user_pws.hasOwnProperty(userType)) {
		if (password === user_pws[userType]) {
			// Create a JWT token
			const token = jwt.sign(userType, process.env.JWT_SECRET);
		
			// Return the token to the client
			//return res.json({ token });
			setCookie(event, 'token',token, {secure: true, httpOnly: true})
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