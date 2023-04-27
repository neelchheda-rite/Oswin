import { TextField, Button} from '@mui/material'
import React from 'react';

import "../Css/Login.css";


export default function CreateUser() {
    
    return (
        <>
            <div>
                <div className="mb-3">
                    <h3 className='my-3'
                        style={
                            {textAlign: "center"}
                    }>
                        Create New User
                    </h3>
                    <div className="row">
                        <div className="col">
                            <TextField margin="normal" required fullWidth label="Full Name" autoFocus/>
                        </div>
                        <div className="col">
                            <TextField margin="normal" required fullWidth label="Phone Number"/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <TextField margin="normal" required fullWidth label="Email" autoFocus/>
                        </div>
                        <div className="col" style={{ display: 'flex', justifyContent: 'left', alignItems:"left"}}>
                        <Button margin="normal" variant="text">Verify OTP</Button>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <TextField margin="normal" type="password" required fullWidth label="Password" autoFocus/>
                        </div>
                        <div className="col">
                            <TextField margin="normal" type="password" required fullWidth label="Confirm Password"/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col my-2"></div>
                        <div className="col"></div>
                    </div>
                    <div className="col" style={{ display: 'flex', justifyContent: 'center', alignItems:"left"}}>
                        <Button margin="normal" variant="contained">Create User</Button>
                        </div>
                </div>
            </div>

        </>
    )
}
