import {TextField} from '@mui/material'
import React from 'react';
import MenuItem from '@mui/material/MenuItem';

const currencies = [
    {
        value: 'USD',
        label: '$'
    }, {
        value: 'EUR',
        label: '€'
    }, {
        value: 'BTC',
        label: '฿'
    }, {
        value: 'JPY',
        label: '¥'
    },
];

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
                            <TextField margin="normal" required fullWidth label="Full Name" autoFocus/>
                        </div>
                        <div className="col">
                            <TextField margin="normal" required fullWidth label="Phone Number"/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <TextField id="standard-select-currency" select label="Select" defaultValue="EUR" helperText="Please select your currency" variant="standard">
                                {
                                currencies.map((option) => (
                                    <MenuItem key={
                                            option.value
                                        }
                                        value={
                                            option.value
                                    }>
                                        {
                                        option.label
                                    } </MenuItem>
                                ))
                            } </TextField>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
