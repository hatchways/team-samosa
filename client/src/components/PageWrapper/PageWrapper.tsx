import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';

export default function PageWrapper({ children }: any): JSX.Element {
  return (
    <Container component="main">
      <Box my={16}>{children}</Box>
    </Container>
  );
}
