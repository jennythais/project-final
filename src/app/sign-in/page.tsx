import { Box, Button, FormControl, FormHelperText, Input, InputLabel, Typography } from '@mui/material'
import React from 'react'

const SignInPage = () => {
     return (
          <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border rounded-xl p-5 w-[30%] bg-gradient-to-b from-[#34c65d] to-[#ffffff] shadow-xl'>
               <Typography sx={{ textAlign: 'center', marginBottom: '20px' }} variant='h4'>Sign In</Typography>
               <Box sx={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
                    <FormControl fullWidth >
                         <InputLabel htmlFor="email" >Email</InputLabel>
                         <Input id="email" />
                    </FormControl>
                    <FormControl>
                         <InputLabel htmlFor="password">Password</InputLabel>
                         <Input id="password" />
                    </FormControl>
                    <Button variant='contained' sx={{ backgroundColor: '#34c65d', color: '#ffffff' }}>Sign In</Button>
               </Box>
          </div>
     )
}

export default SignInPage