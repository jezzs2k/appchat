import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyle = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    maxWidth: '50%',
    margin: 'auto',
    border: '1px solid #bdc3c7',
    boxShadow: '1px 1px 5px #bdc3c7',
  },
  title: {
    textAlign: 'center',
    width: '100%',
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    color: '#3f51b5',
  },
  form: {
    padding: '2.5em',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: '25ch',
  },
}));

const Login = () => {
  const classes = useStyle();

  const [state, setState] = useState({
    email: '',
    password: '',
  });

  const { email, password } = state;

  const onChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log({ ...state });
    setState({ email: '', password: '' });
  };

  return (
    <div className={classes.root}>
      <h2 className={classes.title}>LOGIN</h2>
      <div className={classes.form}>
        <TextField
          name='email'
          id='stander-full-width'
          label='Email'
          style={{ margin: 8 }}
          placeholder='Email...'
          fullWidth
          margin='normal'
          InputLabelProps={{
            shrink: true,
          }}
          value={email}
          onChange={onChange}
          required
        />
        <TextField
          name='password'
          label='Password'
          style={{ margin: 8 }}
          placeholder='Password...'
          fullWidth
          margin='normal'
          InputLabelProps={{
            shrink: true,
          }}
          type='password'
          value={password}
          onChange={onChange}
          required
        />
        <Button onClick={onSubmit} variant='contained' color='primary'>
          Login
        </Button>
      </div>
    </div>
  );
};

export default Login;
