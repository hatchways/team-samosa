import { FunctionComponent } from 'react';
import Button from '@material-ui/core/Button';
import useStyles from './useStyles';

interface Props {
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const ModalButton: FunctionComponent<Props> = (props: React.PropsWithChildren<Props>): JSX.Element => {
  const classes = useStyles();

  return (
    <Button
      type="submit"
      size="large"
      variant="contained"
      color="primary"
      className={classes.submit}
      onClick={props.onClick}
    >
      {props.children}
    </Button>
  );
};

export default ModalButton;
