"use client"
import { AppTypes } from '@/types'
import { Avatar, Box, LinearProgress, ListItemText, MenuItem, MenuList, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import { usePathname, useRouter } from 'next/navigation'
import React from 'react'
export type NavbarProps = {
     title: string
     url: string
}
const roleStudent: AppTypes.Role = 'student'
const NavbarItem: NavbarProps[] = [
     {
          title: 'Home',
          url: '/home',
     },
     {
          title: 'Profile',
          url: '/profile',
     },

     ...(roleStudent === 'student' ? [{
          title: 'Training Point Details',
          url: '/training-point-details',
     }] : [{
          title: 'Create post',
          url: '/create-post',
     }, {
          title: 'Expired Post',
          url: '/expired-post',
     }, {
          title: 'Update Discipline Point',
          url: '/update-discipline-point',
     }]),
     {
          title: 'Change Password',
          url: '/change-password',
     },
     {
          title: 'Sign Out',
          url: '/sign-out',
     }

]
const Navbar = () => {
     const router = useRouter()
     const pathName = usePathname().split('/')[1]
     const handleRedirect = (url: string) => {
          router.push(url)
     }

     return (
          <div className='border w-[20%] bg-white shadow-xl rounded-md p-3 fixed'>
               <Box display='flex' gap={2} alignItems='center' marginBottom={3}>
                    <Avatar alt="Remy Sharp" src="/images/avatar/avt.jpeg" sx={{ width: 60, height: 60 }} />
                    <div>
                         <Typography variant='h6'>Remy Sharp</Typography>
                         <Typography >student@gmail.com</Typography>
                    </div>
               </Box>

               <MenuList >
                    {NavbarItem.map((item, index) =>
                    (
                         <MenuItem key={index} onClick={() => handleRedirect(item.url)} sx={{ marginBottom: '5px' }} selected={pathName === item.title.toLowerCase().replace(/\s/g, '-')}>
                              <ListItemText primary={item.title} />
                         </MenuItem>
                    ))}
               </MenuList>

               {roleStudent === 'student' && (
                    <Box marginTop={5} >
                         <TableContainer>
                              <Table>
                                   <TableBody>
                                        <TableRow>
                                             <TableCell component="th" scope="row">
                                                  <Typography variant='body1'>Academic</Typography>
                                                  <LinearProgress variant="determinate" value={(10 / 20) * 100} sx={{ '.MuiLinearProgress-bar1Determinate': { backgroundColor: "#EF9C66", height: '10px'} }} />
                                             </TableCell>
                                        </TableRow>
                                        <TableRow>
                                             <TableCell component="th" scope="row">
                                                  <Typography variant='body1'>Volunteer</Typography>
                                                  <LinearProgress variant="determinate" value={(10 / 20) * 100} sx={{ '.MuiLinearProgress-bar1Determinate': { backgroundColor: "#A67B5B" } }} />
                                             </TableCell>
                                        </TableRow>
                                        <TableRow>
                                             <TableCell component="th" scope="row">
                                                  <Typography variant='body1'>Mental Physical</Typography>
                                                  <LinearProgress variant="determinate" value={(5 / 20) * 100} sx={{ '.MuiLinearProgress-bar1Determinate': { backgroundColor: "#2A629A" } }} />
                                             </TableCell>
                                        </TableRow>
                                   </TableBody>
                              </Table>
                         </TableContainer>
                    </Box>
               )}
          </div>
     )
}

export default Navbar