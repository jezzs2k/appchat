import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyle = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    maxWidth: '100%',
    [theme.breakpoints.up('sm')]: {
      maxWidth: '50%',
    },
    margin: 'auto',
  },
  form: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: '2em',
    border: '1px solid #bdc3c7',
    boxShadow: '1px 1px 5px #bdc3c7',
  },
  title: {
    textAlign: 'center',
    width: '100%',
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    color: '#3f51b5',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: '25ch',
    display: 'flex',
    margin: 0,
  },
  textInfo: {
    display: 'flex',
  },
}));

const Register = () => {
  const classes = useStyle();

  const [state, setState] = useState({
    name: '',
    phone: '',
    age: 18,
    email: '',
    password: '',
  });

  const { name, phone, email, password, age } = state;

  const onChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log({ ...state });
    setState({ name: '', phone: '', email: '', password: '', age: 18 });
  };
  return (
    <div className={classes.root}>
      <div className={classes.form}>
        <h2 className={classes.title}>REGISTER</h2>
        <div className={classes.textInfo}>
          <TextField
            name='name'
            label='UserName'
            id='margin-none'
            value={name}
            onChange={onChange}
            className={classes.textField}
            placeholder='Username...'
            style={{ marginLeft: 0 }}
          />
          <TextField
            name='phone'
            label='Phone Number'
            id='margin-dense'
            value={phone}
            onChange={onChange}
            className={classes.textField}
            placeholder='Phone...'
          />
          <TextField
            label='Age'
            type='number'
            value={age}
            className={classes.textField}
            onChange={onChange}
            style={{ marginRight: 0 }}
          />
        </div>
        <TextField
          name='email'
          id='stander-full-width'
          label='Email'
          style={{ marginBottom: 8 }}
          placeholder='Email...'
          fullWidth
          margin='normal'
          InputLabelProps={{
            shrink: true,
          }}
          value={email}
          onChange={onChange}
        />
        <TextField
          name='password'
          label='Password'
          style={{ marginBottom: 8 }}
          placeholder='Password...'
          fullWidth
          margin='normal'
          InputLabelProps={{
            shrink: true,
          }}
          type='password'
          value={password}
          onChange={onChange}
        />
        <Button onClick={onSubmit} variant='contained' color='primary'>
          REGISTER
        </Button>
      </div>
    </div>
  );
};

export default Register;
