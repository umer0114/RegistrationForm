
import React, {useState} from 'react';
import { TextField, FormControl, Button, Stack } from "@mui/material";

export const RegistrationForm = () => {
    const [email, setEmail] = useState('');
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [emailError, setEmailError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const [rPasswordError, setRPasswordError] = useState(false);
    const [password, setPassword] = useState('');
    const [rPassword, setRPassword] = useState(''); 
    const [dateOfBirth, setDateOfBirth] = useState('');

    const handleSubmit = (event) =>  {
        event.preventDefault();
        setRPasswordError(false);
        setEmailError(false);



        // Check for password mismatch
        if (password !== rPassword) {
            setRPasswordError(true);
            return; // Prevent form submission
        } else {
            setRPasswordError(false);
        }

        // Check for invalid email (simple validation for demonstration)
        const emailRegex = /\S+@\S+\.\S+/;
        if (!emailRegex.test(email)) {
            setEmailError(true);
            return; // Prevent form submission
        } else {
            setEmailError(false);
        }

        alert(`account registered with these details: ${firstName} ${lastName} ${email} ${dateOfBirth}`);
    }

    return (
        <form className='registration-form' onSubmit={handleSubmit}>
            <h2>Registration form</h2>
            <div className='formBody'>

            <TextField
                data-testid='firstName'
                type="text"
                variant='outlined'
                color='secondary'
                label="First Name"
                onChange={e => setFirstName(e.target.value)}
                value={firstName}
                fullWidth
                required
            />

<TextField 
                    data-testid='password'
                    label="Password"
                    onChange={e => setPassword(e.target.value)}
                    required
                    variant="outlined"
                    color="secondary"
                    type="password"
                    value={password}
                    error={passwordError}
                    fullWidth
                    sx={{mb: 3}}
                 />
                 <TextField 
                    data-testid='rPassword'
                    label="Retype Password"
                    onChange={e => setRPassword(e.target.value)}
                    required
                    variant="outlined"
                    color="secondary"
                    type="password"
                    value={rPassword}
                    error={rPasswordError}
                    helperText={rPasswordError ? "Passwords do not match" : ""}
                    fullWidth
                    sx={{mb: 3}}
                 />
            <TextField
                data-testid='lastName'
                type="text"
                variant='outlined'
                color='secondary'
                label="Last Name"
                onChange={e => setLastName(e.target.value)}
                value={lastName}
                fullWidth
                required
            />
            <TextField 
                data-testid='email'
                label="Email"
                onChange={e => setEmail(e.target.value)}
                required
                variant="outlined"
                color="secondary"
                type="email"
                sx={{mb: 3}}
                fullWidth
                value={email}
                error={emailError}
                />


                <TextField
                    data-testid='dateID'
                    type="date"
                    variant='outlined'
                    color='secondary'
                    label="Date of Birth"
                    onChange={e => setDateOfBirth(e.target.value)}
                    value={dateOfBirth}
                    fullWidth
                    required
                    sx={{mb: 4}}
                />      

                <Button data-testid='register' variant="outlined" color="secondary" type="submit">Register</Button>

                <small>Already have an account? Login Here</small>

            </div>
        </form>
    );
}