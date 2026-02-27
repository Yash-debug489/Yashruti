/* ═══════════════════════════════════════════════════════════
   ★  DAILY MESSAGES — EDIT THIS LIST TO ADD YOUR OWN  ★
   Format: { d:"YYYY-MM-DD", t:"your message", a:"arabic (optional)", type:"love"|"challenge"|"throwback" }
   type controls the colour badge shown. Leave a out if you don't want Arabic.
   Days without an entry in this list show "No message set yet."
═══════════════════════════════════════════════════════════ */
const MESSAGES = [

  // ── DECEMBER 2025 ──
   { d:"2025-12-14", type:"love",
  t:"I LOVE U",
  a:"愛してます" },

  { d:"2025-12-15", type:"love",
    t:"The day you said yes, my world didn’t explode — it quietly rearranged itself around you. Since then, everything makes sense in a way it never did before.",
    a:"あなたが『はい』と言った日、世界は静かにあなたを中心に回り始めた。それ以来、すべてが以前よりも意味を持つようになった。" },

  { d:"2025-12-16", type:"throwback",
    t:"Throwback: That night we talked until 2am without noticing time — I remember thinking, this feels different. This feels like the beginning of something real.",
    a:"あの夜、午前2時まで時間を忘れて話したね。そのとき『これは何か本物の始まりだ』と感じていた。" },

  { d:"2025-12-17", type:"love",
    t:"I don’t just like you. I feel calm around you. And that kind of peace is rarer than fireworks.",
    a:"ただ好きなだけじゃない。あなたのそばにいると心が落ち着く。その静かな安心感は花火よりもずっと貴重だ。" },

  { d:"2025-12-18", type:"love",
    t:"Your real laugh — the unfiltered one — does something to my heart every single time. I hope I get to hear it for the rest of my life.",
    a:"飾らないあなたの本当の笑い声は、毎回私の心を揺らす。その声を一生聞いていたい。" },

  { d:"2025-12-19", type:"love",
    t:"You deserve a love that feels safe, steady, and endlessly warm. I promise to build that kind of love with you.",
    a:"あなたは安心できて、揺るがなく、温かい愛に値する。その愛を一緒に築いていきたい。" },

  { d:"2025-12-20", type:"throwback",
    t:"Throwback: The first time I caught myself smiling at my phone because of you — I knew I was already falling.",
    a:"あなたのメッセージで思わず携帯を見て笑ってしまったあの日、もう恋に落ちていると気づいた。" },

  { d:"2025-12-21", type:"love",
    t:"Loving you feels less like chaos and more like coming home after a long journey.",
    a:"あなたを愛することは混乱ではなく、長い旅のあとに家へ帰るような感覚だ。" },

  { d:"2025-12-22", type:"love",
    t:"Some people search their whole lives for what we have. I don’t take us lightly — not even for a second.",
    a:"多くの人が一生かけて探すものを、私たちは持っている。この奇跡を一瞬たりとも当たり前だとは思わない。" },

  { d:"2025-12-23", type:"throwback",
    t:"Throwback: There was a moment when you said something simple, and my heart reacted in a way I couldn’t explain. That’s when I knew.",
    a:"あなたが何気なく言った一言に、説明できないほど心が反応した瞬間があった。そのとき確信した。" },

  { d:"2025-12-24", type:"love",
    t:"The way you say my name feels like it belongs to you. And honestly? I think it always has.",
    a:"あなたが私の名前を呼ぶ声は、まるで最初からあなたのものだったみたいだ。" },

  { d:"2025-12-25", type:"throwback",
    t:"Throwback: The first time you laughed at one of my worst jokes, I remember thinking — I want to protect that smile forever.",
    a:"あなたが私のひどい冗談で笑ってくれた日、その笑顔を一生守りたいと思った。" },

  { d:"2025-12-26", type:"love",
    t:"I don’t need extraordinary days. I just need ordinary ones with you in them.",
    a:"特別な日は必要ない。ただあなたがいる普通の日々があればいい。" },

  { d:"2025-12-27", type:"love",
    t:"You make me want to be softer, better, stronger — not because I’m lacking, but because loving you inspires me.",
    a:"足りないからじゃない。あなたを愛することで、もっと優しく、強く、素敵になりたいと思える。" },

  { d:"2025-12-28", type:"throwback",
    t:"Throwback: I remember the exact moment I stopped pretending I wasn’t completely gone for you.",
    a:"完全にあなたに夢中だと認めたあの瞬間を、今でもはっきり覚えている。" },

  { d:"2025-12-29", type:"love",
    t:"There’s something about us that feels steady. Not loud. Not dramatic. Just deeply real.",
    a:"私たちには静かで揺るがない何かがある。派手でも劇的でもなく、ただ深く本物だ。" },

  { d:"2025-12-30", type:"love",
    t:"I love our little world — the inside jokes, the quiet pauses, the comfort that only exists between us.",
    a:"私たちだけの小さな世界が大好きだ。内緒の冗談や静かな沈黙、その特別な安心感。" },

  { d:"2025-12-31", type:"love",
    t:"If this year ends with you beside me, then it was a good year. No matter what else happened.",
    a:"あなたが隣にいてくれるなら、それだけで今年は素晴らしい一年だった。" },

  // ── JANUARY 2026 ──

  { d:"2026-01-01", type:"love",
    t:"A new year with you feels less like time passing and more like a promise unfolding.",
    a:"あなたと迎える新年は、時間が過ぎるというより、約束が広がっていくようだ。" },

  { d:"2026-01-02", type:"throwback",
    t:"Throwback: The first photo I saw of you — I saved it instantly. I didn’t know why yet. I do now.",
    a:"あなたの写真を初めて見たとき、すぐに保存した。理由は分からなかったけど、今は分かる。" },

  { d:"2026-01-03", type:"love",
    t:"I love who I am around you. With you, I feel honest, safe, and completely myself.",
    a:"あなたのそばにいる自分が好きだ。正直で、安心していて、本当の自分でいられる。" },

  { d:"2026-01-04", type:"love",
    t:"Being loved by you feels grounding. Like I finally stopped drifting and found where I belong.",
    a:"あなたに愛されることで、ようやく居場所を見つけた気がする。" },

  { d:"2026-01-05", type:"throwback",
    t:"Throwback: The first time you seemed nervous around me, something protective woke up inside my chest.",
    a:"あなたが初めて私の前で緊張していた日、守りたい気持ちが胸の奥で目覚めた。" },

  { d:"2026-01-06", type:"love",
    t:"You are my favourite notification, my favourite voice, my favourite human. And somehow, still my favourite surprise.",
    a:"あなたは私の一番好きな通知であり、声であり、人そのもの。そして今でも一番のときめきだ。" },

  { d:"2026-01-07", type:"love",
    t:"If I had to choose again, I would still choose you. Without hesitation. Every time.",
    a:"もう一度選ぶとしても、迷わずあなたを選ぶ。何度でも。" },

  { d:"2026-01-08", type:"throwback",
    t:"Throwback: The day I realised your name had become my favourite word to see on my screen.",
    a:"あなたの名前が画面に表示されるたび、一番好きな言葉になっていると気づいた日。" },

  { d:"2026-01-09", type:"love",
    t:"Some days I sit quietly and think about the fact that you chose me. And it still amazes me.",
    a:"あなたが私を選んでくれたという事実を思い出すたび、今でも信じられない気持ちになる。" },

  { d:"2026-01-10", type:"love",
    t:"You are not just someone I love. You are someone I deeply like, respect, and admire.",
    a:"あなたはただ愛している人ではない。心から好きで、尊敬し、憧れている人だ。" },

  { d:"2026-01-11", type:"throwback",
    t:"Throwback: Hearing you laugh out loud for the first time felt like discovering a sound I’d been waiting for my whole life.",
    a:"あなたの笑い声を初めて聞いたとき、一生待っていた音に出会った気がした。" },

  { d:"2026-01-12", type:"love",
    t:"You make even the most ordinary days feel like they matter. That’s not a small gift.",
    a:"あなたは何気ない一日さえ特別にしてくれる。それは小さなことじゃない。" },

  { d:"2026-01-13", type:"love",
    t:"I don’t just want the happy version of you. I want every version — tired, quiet, unsure. All of you.",
    a:"幸せなあなたじゃなくてもいい。疲れていても、静かでも、不安でも。すべてのあなたを愛している。" },

  { d:"2026-01-14", type:"love",
    t:"Three words feel too small for what I feel, but I’ll still say them — I love you.",
    a:"三つの言葉では足りないけれど、それでも言うよ。愛している。" },

  { d:"2026-01-15", type:"love",
    t:"One month with you. And somehow, it already feels like you’ve been part of my heart forever.",
    a:"あなたと過ごした一ヶ月。それなのに、ずっと前から心の一部だったように感じる。" },
    // ── JANUARY 16 → FEBRUARY 16, 2026 ──

{ d:"2026-01-16", type:"love",
  t:"Somewhere between our ordinary conversations, you became my favourite part of every day.",
  a:"何気ない会話の中で、いつの間にかあなたが私の一日のいちばん大切な存在になっていた。" },

{ d:"2026-01-17", type:"love",
  t:"You are someone I would choose again and again, in every version of every life.",
  a:"どんな人生でも、どんな世界でも、私は何度でもあなたを選ぶ。" },

{ d:"2026-01-18", type:"throwback",
  t:"Throwback: The first time we sat in comfortable silence together — that’s when I knew this wasn’t temporary.",
  a:"初めて心地よい沈黙を一緒に過ごした日、これは一時的なものじゃないと確信した。" },

{ d:"2026-01-19", type:"love",
  t:"I think about who I was before you, and I feel grateful that version of me kept going long enough to meet you.",
  a:"あなたに出会う前の自分を思うと、ここまで歩いてきてくれたことに感謝したくなる。" },

{ d:"2026-01-20", type:"love",
  t:"You don’t just make me happy. You make me steady. And that means more than excitement ever could.",
  a:"あなたは私を幸せにするだけじゃない。心を安定させてくれる。その安心感は何よりも大切だ。" },

{ d:"2026-01-21", type:"throwback",
  t:"Throwback: I remember the exact moment your name appearing on my screen started making my heart race.",
  a:"あなたの名前が画面に表示されるだけで胸が高鳴るようになった瞬間を、今でも覚えている。" },

{ d:"2026-01-22", type:"love",
  t:"On your hardest days, I hope you remember this — you are still the most remarkable person I know.",
  a:"つらい日でも忘れないで。あなたは今でも私が知る中でいちばん素敵な人だ。" },

{ d:"2026-01-23", type:"love",
  t:"You are home. Not a place, not a city — you. Wherever you are, that’s where I belong.",
  a:"あなたは場所じゃない。あなたそのものが“帰る場所”だ。あなたがいるところが私の居場所。" },

{ d:"2026-01-24", type:"throwback",
  t:"Throwback: The day I stopped pretending I wasn’t completely, hopelessly in love with you.",
  a:"完全にあなたに恋していると認めたあの日を、私は忘れない。" },

{ d:"2026-01-25", type:"love",
  t:"I replay moments of us in my head and still can’t believe I get to call you mine.",
  a:"私たちの思い出を思い返すたび、あなたが私の大切な人だということがまだ信じられない。" },

{ d:"2026-01-26", type:"love",
  t:"Every morning you exist is a morning I’m thankful to wake up in.",
  a:"あなたが存在しているその朝に目覚められることが、私の毎日の感謝だ。" },

{ d:"2026-01-27", type:"throwback",
  t:"Throwback: I remember when liking you quietly turned into needing you around.",
  a:"静かな好意が、あなたの存在を必要とする気持ちに変わった瞬間を覚えている。" },

{ d:"2026-01-28", type:"love",
  t:"You are the reason I believe some things in life are truly worth everything.",
  a:"人生にはすべてをかける価値のあるものがあると信じられるのは、あなたのおかげだ。" },

{ d:"2026-01-29", type:"love",
  t:"I don’t just want your bright days. I want your quiet ones, your unsure ones, your tired ones too.",
  a:"明るい日だけじゃなく、静かな日も、不安な日も、疲れた日も、全部のあなたを大切にしたい。" },

{ d:"2026-01-30", type:"throwback",
  t:"Throwback: The first time I stayed up worrying about you — that’s when I realised how deeply you mattered.",
  a:"あなたのことを心配して眠れなかったあの夜、どれほど大切な存在かに気づいた。" },

{ d:"2026-01-31", type:"love",
  t:"Loving you feels intentional. Careful. Deep. Not rushed — but chosen.",
  a:"あなたを愛する気持ちは衝動じゃない。丁寧で、深くて、自分で選んだものだ。" },

// ── FEBRUARY 2026 ──

{ d:"2026-02-01", type:"love",
  t:"I don’t need extraordinary days. I just need days that have you in them.",
  a:"特別な日は必要ない。ただあなたがいる日々があればいい。" },

{ d:"2026-02-02", type:"throwback",
  t:"Throwback: The first time your silence made me feel less alone instead of more.",
  a:"あなたの沈黙が孤独ではなく安心に変わったあの日を覚えている。" },

{ d:"2026-02-03", type:"love",
  t:"Two months ago, you were a possibility. Now, you’re my certainty.",
  a:"二ヶ月前は“可能性”だったあなたが、今では私の“確信”になった。" },

{ d:"2026-02-04", type:"love",
  t:"You make me feel like I’m exactly where I’m supposed to be.",
  a:"あなたのそばにいると、私はようやく正しい場所にいると感じられる。" },

{ d:"2026-02-05", type:"throwback",
  t:"Throwback: The first time I imagined what it would feel like to be yours.",
  a:"あなたの大切な人になる未来を初めて想像した日のことを、今でも覚えている。" },

{ d:"2026-02-06", type:"love",
  t:"You are softer than you realise and stronger than you think. I admire both.",
  a:"あなたは自分が思うより優しく、自分が思うより強い。その両方を心から尊敬している。" },

{ d:"2026-02-07", type:"love",
  t:"If loving you is brave, then I am the bravest I have ever been.",
  a:"あなたを愛することが勇気なら、私は今まででいちばん勇敢だ。" },

{ d:"2026-02-08", type:"throwback",
  t:"Throwback: The first time I caught myself daydreaming about a future with you in it.",
  a:"あなたがいる未来を無意識に想像していたあの日を覚えている。" },

{ d:"2026-02-09", type:"love",
  t:"You are not someone I settled for. You are someone I feel lucky to have.",
  a:"妥協じゃない。あなたは、出会えたことが奇跡だと思える人だ。" },

{ d:"2026-02-10", type:"love",
  t:"You are sweeter than chocolate and warmer than sunlight in winter.",
  a:"あなたはチョコレートより甘く、冬の日差しよりも温かい。" },

{ d:"2026-02-11", type:"throwback",
  t:"Throwback: The first time I wanted to be the person who makes you feel safe.",
  a:"あなたにとって安心できる存在になりたいと思った最初の日を覚えている。" },

{ d:"2026-02-12", type:"love",
  t:"I promise to keep choosing you, even on days when love feels quiet instead of loud.",
  a:"愛が静かに感じる日でも、私はあなたを選び続けると約束する。" },

{ d:"2026-02-13", type:"love",
  t:"Every time I look at you, I see someone worth building a forever with.",
  a:"あなたを見るたびに、一生を共に築きたいと思える人だと感じる。" },

{ d:"2026-02-14", type:"love",
  t:"I don’t need one day to love you. I love you in the ordinary hours, the quiet minutes, the in-between moments.",
  a:"一日だけじゃ足りない。何気ない時間も、静かな瞬間も、そのすべてであなたを愛している。" },

{ d:"2026-02-15", type:"throwback",
  t:"Throwback: The first time I realised I wasn’t afraid of loving you deeply.",
  a:"あなたを深く愛することを怖れていないと気づいた日のことを覚えている。" },

{ d:"2026-02-16", type:"love",
  t:"We’ve made it through real things. Not just easy days. And that makes what we have even stronger.",
  a:"私たちは簡単な日々だけじゃなく、本当の出来事を一緒に乗り越えてきた。それが私たちをより強くしている。" },
  // ── FEBRUARY 17 → MARCH 15, 2026 ──

{ d:"2026-02-17", type:"love",
  t:"You are not someone I happened to love. You are someone I chose to love — slowly, deeply, intentionally.",
  a:"あなたは偶然愛した人じゃない。ゆっくりと、深く、意志を持って選んで愛した人だ。" },

{ d:"2026-02-18", type:"love",
  t:"The more I learn about you, the more certain I become. Loving you feels like clarity.",
  a:"あなたを知れば知るほど確信が深まる。あなたを愛することは、迷いのない澄んだ気持ちだ。" },

{ d:"2026-02-19", type:"throwback",
  t:"Throwback: The first time you trusted me with something fragile — I held it like it was made of glass.",
  a:"あなたが初めて繊細な想いを打ち明けてくれた日、それを壊れ物のように大切に受け止めた。" },

{ d:"2026-02-20", type:"love",
  t:"I want to know every version of you — not just the bright one, but the quiet one at 2am too.",
  a:"明るいあなたも、午前2時の静かなあなたも、すべてを知りたい。" },

{ d:"2026-02-21", type:"love",
  t:"You make love feel less like a risk and more like a decision I’m proud of.",
  a:"あなたといると、愛は賭けじゃなくて誇れる選択になる。" },

{ d:"2026-02-22", type:"throwback",
  t:"Throwback: The day I realised I was no longer imagining a future without you in it.",
  a:"あなたのいない未来を想像しなくなった日を覚えている。" },

{ d:"2026-02-23", type:"love",
  t:"Being yours feels like arriving somewhere I didn’t know I’d been searching for.",
  a:"あなたの大切な人でいることは、探していた場所にたどり着いたような感覚だ。" },

{ d:"2026-02-24", type:"love",
  t:"I don’t just love you. I respect you. I admire you. I choose you.",
  a:"ただ愛しているだけじゃない。尊敬しているし、憧れている。そしてあなたを選んでいる。" },

{ d:"2026-02-25", type:"throwback",
  t:"Throwback: The first time I caught myself smiling in public because I was thinking about you.",
  a:"あなたのことを思い出して、無意識に外で笑ってしまったあの日。" },

{ d:"2026-02-26", type:"love",
  t:"Falling for you didn’t feel like falling. It felt like floating.",
  a:"あなたに恋をしたのは落ちる感覚じゃなかった。まるで浮かび上がるようだった。" },

{ d:"2026-02-27", type:"love",
  t:"If today becomes a memory one day, I hope we look back and smile at how sure we were.",
  a:"今日がいつか思い出になるなら、私たちがどれほど確信していたかを笑顔で振り返れますように。" },

{ d:"2026-02-28", type:"love",
  t:"I love you carefully. Intentionally. Not loudly — but endlessly.",
  a:"私はあなたを丁寧に、意志を持って、静かに、そして永遠に愛している。" },

// ── MARCH 2026 ──

{ d:"2026-03-01", type:"love",
  t:"A new month. And still, my favourite part of every day is you.",
  a:"新しい月。それでも毎日のいちばん好きな瞬間は、あなた。" },

{ d:"2026-03-02", type:"love",
  t:"I notice the small things about you — the pauses, the tone shifts, the quiet thoughts. I’m paying attention.",
  a:"あなたの小さな変化や沈黙、声のトーン、心の動きに気づいている。ちゃんと見ているよ。" },

{ d:"2026-03-03", type:"throwback",
  t:"Throwback: The first time you surprised me and I realised I would never get bored of discovering you.",
  a:"あなたに驚かされたあの日、これからもずっとあなたを知り続けたいと思った。" },

{ d:"2026-03-04", type:"love",
  t:"You are the calm in my chaos and the warmth in my quiet.",
  a:"あなたは私の混乱の中の静けさであり、静寂の中の温もりだ。" },

{ d:"2026-03-05", type:"love",
  t:"Even on days when we’re tired, even on days when we’re quiet — I still choose us.",
  a:"疲れている日も、静かな日も、それでも私は“私たち”を選ぶ。" },

{ d:"2026-03-06", type:"throwback",
  t:"Throwback: The day I stopped hesitating before texting you and just did — because you already mattered.",
  a:"あなたがもう特別な存在になっていたから、迷わず連絡したあの日。" },

{ d:"2026-03-07", type:"love",
  t:"You make love feel less dramatic and more real. Less fantasy, more future.",
  a:"あなたとの愛は劇的じゃなくて現実的。夢じゃなくて、未来だ。" },

{ d:"2026-03-08", type:"love",
  t:"Your softness is strength. Your kindness is power. And I admire you more than you know.",
  a:"あなたの優しさは強さであり、思いやりは力だ。あなたが思う以上に尊敬している。" },

{ d:"2026-03-09", type:"love",
  t:"Waking up knowing you exist makes everything feel possible.",
  a:"あなたが存在していると知って目覚める朝は、すべてが可能に思える。" },

{ d:"2026-03-10", type:"throwback",
  t:"Throwback: The first time I saw you talk passionately about something you love — I wanted to listen forever.",
  a:"あなたが好きなことを夢中で話していたあの日、その声をずっと聞いていたいと思った。" },

{ d:"2026-03-11", type:"love",
  t:"You don’t just make my life brighter. You make it deeper.",
  a:"あなたは私の人生を明るくするだけじゃない。より深いものにしてくれる。" },

{ d:"2026-03-12", type:"love",
  t:"I love the world more simply because you are in it.",
  a:"あなたがいるというだけで、この世界がもっと好きになる。" },

{ d:"2026-03-13", type:"love",
  t:"There’s something steady about us. Not loud. Not fragile. Just real.",
  a:"私たちには揺るがない何かがある。派手でも壊れやすくもない。ただ本物だ。" },

{ d:"2026-03-14", type:"love",
  t:"Three months. And somehow it feels like both a beginning and something eternal at the same time.",
  a:"三ヶ月。それなのに始まりのようでもあり、永遠のようでもある。" },

{ d:"2026-03-15", type:"throwback",
  t:"Throwback: Three months ago today, everything changed. And I would choose that change again, every single time.",
  a:"三ヶ月前の今日、すべてが変わった。そして私は何度でもその変化を選ぶ。" },


];
/* ═══════════════════════════════════════════════════════════ */

// Build a lookup: "YYYY-MM-DD" → message object type="challenge"
const MSG_MAP = {};
MESSAGES.forEach(m => { MSG_MAP[m.d] = m; });

const START = new Date("2025-12-15T00:00:00");

function toStr(d){ return d.toISOString().slice(0,10); }
function dayIdx(s){ const d=new Date(s+'T00:00:00'), st=new Date(START); st.setHours(0,0,0,0); return Math.round((d-st)/86400000); }
function isClaimed(s){ try{ return !!localStorage.getItem('cl_'+s); }catch(e){ return false; } }
function setClaimed(s){ try{ localStorage.setItem('cl_'+s,'1'); }catch(e){} }

function badgeHTML(type, cls=''){
  const map = {
    love:      { icon:'🤍', label:'Love Note',  cls:'badge-love' },
    challenge: { icon:'⚔', label:'Challenge',  cls:'badge-challenge' },
    throwback: { icon:'✦', label:'Throwback',  cls:'badge-throwback' },
  };
  const b = map[type] || map.love;
  return `<span class="rtype-badge ${b.cls} ${cls}">${b.icon} ${b.label}</span>`;
}
function modalBadgeHTML(type){
  const map = {
    love:      { icon:'🤍', label:'Love Note',  cls:'mbadge-love' },
    challenge: { icon:'⚔', label:'Challenge',  cls:'mbadge-challenge' },
    throwback: { icon:'✦', label:'Throwback',  cls:'mbadge-throwback' },
  };
  const b = map[type] || map.love;
  return `<span class="mbadge ${b.cls}">${b.icon} ${b.label}</span>`;
}

/* ─── BG: STARS / FIREFLIES / LANTERNS ─── */
(()=>{
  const sl=document.getElementById('sl');
  for(let i=0;i<230;i++){
    const s=document.createElement('div'); s.className='star';
    const sz=Math.random()*2.4+.3;
    s.style.cssText=`width:${sz}px;height:${sz}px;left:${Math.random()*100}%;top:${Math.random()*76}%;--d:${2+Math.random()*4}s;--dl:${Math.random()*6}s;--mo:${.07+Math.random()*.35}`;
    sl.appendChild(s);
  }
  // Arabic preview mini-stars
  const ffc=document.getElementById('ffc');
  for(let i=0;i<14;i++){
    const f=document.createElement('div'); f.className='firefly';
    f.style.cssText=`left:${5+Math.random()*90}%;top:${30+Math.random()*60}%;--d:${6+Math.random()*7}s;--dl:${Math.random()*9}s;--mx:${(Math.random()-.5)*110}px;--my:${(Math.random()-.5)*110}px;--mx2:${(Math.random()-.5)*90}px;--my2:${(Math.random()-.5)*90}px`;
    ffc.appendChild(f);
  }
  const lc=document.getElementById('lc');
  [{l:'6%',c:'#c9a84c',sw:'4.5s',dl:'0s',lg:'2.8s',ld:'0s',sa:'-3deg',sb:'3.5deg'},
   {l:'17%',c:'#8b1a2a',sw:'5.5s',dl:'1s',lg:'3.5s',ld:'.5s',sa:'-4deg',sb:'4deg'},
   {l:'83%',c:'#1a6060',sw:'4s',dl:'.5s',lg:'3s',ld:'1s',sa:'-3.5deg',sb:'3deg'},
   {l:'93%',c:'#c9a84c',sw:'6s',dl:'2s',lg:'4s',ld:'1.5s',sa:'-5deg',sb:'4.5deg'},
  ].forEach(({l,c,sw,dl,lg,ld,sa,sb})=>{
    const w=document.createElement('div'); w.className='lw';
    w.style.cssText=`left:${l};--sw:${sw};--dl:${dl};--sa:${sa};--sb:${sb}`;
    w.innerHTML=`<div class="ls"></div><div class="lb" style="background:radial-gradient(circle at 40% 30%,${c}cc,${c}66);--lg:${lg};--ld:${ld};--lc:${c}"><div style="position:absolute;inset:6px;border-radius:2px;background:rgba(255,220,120,.06)"></div></div><div class="lt" style="background:linear-gradient(180deg,${c}88,transparent)"></div>`;
    lc.appendChild(w);
  });
})();

/* ─── PARTICLES ─── */
function burst(cx, cy){
  const pc=document.getElementById('pc');
  const cols=['#f0d080','#c9a84c','#ff6888','#ffe4b5','#ffd700','#ff9aa2','#ffb3c1'];
  for(let i=0;i<65;i++){
    const p=document.createElement('div'); p.className='p';
    const a=Math.random()*Math.PI*2, d=70+Math.random()*260, sz=3+Math.random()*8;
    p.style.cssText=`left:${cx}px;top:${cy}px;width:${sz}px;height:${sz}px;background:${cols[~~(Math.random()*cols.length)]};box-shadow:0 0 ${sz*2}px ${cols[0]};--tx:${Math.cos(a)*d}px;--ty:${Math.sin(a)*d}px;--dur:${.75+Math.random()*.85}s`;
    pc.appendChild(p); setTimeout(()=>p.remove(), 2200);
  }
}

/* ─── DAILY REWARD ─── */
const today = new Date(); today.setHours(0,0,0,0);
const todayStr = toStr(today);
const startNorm = new Date(START); startNorm.setHours(0,0,0,0);
const daysCount = Math.max(0, Math.round((today - startNorm) / 86400000)) -1 ;

document.getElementById('rdaynum').textContent = daysCount + 1;
document.getElementById('rdatestr').textContent = today.toLocaleDateString('en-US',{weekday:'long',month:'long',day:'numeric',year:'numeric'});

const todayMsg = MSG_MAP[todayStr] || null;

function renderRewardText(container, arabicEl, stampEl, badgeWrap, msg, dayNum){
  if(msg){
    let inner = '';
    if(msg.type === 'challenge') inner += '<span class="challenge-label">⚔ Challenge</span>';
    if(msg.type === 'throwback') inner += '<span class="throwback-label">✦ Throwback</span>';
    inner += msg.t;
    container.innerHTML = inner;
    if(arabicEl && msg.a) arabicEl.textContent = msg.a;
    if(stampEl) stampEl.textContent = '✦ Day ' + dayNum + ' Together ✦';
    if(badgeWrap) badgeWrap.innerHTML = badgeHTML(msg.type);
  } else {
    container.textContent = 'No message set for today yet.';
    if(badgeWrap) badgeWrap.innerHTML = '';
  }
}

if(isClaimed(todayStr)){
  document.getElementById('rbtn').style.display = 'none';
  document.getElementById('ral').style.display = 'block';
  document.getElementById('rchest').textContent = '🤍';
  document.getElementById('rchest').style.cssText = 'animation:none;filter:drop-shadow(0 0 22px rgba(220,80,100,.55))';
  renderRewardText(document.getElementById('raltxt'), null, null, document.getElementById('ralbadge'), todayMsg, daysCount+1);
} else {
  document.getElementById('rbtn').addEventListener('click', function(){
    setClaimed(todayStr);
    this.style.display = 'none';
    document.getElementById('rrev').style.display = 'block';
    renderRewardText(document.getElementById('rtxtbox'), document.getElementById('rarabic'), document.getElementById('rstamp'), document.getElementById('rbadgeWrap'), todayMsg, daysCount+1);
    document.getElementById('rchest').textContent = '🤍';
    document.getElementById('rchest').style.cssText = 'animation:none;filter:drop-shadow(0 0 22px rgba(220,80,100,.55))';
    const r = this.getBoundingClientRect();
    burst(r.left + r.width/2, r.top + r.height/2);
  });
}

/* ─── CALENDAR ─── */
const calBtn = document.getElementById('ctbtn');
const calWrap = document.getElementById('calwrap');

// Determine year range: from START year to today's year (or at least current year)
const startYear = START.getFullYear();
const endYear = today.getFullYear();
const years = [];
for(let y = startYear; y <= endYear; y++) years.push(y);

let calY = today.getFullYear(), calM = today.getMonth();
const MO = ['January','February','March','April','May','June','July','August','September','October','November','December'];

calBtn.addEventListener('click', ()=>{
  const open = calWrap.classList.toggle('open');
  calBtn.classList.toggle('open', open);
  calBtn.innerHTML = open
    ? '<span class="bchev" style="display:inline-block;transform:rotate(180deg)">▾</span>&nbsp;&nbsp;Hide the Heart Calendar'
    : '<span class="bchev">▾</span>&nbsp;&nbsp;Reveal the Heart Calendar';
  if(open){ buildYearTabs(); renderCal(); }
});

document.getElementById('prevmo').addEventListener('click', ()=>{
  calM--; if(calM < 0){ calM=11; calY--; }
  syncYearTab(); renderCal();
});
document.getElementById('nextmo').addEventListener('click', ()=>{
  calM++; if(calM > 11){ calM=0; calY++; }
  syncYearTab(); renderCal();
});

function buildYearTabs(){
  const tabs = document.getElementById('yearTabs');
  tabs.innerHTML = '';
  years.forEach(y => {
    const btn = document.createElement('button');
    btn.className = 'ytab' + (y === calY ? ' active' : '');
    btn.textContent = y;
    btn.addEventListener('click', ()=>{
      calY = y;
      // Jump to earliest month in that year (Dec 2025 → Dec; 2026 → Jan)
      if(y === startYear){ calM = START.getMonth(); }
      else { calM = 0; }
      syncYearTab(); renderCal();
    });
    tabs.appendChild(btn);
  });
}

function syncYearTab(){
  document.querySelectorAll('.ytab').forEach(b => b.classList.toggle('active', parseInt(b.textContent) === calY));
}

function mkHeart(g){
  return `<svg class="hsv" viewBox="0 0 100 90" xmlns="http://www.w3.org/2000/svg"><path fill="url(#${g})" d="M50,80 C50,80 8,52 8,28 C8,14 18,5 30,5 C38,5 45,10 50,17 C55,10 62,5 70,5 C82,5 92,14 92,28 C92,52 50,80 50,80Z"/></svg>`;
}

function renderCal(){
  document.getElementById('cmtitle').textContent = MO[calM] + ' ' + calY;
  const grid = document.getElementById('cgrid'); grid.innerHTML = '';

  const firstDow = new Date(calY, calM, 1).getDay();
  const dim = new Date(calY, calM+1, 0).getDate();

  for(let i=0; i<firstDow; i++){
    const e=document.createElement('div'); e.className='cday empty'; grid.appendChild(e);
  }

  for(let d=1; d<=dim; d++){
    const cd = new Date(calY, calM, d); cd.setHours(0,0,0,0);
    const cs = toStr(cd);

    const cell = document.createElement('div'); cell.className = 'cday';
    const hw = document.createElement('div'); hw.className = 'hw';

    let state, g;
    if(cd < startNorm)              { state='before';  g='hgL'; }
    else if(cd.getTime()===today.getTime()) { state='todays'; g='hgT'; }
    else if(cd > today)             { state='future';  g='hgL'; }
    else                            { state='past';    g='hgP'; }

    cell.classList.add(state);
    hw.innerHTML = mkHeart(g);

    const dn = document.createElement('div'); dn.className='dnum'; dn.textContent=d;
    hw.appendChild(dn);

    if(state === 'future'){
      const lo = document.createElement('div'); lo.className='lockover'; lo.textContent='🔒'; hw.appendChild(lo);
    }

    cell.appendChild(hw); grid.appendChild(cell);

    if(state==='past' || state==='todays'){
      cell.addEventListener('click', ()=> openModal(cs, cd));
    }
  }
}

/* ─── MODAL ─── */
const modal = document.getElementById('modal');
document.getElementById('mclose').addEventListener('click', ()=> modal.classList.remove('open'));
modal.addEventListener('click', e=>{ if(e.target===modal) modal.classList.remove('open'); });
document.addEventListener('keydown', e=>{ if(e.key==='Escape') modal.classList.remove('open'); });

function openModal(dateStr, dateObj){
  const msg = MSG_MAP[dateStr] || null;
  const idx = dayIdx(dateStr);

  document.getElementById('mdlbl').textContent = dateObj.toLocaleDateString('en-US',{weekday:'long',month:'long',day:'numeric',year:'numeric'});
  document.getElementById('mdaynum').textContent = 'Day ' + (idx+1) + ' Together';

  // Badge
  document.getElementById('mbadgeWrap').innerHTML = msg ? modalBadgeHTML(msg.type) : '';

  // Heart animation reset
  const mh = document.getElementById('mheart');
  mh.style.animation = 'none';
  requestAnimationFrame(()=>{ mh.style.animation = 'heartpop .45s cubic-bezier(.34,1.56,.64,1) both'; });

  if(msg){
    let inner = msg.t;
    document.getElementById('mtxt').innerHTML = inner;
    document.getElementById('mtxt').style.display = 'block';
    document.getElementById('marabic').textContent = msg.a || '';
    document.getElementById('marabic').style.display = msg.a ? 'block' : 'none';
    document.getElementById('mnomsg').style.display = 'none';
  } else {
    document.getElementById('mtxt').style.display = 'none';
    document.getElementById('marabic').style.display = 'none';
    document.getElementById('mnomsg').style.display = 'block';
  }
  modal.classList.add('open');
}

/* ─── FOOTER easter egg ─── */
let ftaps=0, ftimer;
document.getElementById('foot').addEventListener('click', ()=>{
  ftaps++; clearTimeout(ftimer); ftimer=setTimeout(()=>ftaps=0, 1500);
  if(ftaps>=7){ ftaps=0; alert('Hehee… this is our digital scrapbook 🤍\nيَش وشروتي'); }
});