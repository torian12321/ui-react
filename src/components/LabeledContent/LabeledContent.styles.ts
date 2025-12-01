import type { SxProps, Theme } from '@mui/material/styles';

type WrapperStylesProps = {
  inlined: boolean;
};

export const wrapperStyles = ({
  inlined,
}: WrapperStylesProps): SxProps<Theme> => ({
  flexGrow: 1,
  width: '100%',
  display: 'flex',
  flexDirection: inlined ? 'row' : 'column',
  alignItems: 'flex-start',
  gap: 0.5,

  lineHeight: 1.5,
  fontFamily: theme => theme.typography.fontFamily,
});

export const labelStyles: SxProps<Theme> = {
  margin: 0,

  color: theme => theme.palette.text.primary,
  fontWeight: theme => theme.typography.fontWeightBold,
  fontSize: theme => theme.typography.htmlFontSize,
};

export const valueStyles: SxProps<Theme> = {
  margin: 0,
  color: theme => theme.palette.text.secondary,
};
