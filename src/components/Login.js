// import React, {Component} from 'react'
// export default class Login extends Component {
//     render() {
//         return (
//             <form>
//                 <h3>Sign In</h3>
//                 <div className="mb-3 ">
//                     <label className='my-2'>Email address</label>
//                     <input type="email" className="form-control" placeholder="Email address"/>
//                 </div>
//                 <div className="mb-3 my-2">
//                     <label className='my-2'>Password</label>
//                     <input type="password" className="form-control" placeholder="Password"/>
//                 </div>
//                 <div className="mb-3">
//                     <div className="custom-control custom-checkbox">
//                         <input type="checkbox" className="custom-control-input" id="customCheck1"/>
//                         <label className="custom-control-label mx-2" htmlFor="customCheck1">
//                             Remember me
//                         </label>
//                     </div>
//                 </div>
//                 <div className="d-grid">
//                     <button type="submit" className="btn btn-primary">
//                         Submit
//                     </button>
//                 </div>
//                 <p className="forgot-password text-right my-2">
//                     <a to="/"> Forgot password?</a>
//                 </p>
//             </form>
//         )
//     }
// }

import * as React from 'react';
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import "../Css/Login.css";
import Typography from '@mui/material/Typography';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import {useNavigate} from 'react-router-dom';


function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            Copyright © Oswin 2023.
        </Typography>
    );
}

const theme = createTheme();

export default function SignInSide() {

    const navigate = useNavigate();

    const navigateToContacts = () => {
      toast.success('Log in Successful', {position: toast.POSITION.TOP_RIGHT});
       setTimeout(() => {
        navigate('/user');
      }, "500");
    };

  
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({email: data.get('email'), password: data.get('password')});
    };


    return (
        <ThemeProvider theme={theme}>
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

                        <Typography component="h1" variant="h5">
                            Sign in
                        </Typography>
                        <Box component="form" noValidate
                            onSubmit={handleSubmit}
                            sx={
                                {mt: 1}
                        }>
                            <TextField margin="normal" required fullWidth id="email" label="Email Address" name="email" autoComplete="email" autoFocus/>
                            <TextField margin="normal" required fullWidth name="password" label="Password" type="password" id="password" autoComplete="current-password"/>
                            <FormControlLabel control={
                                    <Checkbox
                                value="remember"
                                color="primary"/>
                                }
                                label="Remember me "/>
                            <Button type="submit" fullWidth variant="contained"
                                sx={
                                    {
                                        mt: 3,
                                        mb: 2
                                    }
                                }
                                onClick={navigateToContacts}>
                                Sign In
                            </Button>
                           
                            <ToastContainer/>
                            <Grid container>

                                <Grid item xs>
                                    <Link to="/" variant="body2">
                                        Forgot password?
                                    </Link>
                                </Grid>
                                <Grid item>
                                    <Link to="/" variant="body2">
                                        {"Don't have an account? Sign Up"} </Link>
                                </Grid>
                            </Grid>
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
