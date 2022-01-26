import React, { useEffect, useState } from 'react';
import {
  BrowserRouter as Router, Switch, Route, Link as RouterLink, Redirect,
} from 'react-router-dom';
import './App.css';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import AppBar from '@mui/material/AppBar';
import { Link } from '@mui/material';
import { SideNavigation } from '../../components/SideNavigation/SideNavigation';
import { About } from '../../pages/About/About';
import { Products } from '../Products/Products';
import { prepData } from './data/prepData';
import { EditProduct } from '../Products/EditProduct/EditProduct';
import { Statistics } from '../Statistics/Statistics';

function App() {
  const [menu, setMenu] = useState('products');

  useEffect(() => {
    const productsJSON = localStorage.getItem('productsData');
    if (!productsJSON) {
      prepData();
    }
  });

  return (
    <Router>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
          <Toolbar>
            <Typography variant="h6" noWrap component="div">
              <Link
                to="/products"
                href="#"
                color="inherit"
                underline="none"
                component={RouterLink}
                onClick={() => setMenu('products')}
              >
                Pharmacy shop
              </Link>
            </Typography>
          </Toolbar>
        </AppBar>
        <SideNavigation menu={menu} setMenu={setMenu} />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}
          data-testid={'App:Container'}
        >
          <Toolbar />
          <Switch>
            <Route exact path="/products" component={Products} />
            <Route exact path="/products/edit/:id" component={EditProduct} />
            <Route exact path="/products/new" component={EditProduct} />
            <Route path="/statistics" component={Statistics} />
            <Route path="/about" component={About} />
            <Route render={() => <Redirect to={{ pathname: '/products' }} />} />
          </Switch>
        </Box>
      </Box>
    </Router>
  );
}

export default App;
