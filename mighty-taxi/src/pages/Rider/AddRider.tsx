import * as React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { FaArrowLeft } from 'react-icons/fa';
import BackButton from '@/components/BackButton';
import { Divider } from '@mui/material';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
}));

export default function AddRider() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={{ xs: 2, md: 3 }} justifyContent='flex-end' marginBottom='16px'>
        <Grid item xs={1.1}  >
          <BackButton route="/rider-list" />
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs={3}>
          <Item sx={{ borderRadius: 3, p: 0 }}>
            <Box sx={{ p: 2 }}>
              <h1 className='text-left text-black font-bold text-xl'>Add Rider</h1>
            </Box>
            <Box sx={{ border: 1, borderColor: '#bab3a8' }} />
            <Box sx={{ p: 2, placeItems: 'center' }}>
              <img src="/profile.jpg" className='w-24 h-24 border-1 rounded-full' />
            </Box>

          </Item>
        </Grid>
        <Grid item xs={9}>
          <Item sx={{ borderRadius: 3 }}>xs=4</Item>
        </Grid>

      </Grid>
    </Box >
  );
}
