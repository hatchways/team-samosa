import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';

export default function PageWrapper({ children }: any): JSX.Element {
  return (
    <Grid container component="main">
      <Grid item container justify="center">
        <Grid item xs={12}>
          <Box py={16}>{children}</Box>
        </Grid>
      </Grid>
    </Grid>
  );
}
