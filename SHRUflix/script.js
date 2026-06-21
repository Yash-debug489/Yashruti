/* ============================================================
   SHRUFLIX — script.js
   ============================================================

   HOW TO CUSTOMIZE:
   ─────────────────
   1. PASSWORD       → Change the value of PASSWORD below (line ~20)
   2. ADD SHOWS      → Add objects to the SHOWS array below (line ~30)
   3. EDIT REVIEWS   → Edit the 'review', 'favoriteScene', etc. fields in SHOWS
   4. CHANGE ROWS    → Edit the ROWS array below (line ~90)
   5. PROFILE NAME   → Search for "Shruti" in index.html and change there

   ============================================================ */

/* ============================================================
   ✏️  EDIT THIS: LOGIN PASSWORD
   ============================================================ */
const PASSWORD = "kissme";

/* ============================================================
   ✏️  EDIT THIS: SHOWS & MOVIES DATA
   Add as many as you want. Fields:
   - title         : Display name
   - type          : "Show" or "Movie"
   - emoji         : Used as poster placeholder (pick a fitting one!)
   - gradient      : CSS gradient for the poster background
   - rating        : Your rating out of 10 (e.g. "9.2")
   - review        : Your honest review
   - favoriteScene : A scene you loved
   - favoriteDialogue : A line you remember
   - personalThought  : What you actually think / how it made you feel
   - badge         : (optional) e.g. "❤️ HER PICK", "SERIES", "MOVIE"
   - row           : Which row to appear in (must match a row id below)
   ============================================================ */
   //Movie , show
const SHOWS = [
  {
    title: "Hungama",
    type: "Movie",
    emoji: "🌾",
    poster: "images/hungama-poster.jpg",
    banner: "images/hungama-banner.jpg",
    gradient: "linear-gradient(135deg, #0d2b0d, #1a3a1a, #0a1a0a)",
    rating: "9.5",
    review: "seriously , maii itnaa hassa hassaa khas kar ke last maii...mummy puchnee agaii kyaa ho gyaa betaa,THIK HO??🤣",
    favoriteScene: "Bht saree achee seen thee to list....the overall chaos wass🤣",
    favoriteDialogue: "Bht sare iconic dialogues pin pointing one ismee tohh is very hard..to name aak do\n \"ghar maii 3 din se pani nahi hai , maii khud coffee pe raha hu and sirf 1 hi cup haii\"",
    personalThought: "This show made me want to slow down...It reminded kii life bht achii haii..felt good",
    badge: "❤️ HER PICK",
    row: "laugh_died"
  },
  {
    title: "Hulchul",
    type: "Movie",
    emoji: "🌾",
    poster: "images/Hulchul-poster.jpg",
    banner: "images/Hulchul-banner.jpg",
    gradient: "linear-gradient(135deg, #0d2b0d, #1a3a1a, #0a1a0a)",
    rating: "8.5",
    review: "Was good yrr...akshaye khanna is such a good actor i mean is era ki akshaye khanna movies dekh ke bilkul ke nii lgtaa inhone ne hiii rehman daket ka role play kiya hai dhuradhar maii(i know tumne nai dekhi hai)",
    favoriteScene: "Last mai mangal sutra kee peeche pakram pakraii🤣",
    favoriteDialogue: "Bht saree theee....tunee wohh joh bolaa tha \"papite ke paid pe kharbuja ladkaa haii\"😂 \"thu...Mera single thuk hii kafii thaa..malik aap mere muu mai thukee isliyee\" assee bht sare",
    personalThought: "Half the fun was the movie itself and the other half was remembering ur reactions to all the scenes while watching😂❤️",
    badge: "❤️ HER PICK",
    row: "laugh"
  },
  {
    title: "Welcome",
    type: "Movie",
    emoji: "🌾",
    poster: "images/Welcome-poster.jpg",
    banner: "images/Welcome-banner.jpg",
    gradient: "linear-gradient(135deg, #0d2b0d, #1a3a1a, #0a1a0a)",
    rating: "9.6",
    review: "Itnii jyadaa funny and i now realisee itnii sariii johh meme dekhii hai maine wohh sabb is movie kii thii...Miracle Miracle , control uday control....or na janee kitnii sarii.....Itnii jydaaa achiii",
    favoriteScene: "wohh tera baap yaha chor ke gaya tha ya terii maa walaa sene jaab majnu 4crore maang raha hota haii...fir woh car walaa yahaa car ki chat tut jati hai usmaii mama khasit rahaa.....last maii ghar wallaa and bht saree sene jismee uday and majnu involved haii",
    favoriteDialogue: "\"Jaa ke puch kee aaa\"-uday walaa\n \"bhagwan ka diyaa sab kuch hai..\"-uday walaa and woh Paresh Rawal kaa senee yahaaa majnu 4 crore mang raha hotaa haiii and itnee saree meme walee dialogues thee ismeee.....literally every sene and dialogue was meme material🤣",
    personalThought: "Actually OG🫡",
    badge: "❤️ HER PICK",
    row: "laugh_died"
  },
  {
    title: "Jab we met",
    type: "Movie",
    emoji: "🌾",
    poster: "images/jab.we.met-poster.jpg",
    banner: "images/jab.we.met-banner.jpg",
    gradient: "linear-gradient(135deg, #0d2b0d, #1a3a1a, #0a1a0a)",
    rating: "9.9",
    review: "aab toh this is currently my fav romantic bollywood movie...i mean it was so good and i found myself smiling so hard itnii sarii scenes pee especially last maii and i think kabhii bhii i feel weird or tired or negetive kuchh bhii ill rewatch thiss that's how much i liked it!!",
    // favoriteScene: "Bht saree achee seen thee to list....the overall chaos wass🤣",
    // favoriteDialogue: "Bht sare iconic dialogues pin pointing one ismee tohh is very hard..to name aak do\n \"ghar maii 3 din se pani nahi hai , maii khud coffee pe raha hu and sirf 1 hi cup haii\"",
    personalThought: "Geet is so chaotic and that's whyy i loved it so much causee ur so chaotic..from the first time i met u till now and jaab aditya nee kahaa \"Singlee piece haii huu tujhe pata haii\"i felt so muchh of it related to U...or aab samajhh araaa johh tuuu boltiii haii mujhee pehleee kii \"Saadi ke baad pehlaa affair tere sath hi rakhungii\" aab samjh araa kitnee mahinoo baad woh yahaa ka reference thaaa....The whole movie reminded me of US...I LOVE YOU...and thanks for recommending this masterpiece",
    badge: "❤️ HER PICK",
    row: "loved"
  },
  {
    title: "Malamaal weekly",
    type: "Movie",
    emoji: "🌾",
    poster: "images/malamaal-poster.jpg",
    banner: "images/malamaal-banner.jpg",
    gradient: "linear-gradient(135deg, #0d2b0d, #1a3a1a, #0a1a0a)",
    rating: "8.7",
    review: "More than laughing bht jydaaa i felt good watching this..the 90's village vibe and thee absurd simple funny plot was🤣",
    favoriteDialogue: "Wohh startinig maii paresh rawal ghar jakee census ke liyee puchne ra kitne bachee haii, sadii huii ya naii wohh walaaa meme ka referece i got noww🤣",
    badge: "Movie",
    row: "feel"
  },
];

/* ============================================================
   ✏️  EDIT THIS: ROW CONFIGURATION
   - id    : Must match the 'row' field in SHOWS above
   - title : What's displayed as the row heading
   ============================================================ */
const ROWS = [
  { id: "recommended", title: "Recommended By Shruti ❤️" },
  { id: "forced",      title: "Movies You Forced Me To Watch 😭" },
  { id: "loved",       title: "Loved and will surely rewatch❤️" },
  { id: "rewatch",     title: "Worth Rewatching" },
  { id: "laugh_died",     title: "Haste haste maar gayaa!🤣"},
  { id: "laugh",     title: "Funny but not haste haste mar gya wala funny😁"},
  { id: "feel",     title: "Feel good😌"},
];

/* ============================================================
   EASTER EGG SEARCH TERMS
   ============================================================ */
const EASTER_EGG_TERMS = ["love", "yash" , "yashruti", "beaten_by_mycutie" , "ILOVEU" , "shruti"];

/* ============================================================
   ✏️  FAVORITE REVIEW (which title to feature as "My Favorite Review")
   Set this to a title from the SHOWS array above
   ============================================================ */
const FAVORITE_REVIEW_TITLE = "Jab we met";

/* ============================================================
   POSTER COLOR PALETTES (for variety in placeholder posters)
   ============================================================ */
const POSTER_GRADIENTS = [
  "linear-gradient(135deg, #0d2b0d, #1a3a1a)",
  "linear-gradient(135deg, #1a0a00, #2a1000)",
  "linear-gradient(135deg, #0a1a2a, #001a30)",
  "linear-gradient(135deg, #1a1030, #100a20)",
  "linear-gradient(135deg, #0a0a0a, #1a1a1a)",
  "linear-gradient(135deg, #001a30, #0a1530)",
  "linear-gradient(135deg, #1a0a30, #0a001a)",
  "linear-gradient(135deg, #1a0010, #100030)"
];

/* ============================================================
   DOM REFERENCES
   ============================================================ */
const loginScreen     = document.getElementById("loginScreen");
const profileScreen   = document.getElementById("profileScreen");
const mainScreen      = document.getElementById("mainScreen");
const loginBtn        = document.getElementById("loginBtn");
const passwordInput   = document.getElementById("passwordInput");
const loginError      = document.getElementById("loginError");
const profileCard     = document.getElementById("profileCard");
const navbar          = document.getElementById("navbar");
const dynamicRows     = document.getElementById("dynamicRows");
const searchToggle    = document.getElementById("searchToggle");
const searchBar       = document.getElementById("searchBar");
const searchInput     = document.getElementById("searchInput");
const searchResults   = document.getElementById("searchResults");
const searchContainer = document.getElementById("searchResultsContainer");
const favoriteBtn     = document.getElementById("favoriteReviewBtn");

/* Card Modal */
const cardModal       = document.getElementById("cardModal");
const cardModalClose  = document.getElementById("cardModalClose");
const modalBanner     = document.getElementById("modalBanner");
const modalTitle      = document.getElementById("modalTitle");
const modalRating     = document.getElementById("modalRating");
const modalReview     = document.getElementById("modalReview");
const modalScene      = document.getElementById("modalScene");
const modalDialogue   = document.getElementById("modalDialogue");
const modalThoughts   = document.getElementById("modalThoughts");

/* Continue Watching Modal */
const continueCard    = document.getElementById("continueCard");
const continueModal   = document.getElementById("continueModal");
const continueClose   = document.getElementById("continueModalClose");
const particleCanvas  = document.getElementById("particleCanvas");

/* Easter Egg Modal */
const easterModal     = document.getElementById("easterModal");
const easterClose     = document.getElementById("easterModalClose");

/* ============================================================
   LOGIN LOGIC
   ============================================================ */
loginBtn.addEventListener("click", handleLogin);
passwordInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") handleLogin();
});

function handleLogin() {
  const entered = passwordInput.value;
  if (entered === PASSWORD) {
    loginError.classList.add("hidden");
    // Transition: login → profile screen
    loginScreen.style.opacity = "0";
    loginScreen.style.pointerEvents = "none";
    setTimeout(() => {
      loginScreen.classList.remove("active");
      profileScreen.classList.add("active");
    }, 600);
  } else {
    loginError.classList.remove("hidden");
    passwordInput.value = "";
    passwordInput.focus();
    // Re-trigger shake animation
    loginError.style.animation = "none";
    void loginError.offsetWidth;
    loginError.style.animation = "shake 0.4s ease";
  }
}

/* ============================================================
   PROFILE SELECTION (Who's Watching?)
   ============================================================ */
profileCard.addEventListener("click", () => {
  profileScreen.style.opacity = "0";
  profileScreen.style.pointerEvents = "none";
  setTimeout(() => {
    profileScreen.classList.remove("active");
    mainScreen.classList.add("active");
    buildHomepage();
  }, 600);
});

/* ============================================================
   NAVBAR SCROLL EFFECT
   ============================================================ */
mainScreen.addEventListener("scroll", () => {
  if (mainScreen.scrollTop > 60) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

/* ============================================================
   BUILD HOMEPAGE CONTENT
   ============================================================ */
function buildHomepage() {
  dynamicRows.innerHTML = "";
  ROWS.forEach(row => {
    const rowShows = SHOWS.filter(s => s.row === row.id);
    if (rowShows.length === 0) return;

    const section = document.createElement("section");
    section.className = "content-row";

    const title = document.createElement("h2");
    title.className = "row-title";
    title.textContent = row.title;

    const container = document.createElement("div");
    container.className = "cards-container";

    rowShows.forEach(show => {
      container.appendChild(createCard(show));
    });

    section.appendChild(title);
    section.appendChild(container);
    dynamicRows.appendChild(section);
  });
}

/* ============================================================
   CREATE A CARD ELEMENT
   ============================================================ */
function createCard(show) {
  const card = document.createElement("div");
  card.className = "card";

  const poster = document.createElement("div");
  poster.className = "card-poster";
  poster.style.background = show.gradient || POSTER_GRADIENTS[0];

if (show.poster) {
  const img = document.createElement("img");
  img.className = "card-poster-img";
  img.src = show.poster;
  img.alt = show.title;
  poster.appendChild(img);
} else {
  const inner = document.createElement("div");
  inner.className = "card-poster-placeholder";
  inner.innerHTML = `<span class="poster-emoji">${show.emoji}</span>${show.title}`;
  poster.appendChild(inner);
}  

  const overlay = document.createElement("div");
  overlay.className = "card-overlay";
  overlay.innerHTML = `<div class="card-overlay-play"><svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><polygon points="5,3 19,12 5,21"/></svg></div>`;

  
  poster.appendChild(overlay);

  if (show.badge) {
    const badge = document.createElement("div");
    badge.className = "card-badge";
    badge.textContent = show.badge;
    poster.appendChild(badge);
  }

  const titleEl = document.createElement("p");
  titleEl.className = "card-title";
  titleEl.textContent = show.title;

  card.appendChild(poster);
  card.appendChild(titleEl);

  card.addEventListener("click", () => openCardModal(show));
  return card;
}

/* ============================================================
   CARD MODAL
   ============================================================ */
function openCardModal(show) {
 
if (show.banner) {
  modalBanner.style.background = "none";
  modalBanner.innerHTML = `
    <img src="${show.banner}" alt="${show.title}"
      style="width:100%;height:100%;object-fit:cover;display:block;border-radius:12px 12px 0 0;" />
    <div style="position:absolute;bottom:0;left:0;right:0;height:60%;
      background:linear-gradient(transparent,var(--bg3));z-index:1;border-radius:0 0 12px 12px;">
    </div>`;
} else {
  modalBanner.style.background = show.gradient;
  modalBanner.innerHTML = `<span style="font-size:4rem;position:relative;z-index:2;">${show.emoji}</span>
    <div style="position:absolute;bottom:0;left:0;right:0;height:60%;
      background:linear-gradient(transparent,var(--bg3));z-index:1;"></div>`;
}
  modalTitle.textContent = show.title;

  // Animated star rating
  const stars = getStarDisplay(parseFloat(show.rating));
  modalRating.innerHTML = `${stars} Yash Rating: <span style="color:#f5c518">${show.rating} / 10</span>`;

  // modalReview.textContent    = show.review;
  // modalScene.textContent     = show.favoriteScene;
  // modalDialogue.textContent  = show.favoriteDialogue;
  // modalThoughts.textContent  = show.personalThought;
  // Helper to show/hide a section based on whether content exists
function fillSection(element, value) {
  const section = element.closest(".modal-section");
  if (value && value.trim()) {
    element.textContent = value;
    section.style.display = "block";
  } else {
    section.style.display = "none";
  }
}

fillSection(modalReview,    show.review);
fillSection(modalScene,     show.favoriteScene);
fillSection(modalDialogue,  show.favoriteDialogue);
fillSection(modalThoughts,  show.personalThought);

  openModal(cardModal);
}

function getStarDisplay(rating) {
  const full  = Math.floor(rating / 2);
  const half  = (rating % 2) >= 1 ? 1 : 0;
  const empty = 5 - full - half;
  return "⭐".repeat(full) + (half ? "✨" : "") + "☆".repeat(empty);
}

cardModalClose.addEventListener("click", () => closeModal(cardModal));

/* ============================================================
   CONTINUE WATCHING MODAL
   ============================================================ */
continueCard.addEventListener("click", () => {
  openModal(continueModal);
  setTimeout(startParticles, 300);
});

continueClose.addEventListener("click", () => {
  closeModal(continueModal);
  stopParticles();
});

/* ============================================================
   EASTER EGG MODAL
   ============================================================ */
easterClose.addEventListener("click", () => closeModal(easterModal));

/* ============================================================
   GENERIC MODAL OPEN/CLOSE
   ============================================================ */
function openModal(modal) {
  modal.classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeModal(modal) {
  modal.classList.remove("open");
  document.body.style.overflow = "";
}

// Close modal on overlay click
[cardModal, continueModal, easterModal].forEach(modal => {
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      closeModal(modal);
      if (modal === continueModal) stopParticles();
    }
  });
});

// Close on Escape key
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    [cardModal, continueModal, easterModal].forEach(closeModal);
    stopParticles();
  }
});

/* ============================================================
   SEARCH FUNCTIONALITY
   ============================================================ */
let searchOpen = false;

searchToggle.addEventListener("click", () => {
  searchOpen = !searchOpen;
  if (searchOpen) {
    searchBar.classList.remove("hidden");
    searchInput.focus();
  } else {
    searchBar.classList.add("hidden");
    clearSearch();
  }
});

searchInput.addEventListener("input", () => {
  const query = searchInput.value.trim().toLowerCase();
  if (!query) {
    clearSearch();
    return;
  }

  // Check for easter egg
  if (EASTER_EGG_TERMS.includes(query)) {
    showEasterEggResult();
    return;
  }

  // Search SHOWS
  const results = SHOWS.filter(s =>
    s.title.toLowerCase().includes(query) ||
    s.type.toLowerCase().includes(query)
  );

  renderSearchResults(results);
});

function showEasterEggResult() {
  searchResults.classList.remove("hidden");
  searchContainer.innerHTML = "";

  const eggCard = document.createElement("div");
  eggCard.className = "card";

  const poster = document.createElement("div");
  poster.className = "card-poster";
  poster.style.background = "linear-gradient(135deg, #1a0010, #100030, #001a10)";

  const inner = document.createElement("div");
  inner.className = "card-poster-placeholder";
  inner.innerHTML = `<span class="poster-emoji">😘</span>SHRU-darling`;

  const overlay = document.createElement("div");
  overlay.className = "card-overlay";
  overlay.innerHTML = `<div class="card-overlay-play"><svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><polygon points="5,3 19,12 5,21"/></svg></div>`;

  poster.appendChild(inner);
  poster.appendChild(overlay);

  const badge = document.createElement("div");
  badge.className = "card-badge";
  badge.textContent = "🔒 SECRET";
  poster.appendChild(badge);

  const titleEl = document.createElement("p");
  titleEl.className = "card-title";
  titleEl.textContent = "Netflix password find out?";

  eggCard.appendChild(poster);
  eggCard.appendChild(titleEl);
  eggCard.addEventListener("click", () => openModal(easterModal));
  searchContainer.appendChild(eggCard);
}

function renderSearchResults(results) {
  searchResults.classList.remove("hidden");
  searchContainer.innerHTML = "";

  if (results.length === 0) {
    searchContainer.innerHTML = `<p style="color:var(--text-muted);padding:1rem;">No results found.</p>`;
    return;
  }

  results.forEach(show => {
    searchContainer.appendChild(createCard(show));
  });
}

function clearSearch() {
  searchResults.classList.add("hidden");
  searchContainer.innerHTML = "";
}

/* ============================================================
   FAVORITE REVIEW BUTTON
   ============================================================ */
favoriteBtn.addEventListener("click", () => {
  const fav = SHOWS.find(s => s.title === FAVORITE_REVIEW_TITLE);
  if (fav) openCardModal(fav);
});

/* ============================================================
   SCROLL TO CONTENT
   ============================================================ */
function scrollToContent() {
  const contentArea = document.getElementById("contentArea");
  if (contentArea) {
    contentArea.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

/* ============================================================
   PARTICLE SYSTEM (for Continue Watching modal)
   ============================================================ */
let particles = [];
let animFrame = null;
let particleRunning = false;

function startParticles() {
  const canvas = particleCanvas;
  const box    = document.getElementById("continueModalBox");
  if (!canvas || !box) return;

  canvas.width  = box.offsetWidth;
  canvas.height = box.offsetHeight;
  const ctx = canvas.getContext("2d");

  particles = Array.from({ length: 60 }, () => createParticle(canvas));
  particleRunning = true;

  function animate() {
    if (!particleRunning) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach(p => {
      p.y -= p.vy;
      p.x += p.vx;
      p.opacity -= 0.003;

      if (p.opacity <= 0 || p.y < 0) {
        Object.assign(p, createParticle(canvas));
      }

      ctx.save();
      ctx.globalAlpha = Math.max(0, p.opacity);
      ctx.fillStyle   = p.color;
      ctx.font        = `${p.size}px serif`;
      ctx.fillText(p.char, p.x, p.y);
      ctx.restore();
    });

    animFrame = requestAnimationFrame(animate);
  }

  animate();
}

function stopParticles() {
  particleRunning = false;
  if (animFrame) cancelAnimationFrame(animFrame);
  const ctx = particleCanvas.getContext("2d");
  if (ctx) ctx.clearRect(0, 0, particleCanvas.width, particleCanvas.height);
}

function createParticle(canvas) {
  const chars  = ["✨", "⭐", "💫", "❤️", "🌸", "✦", "·", "°"];
  const colors = ["#ff9aaa", "#c0a0ff", "#90c0ff", "#ffcce0", "#fff"];
  return {
    x:       Math.random() * canvas.width,
    y:       canvas.height + 20,
    vy:      0.4 + Math.random() * 0.8,
    vx:      (Math.random() - 0.5) * 0.5,
    opacity: 0.6 + Math.random() * 0.4,
    size:    10 + Math.random() * 14,
    char:    chars[Math.floor(Math.random() * chars.length)],
    color:   colors[Math.floor(Math.random() * colors.length)]
  };
}

/* ============================================================
   INIT
   ============================================================ */
// On page load, only the login screen is visible (set in CSS with .active)
// Everything else is triggered by user interaction above.
