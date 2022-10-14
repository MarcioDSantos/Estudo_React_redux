import './App.css'
import React from "react";

import Card from "./components/layout/Card";
import Aleatorio from "./components/basicos/aleatorio";
import Primeiro from './components/basicos/Primeiro.jsx';
import ComParametro from './components/basicos/ComParametro';
import Family from './components/basicos/Family';
import Familiemedlem from './components/basicos/Familiemedlem';
import ListaAlunos from './components/repeticao/ListaAlunos';
import TabelaProdutos from './components/repeticao/TabelaProdutos';
import ParOuImpar from './components/condicional/ParOuImpar';

export default () => (
    <div className="App">
        <h1>Fundamentos React </h1>
        <div className="Cards">
            <Card titulo="#8 - condicional" color="#90548">
                <ParOuImpar numero = {17}></ParOuImpar>
            </Card>

            <Card titulo="#7 - Desafio: Tabela de produtos" color="#10699">
                <TabelaProdutos></TabelaProdutos>
            </Card>

            <Card titulo="#6 - Repetição" color="#7699">
                <ListaAlunos></ListaAlunos>
            </Card>

            <Card titulo="#5 - Componentes com Filhos" color="#5509">
                <Family sobrenome="Borges">
                    <Familiemedlem nome="Antonio" />
                    <Familiemedlem nome="Maria" />
                    <Familiemedlem nome="José" />
                </Family>
            </Card>

            <Card titulo="#4 - Desafio Aleatório" color="#0909">
                <Aleatorio min={1} max={60} />
            </Card>

            <Card titulo="#2 - Com Parâmetro" color="#008080">
                <ComParametro
                    titulo="Situação do aluno"
                    aluno="Pedro"
                    nota={6.5}>
                </ComParametro>
            </Card>

            <Card titulo="#3 - Fragmento">

            </Card>

            <Card titulo="#1 - Primeiro" color="#008rf">
                <Primeiro></Primeiro>
            </Card>
        </div>
    </div>
);