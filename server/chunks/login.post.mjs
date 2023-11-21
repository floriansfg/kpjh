import { defineEventHandler, readBody, setCookie, createError } from 'h3';
import jwt from 'jsonwebtoken';
import { u as useRuntimeConfig } from './nitro/node-server.mjs';
import 'node-fetch-native/polyfill';
import 'node:http';
import 'node:https';
import 'destr';
import 'ofetch';
import 'unenv/runtime/fetch/index';
import 'hookable';
import 'scule';
import 'defu';
import 'ohash';
import 'ufo';
import 'unstorage';
import 'radix3';
import 'node:fs';
import 'node:url';
import 'pathe';
import 'googleapis';
import 'ipx';

const login_post = defineEventHandler(async (event) => {
  const { userType, password } = await readBody(event);
  const user_pws = {
    user: useRuntimeConfig().userPw,
    groupLeader: useRuntimeConfig().groupleaderPw
  };
  if (user_pws.hasOwnProperty(userType)) {
    if (password === user_pws[userType]) {
      const token = jwt.sign(userType, useRuntimeConfig().jwtSecret);
      setCookie(event, "token", token);
      return {
        statusCode: 200,
        statusMessage: "success"
      };
    } else {
      console.log("wrong password");
      throw createError({
        statusCode: 401,
        statusMessage: "Wrong password"
      });
    }
  } else {
    console.log("invalid type");
    console.log(userType);
    throw createError({
      statusCode: 401,
      statusMessage: "Invalid usertype"
    });
  }
});

export { login_post as default };
//# sourceMappingURL=login.post.mjs.map
