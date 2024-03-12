const readline = require("readline").createInterface({
    input:process.stdin,
    output: process.stdout
})

readline.question(`Qual éo seu nome?\n`, name => {
    console.log(`bem vindo ${name}!`)
    readline.close()
})



