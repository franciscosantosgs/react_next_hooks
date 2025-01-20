import React from "react";
import { useState } from "react";
import UseState_05aux from "./UseState_05aux";

export default () => {

    const [valor, setvalor] = useState (0)

    function atualizarValor(){
        setvalor(1000)
    }

    return( 
        <>
            <h3>Exercicio 03</h3>
            <h3>Valor: <strong>{valor}</strong></h3>
            <hr />
            <UseState_05aux funcao={atualizarValor}/>
        </>
    )
}