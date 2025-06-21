//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//                                                                                                      //
//                                   𝗤𝗨𝗘𝗘𝗡-𝗔𝗡𝗝𝗨 𝗫ᴾᴿᴼ 𝐁𝐎𝐓                                               //
//                                                                                                      //
//                                         Ｖ：5.0.0                                                       //
//
//
//░██████╗░██╗░░░██╗███████╗███████╗███╗░░██╗  ░█████╗░███╗░░██╗░░░░░██╗██╗░░░██╗  ██╗░░██╗██████╗░██████╗░░█████╗░
//██╔═══██╗██║░░░██║██╔════╝██╔════╝████╗░██║  ██╔══██╗████╗░██║░░░░░██║██║░░░██║  ╚██╗██╔╝██╔══██╗██╔══██╗██╔══██╗
//██║██╗██║██║░░░██║█████╗░░█████╗░░██╔██╗██║  ███████║██╔██╗██║░░░░░██║██║░░░██║  ░╚███╔╝░██████╔╝██████╔╝██║░░██║
//╚██████╔╝██║░░░██║██╔══╝░░██╔══╝░░██║╚████║  ██╔══██║██║╚████║██╗░░██║██║░░░██║  ░██╔██╗░██╔═══╝░██╔══██╗██║░░██║
//░╚═██╔═╝░╚██████╔╝███████╗███████╗██║░╚███║  ██║░░██║██║░╚███║╚█████╔╝╚██████╔╝  ██╔╝╚██╗██║░░░░░██║░░██║╚█████╔╝
//░░░╚═╝░░░░╚═════╝░╚══════╝╚══════╝╚═╝░░╚══╝  ╚═╝░░╚═╝╚═╝░░╚══╝░╚════╝░░╚═════╝░  ╚═╝░░╚═╝╚═╝░░░░░╚═╝░░╚═╝░╚════╝░
//
//
//
//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//*
//  * @project_name : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ
//  * @version      : 5.0
//  * @author       : Janith Rashmika
//  * @youtube      : https://www.youtube.com/@gamingrash2006
//  * @description  : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ, A Multi-functional WhatsApp bot created by Janith Rashmika.
//*
//*
//Base by Janith Rashmika
//GitHub: @Mrrashmika
//WhatsApp: +94717775628
//Want more free bot scripts? Subscribe to my YouTube channel: https://youtube.com/@gamingrash2006
//   * Created By GitHub: Mrrashmika
//   * Credit To Janith Rashmika
//   * © 2025 © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ-V4.
// ⛥┌┤
// */

const fs = require("fs");
if (fs.existsSync("config.env"))
  require("dotenv").config({ path: "./config.env" });

function convertToBool(text, fault = "true") {
  return text === fault ? true : false;
}
module.exports = {
  SESSION_ID:
    process.env.SESSION_ID ||
    "session id ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUUF0WThqNGNIZ3JZTEg3YURjY2pjWmw0dGpTMkVzcHRmU2lXOXA3OGtYaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWmVXMExkK0Z2S1NzQ25OV2J4aitWbFBEbTJOSlRDUDJMRnhVSVYvWm5UYz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIyUHlxTnhCdFZrSFF6d09Ea1Npd1g3NXlSbHlVVE1UVzZQOEgrNE1xbjNvPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJSeTFxS0ZJRU1zVThsVjJPRGpraFFjZ0lOK0hKK1duaTd6TGhDc1Ftb3dJPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IklEcFVDOHA4TTJpOGpYZHYwbTlUOVpFSndJc1dsVG5rd1pSTDBEVVFjMnM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ii9pWlFJclNSZzNhVSt5WDF4S0crWUx6YWR2WmlQVHYxZnlpRFRPSk8xbDQ9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWUtjaGlwMEV6SUhUZjFTSkFzV3B6U0tuQjhxcy92MlFaR2UvdWhORU5rVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVklGMzhUOEFBUW9SczBSMDRQTHhxM1BieTIwUmlYbVRoYkxKY0t3QWVtYz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IiszL0V4NmUvYitBR1V3UmdzNDkvVGxYSVRwS3RxbFQ5TVFvdk13a0hIazQ0SUY2U2dLL1FPZnVZUHp1a0MzWk90K0hxSGlsWmN5WXFsNEg4OHNNTGlRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6ODYsImFkdlNlY3JldEtleSI6IjdEYVFGbjFqYjZzRHdIVjBxQzZOd05zTWJIYmlXU1l4M0NIY0dsN0p0UU09IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IlJVYlpjbllSUUlXVm1rQ2prWkpjRXciLCJwaG9uZUlkIjoiMWNlOTYwZGItN2EyOC00MGZmLWEyNDAtMWYxNDZkOTBmOWE1IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkhlUDVqNE1KMk45OXJiazVFVkVMNUJ4RUpIND0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI4V0FqOC81ZGlmU0dnTHcxdTJ1ZHU0Z3ZKajQ9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiU0NNMkxGTkEiLCJtZSI6eyJpZCI6Ijk0Nzc4NTg3MzI0OjI5QHMud2hhdHNhcHAubmV0IiwibGlkIjoiMTAxOTA2Njg5MDg5NTgyOjI5QGxpZCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDS3FVb2VNQ0VLRFMyOElHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5Ijoib0pDUkZHV1A5bTRqeVZsZUJTTzZmUkUvWDBEb0JrU1ZpZEdHUWd3WWpXUT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiK0Mxb3hxY0U5N21vZkhhaGxKeW5Xa0NTVU5nQWl2VjRzMnpjSkF1MzF3MTZFWHpRcVZlbHNld0xGeXJWc1AySmpTTUlSQVk1MSthcFI4U3p5WXN0Q1E9PSIsImRldmljZVNpZ25hdHVyZSI6IlhNTFJCbHhMd3cvaUZ2TzEzU21QY3BIN1VFbVVMNmwrVzdLVkFHSldGbElFYlpNU0hxWTZhVy9ZTnFuZ3ZRNFRIYVlsQ1NjOHZZTnY5RERKUzdmVGdBPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTQ3Nzg1ODczMjQ6MjlAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCYUNRa1JSbGovWnVJOGxaWGdVanVuMFJQMTlBNkFaRWxZblJoa0lNR0kxayJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0JJSUFnPT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzUwNTI2MjUyLCJsYXN0UHJvcEhhc2giOiIxSzRoSDQiLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUZhTiJ9",
  BOT_NUMBER:0778587324
    process.env.BOT_NUMBER || "your account crated number",
  PASSWORD: Esanda2008
    process.env.PASSWORD || "your password",
  SUDO: process.env.SUDO
    ? process.env.SUDO.split(",")
    : ["94717775628", "94758775628"],
  PORT: process.env.PORT || "3000",
  SESSION_DIR: process.env.SESSION_DIR || "sess",
};
