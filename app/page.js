"use client";
import { Box, Button, Typography} from '@mui/material';
import Link from 'next/link';
import './globals.css'

export default function Home() {
  return (
    <Box sx={{
      display: 'flex',
      flexDirection:'column',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      backgroundImage: 'url(/home.jpg)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      position: 'relative',
      zIndex:0,
    }}>
    
    <Typography variant="h2"  
      sx={{
      position: 'relative',
      zIndex: 2,
      color: 'black',
      fontWeight: 'bold',
      textAlign: 'center',
  }}> The Pantry Tracker
  </Typography>
  <Typography variant="h5"  
      sx={{
      position: 'relative',
      zIndex: 2,
      color: 'black',
      textAlign: 'center',
      marginBottom:4,
  }}> Effortless Inventory Management: Simplify, Track, Enjoy!
  </Typography>
  <Link href="/main" passHref>
  <Button
        variant="contained"
        sx={{
          position: 'relative',
          zIndex: 2,
          textAlign:'center',
          backgroundColor: 'green',
          '&:hover': {
            backgroundColor: 'darkgreen',
          },
        }}
      >
        Get Started
      </Button>
      </Link>
    <Box
      sx={{
        position: 'absolute',
        width: '100%',
        height: '100%',
        backgroundSize: 'cover',
        backgroundColor: 'rgba(255, 255, 255, 0.5)', // White color with 50% opacity
        zindex:'1',
      }}
    >
  </Box>
  </Box>
  );
}
