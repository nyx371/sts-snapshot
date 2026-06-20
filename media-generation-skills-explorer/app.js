
const D = window.EXPLORER_DATA;
const $ = (s, r=document) => r.querySelector(s);
const $$ = (s, r=document) => [...r.querySelectorAll(s)];
const sections = ['hero','map','skills','onboarding','distribution','spotify','changes','research'];
$('#nav').innerHTML = sections.map(id => `<a href="#${id}">${id === 'hero' ? 'Overview' : title(id)}</a>`).join('');
function title(s){return s.replace(/-/g,' ').replace(/\b\w/g,m=>m.toUpperCase())}
$$('[data-jump]').forEach(b=>b.onclick=()=>$('#'+b.dataset.jump).scrollIntoView({behavior:'smooth'}));
window.addEventListener('scroll',()=>{let cur='hero'; for(const id of sections){if($('#'+id).getBoundingClientRect().top<160)cur=id} $$('nav a').forEach(a=>a.classList.toggle('active',a.getAttribute('href')==='#'+cur));},{passive:true});

const domainById = Object.fromEntries(D.domains.map(d=>[d.id,d]));
const select = $('#domainFilter');
D.domains.forEach(d=>select.insertAdjacentHTML('beforeend',`<option value="${d.id}">${d.name}</option>`));
function renderSkills(){const q=$('#search').value.toLowerCase(), f=select.value; $('#skillGrid').innerHTML = D.skills.filter(s=>(f==='all'||s.domain===f) && JSON.stringify(s).toLowerCase().includes(q)).map(s=>{const d=domainById[s.domain]; return `<article class="skill-card"><small style="color:${d.color}">${d.name}</small><h3>${s.name}</h3><p>${s.why}</p><a href="${s.url}">${s.url}</a></article>`}).join('') || '<p>No matches.</p>'}
$('#search').oninput=renderSkills; select.onchange=renderSkills; renderSkills();

function renderMap(active='podcast'){
 const svg=$('#domainMap'), cx=450, cy=260, R=185;
 const pts=D.domains.map((d,i)=>{const a=(-90+i*360/D.domains.length)*Math.PI/180; return {...d,x:cx+R*Math.cos(a),y:cy+R*Math.sin(a)}});
 svg.innerHTML = `<defs><radialGradient id="core"><stop offset="0" stop-color="#a78bfa"/><stop offset="1" stop-color="#22d3ee"/></radialGradient></defs>`+
   pts.map(p=>`<line class="link" x1="${cx}" y1="${cy}" x2="${p.x}" y2="${p.y}"/>`).join('')+
   `<circle cx="${cx}" cy="${cy}" r="78" fill="url(#core)" opacity=".95"/><text x="${cx}" y="${cy-5}" text-anchor="middle" fill="white" font-size="18" font-weight="900">Media</text><text x="${cx}" y="${cy+20}" text-anchor="middle" fill="white" font-size="14">generation skills</text>`+
   pts.map(p=>`<g class="node ${p.id===active?'active':''}" data-id="${p.id}"><circle cx="${p.x}" cy="${p.y}" r="62" fill="${p.color}" opacity=".92"/><text x="${p.x}" y="${p.y-4}">${p.name.split('/')[0].trim()}</text><text x="${p.x}" y="${p.y+16}" font-size="12">${p.skills.length} skills</text></g>`).join('');
 $$('.node',svg).forEach(n=>n.onclick=()=>renderMap(n.dataset.id)); renderDomain(active);
}
function renderDomain(id){const d=domainById[id]; $('#domainDetail').innerHTML=`<p class="eyebrow" style="color:${d.color}">Domain</p><h3>${d.name}</h3><p>${d.description}</p><h4>Skills</h4>${d.skills.map(s=>`<span class="pill">${s}</span>`).join('')}<h4>First questions</h4><ul>${d.questions.map(q=>`<li>${q}</li>`).join('')}</ul>`}
renderMap();

$('#onboardingFlow').innerHTML=D.onboarding.map(x=>`<div class="mini-card"><h3>${x.step}</h3><p>${x.detail}</p></div>`).join('');
$('#distributionGrid').innerHTML=D.distribution.map(x=>`<div class="mini-card"><h3>${x.name}</h3><p>${x.detail}</p></div>`).join('');
function list(id, arr){$(id).innerHTML=arr.map(x=>`<li>${x}</li>`).join('')}
list('#spotifyStrengths',D.spotify.strengths); list('#spotifyImplemented',D.spotify.implemented); list('#spotifyRoadmap',D.spotify.roadmap); $('#patchStats').textContent=D.patchStats;
const panes={doctor:D.doctorSource,diff:D.diff || 'No diff captured.'}; let current='doctor';
function code(){ $('#codePane').textContent=panes[current] }
$$('.tab').forEach(b=>b.onclick=()=>{current=b.dataset.tab; $$('.tab').forEach(t=>t.classList.toggle('active',t===b)); code()}); code();
const research=$('#researchText'), rsearch=$('#researchSearch'); function renderResearch(){const q=rsearch.value.trim().toLowerCase(); if(!q){research.textContent=D.researchMarkdown; return} const lines=D.researchMarkdown.split('\n').filter(l=>l.toLowerCase().includes(q) || l.startsWith('#')); research.textContent=lines.join('\n')} rsearch.oninput=renderResearch; renderResearch();
