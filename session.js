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
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNkN2cFBKaHh5UlViRzYyVk54RGhqSE9iUHRYb2tQZHEvcHBqeERFVWpXaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZXFqUjlGTGw5c0R0MTJpcVZOSVdTOU51ZmsvMkV6SUlPaUJCMlNDMS9Yaz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI2QzV4YThxVDVId0c0ZEFCNWtJblZ2cGVHSDNFZlViNmpndElLNzBUZG5FPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJKMlEvZE45SlBaWElVeUZTa1BraC82Ty9RRWZZWXZOanpqOXF1SjFSTDJBPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IklNR2hZNGYrTUhTYjM4bG9NbUYxV1FQLzlJeWl4dlpvTFRyTThrbEViMHM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IksvL0Q1Z3J4UVJGQXhUQWVVTUVZZDZBbUowVjF1Q0tTNlkwNzJNakcvbDQ9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid05RR3dKZXdoQWlpUFhpRkZncU1QOU9JYTVQWVBBUHBwV3hLSDJmNVZGbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMmlLWXVxTCtCeVZOR01rb0dQeFZEa3VFQXR1aTJLV2tMYU1vV2l0ZU9Caz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjAvaEl0Q3BGZ1BQN3grN2FSbXd5VXNLUWMyRFoxTUJmcDJRRUEyVlV3N0ZsWVNobzVpZHpHNTRDd2RlNUVmaVlqQ1A1bXY5U0hQWVpGMjNoeVQzRUNnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjgsImFkdlNlY3JldEtleSI6InJGZjFNQm8zTXdmOTExS053a0NXQUVscWhnVTlXRG1aaUpKcWF0eDI5bmM9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IktfZnEzaF9aU0JHLXJwSGVwVmgtY0EiLCJwaG9uZUlkIjoiNWU1MDA4NWMtYzU2My00YmE2LWI2Y2ItODkzMDNiMDVlNGY5IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjV2RS9lRjVQai91ejY2bjIzT1NLT2NXWUQwYz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJtWGRJeHAxQVUxWkwzdkxNRlF5d2pqUEptbWM9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiQUszTjFDM1giLCJtZSI6eyJpZCI6Ijk0Nzc4NTg3MzI0OjMwQHMud2hhdHNhcHAubmV0IiwibGlkIjoiMTAxOTA2Njg5MDg5NTgyOjMwQGxpZCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDS3FVb2VNQ0VPQ1I1c0lHR0FJZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5Ijoib0pDUkZHV1A5bTRqeVZsZUJTTzZmUkUvWDBEb0JrU1ZpZEdHUWd3WWpXUT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiYXpPdjFDOCtic3lGdXRKL0RIaUd4aGxDbVczR0E5NW5UYTZjckZhY0l0cGdrU3E1bXd6aWxrNHVUajdnQVhPeCt2cm94SWFuV1F2OEdVc0pkbEF1Q3c9PSIsImRldmljZVNpZ25hdHVyZSI6IjFBR1ExL1M2aURaMHJuSWExYjVIV2tpRHhValYrR3Q2NHpxZzdQa1JCd0JuVTcvSGtDdWZaSVNXbUY1VktiL2tKOTNtZSsydXl2WjRpSVE1YzRPSkJnPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTQ3Nzg1ODczMjQ6MzBAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCYUNRa1JSbGovWnVJOGxaWGdVanVuMFJQMTlBNkFaRWxZblJoa0lNR0kxayJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0JJSUFnPT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzUwNjk4MjIxLCJsYXN0UHJvcEhhc2giOiIxSzRoSDQifQ==",
  BOT_NUMBER:
    process.env.BOT_NUMBER || "0778587324",
  PASSWORD: 
    process.env.PASSWORD || "Esanda2008",
  SUDO: process.env.SUDO
    ? process.env.SUDO.split(",")
    : ["94717775628", "94758775628"],
  PORT: process.env.PORT || "3000",
  SESSION_DIR: process.env.SESSION_DIR || "sess",
};
