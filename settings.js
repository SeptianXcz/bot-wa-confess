const fs = require('fs')

global.fotomenfess = fs.readFileSync("./menfess.jpg")
global.owner = ["628978613993"]

global.help = {
Menu(pushname){
  return `Halo ${pushname}

Saya adalah bot WhatsApp confess 👋 ketik .confess untuk memulai chat.
`
}
}
