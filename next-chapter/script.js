/* =========================================================
   THE NEXT CHAPTER — SCRIPT
   =========================================================
   Structure:
   1. CONTENT (edit your text here)
   2. STATE + HELPERS
   3. RENDERERS (build HTML from CONTENT)
   4. SCENE NAVIGATION
   5. SECTION-SPECIFIC BEHAVIOUR (intro, unknown, final, etc.)
   6. AUDIO
   7. INIT
   ========================================================= */

/* =========================================================
   1. EDIT YOUR CONTENT HERE
   =========================================================
   Everything visible on the site is generated from this
   object. Replace the placeholder strings and re-open
   index.html — no other files need to change for text edits.
   ========================================================= */
const CONTENT = {

  meta: {
    title: "THE NEXT CHAPTER",
    subtitle: "Naiii surwatt"
  },

  intro: {
    production:  "SY camera's",
    presents:    "presents",
    mainTitle:   "THE NEXT CHAPTER",
    subtitle:    "Naii surwatt",
    starring:    "2026",
    character:   "character: SHRUTI",
    storyLines: [
      "You have finally MADE IT!",
      "This is a small celebration",
      "For your success",
      "Congratulations BABEE!!"
    ],
    transitionLine: "Click mee to see further!"
  },

  pillars: [
    { id: "hostel",      number: "01", label: "HOSTEL LIFEE",       icon: "&#9670;" },
    { id: "academics",   number: "02", label: "ACADS",    icon: "&#9998;" },
    { id: "friends",     number: "03", label: "FRIENDS",      icon: "&#9825;" },
    { id: "collegeLife", number: "04", label: "RANDOM STUFF", icon: "&#9737;" }
  ],

  unknownDoor: { label: "???", sub: "UNKNOWN" },
  usDoor:      { label: "US",  sub: "Yashruti" },

  hostel: {
    title: "Hostel Lifee",
    intro: "Hostel life",
    objects: [
      { icon: "&#128716;", title: "NEW BED",      description: "First time ull be sleeping away from your parents,a new bed...maybe starting maii nind na ayee but with time it will start feeling like homee" },
      { icon: "&#128220;", title: "Tablee",     description: "Where ull studyy probably, haa not likee me sirf saman padaa hai table pee xD...and meree diyee huee lamp and stuff wahaa hogaa heheeee" },
      { icon: "&#128188;", title: "Unpacking-packing",         description: "Johhh aalas ataaa haii saman pack karnee maii ghar jatee wakt, ull be questioning leeh jau rehnee du, weight jydaa na ho jayee..kapde ache se pack krnaa" },
      { icon: "&#128698;", title: "Laundry", description: "Laundry walee bhaiyaa ko khapdee denaa fir lanaa, fir unhe arrange krnaa and agar khud se laundry kar rii hoo tohh time nikalnaa" },
      { icon: "&#128247;", title: "chair",   description: "chair pee baith ke padhai karnaa, yaa uspee kapdee daal denaa ya usmee baith kee 2 bajee tkk baate krtee rehnaa...yaa chair dost ke room maii chor anaa and fir 1mahine baad lenaa" },
      { icon: "&#128241;", title: "Phonee",    description: "Itnii sarii chizee ke bawajud, phonee maii aak hii bandee ka bht sare notifications annaaa(MEE obviouslyy)" }
    ]
  },

  academics: {
    title: "Padhaiii",
    intro: "studies",
    items: [
      { title: "LECTURES",   text: "I don't medical maii kaisaa hotaa haii but universally sare students same hi hotee haii...class maii padhaii krnee ka sochh ke soo janaa and yaa subhee walee lecturee maii janee maii maut anaa" }
      // { title: "[PRACTICAL TITLE]",       text: "[PRACTICAL TEXT]" },
      // { title: "[EXAM TITLE]",            text: "[EXAM TEXT]" },
      // { title: "[FUTURE/CAREER TITLE]",   text: "[FUTURE/CAREER TEXT]" }
    ]
  },

  friends: {
    intro: "FRIENDSSS",
    messages: [
      "Yoo hi",
      "Hello",
      "hii",
      "It's me YASHHH"
    ]
  },

  collegeLife: {
    title: "Random eventss",
    intro: "ull remember foreverr",
    cards: [
      { title: "Getting lostt", description: "figuring out which building u have to go and getting lost on the way" },
      { title: "Accidently skipped class", description: "Sometime u miss classes intentionally but u miss a class that you wanted to attend cause u slept throughh itt crazyy" },
      { title: "Completely random dayy", description: "A dayy which was very oddinary with no plans and suddenlyy it became the most memorable day till date causee you and ur friends decided to some random shit" },
      { title: "Ordering food", description: "Someday the mess food was just so bad you decide to order food and regret it for 2 days cause paise barbaad ho gyee" },
      { title: "Gujaratis", description: "I don't hate gujaratis but ur friend group will probably havee one person that hates gujaratiss!!" }
      // { title: "[TITLE]", description: "[DESCRIPTION]" }
      // add or remove card objects freely — the grid adapts
    ]
  },

  unknown: {
    intro: "Unknown",
    lines: [
      "Some unknown things which will happen to youu",
      "Which we both don't knoww",
      "I guess gotta findd outtt"
      // "[UNKNOWN LINE 04]"
    ],
    title: "I am excited to hear",
    conclusion: "Everything"
  },

  us: {
    person1: { name: "SHRUTI", college: "KMC MANIPAL" },
    person2: { name: "YASH", college: "IITB" },
    intro: "",
    paragraphs: [
      "Our firstt meet",
      "After yearss",
      "EXCITED BABYY!!"
    ],
    distance: {
      locationA: "IITB",
      locationB: "KMC MANIPAL",
      message: "~800KM"
    },
    firstStory: {
      title: "It's US",
      introduction: "TWO GHOSTS",
      date: "15.12.25",
      storyTitle: "Ghash and Ghruti",
      storyContent: "Wanna write something for ME",
      image: "assets/images/manipal.jpg",
      allowEntry: true // set to false to hide the personal text-entry box
    }
  },

  final: {
    lines: [
      "I'm proud of you babeee",
      "And happy to be the part of your storyyy",
      "You aree my babyy ill always be proud of u",
      "I LOVE YOU"
    ],
    title: "THE NEW CHAPTER",
    message: "NEW chapter of SHRUTI's life",
    comingSoon: "COLLEGE!!",
    comingSoonSub: "NEW experiences",
    buttonLabel: "RESTART"
  },

  images: {
    hero: "assets/images/hero.jpg",
    hostel: "assets/images/hostel.jpg",
    academics: "assets/images/academics.jpg",
    friends: "assets/images/friends.jpg",
    collegeLife: "assets/images/college-life.jpg",
    manipal: "assets/images/manipal.jpg",
    final: "assets/images/final.jpg"
  },

  audio: {
    projector: "assets/audio/projector.mp3",
    ambient: "assets/audio/ambient.mp3",
    transition: "assets/audio/transition.mp3",
    click: "assets/audio/click.mp3"
  }
};

/* =========================================================
   2. STATE + HELPERS
   ========================================================= */
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const sceneOrder = ["intro", "set", "hostel", "academics", "friends", "collegeLife", "unknown", "us", "final"];
let currentScene = "intro";
let introStarted = false;
let unknownStarted = false;
let finalStarted = false;

const $ = (sel, root = document) => root.querySelector(sel);
const $all = (sel, root = document) => Array.from(root.querySelectorAll(sel));

function wait(ms){ return new Promise(res => setTimeout(res, ms)); }

function el(tag, className, html){
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (html !== undefined) node.innerHTML = html;
  return node;
}

/* =========================================================
   3. RENDERERS
   ========================================================= */
function renderStageHeader(){
  $("#stageTitle").textContent = CONTENT.meta.title;
  $("#stageSubtitle").textContent = CONTENT.meta.subtitle;
}

function renderPillars(){
  const container = $("#pillars");
  container.innerHTML = "";
  CONTENT.pillars.forEach(p => {
    const pillar = el("button", "pillar");
    pillar.setAttribute("data-target", p.id);
    pillar.setAttribute("aria-label", p.label);
    pillar.innerHTML = `
      <span class="pillar-icon">${p.icon}</span>
      <span class="pillar-number">${p.number}</span>
      <span class="pillar-label">${p.label}</span>
    `;
    pillar.addEventListener("click", () => goToScene(p.id));
    container.appendChild(pillar);
  });
}

function renderSideDoors(){
  const container = $("#sideDoors");
  container.innerHTML = "";

  const unknown = el("button", "side-door");
  unknown.innerHTML = `<span class="door-label">${CONTENT.unknownDoor.label}</span><span class="door-sub">${CONTENT.unknownDoor.sub}</span>`;
  unknown.addEventListener("click", () => goToScene("unknown"));

  const us = el("button", "side-door");
  us.innerHTML = `<span class="door-label">${CONTENT.usDoor.label}</span><span class="door-sub">${CONTENT.usDoor.sub}</span>`;
  us.addEventListener("click", () => goToScene("us"));

  container.appendChild(unknown);
  container.appendChild(us);
}

function renderHostel(){
  $("#hostelTitle").textContent = CONTENT.hostel.title;
  $("#hostelIntro").textContent = CONTENT.hostel.intro;
  const room = $("#hostelObjects");
  room.innerHTML = "";
  CONTENT.hostel.objects.forEach(obj => {
    const node = el("button", "room-object");
    node.innerHTML = `<span class="obj-icon">${obj.icon}</span><span class="obj-title">${obj.title}</span>`;
    node.addEventListener("click", () => openOverlay("Hostel", obj.title, obj.description));
    room.appendChild(node);
  });
}

function renderAcademics(){
  $("#academicsTitle").textContent = CONTENT.academics.title;
  $("#academicsIntro").textContent = CONTENT.academics.intro;
  const grid = $("#academicsItems");
  grid.innerHTML = "";
  CONTENT.academics.items.forEach(item => {
    const node = el("div", "lecture-item");
    node.innerHTML = `<div class="li-title">${item.title}</div><div class="li-text">${item.text}</div>`;
    grid.appendChild(node);
  });
}

function renderFriends(){
  $("#friendsIntro").textContent = CONTENT.friends.intro;
  const field = $("#silhouetteField");
  field.innerHTML = "";
  CONTENT.friends.messages.forEach(msg => {
    const sil = el("div", "silhouette");
    sil.innerHTML = `<div class="silhouette-shape"></div><span class="friend-msg">${msg}</span>`;
    sil.addEventListener("click", () => sil.classList.add("revealed"));
    field.appendChild(sil);
  });
}

function renderCollegeLife(){
  $("#collegeLifeTitle").textContent = CONTENT.collegeLife.title;
  $("#collegeLifeIntro").textContent = CONTENT.collegeLife.intro;
  const grid = $("#lifeCards");
  grid.innerHTML = "";
  CONTENT.collegeLife.cards.forEach(card => {
    const node = el("div", "life-card");
    node.innerHTML = `
      <div class="card-body">
        <div class="card-title">${card.title}</div>
        <div class="card-desc">${card.description}</div>
      </div>
    `;
    grid.appendChild(node);
  });
  observeLifeCards();
}

function observeLifeCards(){
  const cards = $all(".life-card");
  if (!("IntersectionObserver" in window) || prefersReducedMotion){
    cards.forEach(c => c.classList.add("in-view"));
    return;
  }
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting){
        setTimeout(() => entry.target.classList.add("in-view"), i * 80);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });
  cards.forEach(c => observer.observe(c));
}

function renderUs(){
  $("#usNames").innerHTML = `
    <div class="us-person">
      <div class="person-name">${CONTENT.us.person1.name}</div>
      <div class="person-college">${CONTENT.us.person1.college}</div>
    </div>
    <div class="us-cross">&times;</div>
    <div class="us-person">
      <div class="person-name">${CONTENT.us.person2.name}</div>
      <div class="person-college">${CONTENT.us.person2.college}</div>
    </div>
  `;
  $("#usIntro").textContent = CONTENT.us.intro;

  const paras = $("#usParagraphs");
  paras.innerHTML = "";
  CONTENT.us.paragraphs.forEach(p => {
    const node = el("p", "us-paragraph", p);
    paras.appendChild(node);
  });

  renderDistanceViz();
  renderFirstStory();
}

function renderDistanceViz(){
  const d = CONTENT.us.distance;
  $("#distanceViz").innerHTML = `
    <div class="dv-location">${d.locationA}</div>
    <div class="dv-dot"></div>
    <div class="dv-line" aria-hidden="true"></div>
    <div class="dv-dot"></div>
    <div class="dv-location">${d.locationB}</div>
    <div class="dv-message">${d.message}</div>
  `;
}

function renderFirstStory(){
  const fs = CONTENT.us.firstStory;
  const container = $("#firstStory");
  container.innerHTML = `
    <div class="fs-title">${fs.title}</div>
    <p class="fs-meta">${fs.introduction} &nbsp;&mdash;&nbsp; ${fs.date}</p>
    <img class="fs-image" src="${fs.image}" alt="${fs.storyTitle}">
    <div class="fs-story-title">${fs.storyTitle}</div>
    <p class="fs-story-content">${fs.storyContent}</p>
  `;

  if (fs.allowEntry){
    const entryWrap = el("div", "fs-entry");
    entryWrap.innerHTML = `
      <label for="fsTextarea">write something and send mee in my DM</label>
      <textarea id="fsTextarea" placeholder="HEHE it's just stored heree so you gotta send me DM pe..."></textarea>
      <button class="fs-save" id="fsSaveBtn">SAVE ENTRY</button>
      <div class="fs-saved-note" id="fsSavedNote">saved.</div>
    `;
    container.appendChild(entryWrap);

    const textarea = entryWrap.querySelector("#fsTextarea");
    const saveBtn = entryWrap.querySelector("#fsSaveBtn");
    const savedNote = entryWrap.querySelector("#fsSavedNote");

    try {
      const saved = localStorage.getItem("nextChapter_firstStory");
      if (saved) textarea.value = saved;
    } catch (e) { /* localStorage unavailable — entry simply won't persist */ }

    saveBtn.addEventListener("click", () => {
      try {
        localStorage.setItem("nextChapter_firstStory", textarea.value);
        savedNote.classList.add("show");
        setTimeout(() => savedNote.classList.remove("show"), 1800);
      } catch (e) { /* storage blocked — fail silently */ }
    });
  }
}

/* =========================================================
   overlay card (used by hostel objects, extendable elsewhere)
   ========================================================= */
function openOverlay(eyebrow, title, description){
  let backdrop = $("#overlayBackdrop");
  if (!backdrop){
    backdrop = el("div", "overlay-backdrop");
    backdrop.id = "overlayBackdrop";
    backdrop.innerHTML = `
      <div class="overlay-card">
        <span class="overlay-close" id="overlayClose">&times;</span>
        <div class="overlay-eyebrow" id="overlayEyebrow"></div>
        <h3 id="overlayTitle"></h3>
        <p id="overlayDesc"></p>
      </div>
    `;
    document.body.appendChild(backdrop);
    backdrop.addEventListener("click", (e) => { if (e.target === backdrop) closeOverlay(); });
    $("#overlayClose", backdrop).addEventListener("click", closeOverlay);
  }
  $("#overlayEyebrow").textContent = eyebrow.toUpperCase();
  $("#overlayTitle").textContent = title;
  $("#overlayDesc").textContent = description;
  requestAnimationFrame(() => backdrop.classList.add("show"));
  playSound("click");
}
function closeOverlay(){
  const backdrop = $("#overlayBackdrop");
  if (backdrop) backdrop.classList.remove("show");
}

/* =========================================================
   4. SCENE NAVIGATION
   ========================================================= */
function renderProgressDots(){
  const nav = $("#sceneProgress");
  nav.innerHTML = "";
  sceneOrder.forEach(id => {
    const dot = el("div", "dot");
    dot.setAttribute("data-scene-dot", id);
    nav.appendChild(dot);
  });
}
function updateProgressDots(scene){
  $all(".dot").forEach(dot => {
    dot.classList.toggle("active", dot.getAttribute("data-scene-dot") === scene);
  });
}

async function goToScene(sceneId, { withCurtain = true } = {}){
  if (sceneId === currentScene) return;
  const target = document.querySelector(`.scene[data-scene="${sceneId}"]`);
  if (!target) return;

  playSound("transition");

  if (withCurtain && !prefersReducedMotion){
    await closeCurtains();
  }

  $all(".scene.is-active").forEach(s => {
    s.classList.remove("is-active", "is-visible");
  });

  target.classList.add("is-active");
  requestAnimationFrame(() => target.classList.add("is-visible"));

  currentScene = sceneId;
  updateProgressDots(sceneId);
  window.scrollTo(0, 0);

  if (withCurtain && !prefersReducedMotion){
    await openCurtains();
  }

  handleSceneEnter(sceneId);
}

function handleSceneEnter(sceneId){
  if (sceneId === "unknown" && !unknownStarted){
    unknownStarted = true;
    playUnknownSequence();
  }
  if (sceneId === "final" && !finalStarted){
    finalStarted = true;
    playFinalSequence();
  }
}

function closeCurtains(){
  return new Promise(resolve => {
    const layer = $("#curtainLayer");
    layer.classList.add("active");
    requestAnimationFrame(() => layer.classList.add("closed"));
    setTimeout(resolve, 1100);
  });
}
function openCurtains(){
  return new Promise(resolve => {
    const layer = $("#curtainLayer");
    layer.classList.remove("closed");
    setTimeout(() => {
      layer.classList.remove("active");
      resolve();
    }, 1100);
  });
}

/* =========================================================
   5. SECTION-SPECIFIC BEHAVIOUR
   ========================================================= */

/* ---- OPENING SEQUENCE ---- */
async function playIntroSequence(){
  if (introStarted) return;
  introStarted = true;

  const creditBlock = $("#creditBlock");
  const lines = [
    { text: CONTENT.intro.production, cls: "" },
    { text: CONTENT.intro.presents, cls: "" },
    { text: CONTENT.intro.mainTitle, cls: "main-title" },
    { text: CONTENT.intro.subtitle, cls: "subtitle" },
    { text: CONTENT.intro.starring, cls: "" },
    { text: CONTENT.intro.character, cls: "character-name" }
  ];

  for (const line of lines){
    const node = el("div", `credit-line ${line.cls}`, line.text);
    creditBlock.appendChild(node);
    await wait(prefersReducedMotion ? 10 : 120);
    requestAnimationFrame(() => node.classList.add("show"));
    await wait(prefersReducedMotion ? 10 : 900);
  }

  await wait(prefersReducedMotion ? 10 : 900);
  playSound("projector");
  $("#creditBlock").parentElement.classList.add("hide");
  await wait(prefersReducedMotion ? 10 : 800);

  const storyStage = $("#openingStory");
  storyStage.classList.add("show");

  const storyLinesContainer = $("#storyLines");
  for (const line of CONTENT.intro.storyLines){
    const node = el("p", "story-line", line);
    storyLinesContainer.appendChild(node);
    await wait(prefersReducedMotion ? 10 : 100);
    requestAnimationFrame(() => node.classList.add("show"));
    await wait(prefersReducedMotion ? 10 : 1400);
  }

  const transition = $("#transitionLine");
  transition.textContent = CONTENT.intro.transitionLine;
  await wait(600);
  transition.classList.add("show");

  transition.addEventListener("click", enterMainSet, { once: true });
}

async function enterMainSet(){
  await goToScene("set");
}

/* ---- UNKNOWN SEQUENCE ---- */
async function playUnknownSequence(){
  const container = $("#unknownLines");
  container.innerHTML = "";
  const introLine = el("p", "unknown-line", CONTENT.unknown.intro);
  container.appendChild(introLine);
  await wait(300);
  introLine.classList.add("show");
  await wait(prefersReducedMotion ? 10 : 1300);

  for (const line of CONTENT.unknown.lines){
    const node = el("p", "unknown-line", line);
    container.appendChild(node);
    await wait(200);
    node.classList.add("show");
    await wait(prefersReducedMotion ? 10 : 1300);
  }

  const title = $("#unknownTitle");
  title.textContent = CONTENT.unknown.title;
  await wait(400);
  title.classList.add("show");

  const conclusion = $("#unknownConclusion");
  conclusion.textContent = CONTENT.unknown.conclusion;
  await wait(600);
  conclusion.classList.add("show");
}

/* ---- FINAL SEQUENCE ---- */
async function playFinalSequence(){
  const container = $("#finalLines");
  container.innerHTML = "";
  for (const line of CONTENT.final.lines){
    const node = el("p", "final-line", line);
    container.appendChild(node);
    await wait(200);
    node.classList.add("show");
    await wait(prefersReducedMotion ? 10 : 1300);
  }

  const title = $("#finalTitle");
  title.textContent = CONTENT.final.title;
  await wait(400);
  title.classList.add("show");

  const message = $("#finalMessage");
  message.textContent = CONTENT.final.message;
  await wait(500);
  message.classList.add("show");

  const comingSoon = $("#comingSoon");
  comingSoon.innerHTML = `
    <div class="cs-text">${CONTENT.final.comingSoon}</div>
    <div class="cs-sub">${CONTENT.final.comingSoonSub}</div>
  `;
  await wait(600);
  comingSoon.classList.add("show");

  const restartBtn = $("#restartBtn");
  restartBtn.textContent = CONTENT.final.buttonLabel;
  await wait(500);
  restartBtn.classList.add("show");
}

/* =========================================================
   6. AUDIO
   ========================================================= */
let audioEnabled = true;

function playSound(name){
  if (!audioEnabled) return;
  const audioEl = $(`#audio-${name}`);
  if (!audioEl) return;
  try {
    audioEl.currentTime = 0;
    const p = audioEl.play();
    if (p && p.catch) p.catch(() => { /* file missing or blocked — ignore */ });
  } catch (e) { /* ignore */ }
}

function toggleMute(){
  audioEnabled = !audioEnabled;
  $("#muteIcon").innerHTML = audioEnabled ? "&#9834;" : "&#9835;&#8203;";
  $("#muteIcon").style.opacity = audioEnabled ? "1" : "0.4";
  const ambient = $("#audio-ambient");
  if (!audioEnabled){
    ambient.pause();
  } else {
    try { ambient.play().catch(() => {}); } catch(e){}
  }
}

/* =========================================================
   7. INIT
   ========================================================= */
function bindGlobalControls(){
  $("#menuBtn").addEventListener("click", () => goToScene("set"));
  $("#muteBtn").addEventListener("click", toggleMute);
  $("#skipIntro").addEventListener("click", () => {
    introStarted = true;
    $("#creditBlock").parentElement.classList.add("hide");
    const storyStage = $("#openingStory");
    storyStage.classList.add("show");
    $all(".story-line, .transition-line").forEach(n => n.classList.add("show"));
    const transition = $("#transitionLine");
    transition.textContent = CONTENT.intro.transitionLine;
    transition.classList.add("show");
    transition.addEventListener("click", enterMainSet, { once: true });
  });
  $all("[data-back]").forEach(btn => btn.addEventListener("click", () => goToScene("set")));
  $("#restartBtn").addEventListener("click", () => goToScene("set"));
    $("#toFinalBtn").addEventListener("click", () => goToScene("final"));

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeOverlay();
  });
}

function init(){
  renderStageHeader();
  renderPillars();
  renderSideDoors();
  renderHostel();
  renderAcademics();
  renderFriends();
  renderCollegeLife();
  renderUs();
  renderProgressDots();
  bindGlobalControls();

  // show intro scene as active from the start
  $("#scene-intro").classList.add("is-active", "is-visible");
  updateProgressDots("intro");

  playIntroSequence();
}

document.addEventListener("DOMContentLoaded", init);
