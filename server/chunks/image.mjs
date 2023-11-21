import { defineEventHandler, getQuery, createError } from 'h3';
import { U as USER_TYPES } from './enums.mjs';

const image = defineEventHandler(async (event) => {
  if (event.context.auth && (event.context.auth.userType == USER_TYPES.user || event.context.auth.userType == USER_TYPES.groupLeader)) {
    const fileId = getQuery(event).id;
    if (!fileId)
      throw createError({ statusCode: 400, statusMessage: "No ImageId" });
    const file = await event.context.drive.files.get(
      {
        fileId,
        alt: "media"
      },
      {
        responseType: "arraybuffer"
      }
    );
    return Buffer.from(file.data);
  } else {
    throw createError({
      statusCode: 401,
      statusMessage: "Unauthorized"
    });
  }
});

export { image as default };
//# sourceMappingURL=image.mjs.map
