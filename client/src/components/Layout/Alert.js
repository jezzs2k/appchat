import React, { useState, Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Alert from '@material-ui/lab/Alert';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
    position: 'fixed',
    top: '66px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
  },
  alert: {
    maxWidth: '300px',
  },
}));

const AlertNotification = () => {
  const classes = useStyles();

  const [alerts, setAlert] = useState([]);

  return (
    <Fragment>
      {alerts.length > 0 && (
        <div className={classes.root}>
          {alerts.map((item, i) => (
            <Alert className={classes.alert} severity={item.type} key={i}>
              {item.msg}
            </Alert>
          ))}
        </div>
      )}
      <button
        onClick={() => {
          setAlert([{ type: 'success', msg: 'Login successfully' }]);
          setTimeout(() => {
            setAlert([]);
          }, 2000);
        }}>
        TEST ALERT
      </button>
    </Fragment>
  );
};

export default AlertNotification;
