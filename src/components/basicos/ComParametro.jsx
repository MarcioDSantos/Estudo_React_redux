import React from "react"

export default function ComParamentro(props) {
    const status = props.nota >= 7 ? 'Aprovado' : 'Recuperação'
    return( 
        <div>
            <h2>{ props.titulo }</h2>
            <p>
                { props.aluno } tem nota { props.nota } e está { status }
            </p>
        </div>
    )
}