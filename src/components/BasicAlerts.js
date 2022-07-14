import * as React from 'react';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

export default function BasicAlerts({verificador}) {

  return (
    <Stack sx={{ width: '100%' , paddingTop:2 }} spacing={2}>
      <Alert onClose={verificador}>Esta petición ha sido exitosa!</Alert>
    </Stack>
  );
}