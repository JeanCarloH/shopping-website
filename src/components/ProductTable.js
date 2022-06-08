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
import { IconButton, Tooltip } from "@mui/material";

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

export default function ProductTable() {
  const { db } = useOutletContext();
  return (
    <>
      <Box textAlign="right" sx={{ flexGrow: 0 }}>
        <Tooltip title="Crear producto">
          <Link to="/admin/registrar">
            <IconButton sx={{ p: 0 }}>
              <AddCircleIcon />
            </IconButton>
          </Link>
        </Tooltip>
      </Box>
      <TableContainer sx={{ m: 3 }} component={Paper}>
        <Table sx={{ width: 1200 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="right">Nombre</StyledTableCell>
              <StyledTableCell align="right">Descripción</StyledTableCell>
              <StyledTableCell align="right">Cantidad</StyledTableCell>
              <StyledTableCell align="right">Precio</StyledTableCell>
              <StyledTableCell align="right">Categoria</StyledTableCell>
              <StyledTableCell align="right">Imagen</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {db.length > 0 &&
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
                    {product.imagen}
                  </StyledTableCell>
                </StyledTableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}