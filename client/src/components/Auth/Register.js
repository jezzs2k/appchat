import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyle = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    maxWidth: '55%',
    margin: 'auto',
    border: '1px solid #bdc3c7',
    boxShadow: '1px 1px 5px #bdc3c7',
  },
  form: {
    padding: '2.5em',
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
      <h2 className={classes.title}>REGISTER</h2>
      <div className={classes.form}>
        <TextField
          name='name'
          label='UserName'
          id='margin-none'
          value={name}
          onChange={onChange}
          className={classes.textField}
          placeholder='Username...'
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
        />
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
        />
        <Button onClick={onSubmit} variant='contained' color='primary'>
          REGISTER
        </Button>
      </div>
    </div>
  );
};

export default Register;
