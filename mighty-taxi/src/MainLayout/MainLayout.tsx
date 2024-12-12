import SideNav from '@/components/sidenav'
import Navbar from '@/components/sidenav/Navbar'
import { ClassNames } from '@emotion/react'
import { Box } from '@mui/material'
import { Outlet } from 'react-router-dom'

type Props = {}

const MainLayout = (props: Props) => {
  return (
    <><Box sx={{ display: 'flex' }}>
      <SideNav />
      <Box component="main" sx={{ flexGrow: 1, p: 0 }}>
        <Navbar />
        <Box component="main" sx={{ flexGrow: 1, backgroundColor: '#f7f9ff', }}>
          <Outlet />
        </Box>
      </Box>
    </Box></>
  )
}

export default MainLayout