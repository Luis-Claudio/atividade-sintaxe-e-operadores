function novaOperacao(){
    let opcao = prompt('Deseja fazer uma Comparação?\n 1->Sim\n 2->Não');
    if (opcao == 1){
        comparacao();
    } else if (opcao ==2){
        alert('Obrigado, Comparação encerrada.')
    } else{
        alert('ERRO - Digite uma opção válida.')
        novaOperacao()
    }
}

function comparacao(){
    var val_1 = Number(prompt('Insira o 1º valor:'));
    var val_2 = Number(prompt('Insira o 2º valor:'));
    var resultado = val_1 + val_2;

    if (val_1 === val_2 ){
        if (resultado < 10){
            alert(`Os números ${val_1} e ${val_2} são iguais, e sua soma é: ${resultado} que é menor que 10 e menor que 20`);
            novaOperacao();
        } else if (resultado === 10){
            alert(`Os números ${val_1} e ${val_2} são iguais, e sua soma é: ${resultado} que é igual a 10 e menor que 20`);
            novaOperacao();
        } else if (resultado === 20){
            alert(`Os números ${val_1} e ${val_2} são iguais, e sua soma é: ${resultado} que é maior que 10 e igual a 20`);
            novaOperacao();
        } else if (resultado === 20){
            alert(`Os números ${val_1} e ${val_2} são iguais, e sua soma é: ${resultado} que é maior que 10 e igual a 20`);
            novaOperacao();
        } else if (resultado > 20){
            alert(`Os números ${val_1} e ${val_2} são iguais, e sua soma é: ${resultado} que é maior que 10 e maior que 20`);
            novaOperacao();
        }   
    } else {
        if (resultado< 10){
            alert(`Os números ${val_1} e ${val_2} são diferentes, e sua soma é: ${resultado} que é menor que 10 e menor que 20`);
            novaOperacao();
        } else if (resultado === 10){
            alert(`Os números ${val_1} e ${val_2} são diferentes, e sua soma é: ${resultado} que é igual a 10 e menor que 20`);
            novaOperacao();
        } else if (resultado === 20){
            alert(`Os números ${val_1} e ${val_2} são diferentes, e sua soma é: ${resultado} que é maior que 10 e igual a 20`);
            novaOperacao();
        } else if (resultado === 20){
            alert(`Os números ${val_1} e ${val_2} são diferentes, e sua soma é: ${resultado} que é maior que 10 e igual a 20`);
            novaOperacao();
        } else if (resultado > 20){
            alert(`Os números ${val_1} e ${val_2} são diferentes, e sua soma é: ${resultado} que é maior que 10 e maior que 20`);
            novaOperacao();
        } 
    }
}


novaOperacao();