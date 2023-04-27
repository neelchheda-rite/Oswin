import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import React from 'react';
import MenuItem from '@mui/material/MenuItem';

import InputLabel from '@mui/material/InputLabel';


export default function Summary() {

    const [customer, setCustomer] = React.useState('');

    const handleChange = (event) => {
        setCustomer(event.target.value);
    };


    return (
        <>
            <div className='container mt-3  '>
                <FormControl required
                    sx={
                        {
                            m: 1,
                            minWidth: 200
                        }
                }>
                    <InputLabel id="demo-simple-select-required-label">Customer</InputLabel>
                    <Select labelId="demo-simple-select-required-label" id="demo-simple-select-required"
                        value={customer}
                        label=" Customer"
                        onChange={handleChange}>
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                    </Select>

                </FormControl>
            </div>


        </>
    )
}
