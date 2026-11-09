document.addEventListener('DOMContentLoaded',()=>{
 const lista=BJ.movimentacoes(), gastos=lista.filter(x=>x.tipo==='despesa'), total=gastos.reduce((s,x)=>s+Number(x.valor),0);
 const grupos={};gastos.forEach(x=>grupos[x.categoria]=(grupos[x.categoria]||0)+Number(x.valor));
 const el=document.getElementById('categorias');
 const itens=Object.entries(grupos).sort((a,b)=>b[1]-a[1]);
 document.getElementById('total-gastos').textContent=BJ.moeda(total);
 el.innerHTML=itens.length?itens.map(([nome,v])=>`<div class="report-row"><div class="report-label"><b>${esc(nome)}</b><span>${BJ.moeda(v)} · ${Math.round(v/total*100)}%</span></div><div class="progress"><span style="width:${v/total*100}%"></span></div></div>`).join(''):'<p class="empty">Cadastre despesas para visualizar seu relatório por categoria.</p>';
});
function esc(s){return String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));}