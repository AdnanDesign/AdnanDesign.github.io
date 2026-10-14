const labels = [['overview','Overview'],['scope','Scope'],['problem','Problem'],['research','Research'],['ideation','Ideation'],['brand','Brand'],['solution','Solution'],['testing','Testing'],['learnings','Learnings']];
const style = document.createElement('style'); style.textContent = `.case-index{position:fixed;z-index:4;left:26px;top:50%;transform:translateY(-50%);display:flex;flex-direction:column;gap:18px}.case-index a{color:#aaa;text-decoration:none;font-size:12px;transition:.2s}.case-index a:hover,.case-index a.active{color:var(--ink);transform:translateX(4px)}.case-index .index-back{margin-top:14px;color:#6659df;border-top:1px solid var(--line);padding-top:13px;font:500 9px 'DM Mono',monospace;text-transform:uppercase}.generated-section{border-top:1px solid var(--line);padding-top:80px;padding-bottom:80px}.generated-line{display:flex;justify-content:space-between;align-items:center;border-top:1px solid var(--line);margin-top:50px;padding-top:14px;font:500 10px 'DM Mono',monospace;color:var(--muted)}.generated-line span:first-child{color:#6659df;font-size:20px}@media(min-width:801px){.case-hero,.case-info,.case-section,.case-footer .case-wrap,.case-bottom{margin-left:clamp(230px,25vw,480px);width:calc(100% - clamp(266px,28vw,516px));margin-right:36px}.case-hero{grid-template-columns:1fr;gap:30px}.case-hero .hero-art{height:430px}.case-hero .case-description{max-width:620px}.case-info{grid-template-columns:repeat(3,1fr)}}@media(max-width:800px){.case-index{position:sticky;top:0;transform:none;left:auto;flex-direction:row;overflow:auto;gap:18px;padding:15px 18px;background:#f2f0ebee;backdrop-filter:blur(14px);border-bottom:1px solid var(--line)}.case-index a{font-size:10px;white-space:nowrap}.case-index .index-back{margin:0;padding:0;border:0}}`; document.head.appendChild(style);
style.textContent += '.case-index{top:110px!important;transform:none!important}';
const main = document.querySelector('main');
const hero = document.querySelector('.case-hero');
const info = document.querySelector('.case-info');
const sections = [...document.querySelectorAll('.case-section')];
hero.id = 'overview'; info.id = 'scope';
sections.forEach((section,index) => section.id = ['problem','research','solution'][index] || `section-${index}`);
const extra = {
  research:['Research','Listen before designing.','The strongest direction came from looking closely at real routines, anxieties, and workarounds. Research turned assumptions into a more humane product brief.'],
  ideation:['Ideation','From signals to a system.','We explored multiple routes before choosing the one that made the experience feel lighter, clearer, and easier to return to.'],
  brand:['Brand','A visual voice with a pulse.','Typography, color, and motion work together to make the product feel approachable. The glassy surfaces carry depth without getting in the way.'],
  testing:['Testing','Small details, tested in context.','Prototype reviews focused on clarity, hierarchy, and the moments where people might hesitate. Each pass removed friction from the core flow.'],
  learnings:['Learnings','Make the next version better.','The work reinforced a simple belief: a beautiful interface matters most when it helps people feel more capable.']
};
for (const key of ['ideation','brand','testing','learnings']) {
  const data=extra[key], section=document.createElement('section'); section.className='case-section case-wrap generated-section'; section.id=key;
  section.innerHTML=`<div class="case-label">${data[0].toUpperCase()}</div><div><h2>${data[1]}</h2><p class="lead">${data[2]}</p><div class="generated-line"><span>✦</span><span>PROCESS / ${data[0].toUpperCase()}</span><span>ADNAN DESIGN</span></div></div>`;
  main.appendChild(section);
}
const nav=document.createElement('aside'); nav.className='case-index'; nav.innerHTML=labels.map(([id,label])=>`<a href="#${id}">${label}</a>`).join('')+`<a class="index-back" href="../../index.html#work">↗ all work</a>`; document.body.appendChild(nav);
const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting) nav.querySelectorAll('a').forEach(a=>a.classList.toggle('active',a.getAttribute('href')===`#${entry.target.id}`));}),{rootMargin:'-35% 0px -55% 0px'});
document.querySelectorAll('[id]').forEach(el=>observer.observe(el));
