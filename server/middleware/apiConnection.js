import {Auth, google} from 'googleapis'

export default defineEventHandler(async (event) => {
	
	const auth = new Auth.GoogleAuth({
		keyFile: "./secret.json",
		scopes: ['https://www.googleapis.com/auth/drive.readonly']
	})
	
	const client = await auth.getClient();
	
	const drive = google.drive({ version: 'v3', auth: client });

	event.context.drive = drive

})