import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { deepOrange } from '@mui/material/colors';

export default function AvatarComponent() {
  return (
    <Stack direction="row" spacing={2}>
      <Avatar alt="O" src="/static/images/avatar/1.jpg" />
      <Avatar sx={{ bgcolor: deepOrange[800] }}>N</Avatar>
    </Stack>
  );
}