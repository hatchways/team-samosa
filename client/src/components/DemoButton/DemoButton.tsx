import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import useStyles from './useStyles';
import login from '../../helpers/APICalls/login';
import { useAuth } from '../../context/useAuthContext';
import { useSnackBar } from '../../context/useSnackbarContext';
import { CircularProgress } from '@material-ui/core';
import ModalButton from '../Modal/ModalButton/ModalButton';

const demoUser = { email: 'user@demo.com', password: 'password' };

export default function DemoButton(): JSX.Element {
  const classes = useStyles();
  const history = useHistory();

  const [isSubmitting, setIsSubmitting] = useState(false);

  const { updateLoginContext } = useAuth();
  const { updateSnackBarMessage } = useSnackBar();

  const handleSubmit = ({ email, password }: { email: string; password: string }) => {
    setIsSubmitting(true);
    login(email, password).then((data) => {
      if (data.error) {
        setIsSubmitting(false);
        updateSnackBarMessage(data.error.message);
      } else if (data.success) {
        updateLoginContext(data.success);
        history.push('/dashboard');
      } else {
        // should not get here from backend but this catch is for an unknown issue
        console.error({ data });

        setIsSubmitting(false);
        updateSnackBarMessage('An unexpected error occurred. Please try again');
      }
    });
  };

  return (
    <ModalButton
      onClick={() => {
        handleSubmit(demoUser);
      }}
    >
      {isSubmitting ? <CircularProgress className={classes.circularProgess} /> : 'Login Demo User'}
    </ModalButton>
  );
}
