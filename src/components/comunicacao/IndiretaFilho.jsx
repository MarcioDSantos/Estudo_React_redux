import React from "react";
const min = 50
const max = 70
const gerarIdade = () => parseInt(Math.random() * (max - min)) + min
const gerarNerd = () => Math.random() > 0.5


export default props => {

    return (
        <div>
            <div>Filho </div>
            <button onClick={
                function (e) {
                    props.Clicar('Jose', gerarIdade(), gerarNerd())
                }
            }>
                Fornecer Informações
            </button>
        </div>
    )
}