import React, { Fragment, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyle = makeStyles((theme) => ({
  root: {
    display: flex,
    flexWrap: wrap,
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
    email: '',
    password: '',
  });

  const { name, phone, email, password } = state;

  return (
    <div className={classes.root}>
      <Fragment>
        <TextField label='Name' id='margin-none' defaultValue='' />
      </Fragment>
    </div>
  );
};

export default Register;
