import { USER_TYPES } from "~/enums/enums";

export default defineEventHandler(async (event) => {

	if(event.context.auth && (event.context.auth.userType == USER_TYPES.user || event.context.auth.userType == USER_TYPES.groupLeader)) {
		//let folderId = getQuery(event).id;
		if(true) {
			try {
				const folderId = '1p5Lraj_rdoSmikWndRRNhmmE-lpRbf4d';
				const response = await event.context.drive.files.list({
					q: `'${folderId}' in parents and mimeType contains 'image/'`,
					fields: 'files(id,thumbnailLink,mimeType)',
				});
				const imageIds = response.data.files
				console.log(imageIds)
				return imageIds
			} catch (error) {
				console.log(error)
			}
		} else {
			
		}
	} else {
		throw createError({
			statusCode: 401,
			statusMessage: 'Unauthorized',
		})
	}
  });