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
  Divider,
  Typography,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, useLocation } from 'react-router-dom';

const pages = [
  { name: 'ABOUT', link: '/' },
  { name: 'PROJECT', link: '/Project' },
  // { name: 'SERVICES', link: '/Services' },
  { name: 'BLOG', link: '/Blog' },
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
      <AppBar position="sticky" elevation={3} sx={{ backgroundColor: '#fff', py: 0 }}>
        <Container maxWidth="xl">
          <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
            {/* Logo */}
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Button component={Link} to="/" sx={{ padding: 0 }}>
                <Box
                  component="img"
                  src={images.Logo}
                  alt="Logo"
                  sx={{
                    width: { xs: 120, sm: 150 },
                    height: 'auto',
                  }}
                />
              </Button>
            </Box>

            {/* Desktop Navigation */}
            {!isMobile ? (
              <Box sx={{ display: 'flex', gap: 3, alignItems: 'center' }}>
                {pages.map((page) => (
                  <Button
                    key={page.name}
                    component={Link}
                    to={page.link}
                    disableRipple
                    sx={{
                      fontSize: '14px',
                      fontWeight: 600,
                      fontFamily: 'Poppins',
                      color: isActive(page.link) ? '#000' : '#666',
                      borderBottom: isActive(page.link)
                        ? '2px solid #000'
                        : '2px solid transparent',
                      borderRadius: 0,
                      paddingBottom: '6px',
                      transition: 'all 0.3s ease-in-out',
                      '&:hover': {
                        color: '#000',
                        borderBottom: '2px solid #000',
                        backgroundColor: 'transparent',
                      },
                    }}
                  >
                    {page.name}
                  </Button>
                ))}
              </Box>
            ) : (
              <IconButton edge="end" onClick={handleDrawerToggle}>
                <MenuIcon sx={{ color: 'black', fontSize: '28px' }} />
              </IconButton>
            )}
          </Toolbar>
        </Container>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer anchor="right" open={drawerOpen} onClose={handleDrawerToggle}>
        <Box
          sx={{
            width: 260,
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
            p: 2,
            bgcolor: '#fff',
          }}
          role="presentation"
          onClick={handleDrawerToggle}
        >
          <Typography
            variant="h6"
            sx={{
              fontFamily: 'Poppins',
              fontWeight: 700,
              mb: 2,
              color: '#000',
              textAlign: 'center',
            }}
          >
            MENU
          </Typography>
          <Divider />
          <List>
            {pages.map((page) => (
              <ListItem key={page.name} disablePadding>
                <ListItemButton
                  component={Link}
                  to={page.link}
                  selected={isActive(page.link)}
                  sx={{
                    px: 2,
                    '&.Mui-selected': {
                      backgroundColor: '#f5f5f5',
                    },
                    '&:hover': {
                      backgroundColor: '#eee',
                    },
                  }}
                >
                  <ListItemText
                    primary={page.name}
                    primaryTypographyProps={{
                      fontFamily: 'Poppins',
                      fontWeight: 600,
                      fontSize: '14px',
                      color: isActive(page.link) ? '#000' : '#555',
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
