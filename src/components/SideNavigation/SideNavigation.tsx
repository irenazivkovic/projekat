import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Box from '@mui/material/Box';
import { BiShoppingBag } from 'react-icons/bi';
import { IoIosStats } from 'react-icons/io';
import { FcAbout } from 'react-icons/fc';
import { Link } from 'react-router-dom';
import { IPages } from '../../interfaces/IPages';

interface ISideNavigationProps {
  menu: string,
  setMenu: (menu: string) => void
}

export const SideNavigation: React.FC<ISideNavigationProps> = ({
  menu,
  setMenu,
}) => {
  const drawerWidth = 200;
  const pages: IPages = { products: 'Products', statistics: 'Statistics', about: 'About' };
  const icons = { products: (<BiShoppingBag />), statistics: (<IoIosStats />), about: (<FcAbout />) };
  const isSelected = (menuItem: string) => menuItem === menu;

  return (

    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': { width: drawerWidth, boxSizing: 'border-box' },
        '& > div': {
          backgroundColor: 'rgba(235, 235, 201, 0.212)'
        }
      }}
    >
      <Toolbar />
      <Box sx={{ overflow: 'auto' }}>
        <Divider />
        <List>
          {Object.entries(pages).map(([pageId, pageName]) => (
            <ListItem
              key={pageId}
              selected={isSelected(pageId)}
              component={Link}
              to={`/${pageId}`}
              onClick={() => setMenu(pageId)}
            >
              <ListItemIcon color="black">
                {
                  {
                    products: icons.products,
                    statistics: icons.statistics,
                    about: icons.about,
                  }[pageId]
                }
              </ListItemIcon>
              <ListItemText primary={pageName} sx={{color: 'rgba(0, 0, 0, 0.733)'}}/>
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  );
};
