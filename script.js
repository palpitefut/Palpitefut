const esc=s=>String(s).replace(/[&<>"']/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[m]));
const tips=document.getElementById("tips");
tips.innerHTML=palpites.map((p,i)=>`
<article class="tip">
<div class="tiptop"><span>${esc(p.campeonato)}</span><small>${esc(p.data)} · ${esc(p.hora)}</small></div>
<h3>${esc(p.casa)} <em>x</em> ${esc(p.fora)}</h3>
<div class="pick"><span>PALPITE</span><strong>${esc(p.mercado)}</strong></div>
<div class="tipmeta"><span>Odd <b>${esc(p.odd)}</b></span><span>${esc(p.confianca)}</span></div>
<p>${esc(p.texto)}</p>
<a class="read" href="palpite.html?id=${i}">Ver análise completa →</a>
</article>`).join("");

const postsEl=document.getElementById("posts");
postsEl.innerHTML=posts.map((p,i)=>`
<article class="post"><div class="date">${esc(p.data)}</div><h3>${esc(p.titulo)}</h3><p>${esc(p.resumo)}</p><a class="read" href="post.html?id=${i}">Ler post →</a></article>`).join("");