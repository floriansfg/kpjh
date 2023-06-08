import { USER_TYPES } from "~/enums/enums";

export default defineEventHandler(async (event) => {
	const folderId = getQuery(event).id;
	if(folderId && event.context.auth && (event.context.auth.userType == USER_TYPES.user || event.context.auth.userType == USER_TYPES.groupLeader)) {
		if (!folderId) throw createError({ statusCode: 400, statusMessage: 'No FolderId' })
		console.log(folderId)
		
		try {
		const response = await event.context.drive.files.list({
			q: "'"+folderId+"' in parents",
			fields: 'files(id,name,thumbnailLink,mimeType)',
		});
		return response.data

		} catch(e) {
			// console.log(e)
		}
		return null
		
	} else {
		throw createError({
			statusCode: 401,
			statusMessage: 'Unauthorized',
		})
	}
});


// const getFilesOfFolder = async (folderId, drive) => {
// 	try {
		// const response = await drive.files.list({
		// 	q: "'"+folderId+"' in parents"
		// });
// 		let array = response.data.files
// 		array.filter(file => file.mimeType === "application/vnd.google-apps.folder").map(async file => {
// 			file.kind = "drive#folder"
// 			let children = await getFilesOfFolder(file.id,drive)
// 			file.files = []
// 		})
// 		return array
// 	} catch (error) {
// 		console.log(error)
// 	}
// }

//   export default defineEventHandler(async (event) => {

// 	const folderId = getQuery(event).id;
// 	if(folderId && event.context.auth && (event.context.auth.userType == USER_TYPES.user || event.context.auth.userType == USER_TYPES.groupLeader)) {
// 		if (!folderId) throw createError({ statusCode: 400, statusMessage: 'No FolderId' })
// 			try {
// 				const response = await event.context.drive.files.list({
// 					q: `'${folderId}' in parents and mimeType contains 'image/'`,
// 					fields: 'files(id,thumbnailLink,mimeType)',
// 				});
// 				const imageIds = response.data.files
// 				console.log(imageIds)
// 				return imageIds
// 			} catch (error) {
// 				console.log(error)
// 			}
// 	} else {
// 		throw createError({
// 			statusCode: 401,
// 			statusMessage: 'Unauthorized',
// 		})
// 	}
//   });