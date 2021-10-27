import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import NavBar from '../../components/Navbar/NavBar';
import Container from '@material-ui/core/Container';

export default function Welcome(): JSX.Element {
  return (
    <>
      <NavBar elevation={0} color="transparent" />
      <Container>
        <Box my={16}>
          <Typography variant="h2">Find the care your dog deserves</Typography>
        </Box>
      </Container>
    </>
  );
}
