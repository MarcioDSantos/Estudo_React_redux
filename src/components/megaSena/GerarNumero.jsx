
function gerarNumeros(qtde) {
    const numeros =Array(qtde).fill(0)
    .reduce((nums) => {
        const novoNumero = gerarNumeroNaoContido(1, 60, nums)
        return [...nums, novoNumero]
    },[])
    .sort((n1, n2) => n1 - n2)
}

function gerarNumeroNaoContido(min, max, array) {
    const aleatorio = parseFloat(Math.random() * (max - min) + min)
    return array.includes(aleatorio) ?
        gerarNumeroNaoContido(min, max, array) : aleatorio
}