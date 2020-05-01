import React, { Fragment } from 'react';
import Avatar from '@material-ui/core/Avatar';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import LocalPhoneIcon from '@material-ui/icons/LocalPhone';
import DuoIcon from '@material-ui/icons/Duo';

const MessengerTop = () => {
  return (
    <Fragment>
      <div style={classes.title}>
        <Avatar alt='HIEU' src='htsdd00' />
        <div style={classes.text}>
          <h2>Vu Thanh Hieu</h2>
          <p style={{ fontSize: '0.8em', color: 'rgba(0, 0, 0, 0.54)' }}>
            Hoạt động 10 phút trước
          </p>
        </div>
      </div>

      <div style={classes.featureMess}>
        <LocalPhoneIcon style={classes.icon} />
        <DuoIcon style={classes.icon} />
        <ErrorOutlineIcon style={classes.icon} />
      </div>
    </Fragment>
  );
};

const classes = {
  featureMess: {
    display: 'inline-flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingRight: '20px',
  },
  title: {
    display: 'flex',
    width: '100%',
    alignItems: 'center',
    paddingLeft: '10px',
  },
  icon: {
    margin: '0 5px',
    cursor: 'pointer',
    fontSize: '1.7em',
    color: '#3578E5',
  },
  text: {
    marginLeft: '10px',
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  },
};

export default MessengerTop;
