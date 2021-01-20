/*
    Função Fetch(promise), usada mais para requisições Ajax
*/
const url = 'https://alunos.b7web.com.br/api/ping';
const params = {
    method: 'POST'
};

fetch(url, params)
    .then((r)=>r.json())
    .then((json)=>{
        console.log(json);
    });