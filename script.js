const stanzas = [
    "At school, I was about to walk inside, Felt like someone is watching me from side...",
    "It was him jumbled, I nodded and smiled...",
    "It was the first memory that will forever last...",
    "Just after the eye contact my heart started beating fast...",
    "We fulfilled a promise, made before the date, To walk together inside the entry gate...",
    "He disappeared after the check, I ran upstairs without taking a break...",
    "He stood so close, just inches away, I said 'Hi' initiated convo in that way...",
    "Further I asked how's your preparation? He shrugged, a lil shy in the conversation...",
    "We searched the room, he knew the way, His school, his past, my new day...",
    "He came again and asked me to go, My feet chose yes but my fear said no...",
    "We walked and talked, a little shy, Still, I tried to make time fly...",
    "In between the talk, I took a stand, Asked him to pass me his hand...",
    "I held it tight for a little while, Then we let go with a silent smile...",
    "I still don't know, after this happened, Why did he wash his hand?",
    "I was shy and insisted 'let's go back to our class'...",
    "He was chilled and said, stay & let time pass...",
    "He paused, then asked before we’d part, 'Hum tumko kaise lage?' made racing my heart...",
    "I blushed really hard, my heart felt the race...",
    "2 years but my mind will never erase...",
    "The day I met my soulmate not in a dream, Indeed the best day ever: March 13."
];

let index = 0;
const stanzaElement = document.getElementById("stanza");
const poemContainer = document.getElementById("poem-container");
const startScreen = document.querySelector(".start-screen");
const startButton = document.getElementById("start-btn");
const bgMusic = document.getElementById("bg-music");

function typeWriterEffect(text, i = 0, callback) {
    if (i < text.length) {
        stanzaElement.innerHTML += text.charAt(i);
        setTimeout(() => typeWriterEffect(text, i + 1, callback), 50); // Speed of typing
    } else {
        setTimeout(callback, 2000); // Delay before next stanza
    }
}

function nextStanza() {
    if (index < stanzas.length) {
        stanzaElement.innerHTML = ""; // Clear previous stanza
        typeWriterEffect(stanzas[index], 0, () => {
            index++;
            nextStanza();
        });
    } else {
        stanzaElement.innerHTML = "The End."; // End message
    }
}

startButton.addEventListener("click", () => {
    startScreen.style.display = "none";
    poemContainer.style.display = "block";
    bgMusic.play();
    nextStanza();
});
