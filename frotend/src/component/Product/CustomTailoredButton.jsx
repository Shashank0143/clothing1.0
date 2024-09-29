import React, { useState } from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField, Grid, FormControl, FormHelperText } from '@mui/material';
import {Link} from "react-router-dom"
// import { useDispatch } from 'react-redux';

// import axios from 'axios';

const CustomTailoredButton = ({onMeasurementsChange}) => {
  const [open, setOpen] = useState(false);
  const [formValues, setFormValues] = useState({});
  const [errors, setErrors] = useState({});

  // const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Validate if the value is numeric
    const numericRegex = /^[0-9]*\.?[0-9]*$/;
    if (numericRegex.test(value) || value === '') {
      setFormValues((prevValues) => ({
        ...prevValues,
        [name]: value
      }));
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: '' // Clear error if value is valid
      }));
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: 'Please enter a valid number'
      }));
    }
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = async () => {
    onMeasurementsChange(formValues);
    handleClose();
  }

  const fields = [
    { label: 'Length(लंबाई)', name: 'Length'},
    { label: 'Shoulder(कंधा)', name: 'shoulder' },
    { label: 'Chest(छाती)', name: 'chest' },
    { label: 'Stomach(पेट)', name: 'stomach' },
    { label: 'Sleeves(आस्तीन)', name: 'sleeves' },
    { label: 'Hip', name: 'Hip' },
    { label: 'Traousers length(पतलून की लंबाई)', name: 'traouserLength' },
    { label: 'Waist(कमर)', name: 'waist' },
    { label: 'Trouser Hip', name: 'trouserHip' },
    { label: 'Thigh(जाँघ)', name: 'thigh' },
    { label: 'Knee(घुटना)', name: 'knee' },
    { label: 'Hem(मोहरी)', name: 'hem' },
  ];

  return (
    <div>
      <Button 
        variant="contained" 
        onClick={handleClickOpen}
        style={{ backgroundColor: '#07161D', color: 'white', marginTop: '10px' }}
      >
        Custom Tailored
      </Button>
      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm" scroll="paper">
        <DialogTitle>Custom Measurements</DialogTitle>
        <DialogContent dividers>
            <h3>Enter in inch</h3>
          <Grid container spacing={2}>
            {fields.map((field, index) => (
              <Grid item xs={12} sm={6} key={index}>
                <FormControl fullWidth error={!!errors[field.name]}>
                    <TextField
                    name = {field.name}
                    InputLabelProps={{shrink:true}}
                    label={field.label}
                    onChange={handleChange}
                    value={formValues[field.name]}
                    inputProps={{ min: 0 , style: { textAlign: 'center' }}}
                    />
                  {/* <TextField
                    type='number'
                    label={field.label} 
                    fullWidth 
                    InputLabelProps={{ shrink: true }}
                    inputProps={{ step: 'any', style: { textAlign: 'right' } }} 
                  /> */}
                  {errors[field.name] && <FormHelperText>{errors[field.name]}</FormHelperText>}
                </FormControl>
              </Grid>
            ))}
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSubmit} color="primary">
            Submit
          </Button>
        </DialogActions>
        <p style={{fontSize:"15px", marginLeft:"10px"}}><span>Note*:</span>Need help ? contact your local tailor or <Link to="/contact">ContactUs</Link></p>
      </Dialog>
    </div>
  );
};

export default CustomTailoredButton;

