import type { Meta } from '@storybook/react-vite';

import { Button } from 'src/components';
import { docImport } from 'src/utils/storybook';

import { Provider, useHideAppLoader, useShowAppLoader } from './';

const meta: Meta<typeof Provider> = {
  title: 'Contexts/Provider',
  component: Provider,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: docImport('contexts', 'Provider'),
      },
    },
  },
};

export default meta;
type Story = Meta<typeof Provider>;

const ProviderLoaderExample = () => {
  const delay = (ms: number) => new Promise(res => setTimeout(res, ms));
  const hideAppLoader = useHideAppLoader();
  const showAppLoader = useShowAppLoader();

  /** Mock a function that happens on BE and takes long to execute */
  const doLoadingAction = async () => {
    showAppLoader();

    await delay(3000);
    hideAppLoader();
  };

  /** The same, but with a message on the loader */
  const doLoadingActionWithMessage = async () => {
    showAppLoader('Processing 12.534.567.890 files, please wait');

    await delay(3000);
    hideAppLoader();
  };

  return (
    <Button.Group direction='column'>
      <Button primary onClick={doLoadingAction}>
        Show App Loader
      </Button>
      <Button primary onClick={doLoadingActionWithMessage}>
        Show App Loader with message
      </Button>
    </Button.Group>
  );
};

export const AppLoader: Story = {
  render: () => <ProviderLoaderExample />,
};
