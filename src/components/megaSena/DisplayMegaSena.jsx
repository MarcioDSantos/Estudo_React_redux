import React, { useState } from "react";
import Sorteio from "./GerarNumero";

export default props => {
    function gerarNumeros(qtde) {
        const numeros = Array(qtde).fill(0)
            .reduce((nums) => {
                const novoNumero = gerarNumeroNaoContido(1, 60, nums)
                return [...nums, parseInt(novoNumero)]
            }, [])
            .sort((n1, n2) => n1 - n2)

        return numeros
    }

    function gerarNumeroNaoContido(min, max, array) {
        const aleatorio = parseFloat(Math.random() * (max - min) + min)
        return array.includes(aleatorio) ?
            gerarNumeroNaoContido(min, max, array) : aleatorio
    }

    const [qtde, setQtde] = useState(props.qtde) || 6
    const numerosIniciais = Array(qtde).fill(0)
    const [numeros, setNumeros] = useState(numerosIniciais)

    return (
        <div>
            <h2>Mega Sena</h2>
            <h3>{numeros.join(' ')}</h3>
            <div>
                <label>Qauntidade de números na aposta</label>
                <input type="number" value={qtde}
                onChange={e => setQtde(+e.target.value)}/>
            </div>
            <button onClick={_ => setNumeros(gerarNumeros(qtde))}> Gerar jogo</button>
        </div>
    )
}