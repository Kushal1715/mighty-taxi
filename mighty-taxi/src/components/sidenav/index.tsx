import * as React from 'react';
import { styled, useTheme, Theme, CSSObject } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
// import { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Collapse } from '@mui/material';
import { FaAngleDown, FaAngleRight, FaCar, FaCarSide, FaDollarSign, FaGift, FaGlobe, FaHamburger, FaHome, FaIdCard, FaList, FaLocationArrow, FaPlus, FaUser } from 'react-icons/fa';
import { MdAddBox, MdOutlineSos } from 'react-icons/md';
import { NavItem } from '@/interface/data';
import { IoIosDocument } from 'react-icons/io';
import { IoDocumentTextSharp, IoSettings } from 'react-icons/io5';
import { ImCreditCard } from 'react-icons/im';
import { RiFolderSettingsFill, RiUserSettingsFill } from 'react-icons/ri';
import { HiDocumentText, HiOutlineDocumentReport } from 'react-icons/hi';
import { TbSpeakerphone } from 'react-icons/tb';
import { FaWebflow } from 'react-icons/fa6';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import { HamburgerMenu } from '@refinedev/mui';
import { GiHamburgerMenu } from 'react-icons/gi';

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

// interface AppBarProps extends MuiAppBarProps {
//   open?: boolean;
// }



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
  const navigate = useNavigate();

  const handleRoute = (route?: string) => {
    if (route) {
      navigate(route)
    } else {
      console.log("route doesnot exist")
    }
  }

  const toggleDrawerMenu = (menu: any) => {
    setOpenDrawer(menu)
    setOpenMenu(!openMenu)
  };

  const navitems: NavItem[] = [
    {
      icon: <FaPlus />,
      item: "Book Now",
      route: "/book-now"
    },
    {
      icon: <FaHome />,
      item: "Dashboard",
      route: "/"
    },
    {
      icon: <FaUser />,
      item: "Rider",
      itemChildren: [
        {
          childrenIcon: <FaList />,
          childrenItem: "Rider List",
          route: '/rider-list'
        },
        {
          childrenIcon: <MdAddBox />,
          childrenItem: "Add Rider",
          route: '/add-rider'
        }
      ]
    },
    {
      icon: <FaGlobe />,
      item: "Region",
      itemChildren: [
        {
          childrenIcon: <FaList />,
          childrenItem: "Region List",
          route: "/region-list"
        },
        {
          childrenIcon: <MdAddBox />,
          childrenItem: "Add Region",
          route: "/add-region"
        }
      ]
    },
    {
      icon: <FaCar />,
      item: "Service",
      itemChildren: [
        {
          childrenIcon: <FaList />,
          childrenItem: "Service List",
          route: "/service-list"
        },
        {
          childrenIcon: <MdAddBox />,
          childrenItem: "Add Service",
          route: "/add-service"
        }
      ]
    },
    {
      icon: <FaIdCard />,
      item: "Driver",
      itemChildren: [
        {
          childrenIcon: <FaList />,
          childrenItem: "Driver List",
          route: "/driver-list"
        },
        {
          childrenIcon: <FaList />,
          childrenItem: "Pending Driver",
          route: "/pending-driver"
        },
        {
          childrenIcon: <MdAddBox />,
          childrenItem: "Add Driver",
          route: "/add-driver"
        },
        {
          childrenIcon: <MdAddBox />,
          childrenItem: "Manage Driver Document",
          route: "/manage-driver-document"
        }
      ]
    },
    {
      icon: <IoIosDocument />,
      item: "Document",
      itemChildren: [
        {
          childrenIcon: <FaList />,
          childrenItem: "Document List",
          route: "/document-list"
        },
        {
          childrenIcon: <MdAddBox />,
          childrenItem: "Add Document",
          route: "/add-document"
        }
      ]
    },
    {
      icon: <FaGift />,
      item: "Cupon",
      itemChildren: [
        {
          childrenIcon: <FaList />,
          childrenItem: "Cupon List",
          route: "/cupon-list"
        },
        {
          childrenIcon: <MdAddBox />,
          childrenItem: "Add Cupon",
          route: "/add-cupon"
        }
      ]
    },
    {
      icon: <FaCarSide />,
      item: "Ride Request",
      itemChildren: [
        {
          childrenIcon: <FaList />,
          childrenItem: "All List",
          route: "/ride-request-all"
        },
        {
          childrenIcon: <FaList />,
          childrenItem: "New Ride List",
          route: "/ride-request-new"
        },
        {
          childrenIcon: <FaList />,
          childrenItem: "Completed List",
          route: "/ride-request-completed"
        },
        {
          childrenIcon: <FaList />,
          childrenItem: "Cancelled List",
          route: "/ride-request-cancelled"
        },
        {
          childrenIcon: <FaList />,
          childrenItem: "Pending List",
          route: "/ride-request-pending"
        }
      ]
    },
    {
      icon: <IoDocumentTextSharp />,
      item: "Complaint",
      itemChildren: [
        {
          childrenIcon: <FaList />,
          childrenItem: "Resolved List",
          route: "/complaint-resolved"
        },
        {
          childrenIcon: <FaList />,
          childrenItem: "Pending List",
          route: "/complaint-pending"
        },
        {
          childrenIcon: <FaList />,
          childrenItem: "Investigation List",
          route: "/complaint-investigation"
        }
      ]
    },
    {
      icon: <FaDollarSign />,
      item: "Surge Price",
    },
    {
      icon: <ImCreditCard />,
      item: "Withdraw Request",
      itemChildren: [
        {
          childrenIcon: <FaList />,
          childrenItem: "All",
          route: "/withdraw-request-all"
        },
        {
          childrenIcon: <FaList />,
          childrenItem: "Pending List",
          route: "/withdraw-request-pending-list"
        },
        {
          childrenIcon: <FaList />,
          childrenItem: "Approved List",
          route: "/withdraw-request-approved-list"
        },
        {
          childrenIcon: <FaList />,
          childrenItem: "Decline List",
          route: "/withdraw-request-decline-list"
        }
      ]
    },
    {
      icon: <RiFolderSettingsFill />,
      item: "App Language Setting",
      itemChildren: [
        {
          childrenIcon: <FaList />,
          childrenItem: "Default Keyword List",
          route: "/app-language-setting-default-keyword"
        },
        {
          childrenIcon: <FaList />,
          childrenItem: "Language List",
          route: "/app-language-setting-language-list"
        },
        {
          childrenIcon: <FaList />,
          childrenItem: "Language with Keyword List",
          route: "/app-language-setting-language-with-keyword-list"
        },
        {
          childrenIcon: <FaList />,
          childrenItem: "Bulk Import Data List",
          route: "/app-language-setting-bulk-import-data-list"
        }
      ]
    },
    {
      icon: <RiUserSettingsFill />,
      item: "Account Setting",
      itemChildren: [
        {
          childrenIcon: <FaList />,
          childrenItem: "Role List",
          route: "/account-setting-role-list"
        },
        {
          childrenIcon: <FaList />,
          childrenItem: "Permission List",
          route: "/account-setting-permission-list"
        }
      ]
    },
    {
      icon: <HiDocumentText />,

      item: "Additional Fees",
      itemChildren: [
        {
          childrenIcon: <FaList />,
          childrenItem: "Additional Fees List",
          route: "/additional-fees-list"
        },
        {
          childrenIcon: <MdAddBox />,
          childrenItem: "Add Additional Fees",
          route: "/add-additional-fees"
        }
      ]
    },
    {
      icon: <MdOutlineSos />,
      item: "SOS",
      itemChildren: [
        {
          childrenIcon: <FaList />,
          childrenItem: "SOS List",
          route: "/sos-list"
        },
        {
          childrenIcon: <MdAddBox />,
          childrenItem: "Add SOS",
          route: "/add-sos"
        }
      ]
    },
    {
      icon: <TbSpeakerphone />,
      item: "Push Notification",
      itemChildren: [
        {
          childrenIcon: <FaList />,
          childrenItem: "Push Notification List",
          route: "/push-notification-list"
        },
        {
          childrenIcon: <MdAddBox />,
          childrenItem: "Add Push Notification",
          route: "/add-push-notification"
        }
      ]
    },
    {
      icon: <HiOutlineDocumentReport />,
      item: "Report",
      itemChildren: [
        {
          childrenIcon: <FaList />,
          childrenItem: "Admin Report",
          route: "/admin-report"
        },
        {
          childrenIcon: <FaList />,
          childrenItem: "Driver Earning",
          route: "/driver-earning"
        },
        {
          childrenIcon: <FaList />,
          childrenItem: "Service wise",
          route: "/service-wise-report"
        }
      ]
    },
    {
      icon: <IoIosDocument />,
      item: "Pages",
      itemChildren: [
        {
          childrenIcon: <FaList />,
          childrenItem: "List",
          route: "/pages-list"
        },
        {
          childrenIcon: <FaList />,
          childrenItem: "Terms and Condition",
          route: "/terms-and-condition"
        },
        {
          childrenIcon: <FaList />,
          childrenItem: "Privacy Policy",
          route: "/privacy-policy"
        }
      ]
    },
    {
      icon: <FaLocationArrow />,
      item: "Driver Location",
      route: "/driver-location"
    },
    {
      icon: <IoSettings />,
      item: "Setting",
      route: "/setting"
    },
    {
      icon: <FaWebflow />,
      item: "Website Section",
      itemChildren: [
        {
          childrenIcon: <FaList />,
          childrenItem: "Information",
          route: "/website-section-information"
        },
        {
          childrenIcon: <FaList />,
          childrenItem: "Our Mission",
          route: "/website-section-our-mission"
        },
        {
          childrenIcon: <FaList />,
          childrenItem: "Why Choose",
          route: "/website-section-why-choose"
        },
        {
          childrenIcon: <FaList />,
          childrenItem: "Client Testimonials",
          route: "/website-section-client-testimonials"
        },
        {
          childrenIcon: <FaList />,
          childrenItem: "Download App",
          route: "/website-section-download-app"
        },
        {
          childrenIcon: <FaList />,
          childrenItem: "Contact Info",
          route: "/website-section-contact-info"
        }
      ]
    },
  ];

  const { dark } = useSelector((state: RootState) => state.darkmode)
  const bgColor = dark ? 'black' : 'white';
  const textColor = dark ? 'white' : 'black';

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
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
          backgroundColor: bgColor,
          color: textColor
        },
      }}>
        <DrawerHeader>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between', // Add space between logo and icon
              width: '100%', // Ensure it stretches across the available width
            }}
          >

            <Box sx={{
              opacity: open ? 1 : 0,
              cursor: 'pointer',
              background: 'black'
            }} onClick={() => navigate('/')}><img src='/logo.png' className='w-10 h-10' /></Box>
            <IconButton onClick={() => setOpen(!open)} sx={{ color: '#4788ff' }}>
              {<GiHamburgerMenu className='w-8 h-12' />}
            </IconButton>
          </Box>
        </DrawerHeader>
        <Divider />
        {
          navitems.map((navItem: NavItem, i) => <List key={i}>
            <ListItem disablePadding sx={{ display: 'block' }} onClick={() => handleRoute(navItem.route)}>
              <ListItemButton
                onClick={() => toggleDrawerMenu(navItem.item)}
                sx={{
                  minHeight: 48,
                  px: 2.5,
                  gap: 1,
                }}
              >
                <ListItemIcon sx={{ minWidth: 0, justifyContent: 'center', color: textColor }}>
                  {navItem.icon}
                </ListItemIcon>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', }}>
                  <ListItemText
                    primary={navItem.item}
                    sx={{
                      fontSize: '2em !important', // Set your desired font size here
                      opacity: open ? 1 : 0,
                      transition: 'opacity 0.3s ease', // Smooth opacity transition
                    }}
                  />
                  {openMenu && openDrawer === navItem.item ? navItem.itemChildren && <Box sx={{
                    opacity: open ? 1 : 0,
                  }}><FaAngleDown /></Box> : navItem.itemChildren && <Box sx={{
                    opacity: open ? 1 : 0,
                  }}><FaAngleRight /></Box>}
                </Box>
              </ListItemButton>
              {
                navItem.itemChildren && navItem.itemChildren.map((children, index) => <Collapse in={openMenu && openDrawer === navItem.item} timeout="auto" unmountOnExit key={index}>
                  <List component="div">
                    <ListItemButton sx={{ pl: 3, gap: 1 }} onClick={() => navigate(children.route)}>
                      <ListItemIcon sx={{ minWidth: 0, justifyContent: 'center', color: textColor }}>
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
    </Box>
  );
}
