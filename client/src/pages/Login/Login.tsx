import { useHistory } from 'react-router-dom';
import { FormikHelpers } from 'formik';
import ModalPaper from '../../components/Modal/ModalPaper/ModalPaper';
import login from '../../helpers/APICalls/login';
import LoginForm from './LoginForm/LoginForm';
import { useAuth } from '../../context/useAuthContext';
import { useSnackBar } from '../../context/useSnackbarContext';
import { getUProfile } from '../../helpers/APICalls/getUProfile';

export default function Login(): JSX.Element {
  const history = useHistory();

  const { updateLoginContext, updateProfileContext } = useAuth();
  const { updateSnackBarMessage } = useSnackBar();

  const handleSubmit = (
    { email, password }: { email: string; password: string },
    { setSubmitting }: FormikHelpers<{ email: string; password: string }>,
  ) => {
    login(email, password).then(async (data) => {
      if (data.error) {
        setSubmitting(false);
        updateSnackBarMessage(data.error.message);
        console.log('data.error: ', data.error);
      } else if (data.success) {
        const user = data.success;
        await getUProfile().then((res) => {
          if (res.success) {
            updateProfileContext(res.success);
          }
          updateLoginContext(user);
        });
        history.push('/dashboard');
      } else {
        // should not get here from backend but this catch is for an unknown issue
        console.error({ data });

        setSubmitting(false);
        updateSnackBarMessage('An unexpected error occurred. Please try again');
      }
    });
  };

  return (
    <ModalPaper title="Welcome back!">
      <LoginForm handleSubmit={handleSubmit} />
    </ModalPaper>
  );
}
