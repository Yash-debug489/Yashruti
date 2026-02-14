const chat = document.getElementById("chat");
const statusText = document.getElementById("status");

function scrollDown() {
    chat.scrollTop = chat.scrollHeight;
}

function addMessage(text, type="sent", isHTML=false) {
    const msg = document.createElement("div");
    msg.classList.add("message", type);
    if(isHTML){
        msg.innerHTML = text;
    } else {
        msg.innerText = text;
    }
    chat.appendChild(msg);
    scrollDown();
}

function typingEffect(callback){
    statusText.innerText = "typing...";
    setTimeout(() => {
        statusText.innerText = "online";
        callback();
    }, 1500);
}

function startChat() {

    let stage = localStorage.getItem("chatStage");

    if(stage === "afterDate"){
        continueChat();
        return;
    }

    setTimeout(() => {
        addMessage("Heyyy ❤️");
    }, 1000);

    setTimeout(() => {
        addMessage("I was thinking something...");
    }, 2500);

    setTimeout(() => {
        addMessage("Would you go on a tiny date with me? 🥺");
    }, 4000);

    setTimeout(() => {
        addMessage(
            `<a href="./park" onclick="goToDate()">Click here when you're ready 💌</a>`,
            "sent",
            true
        );
    }, 6000);
}

function goToDate(){
    localStorage.setItem("chatStage", "afterDate");
}

function continueChat(){

    setTimeout(() => {
        typingEffect(() => {
            addMessage("You're back 😊");
        });
    }, 1000);

    setTimeout(() => {
        addMessage("I kept imagining you there the whole time...");
    }, 3500);

    setTimeout(() => {
        addMessage("I wanted you to hear this...");
    }, 5500);

    setTimeout(() => {
        addMessage(`
            <div class="audio-bubble">
                🎵 <audio controls>
                    <source src="song.mp3" type="audio/mpeg">
                </audio>
            </div>
        `, "sent", true);
    }, 7500);

    setTimeout(() => {
        addMessage(
            `<a href="magic.html">One last thing... open this 💛</a>`,
            "sent",
            true
        );
    }, 10000);
}

startChat();