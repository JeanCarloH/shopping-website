import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Link, useOutletContext } from "react-router-dom";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { Box } from "@mui/system";
import { IconButton, Tooltip,Button } from "@mui/material";
import EnableColorOnDarkAppBar from "./EnableColorOnDarkAppBar";
import BasicAlerts from "./BasicAlerts";
import { createTheme,ThemeProvider } from '@mui/material/styles';
import { db2 } from "./firebase";
import { doc, onSnapshot, collection, query, where,addDoc,updateDoc,setDoc,deleteDoc,getDocs} from "firebase/firestore";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const temaNuevo = createTheme({
  palette: {
    primary: {
      main: '#1b5e20',
    },
    secondary: {
      main: '#b71c1c',
    },
  },
}
)


export default function ProductTable() {
  const { db,deleteData,verify,verificador } = useOutletContext();

  return (
    <>
      <EnableColorOnDarkAppBar />
      {verify &&
      <BasicAlerts
     verificador={verificador}
      />
      
      }
      <TableContainer sx={{ m: 3 }} component={Paper}>
        <Table sx={{ width:"98%" }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="right">Nombre</StyledTableCell>
              <StyledTableCell align="right">Descripción</StyledTableCell>
              <StyledTableCell align="right">Cantidad</StyledTableCell>
              <StyledTableCell align="right">Precio</StyledTableCell>
              <StyledTableCell align="right">Categoria</StyledTableCell>
              <StyledTableCell align="right">Imagen</StyledTableCell>
              <StyledTableCell align="right">Acciones</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            { db.length > 0 &&
            db.map((product) => (
                <StyledTableRow key={product.id}>
                  <StyledTableCell align="right">
                    {product.nombre}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {product.descripcion}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {product.cantidad}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {product.precio}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {product.categoria}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                  <img src={`${product.imagenData}`} 
                  alt={product.nombre}
                  height="280"
                  />
                  </StyledTableCell>
                  <StyledTableCell align="right">
                  <ThemeProvider theme={temaNuevo}>
                    <Link to={`/admin/editar/${product.id}`}>
                    <Button
                      variant="contained"
                      color="primary"
                      sx={{width:"100px"}}
                      
                    >
                      Editar
                    </Button>
                    </Link>
                    <Button variant="contained"
                    color="secondary"
                    onClick={() => deleteData(product.id)}
                    >
                    Eliminar
                       </Button>
                       </ThemeProvider>
                  </StyledTableCell>
                </StyledTableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
