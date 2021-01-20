/*
    Função Fetch(promise), usada mais para requisições Ajax
*/
const url = 'https://alunos.b7web.com.br/api/ping';
const params = {
    method: 'POST',
    body: JSON.stringify({
        nome: 'Beltrano',
        idade: 99
    })
};
fetch(url, params)
    .then((r) =>r.json()
    .then((json)=> {
        console.log(json);
    }));