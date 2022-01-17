import React from 'react';
import Box from '@mui/material/Box';
import { teal } from '@mui/material/colors';
import { Icon } from '@waweb/base-ui.elements.icon';

export const BasicIconUsage = () => (
  <Box
    sx={{
      '& > :not(style)': {
        m: 2,
      },
    }}
  >
    <Icon>add_circle</Icon>
    <Icon color="primary">add_circle</Icon>
    <Icon sx={{ color: teal[500] }}>add_circle</Icon>
    <Icon fontSize="small">add_circle</Icon>
    <Icon sx={{ fontSize: 30 }}>add_circle</Icon>
  </Box>
);
