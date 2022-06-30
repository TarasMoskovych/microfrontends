import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Link } from 'react-router-dom';
import { VALIDATION_CONFIGS } from '../configs/validation.configs';
import { useForm } from '../hooks/use-form';
import LoadingButton from './LoadingButton';

const useStyles = makeStyles((theme) => ({
  '@global': {
    a: {
      textDecoration: 'none',
    },
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(3),
  },
}));

export default function SignUp({ onSignIn }) {
  const classes = useStyles();
  const [loading, setLoading] = useState(false);
  const { email, password, firstName, lastName } = VALIDATION_CONFIGS;
  const { resetForm, handleSubmit, handleBlur, handleChange, data, errors } = useForm({
    validations: { email, password, firstName, lastName },
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      allowExtraEmails: true,
    },
    onSubmit: data => {
      setLoading(true);
      onSignIn(data, {
        onDone: () => {
          setLoading(false);
          resetForm();
        },
      });
    },
  });

  return (
    <Container component="main" maxWidth="xs">
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form
          onSubmit={(e) => e.preventDefault()}
          className={classes.form}
          noValidate
        >
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                onChange={handleChange('firstName')}
                onBlur={handleBlur('firstName')}
                value={data.firstName}
                error={!!errors.firstName}
                helperText={errors.firstName || ''}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
                onChange={handleChange('lastName')}
                onBlur={handleBlur('lastName')}
                value={data.lastName}
                error={!!errors.lastName}
                helperText={errors.lastName || ''}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                onChange={handleChange('email')}
                onBlur={handleBlur('email')}
                value={data.email}
                error={!!errors.email}
                helperText={errors.email || ''}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={handleChange('password')}
                onBlur={handleBlur('password')}
                value={data.password}
                error={!!errors.password}
                helperText={errors.password || ''}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={
                  <Checkbox
                    value="allowExtraEmails"
                    checked={data.allowExtraEmails}
                    onChange={handleChange('allowExtraEmails')}
                    color="primary"
                  />}
                label="I want to receive inspiration, marketing promotions and updates via email."
              />
            </Grid>
          </Grid>
          <LoadingButton
            loading={loading}
            text="Sign Up"
            handleClick={handleSubmit}
          />
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link to="/auth/signin">Already have an account? Sign in</Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}
