function compareNumbers() {
    // Obter os valores dos inputs
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const num3 = parseFloat(document.getElementById('num3').value);

    // Validar se os inputs são números
    if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
        alert('Por favor, insira todos os números solicitados.');
        return;
    }

    // Calcular o maior, o menor e se são iguais ou diferentes
    const max = Math.max(num1, num2, num3);
    const min = Math.min(num1, num2, num3);
    const equalNumbers = [];

    // Identificar números iguais
    if (num1 === num2) {
        equalNumbers.push(num1);
    }
    if (num2 === num3) {
        equalNumbers.push(num2);
    }
    if (num1 === num3) {
        equalNumbers.push(num1);
    }

    // Exibir o resultado
    document.getElementById('max').textContent = `O maior número é o ${max}`;
    document.getElementById('min').textContent = `O menor número é o ${min}`;
    document.getElementById('igual').textContent = `Os números iguais são: ${equalNumbers.length > 0 ? equalNumbers.join(', ') : 'Nenhum'}`;
    document.getElementById('diferente').textContent = `Os números são todos diferentes: ${equalNumbers.length === 0 ? 'Sim' : 'Não'}`;

    // Mostrar a seção de resultados
    document.getElementById('resultado').classList.remove('escondido');
}
