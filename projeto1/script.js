const formulario = document.getElementById("formulario");
const imgAprovado = `<img src="images/aprovado.png" alt="Emoji aprovado" />`;
const imgReprovado = `<img src="images/reprovado.png" alt="Emoji reprovado" />`;
const resultadoAprovado = `<span class="resultado aprovado">Aprovado</span>`;
const resultadoReprovado = `<span class="resultado reprovado">Reprovado</span>`;
let linhas = '';

const atividades = [];
const notas = [];

formulario.addEventListener("submit", function(e){
    e.preventDefault();
    adicionaLinha();
    atualizaTabela();  
    mediaFinal();
});

function adicionaLinha(){
    const nomeAtividade = document.getElementById("nome-atividade");
    const notaAtividade = document.getElementById("nota-atividade");
    
    if (atividades.includes(nomeAtividade.value)) {
        alert(`Você está tentando adicionar uma atividade que já existe.\n
        Por favor Verifique e tente novamente.`)
    } else {
        atividades.push(nomeAtividade.value);
        notas.push(parseFloat(notaAtividade.value));
    
        let linha = `<tr>`;
        linha += `<td>${nomeAtividade.value}</td>`;
        linha += `<td>${notaAtividade.value}</td>`;
        linha += `<td>${notaAtividade.value >= 7 ? imgAprovado : imgReprovado}</td>`;
        linha += `</tr>`;
        linhas += linha;
        
        notaAtividade.value = '';
        nomeAtividade.value = '';
    }
}

function atualizaTabela(){
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}

function calculaMedia(){
    console.log(`Nomes Atividades ${atividades}, Notas das Atividades ${notas}`);    
    let somaNotas = 0;
    for(i = 0; i < notas.length; i++) {
        somaNotas += notas[i];
    }
    return somaNotas / notas.length;
}

function mediaFinal(){
    let media = calculaMedia();
    /* let results = media.toFixed(1); */
    const corpoTabela = document.querySelector('tfoot');
    let linha = `<tr>`;
    linha += `<td>Média Final</td>`;
    linha += `<td>${media}</td>`;
    linha += `<td>${media >= 7 ? 
        resultadoAprovado : 
        resultadoReprovado}</td>`;
    linha += `</tr>`;
    console.log(media);
    corpoTabela.innerHTML = linha;
}