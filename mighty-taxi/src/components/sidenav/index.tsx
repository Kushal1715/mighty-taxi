import * as React from 'react';
import { styled, useTheme, Theme, CSSObject } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import { Collapse } from '@mui/material';
import { FaAngleDown, FaAngleRight, FaCar, FaCarSide, FaGift, FaGlobe, FaHome, FaIdCard, FaList, FaPlus, FaUser } from 'react-icons/fa';
import { MdAddBox } from 'react-icons/md';
import { NavItem } from '@/interface/data';
import { IoIosDocument } from 'react-icons/io';

const drawerWidth = 240;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  variants: [
    {
      props: ({ open }) => open,
      style: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen,
        }),
      },
    },
  ],
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(({ theme }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: 'nowrap',
  boxSizing: 'border-box',
  variants: [
    {
      props: ({ open }) => open,
      style: {
        ...openedMixin(theme),
        '& .MuiDrawer-paper': openedMixin(theme),
      },
    },
    {
      props: ({ open }) => !open,
      style: {
        ...closedMixin(theme),
        '& .MuiDrawer-paper': closedMixin(theme),
      },
    },
  ],
}));

export default function SideNav() {
  const theme = useTheme();
  const [open, setOpen] = React.useState<boolean>(true);
  const [openDrawer, setOpenDrawer] = React.useState<any>(null);
  const [openMenu, setOpenMenu] = React.useState<boolean>(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const toggleDrawerMenu = (menu: any) => {
    setOpenDrawer(menu)
    setOpenMenu(!openMenu)
  };



  const navitems: NavItem[] = [
    {
      icon: <FaPlus />,
      item: "Book Now"
    },
    {
      icon: <FaHome />,
      item: "Dashboard"
    },
    {
      icon: <FaUser />,
      item: "Rider",
      itemChildren: [
        {
          childrenIcon: <FaList />,
          childrenItem: "Rider List"
        },
        {
          childrenIcon: <MdAddBox />,
          childrenItem: "Add Rider"
        }
      ]
    },
    {
      icon: <FaGlobe />,
      item: "Region",
      itemChildren: [
        {
          childrenIcon: <FaList />,
          childrenItem: "Region List"
        },
        {
          childrenIcon: <MdAddBox />,
          childrenItem: "Add Region"
        }
      ]
    },
    {
      icon: <FaCar />,
      item: "Service",
      itemChildren: [
        {
          childrenIcon: <FaList />,
          childrenItem: "Service List"
        },
        {
          childrenIcon: <MdAddBox />,
          childrenItem: "Add Service"
        }
      ]
    },
    {
      icon: <FaIdCard />,
      item: "Driver",
      itemChildren: [
        {
          childrenIcon: <FaList />,
          childrenItem: "Driver List"
        },
        {
          childrenIcon: <FaList />,
          childrenItem: "Pending Driver"
        },
        {
          childrenIcon: <MdAddBox />,
          childrenItem: "Add Driver"
        },
        {
          childrenIcon: <MdAddBox />,
          childrenItem: "Manage Driver Document"
        }
      ]
    },
    {
      icon: <IoIosDocument />,
      item: "Document",
      itemChildren: [
        {
          childrenIcon: <FaList />,
          childrenItem: "Document List"
        },

        {
          childrenIcon: <MdAddBox />,
          childrenItem: "Add Document"
        },

      ]
    },
    {
      icon: <FaGift />,
      item: "Cupon",
      itemChildren: [
        {
          childrenIcon: <FaList />,
          childrenItem: "Cupon List"
        },

        {
          childrenIcon: <MdAddBox />,
          childrenItem: "Add Cupon"
        },

      ]
    },
    {
      icon: <FaCarSide />,
      item: "Ride Request",
      itemChildren: [
        {
          childrenIcon: <FaList />,
          childrenItem: "All List"
        },
        {
          childrenIcon: <FaList />,
          childrenItem: "New Ride List"
        },
        {
          childrenIcon: <FaList />,
          childrenItem: "Completed List"
        },
        {
          childrenIcon: <FaList />,
          childrenItem: "Cancelled List"
        },
        {
          childrenIcon: <FaList />,
          childrenItem: "Pending List"
        },
      ]
    },
    {
      icon: <FaCarSide />,
      item: "Complaint",
      itemChildren: [
        {
          childrenIcon: <FaList />,
          childrenItem: "Resolved List"
        },
        {
          childrenIcon: <FaList />,
          childrenItem: "Pending List"
        },
        {
          childrenIcon: <FaList />,
          childrenItem: "Investigation List"
        },

      ]
    },
    {
      icon: <FaCarSide />,
      item: "Surge Price",

    },
    {
      icon: <FaCarSide />,
      item: "Withdraw Request",
      itemChildren: [
        {
          childrenIcon: <FaList />,
          childrenItem: "All"
        },
        {
          childrenIcon: <FaList />,
          childrenItem: "Pending List"
        },
        {
          childrenIcon: <FaList />,
          childrenItem: "Approved List"
        },
        {
          childrenIcon: <FaList />,
          childrenItem: "Decline List"
        },

      ]
    },
    {
      icon: <FaCarSide />,
      item: "App Language Setting",
      itemChildren: [
        {
          childrenIcon: <FaList />,
          childrenItem: "Default Keyword List"
        },
        {
          childrenIcon: <FaList />,
          childrenItem: "Language List"
        },
        {
          childrenIcon: <FaList />,
          childrenItem: "Language with Keyword List"
        },
        {
          childrenIcon: <FaList />,
          childrenItem: "Bulk Import Data List"
        },

      ]
    },
    {
      icon: <FaCarSide />,
      item: "Account Setting",
      itemChildren: [
        {
          childrenIcon: <FaList />,
          childrenItem: "Role List"
        },
        {
          childrenIcon: <FaList />,
          childrenItem: "Permission List"
        },
      ]
    },
    {
      icon: <FaCarSide />,
      item: "Additional Fees",
      itemChildren: [
        {
          childrenIcon: <FaList />,
          childrenItem: "Additional Fees List"
        },
        {
          childrenIcon: <FaList />,
          childrenItem: "Add Additional Fees"
        },
      ]
    },
    {
      icon: <FaCarSide />,
      item: "SOS",
      itemChildren: [
        {
          childrenIcon: <FaList />,
          childrenItem: "SOS List"
        },
        {
          childrenIcon: <FaList />,
          childrenItem: "Add SOS"
        },
      ]
    },
    {
      icon: <FaCarSide />,
      item: "Push Notification",
      itemChildren: [
        {
          childrenIcon: <FaList />,
          childrenItem: "Push Notification List"
        },
        {
          childrenIcon: <FaList />,
          childrenItem: "Add Push Notification"
        },
      ]
    },
    {
      icon: <FaCarSide />,
      item: "Report",
      itemChildren: [
        {
          childrenIcon: <FaList />,
          childrenItem: "Admin Report"
        },
        {
          childrenIcon: <FaList />,
          childrenItem: "Driver Earning"
        },
        {
          childrenIcon: <FaList />,
          childrenItem: "Service wise"
        },
      ]
    },
  ]












  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={[
              {
                marginRight: 5,
              },
              open && { display: 'none' },
            ]}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Mini variant drawer
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open} sx={{

        '& .MuiDrawer-paper': {
          overflowY: 'auto', // Ensure content scrolls
          scrollbarWidth: 'none', // Hide scrollbar in Firefox
          msOverflowStyle: 'none', // Hide scrollbar in IE/Edge
          '&::-webkit-scrollbar': {
            display: 'none', // Hide scrollbar in Chrome, Safari, etc.
          },
          '&:hover': {
            scrollbarWidth: 'thin', // Show thin scrollbar on hover in Firefox
            '&::-webkit-scrollbar': {
              display: 'block', // Show scrollbar on hover
              width: '8px',
            },
            '&::-webkit-scrollbar-thumb': {
              backgroundColor: theme.palette.primary.main, // Customize scrollbar color
              borderRadius: '4px',
            },
            '&::-webkit-scrollbar-track': {
              backgroundColor: theme.palette.background.default, // Customize track color
            },
          },
        },
      }}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        {
          navitems.map((navItem: NavItem) => <List>
            <ListItem disablePadding sx={{ display: 'block' }}>
              <ListItemButton
                onClick={() => toggleDrawerMenu(navItem.item)}
                sx={{
                  minHeight: 48,
                  px: 2.5,
                  gap: 1,
                }}
              >
                <ListItemIcon sx={{ minWidth: 0, justifyContent: 'center' }}>
                  {navItem.icon}
                </ListItemIcon>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', }}>
                  <ListItemText
                    sx={{
                      fontSize: '16px', // Set your desired font size here
                      opacity: open ? 1 : 0,
                      transition: 'opacity 0.3s ease', // Smooth opacity transition
                    }}

                  >{navItem.item}</ListItemText>
                  {openMenu && openDrawer === navItem.item ? navItem.itemChildren && <Box sx={{
                    opacity: open ? 1 : 0,
                  }}><FaAngleDown /></Box> : navItem.itemChildren && <Box sx={{
                    opacity: open ? 1 : 0,
                  }}><FaAngleRight /></Box>}
                </Box>

              </ListItemButton>
              {
                navItem.itemChildren && navItem.itemChildren.map((children) => <Collapse in={openMenu && openDrawer === navItem.item} timeout="auto" unmountOnExit>
                  <List component="div">
                    <ListItemButton sx={{ pl: 3, gap: 1 }}>
                      <ListItemIcon sx={{ minWidth: 0, justifyContent: 'center' }}>
                        {children.childrenIcon}
                      </ListItemIcon>
                      <ListItemText primary={children.childrenItem} sx={{
                        opacity: open ? 1 : 0,
                      }} />
                    </ListItemButton>


                  </List>

                </Collapse>)
              }

            </ListItem>
          </List>)
        }
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        <Typography sx={{ marginBottom: 2 }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non
          enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus
          imperdiet. Semper risus in hendrerit gravida rutrum quisque non tellus.
          Convallis convallis tellus id interdum velit laoreet id donec ultrices.
          Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
          adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra
          nibh cras. Metus vulputate eu scelerisque felis imperdiet proin fermentum
          leo. Mauris commodo quis imperdiet massa tincidunt. Cras tincidunt lobortis
          feugiat vivamus at augue. At augue eget arcu dictum varius duis at
          consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa
          sapien faucibus et molestie ac.
        </Typography>
      </Box>
    </Box>
  );
}
