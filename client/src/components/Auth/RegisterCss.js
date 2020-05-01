import { makeStyles } from '@material-ui/core/styles';

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

export default useStyle;
