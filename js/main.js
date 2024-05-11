// let valor = Number(prompt('Qual o valor do produto'))
// let desconto = prompt('Aplique o desconto')
// let DESC1 = valor * (5/100)
// let valortotal = valor - DESC1
// let DESC2 = valor * (10/100)
// let valortotal1 = valor - DESC2
// let DESC3 = valor * (15/100)
// let valortotal2 = valor - DESC3
// let DESC4 = valor * (20/100)
// let valortotal3 = valor - DESC4
// let DESC5 = valor * (25/100)
// let valortotal4 = valor - DESC5

// switch (desconto) {
//     case 'DESC1, desc1':
//         alert(`com o compum desconto ${desconto} no produto que vale ${valor} o produto vai sair por ${valortotal}`)
//         break;
//     case 'DESC2, desc2':
//         alert(`com o compum desconto ${desconto} no produto que vale ${valor} o produto vai sair por ${valortotal1}`) 
//         break;
//     case 'DESC3, desc3':
//         alert(`com o compum desconto ${desconto} no produto que vale ${valor} o produto vai sair por ${valortotal2}`)
//         break;
//     case 'DESC4, desc4':
//         alert(`com o compum desconto ${desconto} no produto que vale ${valor} o produto vai sair por ${valortotal3}`)
//         break;
//     case 'DESC5, desc5':
//         alert(`com o compum desconto ${desconto} no produto que vale ${valor} o produto vai sair por ${valortotal4}`)           
//     default:
//         alert(`Nenum desconto aplicado`)
//         break;
// }

function calcularDesconto(codigoPromocional, valorProduto) {
    let desconto = 0;

    switch (codigoPromocional) {
        case "DESC1":
            desconto = 0.05;
            break;
        case "DESC2":
            desconto = 0.10;
            break;
        case "DESC3":
            desconto = 0.15;
            break;
        case "DESC4":
            desconto = 0.20;
            break;
        case "DESC5":
            desconto = 0.25;
            break;
        default:
            alert("Erro: Código promocional inválido.");
            return;
    }

    const valorComDeasconto = valorProduto * (1 - desconto);
    alert("Desconto: " + (desconto * 100) + "%\n" +
        "Valor original do produto: R$" + valorProduto.toFixed(2) + "\n" +
        "Valor com desconto: R$" + valorComDesconto.toFixed(2));
}

const codigoPromocional = prompt("Informe o cupom de desconto!")
const valorProduto = parseFloat(prompt("Informe o valor do produto:"));

calcularDesconto(codigoPromocional.toUpperCase(), valorProduto);