

export default defineEventHandler(async (event) => {

	try {
	  // fetch all images in a folder
	  const folderId = '1p5Lraj_rdoSmikWndRRNhmmE-lpRbf4d';
	  const images = await drive.files.list({
		q: `'${folderId}' in parents and mimeType contains 'image/'`,
		fields: 'files(id, name,webContentLink)',
	  });
	  
	  console.log(images.data.files[2])
	  // fetch each image and send them to the client
	  const imageResponses = await Promise.all(images.data.files.map(async (image) => {
		const file = await drive.files.get({
		  fileId: '1NIraU_1MsClQE3aKQNIp52ZXG4NB2Tx0',
		  alt: 'media',
		}, {
		  responseType: 'arraybuffer',
		});

		
		console.log(typeof file.data)
		return Buffer.from(file.data)
	  }));


	  //console.log(imageResponses[2])
	  //res.json(imageResponses);

	  return imageResponses
	} catch (error) {
	  console.log(error)
	}
  });