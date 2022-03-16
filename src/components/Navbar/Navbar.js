import React, { useState, useEffect } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "./navbar.css";
import Box from '@mui/material/Box';
import Modal from '../modal/Modal';
import { ThemeProvider, createTheme, styled, alpha } from '@mui/material/styles';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import IconButton from '@mui/material/IconButton';
import ListItemButton from '@mui/material/ListItemButton';
import Setting from '../setting/Setting';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import { purple } from '@mui/material/colors';
import ListItemText from '@mui/material/ListItemText';
import { useNavigate } from "react-router-dom";
import Set from '@mui/icons-material/Settings';
import User from '@mui/icons-material/VerifiedUserSharp';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Fab from '@mui/material/Fab';
import Paper from '@mui/material/Paper';
import Dashboard from "@mui/icons-material/Dashboard";
import Transactions from "@mui/icons-material/DiamondOutlined";
import IconDone from "@mui/icons-material/Done";
import { ReactComponent as Logo } from "../../image/logo.svg";

const drawerWidth = 240;

const viewportContext = React.createContext({});

const ViewportProvider = ({ children }) => {
    const [width, setWidth] = React.useState(window.innerWidth);
    const [height, setHeight] = React.useState(window.innerHeight);
    const handleWindowResize = () => {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    };

    React.useEffect(() => {
        window.addEventListener("resize", handleWindowResize);
        return () => window.removeEventListener("resize", handleWindowResize);
    }, []);
    console.log("width gotten --- ", width, height);
    return (
        <viewportContext.Provider value={{ width, height }}>
            {children}
        </viewportContext.Provider>
    );
};


const useViewport = () => {
    const { width, height } = React.useContext(viewportContext);
    return { width, height };
};
const ColorAppBar = styled(AppBar)(({ theme }) => ({

    color: theme.palette.getContrastText("#B11226"),
    backgroundColor: "#B11226",

}));




const ColorFAB = styled(Fab)(({ theme }) => ({
    color: theme.palette.getContrastText("#B11226"),
    backgroundColor: "#B11226",
}));
const MobileComponent = (props) => {
    const [value, setValue] = React.useState(props.index);
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const container = window !== undefined ? () => window().document.body : undefined;

    const history = useNavigate();

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div>
            <Toolbar />
            <Divider />

            <Divider />
            <List>
                {['Your Account', 'Feedback', 'Refer a friend', "Privacy", "Help"].map((text, index) => (
                    <ListItem button key={text}>
                        {/* <ListItemIcon>
                            {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                        </ListItemIcon> */}
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
            <div className="my-5 py-3"></div>
            <ListItem button key={"Sign out"}>
                {/* <ListItemIcon>
                            {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                        </ListItemIcon> */}
                <ListItemText primary={"Sign out"} />
            </ListItem>
        </div >
    );



    return (
        <Box sx={{ pb: 7 }} >
            <CssBaseline />
            <ColorAppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        {props.title}
                    </Typography>
                    <Box sx={{ flexGrow: 1 }} />
                    <Box sx={{ display: { xs: 'none', md: 'flex' } }}>

                        <IconButton
                            size="large"
                            aria-label="show 17 new notifications"
                            color="inherit"
                        >
                            <Badge badgeContent={17} color="error">
                                <NotificationsIcon />
                            </Badge>
                        </IconButton>

                    </Box>
                    <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="show 17 new notifications"
                            // aria-controls={mobileMenuId}

                            // onClick={handleMobileMenuOpen}
                            color="inherit"
                        >
                            <Badge badgeContent={1} color="error">
                                <NotificationsIcon />
                            </Badge>
                        </IconButton>
                    </Box>
                </Toolbar>
            </ColorAppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>

            {props.widget}

            <ColorFAB r onClick={() => history('/new/user')} sx={{
                position: 'fixed', bottom: 70, left: useViewport().width - 70, right: 20
            }} aria-label="add">
                {props.index == 5 ? <IconDone /> : <AddIcon />}

            </ColorFAB >

            <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
                <BottomNavigation
                    showLabels
                    sx={{

                        color: "green",
                        "&$selected": {
                            color: "red"

                        },

                    }}
                    value={value}
                    onChange={(event, newValue) => {
                        setValue(newValue);
                        if (newValue == 0) { history(`/dashboard`); }
                        if (newValue == 1) { history(`/transactions`); }
                        if (newValue == 2) { history(`/users`); }
                        if (newValue == 3) { history(`/settings`); }

                    }}
                >
                    <BottomNavigationAction label="Dashboard" icon={<Dashboard />} />
                    <BottomNavigationAction label="Transactions" icon={<Transactions />} />
                    <BottomNavigationAction label="Users" icon={<User />} />
                    <BottomNavigationAction label="Settings" icon={<Set />} />

                </BottomNavigation>
            </Paper>
        </Box >
    );

};



const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.black, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
}));

const DesktopComponent = (Props) => {

    const [show, setShow] = React.useState(false);
    const history = useNavigate();

    const darkTheme = createTheme({
        palette: {
            mode: 'light',
            primary: {
                main: '#FFFFFF',
            },
        },
    });

    const menuId = 'primary-search-account-menu';
    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />


            <ThemeProvider theme={darkTheme}>
                <AppBar
                    position="fixed" elevation="1"
                    sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}>
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="open drawer"
                            sx={{ mr: 2 }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography
                            variant="h6"
                            noWrap
                            component="div"
                            sx={{ display: { xs: 'none', sm: 'block' } }}
                        >
                            Your service
                        </Typography>

                        <Box sx={{ flexGrow: 1 }} />
                        <Search>
                            <SearchIconWrapper>
                                <SearchIcon />
                            </SearchIconWrapper>
                            <StyledInputBase
                                placeholder="Search…"
                                inputProps={{ 'aria-label': 'search' }}
                            />
                        </Search>
                        <Box sx={{ display: { xs: 'none', md: 'flex' } }}>




                            <IconButton
                                size="large"
                                aria-label="show 17 new notifications"
                                color="inherit"
                            >
                                <Badge badgeContent={17} color="error">
                                    <NotificationsIcon />
                                </Badge>
                            </IconButton>
                            <div className='mx-2'></div>
                            <Typography
                                variant="h6"
                                className="p-20"
                                // noWrap
                                component="div"
                                sx={{ display: { xs: 'none', sm: 'block' } }}
                            >
                                Your service
                            </Typography>
                        </Box>

                    </Toolbar>
                </AppBar>
            </ThemeProvider>
            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                    },
                }}
                variant="permanent"
                anchor="left"
            >
                <Toolbar >

                    <Logo style={{ height: "30px", width: "30px" }} />

                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ display: { xs: 'none', sm: 'block' } }}
                    >
                        Credio Savings
                    </Typography>
                </Toolbar>
                <Divider />
                <Button variant={Props.index == 5 ? "contained" : "outlined"} onClick={() => history('/new/user')} className="m-4" color="error" startIcon={<AddIcon />}>
                    Add User
                </Button>
                <List>
                    {['Dashboard', 'Transactions', 'All Users', 'Settings'].map((text, index) => (<div>
                        <ListItem button key={text}>
                            <ListItemButton
                                selected={Props.index == index}
                                onClick={(event) => {
                                    if (index == 0) { setShow(!true); history(`/dashboard`); }
                                    if (index == 1) { setShow(!true); history(`/transactions`); }
                                    if (index == 2) { setShow(!true); history(`/users`); }
                                    if (index == 3) { history(`/settings`); }
                                }}
                            >   <ListItemIcon>
                                    {index == 0 ? <Dashboard /> : index == 2 ? <User /> : index == 1 ? <Transactions /> : < Set />}
                                </ListItemIcon>
                                <ListItemText primary={text} /></ListItemButton>
                        </ListItem>


                    </div>
                    ))}
                </List>

            </Drawer>
            <Box
                component="main"
                sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
            >
                {Props.widget}

            </Box>
            {/* <Modal show={show} handleClose={() => setShow(!true)}>
                <Setting ></Setting>
            </Modal> */}
        </Box >
    )
}
const MyComponent = (props) => {

    const { width } = useViewport();
    const breakpoint = 620;

    return width < breakpoint ? <MobileComponent title={props.title} widget={props.widget} index={props.index} /> : <DesktopComponent index={props.index} title={props.title} widget={props.widget} />;
};

export default function Navbar(props) {
    return (
        <ViewportProvider>
            <MyComponent title={props.title} index={props.index} widget={props.widget} />
        </ViewportProvider>
    );
}
    // const breakpoint = 620;
    // const { width } = useViewport();
    // console.log("log here ---- ", useViewport());

    // if (width < breakpoint) {
    //     return MobileComponent(props);
    // }
    // else {
    //     return DesktopComponent(props);
    // }

// }

