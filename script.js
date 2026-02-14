// CONTINUOUS FLOATING HEARTS
const heartContainer = document.querySelector(".floating-hearts");

function createHeart() {
    const heart = document.createElement("span");
    heart.innerHTML = Math.random() > 0.5 ? "🤍" : "🩵";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = (6 + Math.random() * 6) + "s";
    heart.style.fontSize = (3 + Math.random() * 3) + "vw";
    heart.style.opacity = 0.8;
    heartContainer.appendChild(heart);

    setTimeout(() => { heart.remove(); }, (6 + Math.random() * 6) * 1000);
}

// Spawn hearts continuously
setInterval(() => { createHeart(); }, 300);

// ENVELOPE CLICK + MUSIC + TRANSITION
function openLetter() {
    const music = document.getElementById("bgMusic");
    const flap = document.getElementById("flap");

    if (music.paused) {
        const playPromise = music.play();
        if (playPromise !== undefined) {
            playPromise
            .then(() => console.log("Music playing"))
            .catch(() => alert("Tap again to start music."));
        }
    }

    flap.style.transform = "scale(1.1)";
    setTimeout(() => { flap.style.transform = "scale(1)"; }, 300);

    setTimeout(() => { window.location.href = "letter.html"; }, 600);
}

// LETTER PAGE FUNCTIONS
function revealMessage() {
    document.getElementById("message").style.display = "block";
}

function goGallery() {
    window.location.href = "gallery.html";
}

// GALLERY PAGE FUNCTIONS (Fade-in photos)
let currentPhoto = 1;

function nextPhoto() {
    currentPhoto++;

    if (currentPhoto <= 4) {
        const img = document.getElementById("photo");
        img.classList.remove("photo-visible");
        img.src = "pic" + currentPhoto + ".jpg";
        setTimeout(() => { img.classList.add("photo-visible"); }, 50);
    } else {
        document.querySelector(".main-btn").style.display = "none";
        document.getElementById("finalMessage").style.display = "block";
    }
}

// Initialize first photo fade-in
window.addEventListener("load", () => {
    const img = document.getElementById("photo");
    setTimeout(() => { img.classList.add("photo-visible"); }, 100);
});