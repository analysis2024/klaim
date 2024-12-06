const outputElement = document.getElementById('output');
const inputElement = document.getElementById('input');

const messages = [
    "menganalisis hp.....",
    "...OPPO .....",
    "No HP.+62-821-3072-7041....",
    "pemilik device N*******@gmail.com...",
    "Pasword : ********...",
    "menghapus semua data di device hp anda...",
    "instagram : bill...a..",
    "Mereset semua data anda...",
    "Menghapus Semua Akun Dan Aplikasi di device anda....",
    "System succes",
    "Operation complete. Have a nice day :)"
];

let messageIndex = 0;

function typeText(text, callback) {
    let i = 0;
    const interval = setInterval(() => {
        inputElement.textContent += text[i];
        i++;
        if (i === text.length) {
            clearInterval(interval);
            setTimeout(callback, 500);
        }
    }, 50);
}

function printMessage(message) {
    const line = document.createElement('div');
    line.textContent = `> ${message}`;
    outputElement.appendChild(line);
    outputElement.scrollTop = outputElement.scrollHeight;
}

function hackerEffect() {
    if (messageIndex < messages.length) {
        printMessage(messages[messageIndex]);
        messageIndex++;
        setTimeout(hackerEffect, 1500);
    } else {
        typeText("Goodbye...", () => {});
    }
}

document.addEventListener('DOMContentLoaded', () => {
    hackerEffect();
});