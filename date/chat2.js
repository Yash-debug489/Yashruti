const chat = document.getElementById("chat");
const statusText = document.getElementById("status");

function scrollDown() {
    chat.scrollTop = chat.scrollHeight;
}

function addMessage(text, html=false) {
    const msg = document.createElement("div");
    msg.className = "message";
    msg.innerHTML = html ? text : text;
    chat.appendChild(msg);
    scrollDown();
}

function typingThen(message, delay, html=false){
    setTimeout(()=>{
        statusText.innerText = "typing...";
        setTimeout(()=>{
            statusText.innerText = "online";
            addMessage(message, html);
        },1200);
    },delay);
}

/* CONTINUATION */
typingThen("Welcomee backkkk ❤️",1000);
typingThen("I enjoyed todayy....next time we can go somewheree elsee, jaisee moviee",4000);

typingThen("Waisee thatt virtual hug drawing u sent me...bhtt sundarr that upr se colourr...so sweettt and drawingg achii thiii ree..ur drawing is nott badd❤️",10000);
typingThen("Kuch sunogii before u go back conquering NEET😤🎵",14000);

typingThen(`
    <audio controls>
        <source src="song.mp3" type="audio/mpeg">
    </audio>
`,24000,true);


typingThen("Waisee u said naa... that sometimes it feels like I do things so I feel secure… and I understand why it might feel that way.",34500);

typingThen("butt i do these things because making you smile genuinely makes me happy.",39500);

typingThen("I’m still learning how to express that in a healthier way, but my intention has always been care, not pressure.",44500);

typingThen("I don’t want you to feel like you have to keep score… I just want you to feel free and peaceful.",49500);
typingThen(
    `<a href="magic/">Hehee...aaeee bhtt heavyy baat ho gaii..baas ak last thingg … open this💛</a>`,
    59500,
    true
);