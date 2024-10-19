import React, { useState } from 'react';
import { TextField, Button, Container, Typography, Grid, FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { styled } from '@mui/material/styles';

// Update BackgroundContainer without background image and smaller form
const BackgroundContainer = styled('div')({
  minHeight: '100vh',              // Ensures the container covers the full viewport height
  display: 'flex',
  justifyContent: 'center',       // Center form horizontally
  alignItems: 'center',           // Center form vertically
  backgroundColor: '#f5f5f5',     // Use a light background color for the container
  width: '100%',                   // Ensures it takes the full width of the viewport
});

const FormContainer = styled('div')({
  backgroundColor: '',  // Slightly less transparent
  padding: '20px',  // Reduced padding to decrease height
  borderRadius: '8px',
  width: '400px',  // Decreased form size to 400px
  maxHeight: '600px',  // Set max height to restrict height
  overflowY: 'auto',   // Allow scrolling if content exceeds maxHeight
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',    // Light shadow
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
          {/* Decrease the heading size */}
          <Typography sx={{ fontSize: '1.5rem' }} color='secondary' gutterBottom align="center">
            Student Registration Form
          </Typography>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              {/* Name Field */}
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

              {/* Gender Field */}
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

              {/* Phone Number Field */}
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

              

              {/* Email Id Field */}
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

              {/* Date of Birth Field */}
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

              {/* Address Field */}
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

              {/* Submit and Cancel Buttons */}
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
