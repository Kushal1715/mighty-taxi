import React from 'react'
import Paper from '@mui/material/Paper';
import { experimentalStyled as styled } from '@mui/material/styles';
import { FaArrowLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';


type Props = {
  route: string
}
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

const BackButton = ({ route }: Props) => {
  const navigate = useNavigate();
  return (
    <Item sx={{ display: 'flex', alignItems: 'center', gap: 0.5, backgroundColor: 'black', color: 'white', borderRadius: 3, p: 2, py: 1.5, cursor: 'pointer' }} onClick={() => navigate(route)}>
      <FaArrowLeft className='border-2 rounded-full bg-white text-black p-[1px]' size={18} />
      <h1>Back</h1>
    </Item>
  )
}

export default BackButton