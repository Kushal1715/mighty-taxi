import SideNav from '@/components/sidenav'
import Navbar from '@/components/sidenav/Navbar'
import { RootState } from '@/redux/store'
import { Box } from '@mui/material'
import { useSelector } from 'react-redux'
import { Outlet } from 'react-router-dom'

type Props = {}

const MainLayout = (props: Props) => {
  const { dark } = useSelector((state: RootState) => state.darkmode)
  console.log(dark)

  return (
    <>
      <div className={`${dark ? 'bg-black' : 'bg-white'}`}>
        <Box sx={{ display: 'flex', }}>
          <SideNav />
          <Box component="main" sx={{ flexGrow: 1, p: 0, }}>
            <Navbar />
            <Box component="main" sx={{ flexGrow: 1, backgroundColor: '#f7f9ff', }}>
              <Outlet />
            </Box>
          </Box>
        </Box>
      </div >
    </>

  )
}

export default MainLayout