import type { JSX } from 'react';

import { Button, Tooltip } from 'src/components';
import { useLocalization } from 'src/localization';

import type { ButtonProps } from './ButtonCreateFilter.types';
import { DATA_TEST } from './dataTest';

export const CreateFilterButton = ({
  tooltipText = '',
  disabled = false,
  loading = false,
  onClick,
}: ButtonProps): JSX.Element => {
  const l10n = useLocalization();

  return (
    <Tooltip title={tooltipText} type={disabled ? 'error' : 'default'}>
      <Button
        size='small'
        onClick={onClick}
        disabled={disabled}
        loading={loading}
        data-testid={DATA_TEST.BUTTON}
        primary
      >
        {l10n('components.buttonCreateFilter.button')}
      </Button>
    </Tooltip>
  );
};
