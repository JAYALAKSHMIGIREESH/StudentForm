import React, { useState } from 'react';
import { TextField, Button, Container, Typography, Grid, FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { styled } from '@mui/material/styles';

const BackgroundContainer = styled('div')({
  minHeight: '100vh',             
  display: 'flex',
  justifyContent: 'center',      
  alignItems: 'center',           
  backgroundColor: '#f5f5f5',   
  width: '100%',                   
});

const FormContainer = styled('div')({
  backgroundColor: '', 
  padding: '20px',  
  borderRadius: '8px',
  width: '400px', 
  maxHeight: '600px',  
  overflowY: 'auto',  
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',    
});

const StudentForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    gender: '',
    phone: '',
    emailid: '',
    course: '',
    dob: '',
    address: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(JSON.stringify(formData, null, 2));
  };

  const handleCancel = () => {
    setFormData({
      name: '',
      gender: '',
      phone: '',
      emailid: '',
      course: '',
      dob: '',
      address: ''
    });
  };

  return (
    <BackgroundContainer>
      <FormContainer>
        <Container>
          <Typography sx={{ fontSize: '1.5rem' }} color='secondary' gutterBottom align="center">
            Student Registration Form
          </Typography>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </Grid>

              <Grid item xs={12}>
                <FormControl fullWidth required>
                  <InputLabel>Gender</InputLabel>
                  <Select
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                  >
                    <MenuItem value="Male">Male</MenuItem>
                    <MenuItem value="Female">Female</MenuItem>
                    <MenuItem value="Other">Other</MenuItem>
                  </Select>
                </FormControl>
              </Grid>

              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Phone Number"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </Grid>

              

              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Email Id"
                  name="emailid"
                  value={formData.emailid}
                  onChange={handleChange}
                  required
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Date of Birth"
                  type="date"
                  name="dob"
                  value={formData.dob}
                  onChange={handleChange}
                  InputLabelProps={{ shrink: true }}
                  required
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  required
                />
              </Grid>

              <Grid item xs={6}>
                <Button
                  fullWidth
                  variant="contained"
                  color="secondary"
                  type="submit"
                >
                  Submit
                </Button>
              </Grid>
              <Grid item xs={6}>
                <Button
                  fullWidth
                  variant="outlined"
                  color="secondary"
                  onClick={handleCancel}
                >
                  Cancel
                </Button>
              </Grid>
            </Grid>
          </form>
        </Container>
      </FormContainer>
    </BackgroundContainer>
  );
};

export default StudentForm;
