/* ═══════════════════════════════════════════════════════════
   ★  DAILY MESSAGES — EDIT THIS LIST TO ADD YOUR OWN  ★
   Format: { d:"YYYY-MM-DD", t:"your message", a:"arabic (optional)", type:"love"|"challenge"|"throwback" }
   type controls the colour badge shown. Leave a out if you don't want Arabic.
   Days without an entry in this list show "No message set yet."
═══════════════════════════════════════════════════════════ */




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



/* ─── FOOTER easter egg ─── */
let ftaps=0, ftimer;
document.getElementById('foot').addEventListener('click', ()=>{
  ftaps++; clearTimeout(ftimer); ftimer=setTimeout(()=>ftaps=0, 1500);
  if(ftaps>=7){ ftaps=0; alert('Hehee… this is our digital scrapbook 🤍\nيَش وشروتي'); }
});