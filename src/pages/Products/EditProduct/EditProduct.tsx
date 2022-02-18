import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import {
  FormControl, InputLabel, MenuItem, Paper, Select, Stack,
} from '@mui/material';
import { useParams } from 'react-router';
import AdapterDateFns from '@mui/lab/AdapterLuxon';
import LocalizationProvider, { MuiPickersAdapter } from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import Button from '@mui/material/Button';
import { Link as RouterLink } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { IManufacturer } from '../../../interfaces/IManufacturer';
import { IProduct } from '../../../interfaces/IProduct';

export const EditProduct = () => {
  const { id } = useParams<{ id: string }>();

  const productsJSON = localStorage.getItem('productsData');
  const productsData = (productsJSON ? JSON.parse(productsJSON) : []) as IProduct[];

  const getProduct = () => productsData.find((product) => product.id === id);

  const saveProduct = () => {
    if (product.id) {
      const productIndex = productsData.findIndex((item) => product.id === item.id);
      const newList = [...productsData];
      newList[productIndex] = product;
      localStorage.setItem('productsData', JSON.stringify(newList));
    } else {
      localStorage.setItem('productsData', JSON.stringify([...productsData, { ...product, id: uuidv4() }]));
    }
  };

  const manufacturersJSON = localStorage.getItem('manufacturersData');
  const manufacturersData = (manufacturersJSON ? JSON.parse(manufacturersJSON) : []) as IManufacturer[];

  const [product, setProduct] = useState(getProduct() || {dateAdded: new Date(), manufacturer: manufacturersData[0]} as IProduct);


  const findManufacturer = (id: string) => manufacturersData.find((manufacturer) => manufacturer.id === id) || ({} as IManufacturer);

  return (
    <Paper variant="elevation" elevation={3} sx={{ m: 2, textAlign: 'center' }} square>
      <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 4, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
      >
        <div>
          <TextField
            id="name"
            variant="standard"
            label="Product Name"
            value={product.name}
            onChange={(e) => {
              setProduct({ ...product, name: e.target.value });
            }}
          />
          <FormControl sx={{ m: 4 }}>
            <InputLabel shrink htmlFor="select-manufacturer">
              Manufacturer
            </InputLabel>
            <Select
              variant="standard"
              sx={{ width: '25ch' }}
              labelId="manufacturer"
              id="manufacturer"
              label="Manufacturer"
              value={product.manufacturer ? product.manufacturer.id : ''}
              onChange={(e) => {
                console.log(e, e.target.value, findManufacturer(e.target.value));
                setProduct({ ...product, manufacturer: findManufacturer(e.target.value) });
              }}
              inputProps={{
                id: 'select-manufacturer',
              }}
            >
              {manufacturersData.map((manufacturer) => (<MenuItem key={manufacturer.id} value={manufacturer.id}>{manufacturer.name}</MenuItem>))}
            </Select>
          </FormControl>
        </div>
        <div>
          <TextField
            id="price"
            label="Price"
            type="number"
            variant="standard"
            value={product.price}
            onChange={(e) => {
              setProduct({ ...product, price: Number(e.target.value) });
            }}
          />
          <LocalizationProvider dateAdapter={AdapterDateFns as unknown as new (...args: any) => MuiPickersAdapter<unknown>}>
            <DatePicker
              label="Date added"
              value={product.dateAdded}
              onChange={(e) => {
                if (e) {
                  setProduct({ ...product, dateAdded: e });
                }
              }}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
        </div>
        <div>
          <TextField
            id="quantity"
            label="Quantity"
            type="number"
            variant="standard"
            value={product.quantity}
            onChange={(e) => {
              setProduct({ ...product, quantity: Number(e.target.value) });
            }}
          />
        </div>
      </Box>
      <Stack direction="row" spacing={2} justifyContent="flex-end" sx={{ p: 4 }}>
        <Button
          variant="contained"
          size="large"
          component={RouterLink}
          to="/products"
          onClick={() => saveProduct()}
          disabled={!(product.name && product.price && product.quantity && product.manufacturer.id)}
        >
          Save
        </Button>
        <Button
          size="large"
          color="secondary"
          component={RouterLink}
          to="/products"
        >
          Cancel
        </Button>
      </Stack>
    </Paper>
  );
};
