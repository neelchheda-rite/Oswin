import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import React from 'react';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import {TextField} from '@mui/material';
import Button from '@mui/material/Button';


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
                            m: 2,
                            minWidth: 170
                        }
                }>
                    <InputLabel id="demo-simple-select-required-label">Customer</InputLabel>
                    <Select labelId="demo-simple-select-required-label" id="demo-simple-select-required"
                        value={customer}
                        label=" Customer"
                        onChange={handleChange}>
                        
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                    </Select>

                </FormControl>
                <FormControl required
                    sx={
                        {
                            m: 2,
                            minWidth: 170
                        }
                }>
                    <InputLabel id="demo-simple-select-required-label">Item</InputLabel>
                    <Select labelId="demo-simple-select-required-label" id="demo-simple-select-required"
                        value={customer}
                        label=" Item"
                        onChange={handleChange}>
                        
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                    </Select>

                </FormControl>
                <FormControl required
                    sx={
                        {
                            m: 2,
                            minWidth: 170
                        }
                }>
                    <InputLabel id="demo-simple-select-required-label">Month</InputLabel>
                    <Select labelId="demo-simple-select-required-label" id="demo-simple-select-required"
                        value={customer}
                        label=" Month"
                        onChange={handleChange}>
                        
                        <MenuItem value={10}>January</MenuItem>
                        <MenuItem value={20}>February</MenuItem>
                        <MenuItem value={30}>March</MenuItem>
                        <MenuItem value={30}>April</MenuItem>
                        <MenuItem value={30}>May</MenuItem>
                        <MenuItem value={30}>June</MenuItem>
                        <MenuItem value={30}>July</MenuItem>
                        <MenuItem value={30}>August</MenuItem>
                        <MenuItem value={30}>September</MenuItem>
                        <MenuItem value={30}>October</MenuItem>
                        <MenuItem value={30}>November</MenuItem>
                        <MenuItem value={30}>December</MenuItem>
                    </Select>

                </FormControl>
                <FormControl sx={
                    {
                        m: 2,
                        minWidth: 170
                    }
                }>

                    <TextField id="standard-search" label="Year" type="search" variant="standard"/>
                </FormControl>
                <FormControl sx={
                    {
                        m: 2,
                        minWidth: 170
                    }
                }>

                    <Button variant="contained">Search</Button>
                </FormControl>
                <FormControl sx={
                    {
                        m: 2,
                        minWidth: 170
                    }
                }>

                    <Button variant="contained">Add Projection</Button>
                </FormControl>

            </div>


        </>
    )
}
