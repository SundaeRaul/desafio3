import React from 'react';
import { dadosReceitas } from '../../JSON/receitas';

export const Receitas = () => {
    return (
        <>
            <div className="receitas-container">
                {dadosReceitas.map((data, key) => {
                    return (
                        <span key={key}>
                            {data.fonte +
                                " , " +
                                data.valor +
                                " ," +
                                data.dia}
                        </span>
                    );
                })}
            </div>
        </>
    );
};