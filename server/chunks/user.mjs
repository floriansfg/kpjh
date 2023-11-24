import { defineEventHandler } from 'h3';

const user = defineEventHandler((event) => {
  if (event.context.auth) {
    return event.context.auth;
  }
});

export { user as default };
//# sourceMappingURL=user.mjs.map
