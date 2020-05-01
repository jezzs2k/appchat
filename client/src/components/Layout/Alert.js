import React, { useState, Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
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

const AlertNotification = ({ error }) => {
  const classes = useStyles();

  const [alerts, setAlert] = useState([]);

  useEffect(() => {
    if (error) {
      setAlert([...alerts, { type: 'error', msg: error.message }]);
      setTimeout(() => {
        setAlert([]);
      }, 2000);
    }

    // eslint-disable-next-line
  }, [error]);

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
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  error: state.auth.error,
});

export default connect(mapStateToProps, null)(AlertNotification);
