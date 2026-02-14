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

/* MESSAGE FLOW */
typingThen("Happy Valentine's day babee❤️",1000);
typingThen("Heheheee...mainn kitnii baar wishh kar chukaa huu",4000);
typingThen("So wanna go on a tiny walk with me??👉👈",6000);

typingThen(
    `<a href="park/">chalee??💌</a>`,
    9500,
    true
);