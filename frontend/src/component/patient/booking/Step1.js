import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

export default function Booking() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <React.Fragment>
            <FormControl component="fieldset" >
                <FormLabel component="legend">Categories</FormLabel>
                <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
                    <FormControlLabel value="Cardiologist" control={<Radio />} label="Cardiologist" />
                    <FormControlLabel value="Neurosurgeon" control={<Radio />} label="Neurosurgeon" />
                    <FormControlLabel value="Orthopedcian" control={<Radio />} label="Orthopedcian" />
                    <FormControlLabel value="Oncologist" control={<Radio />} label="Oncologist" />
                    <FormControlLabel value="Neurologist" control={<Radio />} label="Neurologist" />
                    <FormControlLabel value="Gastroenterologist" control={<Radio />} label="Gastroenterologist" />
                    <FormControlLabel value="Liver Transplant Surgeon" control={<Radio />} label="Liver Transplant Surgeon" />
                    <FormControlLabel value="Dentist" control={<Radio />} label="Dentist" />
                    <FormControlLabel value="Psychiatrist" control={<Radio />} label="Psychiatrist" />
                    <FormControlLabel value="Urologist" control={<Radio />} label="Urologist" />
                    <FormControlLabel value="Gynecologist" control={<Radio />} label="Gynecologist" />
                    <FormControlLabel value="Pediatrician" control={<Radio />} label="Pediatrician" />
                </RadioGroup>
            </FormControl>
        </React.Fragment>
    );
}
