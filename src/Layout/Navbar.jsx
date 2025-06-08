// src/Layout/Navbar.jsx
import React, { useState } from 'react';
import { images } from "../Utility/Images";
import {
  AppBar,
  Toolbar,
  Button,
  Box,
  Container,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, useLocation } from 'react-router-dom';

const pages = [
  { name: 'ABOUT', link: '/' },
  { name: 'PROJECT', link: '/Project' },
  { name: 'SERVICES', link: '/Services' },
  { name: 'BLOG', link: '/Blog' },
  // { name: 'CAREERS', link: '/Carrer' },
  { name: 'CONTACT', link: '/contact' },
];

function NavBar() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [drawerOpen, setDrawerOpen] = useState(false);
  const location = useLocation();

  const handleDrawerToggle = () => setDrawerOpen(!drawerOpen);

  const isActive = (path) => location.pathname === path;

  return (
    <>
      <AppBar position="sticky" sx={{ backgroundColor: '#FFFFFF', padding: 1, boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }}>
        <Container maxWidth="xl">
          <Toolbar
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              color: 'black',
            }}
          >
            {/* Logo */}
            <Box>
              <Button component={Link} to="/" sx={{ padding: 0 }}>
                <img src={images.Logo} alt="Logo" width={150} height={100} />
              </Button>
            </Box>

            {/* Desktop Menu */}
            {!isMobile ? (
              <Box sx={{ display: 'flex', gap: 3, alignItems: 'center' }}>
                {pages.map((page) => (
                  <Button
                    key={page.name}
                    component={Link}
                    to={page.link}
                    sx={{
                      fontSize: '13px',
                      fontWeight: 700,
                      fontFamily: 'Poppins',
                      color: isActive(page.link) ? 'black' : 'gray',
                      borderBottom: isActive(page.link) ? '2px solid black' : '2px solid transparent',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        color: 'black',
                        borderBottom: '2px solid black',
                        backgroundColor: 'transparent',
                      },
                    }}
                  >
                    {page.name}
                  </Button>
                ))}
              </Box>
            ) : (
              // Mobile Menu Icon
              <IconButton edge="end" onClick={handleDrawerToggle}>
                <MenuIcon sx={{ color: 'black' }} />
              </IconButton>
            )}
          </Toolbar>
        </Container>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer anchor="right" open={drawerOpen} onClose={handleDrawerToggle}>
        <Box sx={{ width: 250 }} onClick={handleDrawerToggle}>
          <List>
            {pages.map((page) => (
              <ListItem key={page.name} disablePadding>
                <ListItemButton
                  component={Link}
                  to={page.link}
                  selected={isActive(page.link)}
                  sx={{
                    '&.Mui-selected': {
                      backgroundColor: '#f0f0f0',
                    },
                    '&:hover': {
                      backgroundColor: '#e0e0e0',
                    },
                  }}
                >
                  <ListItemText
                    primary={page.name}
                    primaryTypographyProps={{
                      fontFamily: 'Poppins',
                      fontWeight: 600,
                      fontSize: '14px',
                      color: isActive(page.link) ? 'black' : 'gray',
                    }}
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
}

export default NavBar;
