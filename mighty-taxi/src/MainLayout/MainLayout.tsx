import SideNav from '@/components/sidenav'
import Navbar from '@/components/sidenav/Navbar'
import LoginPage from '@/pages/Login/LoginPage'
import { RootState } from '@/redux/store'
import { Box } from '@mui/material'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'

type Props = {}

const MainLayout = (props: Props) => {
  const { dark } = useSelector((state: RootState) => state.darkmode)
  const bgColor = dark ? 'black' : 'white';
  const textColor = dark ? 'white' : 'black';

  const token = localStorage.getItem('token')

  return (
    <>
      {
        token ? <Box sx={{ display: 'flex', }}>
          <SideNav />
          <Box component="main" sx={{ flexGrow: 1, p: 0, }}>
            <Navbar />
            <Box component="main" sx={{ flexGrow: 1, p: 2, backgroundColor: bgColor, color: textColor }}>
              <Outlet />
            </Box>
          </Box>
        </Box> : <Navigate to="/login" />
      }

    </>

  )
}

export default MainLayout