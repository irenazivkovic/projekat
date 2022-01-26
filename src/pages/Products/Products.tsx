import React, { useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { DateTime } from 'luxon';
import { withStyles } from '@material-ui/core/styles';
import { FiEdit2 } from 'react-icons/fi';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { Button, Stack } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { IProduct } from '../../interfaces/IProduct';

const CustomTableHead = withStyles((theme) => ({
  root: {
    backgroundColor: '#1976d2',
  },
}))(TableHead);

const CustomTableHeaderCell = withStyles((theme) => ({
  root: {
    color: 'white',
  },
}))(TableCell);

export const Products = () => {
  const productsJSON = localStorage.getItem('productsData');
  const productsData = (productsJSON ? JSON.parse(productsJSON) : []) as IProduct[];

  const [products, setProducts] = useState(productsData);

  const deleteProduct = (productId: string) => {
    const newList = productsData.filter((item) => {
      console.log(item.id, productId);
      return item.id !== productId;
    });
    localStorage.setItem('productsData', JSON.stringify(newList));
    setProducts(newList);
  };

  const displayDate = (jsDate: Date) => {
    const parsedDate = new Date(jsDate);
    const date = DateTime.fromJSDate(parsedDate);
    return date.toFormat('dd.MM.yyyy');
  };

  return (
    <>
      <Stack direction="row" spacing={2} justifyContent="flex-end" sx={{ p: 3 }}>
        <Button
          variant="contained"
          size="large"
          component={RouterLink}
          to="/products/new/"
        >
          Create new Product
        </Button>
      </Stack>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <CustomTableHead>
            <TableRow>
              <CustomTableHeaderCell>Name</CustomTableHeaderCell>
              <CustomTableHeaderCell>Manufacturer</CustomTableHeaderCell>
              <CustomTableHeaderCell>Price</CustomTableHeaderCell>
              <CustomTableHeaderCell>Expiry date</CustomTableHeaderCell>
              <CustomTableHeaderCell />
            </TableRow>
          </CustomTableHead>
          <TableBody>
            {products.map((row) => (
              <TableRow
                key={row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell>{row.manufacturer.name}</TableCell>
                <TableCell>{`€${row.price}`}</TableCell>
                <TableCell>{displayDate(row.expiryDate)}</TableCell>
                <TableCell>
                  <Button component={RouterLink} to={`products/edit/${row.id}`}>
                    <FiEdit2 />
                  </Button>
                  <Button onClick={() => deleteProduct(row.id)}>
                    <RiDeleteBin6Line />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};
