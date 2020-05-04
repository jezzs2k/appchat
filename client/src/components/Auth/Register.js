import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import { register } from '../../redux/action/authAction';

import useStyle from './RegisterCss';

const Register = ({ register, isAuthenticated, history }) => {
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
    register({ ...state });
    setState({ name: '', phone: '', email: '', password: '', age: 18 });
  };

  useEffect(() => {
    if (isAuthenticated || localStorage.token) {
      history.push('/');
    }
    // eslint-disable-next-line
  }, [isAuthenticated]);
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

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});
export default connect(mapStateToProps, { register })(Register);
