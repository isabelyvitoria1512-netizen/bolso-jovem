document.addEventListener('DOMContentLoaded', () => {
  const form=document.getElementById('mov-form'), tbody=document.getElementById('mov-lista');
  const idInput=document.getElementById('mov-id');
  function render(){
    const lista=[...BJ.movimentacoes()].sort((a,b)=>b.data.localeCompare(a.data));
    tbody.innerHTML=lista.length?lista.map(x=>`<tr><td>${BJ.formatarData(x.data)}</td><td>${esc(x.descricao)}</td><td>${esc(x.categoria)}</td><td><span class="pill ${x.tipo}">${x.tipo}</span></td><td class="amount ${x.tipo}">${x.tipo==='receita'?'+':'−'} ${BJ.moeda(x.valor)}</td><td class="actions"><button class="icon-btn" data-edit="${x.id}" aria-label="Editar">✎</button><button class="icon-btn danger" data-delete="${x.id}" aria-label="Excluir">×</button></td></tr>`).join(''):'<tr><td colspan="6" class="empty">Nenhuma movimentação cadastrada.</td></tr>';
  }
  form.addEventListener('submit',e=>{
    e.preventDefault(); const lista=BJ.movimentacoes();
    const item={id:idInput.value||BJ.id(),descricao:form.descricao.value.trim(),categoria:form.categoria.value,tipo:form.tipo.value,valor:Number(form.valor.value),data:form.data.value};
    if(!item.descricao||item.valor<=0||!item.data)return;
    const idx=lista.findIndex(x=>x.id===item.id); if(idx>=0)lista[idx]=item;else lista.push(item);
    BJ.salvarMovimentacoes(lista); form.reset(); idInput.value=''; form.data.value=BJ.dataHoje(); document.getElementById('form-titulo').textContent='Nova movimentação'; render();
  });
  tbody.addEventListener('click',e=>{
    const del=e.target.closest('[data-delete]'), edit=e.target.closest('[data-edit]'); let lista=BJ.movimentacoes();
    if(del&&confirm('Excluir esta movimentação?')){BJ.salvarMovimentacoes(lista.filter(x=>x.id!==del.dataset.delete));render();}
    if(edit){const x=lista.find(v=>v.id===edit.dataset.edit);if(!x)return;idInput.value=x.id;form.descricao.value=x.descricao;form.categoria.value=x.categoria;form.tipo.value=x.tipo;form.valor.value=x.valor;form.data.value=x.data;document.getElementById('form-titulo').textContent='Editar movimentação';form.scrollIntoView({behavior:'smooth'});}
  });
  form.data.value=BJ.dataHoje(); render();
});
function esc(s){return String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));}