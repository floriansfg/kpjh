import { defineEventHandler, getQuery, createError } from 'h3';
import { U as USER_TYPES } from './enums.mjs';

const listImages = defineEventHandler(async (event) => {
  const folderId = getQuery(event).id;
  if (folderId && event.context.auth && (event.context.auth.userType === USER_TYPES.user || event.context.auth.userType === USER_TYPES.groupLeader)) {
    if (!folderId)
      throw createError({ statusCode: 400, statusMessage: "No FolderId" });
    try {
      const response = await event.context.drive.files.list({
        q: "'" + folderId + "' in parents",
        fields: "files(id,name,thumbnailLink,mimeType)"
      });
      return response.data;
    } catch (e) {
    }
    return null;
  } else {
    throw createError({
      statusCode: 401,
      statusMessage: "Unauthorized"
    });
  }
});

export { listImages as default };
//# sourceMappingURL=listImages.mjs.map
