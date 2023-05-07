
export default defineEventHandler(async (event) => {

	try {
	  // fetch all images in a folder
	  const folderId = '1p5Lraj_rdoSmikWndRRNhmmE-lpRbf4d';
	  const response = await event.context.drive.files.list({
		q: `'${folderId}' in parents and mimeType contains 'image/'`,
		fields: 'files(id,thumbnailLink,mimeType)',
	  });
	  const imageIds = response.data.files

	  return imageIds
	} catch (error) {
	  console.log(error)
	}
  });