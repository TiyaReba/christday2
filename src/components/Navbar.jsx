import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'

const Navbar = () => {
  return (
    <div>
        <Box >
            <AppBar >
                <Toolbar>
                    <Typography variant='h6' sx={{ flexGrow: 1 }} align='left'>App</Typography>
                    <Button color='inherit' >Login</Button>
                </Toolbar>
            </AppBar>
        </Box>
    </div>
    
  )
}

export default Navbar