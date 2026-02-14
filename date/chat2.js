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

typingThen("I enjoyed todayy… next time we can go somewhere else, maybe a moviee🍿,yaa wherever we decidee",4000);

typingThen("Waisee that virtual hug drawing you sent… bhtt sundar thii yrr upar se colourfull..🫠❤️",9000);

typingThen("Kuch sunogii before you go back to conquering NEET? 😤",13000);

typingThen(`
    <audio controls>
        <source src="song.mp3" type="audio/mpeg">
    </audio>
`,18000,true);

typingThen("Just wanted you to smile a little😌....",27000);

typingThen(
    `<a href="magic/">baas akk last chizz … open this 💛</a>`,
    32000,
    true
);
