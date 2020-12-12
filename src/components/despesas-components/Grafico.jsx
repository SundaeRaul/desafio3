import React from 'react';

import './Grafico.css';

import { Doughnut } from 'react-chartjs-2';
function Grafico({despesas}) {

    const categorias = [];

    despesas.map(cat =>{
        return(
            categorias.push(cat.categoria)
        )
    })

    const data = {
        // labels: ['Energia', 'Educação', 'Internet', 'Outros'],
        labels: categorias,
        datasets: [
            {
                label: 'Sales for 2020 (M)',
                data: [1, 1, 1, 1],
                backgroundColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 159, 64, 1)',
                    'rgba(153, 102, 255, 1)'
                ],
            },
            
        ]
    }

    const options = {
        title:{
            display: false
        },
        legend:{
            position: 'left',
            align: 'left',
            fullWidth: false
        }
    }



  return(
      <Doughnut data={data} options={options} />
  );
}

export default Grafico;