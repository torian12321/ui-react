import type { Theme } from '@mui/material/styles';
import { styled } from '@mui/material/styles';

import type { MessageSeverity } from './FieldWrapper.types';

export const Wrapper = styled('div')(({ theme }) => ({
  display: 'block',
  width: '100%',
  padding: theme.spacing(1),
  boxSizing: 'border-box',
}));

type FieldContainerProps = {
  inlineDisplay?: boolean;
};
export const FieldContainer = styled('div', {
  shouldForwardProp: prop => !['inlineDisplay'].includes(prop as string),
})<FieldContainerProps>(({ theme, inlineDisplay = false }) => ({
  display: 'flex',
  flexDirection: 'column',
  padding: 0,

  ...(inlineDisplay && {
    flexDirection: 'row',

    Label: {
      minWidth: '140px',
      maxWidth: '240px',
      width: '20%',
      lineHeight: 1.2,
      paddingTop: theme.spacing(1),
    },
  }),
}));

export const HelperTextWrapper = styled('ul')(({ theme }) => ({
  listStyle: 'none',
  padding: 0,
  margin: `0 ${theme.spacing(0.5)}`,
  boxSizing: 'border-box',
}));

const getTextColor = (
  theme: Theme,
  severity: MessageSeverity = 'default',
): string => {
  const textColor: Record<MessageSeverity, string> = {
    success: theme.palette.success.dark,
    info: theme.palette.info.dark,
    warning: theme.palette.warning.main,
    error: theme.palette.error.main,
    default: theme.palette.text.secondary,
  };

  return textColor[severity];
};

type HelperMessageProps = {
  severity?: MessageSeverity;
};
export const HelperMessage = styled('li', {
  shouldForwardProp: prop => prop !== 'severity',
})<HelperMessageProps>(({ theme, severity }) => ({
  fontSize: '12px',
  margin: `${theme.spacing(0.5)} ${theme.spacing(1.5)} 0`,
  color: getTextColor(theme, severity),

  '&:first-letter': {
    textTransform: 'uppercase',
  },
}));

export const FieldBox = styled('div')({
  position: 'relative',
  textAlign: 'left',
  display: 'flex',
  flexDirection: 'column',
  flexGrow: 1,
  padding: 0,
  margin: 0,
});

export const Label = styled('label')(({ theme }) => ({
  marginBottom: '2px',
  color: theme.palette.text.primary,
  fontWeight: 'bold',
  lineHeight: 1,

  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
}));
export const LabelAsterisk = styled('span')(({ theme }) => ({
  color: theme.palette.error.main,
  marginLeft: theme.spacing(0.5),
  '&:after': {
    content: '"*"',
  },
}));

export const LabelText = styled('span')({
  marginRight: 1.5,
  '&:first-letter': {
    textTransform: 'uppercase',
  },
});
export const LabelTooltipWrapper = styled('span')({
  transform: 'scale(.8)',
  cursor: 'pointer',
  opacity: 0.6,
  transition: 'opacity .6s',

  '&:hover': {
    opacity: 1,
  },
});
