import SideNav from '@/components/sidenav'
import { Box } from '@mui/material'
import { Outlet } from 'react-router-dom'

type Props = {}

const MainLayout = (props: Props) => {
  return (
    <><Box sx={{ display: 'flex' }}>
      <SideNav />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Outlet />
      </Box>
    </Box></>
  )
}

export default MainLayout