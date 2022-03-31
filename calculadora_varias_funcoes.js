{

    var numeros = [];
    var resultado_operacao;
    var soma = 0;
    var cont = 0;
    var peso = 10;
    

    var operadores_basicos = function(num1,num2, operador){
        if(operador == '+'){
            var result = num1 + num2
        }else if(operador == '-'){
            var result = num1 - num2
        }else if(operador == 'x'){
            var result = num1 * num2
        }else if(operador == '/'){
            var result = num1 / num2
        }
        return result
    }

    var coletar_dados = function(txt, txt1){
         numeros[0] = Number(prompt(txt))
         numeros[1] = Number(prompt(txt1))
    }

    var porcentagem = function(num1,num2){
        var result = num1 * (num2/100);
        return result;
    }



    while(true){
        var operacao = prompt(`Qual operação deseja usar?

        Digite 1 para soma
        Digite 2 para subtrair
        Digite 3 para multiplicar
        Digite 4 para dividir
        Digite 5 para porcentagem
        Digite 6 para calcular media aritmedia
        Digite 7 para calcular media ponderada
        Digite 8 para encerrar`);
        if(operacao === '1'){
            coletar_dados('Digite o primeiro numero para somar', 'Digite o segundo numero para somar');
            resultado_operacao = operadores_basicos(numeros[0],numeros[1],'+');  
        }else if(operacao === '2'){
            coletar_dados('Digite o primeiro para subtrair', 'Digite o segundo numero para somar');
            resultado_operacao = operadores_basicos(numeros[0],numeros[1],'-');  
        }else if(operacao === '3'){
            coletar_dados('Digite o numero para multiplicar', 'Digite o segundo numero para somar');
            resultado_operacao = operadores_basicos(numeros[0],numeros[1],'x');  
        }else if(operacao === '4'){
            coletar_dados('Digite o numero para dividir', 'Digite o segundo numero para somar');
            if(numeros[1] === 0){
                alert('Digite divisores maiores que ZERO');
                coletar_dados('Digite o numero maior que ZERO para dividir', '');
            }
            resultado_operacao = operadores_basicos(numeros[0],numeros[1],'/');
        }else if(operacao === '5'){
            coletar_dados('Digite o numero para calcular porcentagem','Digite porcentagem');
            resultado_operacao = porcentagem(numeros[0],numeros[1]);   
        }else if(operacao === '6'){
            while(true){
                soma += Number(prompt('Digite um numero para media'));
                console.log(soma)
                cont++
                pergunta = prompt('Deseja continuar o calculo?? (s/n)');
                if(pergunta === 'n'){
                    break
                }
            }
            resultado_operacao = operadores_basicos(soma, cont, '/');
            soma = 0;
        }else if(operacao === '7'){
            for(var i = 0; i < 4; i++){
                coletar_dados('Digite a primeira nota', 'Digite o peso');
                soma += numeros[0] * numeros[1];
                peso -= numeros[1];
                
                if(peso < 0 || (peso > 0 && i === 3)){
                    alert('Destribua os pesos corretamente!\nPeso atingiu 0 antes do esperado ');
                    i = 0;
                    peso = 10;
                    soma = 0;
                }
            }
            resultado_operacao = operadores_basicos(soma, 10, '/');
            peso = 10;
            soma = 0;


        }else if(operacao === '8'){

            break;
        }else{
            alert('Digite somente numeros do menu');
        }
        alert(`O resultado é ${resultado_operacao}`);
    }
}
