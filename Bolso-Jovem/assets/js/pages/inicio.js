document.addEventListener('DOMContentLoaded', () => {
  const lista = BJ.movimentacoes(), r = BJ.resumo(lista);
  document.getElementById('saldo').textContent = BJ.moeda(r.saldo);
  document.getElementById('receitas').textContent = BJ.moeda(r.receitas);
  document.getElementById('despesas').textContent = BJ.moeda(r.despesas);
  const recentes = [...lista].sort((a,b)=>b.data.localeCompare(a.data)).slice(0,5);
  const tbody = document.getElementById('recentes');
  if (!recentes.length) { tbody.innerHTML='<tr><td colspan="4" class="empty">Ainda não há movimentações. Cadastre sua primeira entrada ou saída.</td></tr>'; return; }
  tbody.innerHTML = recentes.map(x=>`<tr><td>${BJ.formatarData(x.data)}</td><td>${escapeHtml(x.descricao)}</td><td><span class="pill ${x.tipo}">${x.tipo==='receita'?'Receita':'Despesa'}</span></td><td class="amount ${x.tipo}">${x.tipo==='receita'?'+':'−'} ${BJ.moeda(x.valor)}</td></tr>`).join('');
});
function escapeHtml(s){return String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));}