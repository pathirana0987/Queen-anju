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
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNklEUHhvUGQ0d3l5ZnVLVmxqMFhpek5NL0JJbWIxRU83YXJ5R1dlbWoxZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY0N0N015RWJxcCtoUkJOVzZ4MW9zUUViVCtONTQyMUtYUXhYRGNSakdpOD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ5RVpoNzBONVVUUTVjbVkyZTRyMWFRQlVSVjBOeEhxejNPTDJHMWdUQ2trPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ2UkRhNjFGekdka2xMdlhLdlFSZ3lWdDRhN0JzMmJsQmVaRCtwZnZ6ZUNZPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImFEV0dqMmI3dWNPcU9wSlhOdDB1S1NRaXZVb2tveDNIam1CUUZjakNlRW89In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ikk5ODJQbXJPZzd6UDJ2TCtnSUoxK0thUmJIZjFWdGtCdEdXN3VxUVhrRGc9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQUJkaTN5Y2tTRXZuTTQ0VUs4WDZIa1lXc0lOaDV0ckk2UkowR1Y4VXZuMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibHo0OFlKaU1oaXZ2clU4YjBpWnBHTTdwendEZVYybjRUTDdtUzVqdGozdz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjlmS1NzYW4xaDNyZDZ3bmQ0ejhaTTlRRnRnTXkrNER0QkRmaXBzNnB3Z2tLVXhtV2ZOQURCQVhRSFNpcE9ibkNrYjZ6VGdoTU8zRTEwK1RGdDh4S2pnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTY3LCJhZHZTZWNyZXRLZXkiOiJmaHdVamJwejUxSkp4Uk5wWlZiVk9rZ0NueW1xQWhBTU9GOGxhV3NaY09BPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6Ijk0NzE3Nzc1NjI4QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkI4NDZDNEIwQjJEMkUwQkM5MkQ0NURDQzU3RjYwNTgxIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NTA2OTU5ODF9LHsia2V5Ijp7InJlbW90ZUppZCI6Ijk0NzE3Nzc1NjI4QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkJBRUZEQjQ0RjdCNjU2OEQ2Qjc5RTlCOUQ2MEJFQUNDIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NTA2OTU5ODF9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IkV6ZXcwVm5pUVgtbi1CT1R4VzlMQXciLCJwaG9uZUlkIjoiODkyOWRmOTctMWNmMi00YzlkLWIwZWUtYTUwY2VmM2Y3MzFjIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImtvV29pVURMblZ1NzlNUmZPUXFPU0Vib05hQT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIzRG9OZy9oV29DenFSbVFnSVdZbXJhcC9McU09In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiOTRLSk5CNUIiLCJtZSI6eyJpZCI6Ijk0NzE3Nzc1NjI4OjE0QHMud2hhdHNhcHAubmV0IiwibGlkIjoiMjE0ODM5MTQ2MzM2Mjk3OjE0QGxpZCIsIm5hbWUiOiLhtLzhtLjhtLAg8J2ZuvCdmbjwnZm98J2ZtiDwnZqB8J2ZsPCdmoLwnZm38J2ZvPCdmbjwnZm68J2ZsCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTVBoaG9NRkVKeUE1c0lHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiMjhyQitDUnlQMHA0QjVjSVpDYzBYUXNEZ042bThjM1ZhSjV2OU5nT2FtTT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiM0hBR1Y3NzF5UG9SMlE1K01oR3VBZTArTStPenQyOXVDbytWeHNOaVVjNmlSN1hiMXZNOGRRMHNGNFBJdjJJSWF2S083WlEzbXNiUlpPR1ZYbXZ6QkE9PSIsImRldmljZVNpZ25hdHVyZSI6IktWMy9JaTBhbGsvWGtEOFg5WmNLdHhrcUxwSTZrL2xhM2lMczZyL2YyTUVTSzAzOUROb2FsRmh0c0ExQTVPbXRDaWFHQTRpSXByVnkwaDMrcjcxdWdRPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTQ3MTc3NzU2Mjg6MTRAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCZHZLd2Zna2NqOUtlQWVYQ0dRbk5GMExBNERlcHZITjFXaWViL1RZRG1waiJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0FnSUFnPT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzUwNjk1OTc4LCJsYXN0UHJvcEhhc2giOiIyVjc3cVUiLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUhVZiJ9",
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
