import { useCallback } from 'react';
import MuiIconCopy from '@mui/icons-material/ContentCopy';
import MuiIconButton from '@mui/material/IconButton';

import { Tooltip } from 'src/components';
import { showMessageInfo } from 'src/contexts';
import { useLocalization } from 'src/localization';

import { CopyButtonProps } from './CopyButton.types';

export const CopyButton = ({
  'data-testid': dataTestid,
  text,
  sx,
  disabled = false,
}: CopyButtonProps) => {
  const l10n = useLocalization();

  const isDisabled = disabled || !text.length;

  const copyAction = useCallback(() => {
    if (isDisabled) return;

    navigator.clipboard.writeText(text);
    showMessageInfo(l10n('components.copyButton.successMessage'), {
      duration: 3000,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text, isDisabled]);

  return (
    <Tooltip title={l10n('components.copyButton.defaultTooltip')}>
      <MuiIconButton
        data-testid={dataTestid}
        size='small'
        sx={sx}
        disabled={isDisabled}
        onClick={copyAction}
      >
        <MuiIconCopy fontSize='inherit' />
      </MuiIconButton>
    </Tooltip>
  );
};
