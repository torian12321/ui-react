import { blue } from '@mui/material/colors';
import { alpha, Theme } from '@mui/material/styles';

export const themeTypographyVariants = {
  h1: {
    fontWeight: 600,
    fontSize: '2.074rem',
  },
  h2: {
    fontWeight: 600,
    fontSize: '1.728rem',
  },
  h3: {
    fontWeight: 600,
    fontSize: '1.44rem',
  },
  h4: {
    fontWeight: 600,
    fontSize: '1.2rem',
  },
  h5: {
    fontWeight: 600,
    fontSize: '1rem',
  },
  subtitle: {
    fontWeight: 400,
    fontSize: '1rem',
  },
  subtitle1: {
    fontWeight: 400,
    fontSize: '1rem',
  },
  subtitle2: {
    fontWeight: 400,
    fontSize: '0.875rem',
  },
  body1: {
    fontWeight: 400,
    fontSize: '1rem',
  },
  body2: {
    fontWeight: 400,
    fontSize: '0.875rem',
  },
  caption: {
    fontWeight: 400,
    fontSize: '0.75rem',
  },
  overline: {
    fontWeight: 400,
    fontSize: '0.75rem',
  },
  contentH2: {
    fontWeight: 700,
    fontSize: '2rem',
  },
  contentH3: {
    fontWeight: 700,
    fontSize: '1.7411rem',
  },
  contentH4: {
    fontWeight: 700,
    fontSize: '1.5157rem',
  },
  contentH5: {
    fontWeight: 700,
    fontSize: '1.3195rem',
  },
  contentH6: {
    fontWeight: 700,
    fontSize: '1.1487rem',
  },
  contentP: {
    fontWeight: 700,
    fontSize: '1rem',
  },
};

export const themeTypographyComponents = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
  contentH2: 'h2',
  contentH3: 'h3',
  contentH4: 'h4',
  contentH5: 'h5',
  contentH6: 'h6',
  contentP: 'p',
};

// This is currently not used, but it is a style that we needs to use across the project
export const components = (theme: Theme) => ({
  MuiTypography: {
    defaultProps: {
      variantMapping: {
        ...themeTypographyComponents,
      },
    },
  },
  MuiListItemButton: {
    styleOverrides: {
      root: () => ({
        '&.navLink': {
          borderLeft: `5px solid transparent`,
          '&.Mui-selected': {
            borderLeft: `5px solid ${theme.palette.primary.main}`,
            backgroundColor: `${alpha(theme.palette.primary.main, 0.08)}`,
            '&:hover': {
              backgroundColor: `${alpha(theme.palette.primary.main, 0.16)}`,
            },
            '&:focus': {
              backgroundColor: `${alpha(theme.palette.primary.main, 0.36)}`,
            },
            '& svg': {
              color: theme.palette.primary.main,
            },
          },
          '&:focus': {
            backgroundColor: `${alpha('#000000', 0.12)}`,
          },
          '& svg': {
            color: `${alpha('#000000', 0.6)}`,
          },
        },
      }),
    },
  },
  MuiIconButton: {
    styleOverrides: {
      root: () => ({
        '&.navLink': {
          borderRadius: '0',
          '&.Mui-selected': {
            backgroundColor: `${alpha(theme.palette.primary.main, 0.08)}`,
            borderLeft: `5px solid ${theme.palette.primary.main}`,
            '&:focus': {
              backgroundColor: `${alpha(theme.palette.primary.main, 0.36)}`,
            },
            '&:hover': {
              backgroundColor: `${alpha(theme.palette.primary.main, 0.16)}`,
            },
          },
          '& svg': {
            color: `${alpha('#000000', 0.6)}`,
          },
          '&:focus': {
            backgroundColor: `${alpha('#000000', 0.12)}`,
          },
        },
      }),
    },
  },
  MuiToolbar: {
    styleOverrides: {
      root: () => ({
        background: theme.palette.background.paper,
      }),
    },
  },
  MuiButtonGroup: {
    styleOverrides: {
      groupedOutlined: () => ({
        borderColor: theme.palette.grey[300],
        backgroundColor: theme.palette.background.paper,
        color: theme.palette.action.active,
        '&:disabled': {
          color: theme.palette.action.disabled,
        },
        '&:hover': {
          backgroundColor: theme.palette.grey[100],
          borderColor: theme.palette.grey[300],
        },
      }),
    },
  },
  MuiButton: {
    styleOverrides: {
      textInfo: () => ({
        color: theme.palette.primary.main,
      }),
    },
  },
  MuiLink: {
    styleOverrides: {
      root: () => ({
        color: blue[500],
      }),
    },
  },
  MuiChip: {
    styleOverrides: {
      root: () => ({
        '&.breadcrumb': {
          color: theme.palette.grey[900],
          '&:hover': {
            backgroundColor: theme.palette.background.paper,
            color: theme.palette.getContrastText(
              theme.palette.background.paper,
            ),
          },
        },
      }),
    },
  },
});
