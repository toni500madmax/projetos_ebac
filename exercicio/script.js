const form = document.getElementById("formulario");
const campos = document.getElementsByTagName("input");
const resultado = document.querySelector(".msg");
let valida = false;


console.log(typeof(campos) + ' ' + campos.length);

form.addEventListener("submit", function(e){
    e.preventDefault();
    campo_a = parseInt(campos[0].value);
    campo_b = parseInt(campos[1].value);

    console.log(typeof(campo_a) + " " + typeof(campo_b));
    
    const msgSucesso = `<hr/>O valor do <b>Campo A</b> é <b>MENOR</b> que o valor do <b>Campo B</b></br>
                            Campo A = ${campo_a}.</br>Campo B = ${campo_b}.<hr/></br>Sucesso.<hr/>`;
    const msgFracasso = `<hr/>O valor do <b>Campo B</b> é <b>maior</b> que o valor do <b>Campo A</b></br>
                            Campo A = ${campo_a}.</br>Campo B = ${campo_b}.<hr/></br>Sem sucesso.<hr/>`;

    if(campo_b > campo_a) {
        resultado.innerHTML = msgSucesso;
        resultado.style.display = "block";
        resultado.style.backgroundColor = "#2ecc71";
        campos[0].classList.remove("error");
        campos[1].classList.remove("error");
    } else if(campo_a == campo_b){
        resultado.innerHTML = `<hr/>Os valores dos campos <b>A</b> e <b>B</b> são <b>IGUAIS</b>.<hr/></br>Mude os valores.<hr/>`;
        resultado.style.display = "block";
        resultado.style.backgroundColor = "rgb(255, 153, 0)";
        campos[0].classList.add("error");
        campos[1].classList.add("error");
    } else {
        resultado.innerHTML = msgFracasso;
        resultado.style.display = "block";
        resultado.style.backgroundColor = "red";
        campos[0].classList.add("error");
        campos[1].classList.remove("error");
    }
});

form.addEventListener("reset", function(e) {
    e.preventDefault();
    resultado.style.display = "none";
    campos[0].value = "";
    campos[1].value = "";
    campos[0].classList.remove("error");
    campos[1].classList.remove("error");
});



