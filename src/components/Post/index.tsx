import { AppTypes } from '@/types';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import GroupsIcon from '@mui/icons-material/Groups';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import QueryBuilderIcon from '@mui/icons-material/QueryBuilder';
import { Avatar, Box, Button, Chip, Divider, Stack, Tooltip, Typography } from '@mui/material';

const Post = ({ post }: { post: AppTypes.Post[] }) => {
     return (
          <Box display='flex' flexDirection='column' gap={2}>
               {post?.map((item, index) => {
                    const backgroundCate = item?.category === 'academic' ? '#EF9C66' : item?.category === 'volunteer' ? '#A67B5B' : '#2A629A'
                    return (
                         <Box key={index} width={{ xs: '90%', sm: '80%', md: '75%' }} bgcolor='white' marginLeft='25%' padding={2} borderRadius={2} boxShadow='0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)'>
                              <div className='flex gap-2 items-center my-3'>
                                   <Avatar alt="Remy Sharp" src="/images/avatar/avt.jpeg" sx={{ width: 30, height: 30 }} />
                                   <Typography >Faculty of IT</Typography>
                              </div>
                              <Box>
                                   <Box display='flex' justifyContent='space-between' alignItems='center'>
                                        <Typography variant='h5'>{item?.name}</Typography>
                                        <Chip label={item?.category} sx={{
                                             backgroundColor: backgroundCate,
                                             color: 'white',
                                             textTransform: 'capitalize',
                                             fontSize: '14px',
                                        }}
                                        />
                                   </Box>
                                   <Typography variant='body1'>{item?.desc}</Typography>
                                   <Divider sx={{ marginY: '15px' }} />
                                   <Box display='flex' flexDirection='column' gap={2}>
                                        <Stack direction='row' gap={1}>
                                             <Tooltip title='Point'>
                                                  <AddCircleIcon />
                                             </Tooltip>
                                             <Typography>{item?.point} points</Typography>
                                        </Stack>

                                        <Stack direction='row' gap={1}>
                                             <Tooltip title="Number Of Participant">
                                                  <GroupsIcon />
                                             </Tooltip>
                                             <Typography sx={{ textTransform: 'capitalize' }}>{item?.numberParticipant}</Typography>
                                        </Stack>
                                        <Stack direction='row' gap={1}>
                                             <Tooltip title='Location'>
                                                  <LocationOnIcon />
                                             </Tooltip>
                                             <Typography sx={{ textTransform: 'capitalize' }}>{item?.location}</Typography>
                                        </Stack>

                                        <Stack direction='row' gap={1}>
                                             <Tooltip title='Date'>
                                                  <CalendarMonthIcon />
                                             </Tooltip>
                                             <Typography>{item?.startDate} - {item?.endDate}</Typography>
                                        </Stack>
                                        <Stack direction='row' gap={1}>
                                             <Tooltip title='Time'>
                                                  <QueryBuilderIcon />
                                             </Tooltip>
                                             <Typography>{item?.startTime} - {item?.endTime}</Typography>
                                        </Stack>
                                   </Box>
                              </Box>
                              <Button variant="contained" color='success' sx={{ marginTop: '20px', display: 'flex', marginX: 'auto' }}>{item?.location === 'online' ? 'Take test' : 'Join Activity'}</Button>
                         </Box>
                    )
               })}
          </Box>
     )
}
export default Post