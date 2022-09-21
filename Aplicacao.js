const dados = require('./modules/dados');

const Resposta = require('./modules/cfunc_dados');

const { Quantidades, Medias, Porcentagens } = require('./modules/funcoes');

dados.respostas.push(new Resposta(20, 3));
dados.respostas.push(new Resposta(25, 3));
dados.respostas.push(new Resposta(30, 1));
dados.respostas.push(new Resposta(35, 2));
dados.respostas.push(new Resposta(40, 2));


console.log(`A média das idades das pessoas que responderam ótimo é ${Medias.mediaIdadesOtimo(dados.respostas)}`);

console.log(`A quantidade de pessoas que responderam regular é ${Quantidades.quantRegular(dados.respostas)}`);

console.log(`A porcentagem de pessoas que responderam bom entre todos os espectadores analisados é ${Porcentagens.porcentagemBom(dados.respostas)}`);

console.log(`O array de objetos respostas tem ${dados.respostas.length} elementos`);