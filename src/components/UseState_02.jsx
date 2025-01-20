import { useState } from 'react';

export default () => {
    const [valor, setValor] = useState(100);

    function diminuir() {
        setValor(v => v - 1);
    }

    function aumentar() {
        setValor(v => v + 1);
    }

    function diminuir_valor(a){
        setValor (v => v - a)
    }

    return (
        <>
            <p>Valor: {valor}</p>
            <button onClick={() => diminuir_valor(10)}>Diminuir</button>
            <button onClick={diminuir}>Diminuir uma unidade</button>
            <button onClick={aumentar}>Aumentar uma unidade</button>
        </>
    );
};
