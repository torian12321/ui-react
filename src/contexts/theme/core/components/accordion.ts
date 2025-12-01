import type { Components, Theme } from '@mui/material/styles';
import { alpha } from '@mui/material/styles';

const MuiAccordion: Components<Theme>['MuiAccordion'] = {
  styleOverrides: {
    root: ({ theme }) => ({
      overflow: 'hidden',

      border: `1px solid`,
      borderColor: theme.palette.divider,
      borderRadius: theme.shape.borderRadius,
      background: theme.palette.background.paper,

      '&[data-highlighted="true"]': {
        borderColor: alpha(theme.palette.primary.main, 0.4),

        '.MuiAccordionSummary-root': {
          background: alpha(theme.palette.primary.main, 0.2),
        },
      },
    }),
  },
};

// Header styles
const MuiAccordionSummary: Components<Theme>['MuiAccordionSummary'] = {
  styleOverrides: {
    root: ({ theme }) => ({
      flexDirection: 'row-reverse',
      transition: 'background .4s, opacity .4s',
      background: theme.palette.background.default,
    }),
    content: {
      margin: 0,
      padding: 2,
    },
  },
};

// Body styles
const MuiAccordionDetails: Components<Theme>['MuiAccordionDetails'] = {
  styleOverrides: {
    root: ({ theme }) => ({
      background: theme.palette.background.paper,
      padding: theme.spacing(2),
    }),
  },
};

export const accordion = {
  MuiAccordion,
  MuiAccordionSummary,
  MuiAccordionDetails,
};
