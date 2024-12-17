import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { FaAddressCard } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import { text } from 'stream/consumers';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
}));

export default function DashHome() {
  const { dark } = useSelector((state: RootState) => state.darkmode)
  const bgColor = dark ? 'black' : 'white';
  const textColor = dark ? 'white' : 'black';
  return (
    <Box sx={{ flexGrow: 1, p: 3, }}>
      <Grid container spacing={4}>
        <Grid item xs={3}>
          <Item sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', p: 2, backgroundColor: bgColor, color: textColor }}>
            <FaAddressCard size={50} />
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'end', color: textColor }}>
              <h1 className={`font-bold text-xl`}>1835</h1>
              <p className='text-[16px] text-gray-500'>Total Drivers</p>
            </Box>
          </Item>
        </Grid>
        <Grid item xs={3}>
          <Item sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', p: 2, backgroundColor: bgColor, color: textColor }}>
            <FaAddressCard size={50} />
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'end', color: textColor }}>
              <h1 className={`font-bold text-xl`}>1835</h1>
              <p className='text-[16px] text-gray-500'>Total Drivers</p>
            </Box>
          </Item>
        </Grid>
        <Grid item xs={3}>
          <Item sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', p: 2, backgroundColor: bgColor, color: textColor }}>
            <FaAddressCard size={50} />
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'end', color: textColor }}>
              <h1 className={`font-bold text-xl`}>1835</h1>
              <p className='text-[16px] text-gray-500'>Total Drivers</p>
            </Box>
          </Item>
        </Grid>
        <Grid item xs={3}>
          <Item sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', p: 2, backgroundColor: bgColor, color: textColor }}>
            <FaAddressCard size={50} />
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'end', color: textColor }}>
              <h1 className={`font-bold text-xl`}>1835</h1>
              <p className='text-[16px] text-gray-500'>Total Drivers</p>
            </Box>
          </Item>
        </Grid>
        <Grid item xs={3}>
          <Item sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', p: 2, backgroundColor: bgColor, color: textColor }}>
            <FaAddressCard size={50} />
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'end', color: textColor }}>
              <h1 className={`font-bold text-xl`}>1835</h1>
              <p className='text-[16px] text-gray-500'>Total Drivers</p>
            </Box>
          </Item>
        </Grid>
        <Grid item xs={3}>
          <Item sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', p: 2, backgroundColor: bgColor, color: textColor }}>
            <FaAddressCard size={50} />
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'end', color: textColor }}>
              <h1 className={`font-bold text-xl`}>1835</h1>
              <p className='text-[16px] text-gray-500'>Total Drivers</p>
            </Box>
          </Item>
        </Grid>
        <Grid item xs={3}>
          <Item sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', p: 2, backgroundColor: bgColor, color: textColor }}>
            <FaAddressCard size={50} />
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'end', color: textColor }}>
              <h1 className={`font-bold text-xl`}>1835</h1>
              <p className='text-[16px] text-gray-500'>Total Drivers</p>
            </Box>
          </Item>
        </Grid>
        <Grid item xs={3}>
          <Item sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', p: 2, backgroundColor: bgColor, color: textColor }}>
            <FaAddressCard size={50} />
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'end', color: textColor }}>
              <h1 className={`font-bold text-xl`}>1835</h1>
              <p className='text-[16px] text-gray-500'>Total Drivers</p>
            </Box>
          </Item>
        </Grid>



      </Grid>
    </Box>
  );
}
