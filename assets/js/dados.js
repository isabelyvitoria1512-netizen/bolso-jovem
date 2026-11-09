/* Dados locais do Bolso Jovem. Tudo é salvo somente neste navegador. */
window.BJ = (() => {
  const KEYS = { nome:'bj_nome', sessao:'bj_sessao', mov:'bj_movimentacoes', metas:'bj_metas' };
  const ler = (key, fallback=[]) => { try { return JSON.parse(localStorage.getItem(key)) ?? fallback; } catch { return fallback; } };
  const salvar = (key, value) => localStorage.setItem(key, JSON.stringify(value));
  const moeda = valor => new Intl.NumberFormat('pt-BR',{style:'currency',currency:'BRL'}).format(Number(valor)||0);
  const getNome = () => localStorage.getItem(KEYS.nome) || '';
  const setNome = nome => localStorage.setItem(KEYS.nome, nome);
  const login = nome => { setNome(nome); localStorage.setItem(KEYS.sessao,'1'); };
  const logout = () => localStorage.removeItem(KEYS.sessao);
  const autenticado = () => localStorage.getItem(KEYS.sessao) === '1';
  const movimentacoes = () => ler(KEYS.mov, []);
  const salvarMovimentacoes = lista => salvar(KEYS.mov, lista);
  const metas = () => ler(KEYS.metas, []);
  const salvarMetas = lista => salvar(KEYS.metas, lista);
  const resumo = (lista=movimentacoes()) => {
    const receitas = lista.filter(x=>x.tipo==='receita').reduce((s,x)=>s+Number(x.valor),0);
    const despesas = lista.filter(x=>x.tipo==='despesa').reduce((s,x)=>s+Number(x.valor),0);
    return { receitas, despesas, saldo:receitas-despesas };
  };
  const dataHoje = () => new Date().toISOString().slice(0,10);
  const formatarData = data => data ? new Date(`${data}T12:00:00`).toLocaleDateString('pt-BR') : '—';
  const id = () => (crypto?.randomUUID ? crypto.randomUUID() : `${Date.now()}-${Math.random().toString(16).slice(2)}`);
  return { moeda,getNome,setNome,login,logout,autenticado,movimentacoes,salvarMovimentacoes,metas,salvarMetas,resumo,dataHoje,formatarData,id };
})();