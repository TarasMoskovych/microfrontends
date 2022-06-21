import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Link } from 'react-router-dom';
import Copyright from './Copyright';
import { useForm } from '../hooks/use-form';
import { VALIDATION_CONFIGS } from '../configs/validation.configs';
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
    marginTop: theme.spacing(1),
  },
}));

export default function SignIn({ onSignIn }) {
  const classes = useStyles();
  const [loading, setLoading] = useState(false);
  const { email, password } = VALIDATION_CONFIGS;
  const { resetForm, handleSubmit, handleBlur, handleChange, data, errors } = useForm({
    validations: { email, password },
    initialValues: {
      email: '',
      password: '',
      remember: false,
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
          Sign in
        </Typography>
        <form
          onSubmit={(e) => e.preventDefault()}
          className={classes.form}
          noValidate
        >
          <TextField
            variant="outlined"
            margin="normal"
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
          <TextField
            variant="outlined"
            margin="normal"
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
          <FormControlLabel
            label="Remember me"
            control={
              <Checkbox
                checked={data.remember}
                onChange={handleChange('remember')}
                color="primary"
              />
            }
          />
          <LoadingButton
            loading={loading}
            text="Sign In"
            handleClick={handleSubmit}
          />
          <Grid container>
            <Grid item>
              <Link to="/auth/signup">{"Don't have an account? Sign Up"}</Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}
