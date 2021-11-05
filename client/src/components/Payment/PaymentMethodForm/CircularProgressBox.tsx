import Box from '@material-ui/core/Box';
import { CircularProgress } from '@material-ui/core';

export default function CircularProgressBox(): JSX.Element {
  return (
    <Box textAlign="center" paddingTop={6}>
      <CircularProgress />
    </Box>
  );
}
