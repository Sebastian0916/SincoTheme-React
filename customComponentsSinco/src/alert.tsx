import { AlertTitle } from '@mui/material';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

export default function AlertComponent() {
  return (
    <Stack sx={{ width: '60%' }} spacing={2}>
      <Alert severity="error">This is an error alert </Alert>

      <Alert severity="error">
        <AlertTitle>Error</AlertTitle>
        This is an error alert — <strong>check it out!</strong>
      </Alert>
    </Stack>
  );
}