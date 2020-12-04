import React from 'react';
import './table.css';
import data from '../../JSON/Pagar.json'

// import { DataGrid } from '@material-ui/data-grid';
// import { DeseTable} from '@material-ui/dense-table';

function TabelaPagar(){
    const formato={
        minimumFractionDigits: 2,
        style: "currency",
        currency: "BRL"
    };
    
    return(
        <table className="tabelaPagar">
            {data.Pagar.map((dados) =>{
                return (
                    <tr key={dados.id} className="TrTabelaPagar">
                            <td>{dados.descrição}</td>
                            <td>{dados.valor.toLocaleString("pt-BR", formato)}</td>
                    </tr>
                );
            })}
        </table>

    );
}

export default TabelaPagar;












//dense table
// import { makeStyles } from '@material-ui/core/styles';
// import Table from '@material-ui/core/Table';
// import TableBody from '@material-ui/core/TableBody';
// import TableCell from '@material-ui/core/TableCell';
// import TableContainer from '@material-ui/core/TableContainer';
// import TableHead from '@material-ui/core/TableHead';
// import TableRow from '@material-ui/core/TableRow';
// import Paper from '@material-ui/core/Paper';

// const useStyles = makeStyles({
//     table: {
//       minWidth: 650,
//     },
//   });
  
//   function createData(name, value) {
//     return { name, value };
//   }
  
//   const rows = [
//     createData('Frozen yoghurt', 159),
//     createData('Ice cream sandwich', 237),
//     createData('Eclair', 262),
//     createData('Cupcake', 305),
//     createData('Gingerbread', 356),
//   ];
  
//   export default function DenseTable() {
//     const classes = useStyles();
  
//     return (
//       <TableContainer component={Paper}>
//         <Table className={classes.table} size="small" aria-label="table pagar">
//           <TableHead>
//             <TableRow>
//               <TableCell>Titulo</TableCell>
//               <TableCell align="right">Valor</TableCell>
              
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {rows.map((row) => (
//               <TableRow key={row.name}>
//                 <TableCell component="th" scope="row">
//                   {row.name}
//                 </TableCell>
//                 <TableCell align="right">{row.value}</TableCell>
                
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </TableContainer>
//     );
//   }


















//grid table

// const columns = [
//     { 
//         field: 'titulo',
//         headerName: false , 
//         width: 130,
//         sortable: true,


//     },

//     {
//         field: 'valor',
//         headerName: false ,
//         type: 'number',
//         width: 130,
//         sortable: true,

//     },
    
//     ];

//     const rows = [
//     { id: 1, titulo: 'Netflix', valor: 'R$ 27,90' },
//     { id: 2, titulo: 'Prime', valor: 'R$ 9,90' },
//     { id: 3, titulo: 'Faculdade', valor: 'R$ 350,00' },
//     { id: 4, titulo: 'Transporte', valor: 'R$ 250,00' },
    
//     ];
//     //definir css 
//     export default function DataTable() {
//     return (
//         <div className='TabelaEstilo'>
//             <DataGrid rows={rows} columns={columns} pageSize={5} />
//         </div>
//     );
//     }