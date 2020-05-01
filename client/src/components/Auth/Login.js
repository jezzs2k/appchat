import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

import { login } from '../../action/authAction';

const useStyle = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    margin: 'auto',
    maxWidth: '100%',
    [theme.breakpoints.up('sm')]: {
      maxWidth: '50%',
    },
  },
  title: {
    textAlign: 'center',
    width: '100%',
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    color: '#3f51b5',
    paddingTop: '1em',
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
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: '26ch',
    margin: 0,
  },
  link: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    color: '#3f51b5',
    textDecoration: 'none',
    marginTop: '20px',
  },
  buttonType: {
    marginTop: '10px',
  },
}));

const Login = ({ login, history, isAuthenticated }) => {
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
    login({ email, password });
    setState({ email: '', password: '' });
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
        <h2 className={classes.title}>LOGIN</h2>
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
          required
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
          required
        />
        <Button
          onClick={onSubmit}
          className={classes.buttonType}
          variant='contained'>
          Login
        </Button>
        <Button
          onClick={onSubmit}
          className={classes.buttonType}
          variant='contained'
          color='secondary'>
          Google+
        </Button>
        <Button
          onClick={onSubmit}
          className={classes.buttonType}
          variant='contained'
          color='primary'>
          Facebook
        </Button>
        <Link className={classes.link} to='/register'>
          Create new account !
        </Link>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { login })(Login);
