const calcular = document.getElementById('calcular');

function imc () {
    const nome = document.getElementById('nome').value;
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    const resultado = document.getElementById('resultado');
    
    if (nome !== '' && altura !=='' && peso !== '') {
       
        const valorIMC = (peso / (altura * altura)).toFixed(1);

        let classificacao = '';
        
        if (valorIMC < 18.5){
            classificacao = 'abaixo do peso.';
            document.body.style.backgroundColor = "blue";
        }else if(valorIMC <25){
            classificacao = `com o Peso ideal. Parabéns.!`;
            document.body.style.backgroundColor = "green";
        }

        else if(valorIMC <30){
            classificacao = `Levemente acima do peso.`;
            document.body.style.backgroundColor = "orange";
        }
        else if(valorIMC >30){
            classificacao = `acima do peso.`;
            document.body.style.backgroundColor = "red";
        }

        resultado.textContent = `${nome} seu IMC é ${valorIMC}  você está ${classificacao}`;
    }


    else {
        resultado.textContent = 'Preencha todos os campos!!!'
    }
}

//quando alguem clicar executa a função imc
calcular.addEventListener('click', imc)