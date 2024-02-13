// buat function untuk animasi typing
function textTypingEffect(element, text, i = 0) {
    if (i === 0) {
        element.textContent = "";
    }

    element.textContent += text[i];

    // if we reached the end of string
    if (i === text.length - 1) {
        return;
    }

    setTimeout(() => textTypingEffect(element, text, i + 1), 25);
}

// ambil node dan konten yang mau diubah
const text = document.getElementById("text");
var p = text.innerHTML;

const email = document.getElementById("email");
var x = email.innerHTML;
const linkedin = document.getElementById("linkedin");
var y = linkedin.innerHTML;
const github = document.getElementById("github");
var z = github.innerHTML;

window.onload = textTypingEffect(text, p);
// window.onload = textTypingEffect(email, x);
// window.onload = textTypingEffect(linkedin, y);
// window.onload = textTypingEffect(github, z);
