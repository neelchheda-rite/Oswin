import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import {useState} from 'react';
import Axios from 'axios';
import {toast, ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useNavigate} from 'react-router-dom';

function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            Copyright © Oswin 2023.
        </Typography>
    );
}
const defaultTheme = createTheme();


export default function SignInSide() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    let navigate = useNavigate();

    const handleLoginSubmit = (event) => {
        event.preventDefault();
        if (!email || !password) {
            toast.error('Invalid Email or Password', {
                position: toast.POSITION.TOP_RIGHT,
                toastId: 'log_in_error'
            });
        }
        // const data = new FormData(event.currentTarget);
        // setEmail(data.get('email'));
        // setPassword(data.get('password'));
        Axios.post("http://restapi.adequateshop.com/api/authaccount/login", {
            email: email,
            password: password
        }).then((response) => {
            if (response.status === 200) {
                window.sessionStorage.setItem('Name', response.data.data.Name);
                console.log(response.status);
                toast.success('Log in Successful!', {
                    position: toast.POSITION.TOP_RIGHT,
                    toastId: 'log_in_success'
                });
                navigate('/user');

            }
        });
    };

    return (
        <ThemeProvider theme={defaultTheme}>
            <Grid container component="main"
                sx={
                    {height: '100vh'}
            }>
                <CssBaseline/>
                <Grid item
                    xs={false}
                    sm={4}
                    md={7}
                    sx={
                        {
                            backgroundImage: 'url(https://images.unsplash.com/photo-1494412519320-aa613dfb7738?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80)',
                            backgroundRepeat: 'no-repeat',
                            backgroundColor: (t) => t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
                            backgroundSize: 'cover',
                            backgroundPosition: 'center'
                        }
                    }/>
                <Grid item
                    xs={12}
                    sm={8}
                    md={5}
                    component={Paper}
                    elevation={6}
                    square>
                    <Box sx={
                        {
                            my: 8,
                            mx: 4,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center'
                        }
                    }>
                        <Avatar sx={
                            {
                                m: 1,
                                bgcolor: 'primary.main'
                            }
                        }>
                            <LockOutlinedIcon />
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Sign in
                        </Typography>
                        <Box component="form" noValidate
                            onSubmit={handleLoginSubmit}
                            sx={
                                {mt: 1}
                        }>
                            <TextField margin="normal" required fullWidth id="email" label="Email Address" name="email" autoComplete="email"
                                value={email}
                                autoFocus
                                onChange=
                                {(e) => {setEmail(e.target.value);
                                                                                                                                             }}/>
                            <TextField margin="normal" required fullWidth name="password" label="Password" type="password" id="password" autoComplete="current-password"
                                value={password}
                                onChange={
                                    (e) => {
                                        setPassword(e.target.value);
                                    }
                                }/>
                            <FormControlLabel control={
                                    <Checkbox
                                value="remember"
                                color="primary"/>
                                }
                                label="Remember me"/>
                            <Button type="submit" fullWidth variant="contained"
                                sx={
                                    {
                                        mt: 3,
                                        mb: 2
                                    }
                            }>
                                Sign In
                            </Button>
                            <ToastContainer position="top-right" pauseOnHover="false"
                                autoClose={1500}/>
                            <Copyright sx={
                                {mt: 5}
                            }/>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </ThemeProvider>
    );
}
