import jwt from 'jsonwebtoken';

export default defineEventHandler(async (event) => {
	const { type, password } = await readBody(event);
	
	const user_pws = {
		user: process.env.USER_PW,
		groupLeader: process.env.GROUPLEADER_PW
	}

	if(user_pws.hasOwnProperty(type)) {
		if (password === user_pws[type]) {
			// Create a JWT token
			const token = jwt.sign({ type }, process.env.JWT_SECRET);
		
			// Return the token to the client
			//return res.json({ token });
			setCookie(event, 'token',token)
			return token
		} else {
			console.log("wrong password")
			throw createError({
				statusCode: 401,
				statusMessage: 'Wrong password',
			})
		}
	} else {
		console.log("invalid type")
		console.log(type)
		throw createError({
			statusCode: 401,
			statusMessage: 'Invalid usertype',
		})
	}
})