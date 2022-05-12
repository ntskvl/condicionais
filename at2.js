// 2

let vel = prompt('Coloque a velocidade do carro');

if (vel > 80){
    let multa = (vel - 80)
    alert(`Você esta acima do limte. A multa é de ${multa}`)
}else{
    alert('Você esta dentro do limite');
}