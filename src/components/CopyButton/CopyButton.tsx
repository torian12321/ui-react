import { useCallback } from 'react';
import MuiButton from '@mui/material/Button';

import { showMessageInfo } from 'src/contexts';
import { useLocalization } from 'src/localization';

import { copyButtonStyles } from './CopyButton.styles';
import { CopyButtonProps } from './CopyButton.types';

export const CopyButton = ({
  text,
  label,
  variant = 'text',
  color = 'info',
  size = 'medium',
}: CopyButtonProps) => {
  const l10n = useLocalization();

  const copyAction = useCallback(() => {
    navigator.clipboard.writeText(text);
    showMessageInfo(l10n('components.copyButton.successMessage'), {
      duration: 3000,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text]);

  return (
    <MuiButton
      disableElevation
      sx={copyButtonStyles}
      variant={variant}
      onClick={copyAction}
      color={color}
      size={size}
    >
      {label ?? l10n('components.copyButton.defaultLabel')}
    </MuiButton>
  );
};
