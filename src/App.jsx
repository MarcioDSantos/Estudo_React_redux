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
import UsuarioInfo from './components/condicional/UsuarioInfo';
import DiretaPai from './components/comunicacao/DiretaPai';
import IndiretaPai from './components/comunicacao/IndiretaPai';
import Imput from './components/formulario/Input';
import Contador from './components/contador/Contador';
import DisplayMegaSena from './components/megaSena/DisplayMegaSena';

export default () => (
    <div className="App">
        <h1>Fundamentos React </h1>
        <div className="Cards">

            <Card titulo="#13 - Mega Sena" color="#FFC107">
                <DisplayMegaSena/>
            </Card>

             <Card titulo="#12 - Contador" color="#FFC107">
                <Contador numeroInicial ={10}></Contador>
            </Card>
            
            <Card titulo="#11 - Componente Controlado" color="#E91E63">
                <Imput></Imput>
            </Card>

            <Card titulo="#10 - Comunicação Indireta" color="#548">
                <IndiretaPai></IndiretaPai>
            </Card>

            <Card titulo="#9 - Comunicação Direta" color="#0548">
                <DiretaPai></DiretaPai>
            </Card>

            <Card titulo="#8 - condicional" color="#8ED1FC">
                <ParOuImpar numero = {18}></ParOuImpar>
                <UsuarioInfo usuario={{ name: ''}} />
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