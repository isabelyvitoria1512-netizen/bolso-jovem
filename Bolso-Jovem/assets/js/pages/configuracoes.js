document.addEventListener('DOMContentLoaded',()=>{
 const nome=document.getElementById('config-nome');nome.value=BJ.getNome();
 document.getElementById('config-form').addEventListener('submit',e=>{e.preventDefault();BJ.setNome(nome.value.trim());alert('Nome atualizado!');location.reload();});
 document.getElementById('tema').value=localStorage.getItem('bj_tema')||'light';
 document.getElementById('tema').addEventListener('change',e=>{localStorage.setItem('bj_tema',e.target.value);document.documentElement.dataset.theme=e.target.value;});
 document.getElementById('texto').value=localStorage.getItem('bj_tamanho')||'normal';
 document.getElementById('texto').addEventListener('change',e=>{localStorage.setItem('bj_tamanho',e.target.value);document.documentElement.dataset.text=e.target.value;});
 document.getElementById('limpar').addEventListener('click',()=>{if(confirm('Apagar todas as movimentações e metas deste navegador?')){BJ.salvarMovimentacoes([]);BJ.salvarMetas([]);alert('Dados apagados.');}});
});