import SideNav from '@/components/sidenav'
import Navbar from '@/components/sidenav/Navbar'
import { RootState } from '@/redux/store'
import { Box } from '@mui/material'
import { useSelector } from 'react-redux'
import { Outlet } from 'react-router-dom'

type Props = {}

const MainLayout = (props: Props) => {
  const { dark } = useSelector((state: RootState) => state.darkmode)
  const bgColor = dark ? 'black' : 'white';
  const textColor = dark ? 'white' : 'black';

  return (
    <>
      <Box sx={{ display: 'flex', }}>
        <SideNav />
        <Box component="main" sx={{ flexGrow: 1, p: 0, }}>
          <Navbar />
          <Box component="main" sx={{ flexGrow: 1, p: 2, backgroundColor: bgColor, color: textColor }}>
            <Outlet />
          </Box>
        </Box>
      </Box>
    </>

  )
}

export default MainLayout