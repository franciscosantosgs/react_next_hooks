import React from 'react';
import { useState } from 'react';

import '../styles/UseState_04.css'
import UseState_04aux from './UseState_04aux';

export default () => {
    return( 
        <>
            <h4>Exercício 02 - Varios elementos num so</h4>
            <div className='layout'>
                {/*componentes a serem repetidos aqui*/}
                
                <UseState_04aux unidades={1}/>
                <UseState_04aux unidades={5}/>
                <UseState_04aux unidades={10}/>
                
            </div>
        </>
    )
}