import { useState } from 'react';

export default () => {
    const [valor, setValor] = useState(100);

    function diminuir() {
        setValor(v => v - 1);
    }

    function aumentar() {
        setValor(v => v + 1);
    }

    return (
        <>
            <p>Valor: {valor}</p>
            <button onClick={aumentar}>Aumentar uma unidade</button>
            <button onClick={diminuir}>Diminuir uma unidade</button>
        </>
    );
};
