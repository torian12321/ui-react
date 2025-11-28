import type { JSX } from 'react';

import { Button, CompanyLogo } from 'src/components';
import { useLocalization } from 'src/localization';

import { Card, logoStyles, Title } from './LoginCard.styles';
import type { LoginCardProps } from './LoginCard.types';

export const LoginCard = ({
  btnText,
  btnOnClick,
  disabled = false,
}: LoginCardProps): JSX.Element => {
  const l10n = useLocalization();

  const btnLabel = btnText ?? l10n('views.login.btnText');

  return (
    <Card>
      <Title>{l10n('views.login.title')}</Title>
      <Button primary onClick={btnOnClick} disabled={disabled}>
        {btnLabel}
      </Button>
      <CompanyLogo sx={logoStyles} />
    </Card>
  );
};
