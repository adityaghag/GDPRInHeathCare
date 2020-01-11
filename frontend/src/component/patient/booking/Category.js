import React from 'react';
import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';
export default function Booking() {

    return (
        <FormControlLabel value="Dentist" control={<Radio />} label="Dentist" />
    );
}
