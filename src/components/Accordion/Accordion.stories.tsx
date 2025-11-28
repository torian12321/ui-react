import type { JSX } from 'react';
import { useState } from 'react';
import MuiDeleteIcon from '@mui/icons-material/Delete';
import type { Meta, StoryObj } from '@storybook/react-vite';

import { Button } from 'src/components';
import { docImport } from 'src/utils/storybook';

import type { AccordionProps } from './Accordion.types';
import {
  Accordion,
  AccordionBody,
  AccordionGroup,
  AccordionHeader,
  useAccordionRef,
} from './';

const meta = {
  title: 'Components/Accordion',
  component: Accordion,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: docImport('components', 'Accordion'),
      },
    },
  },
} satisfies Meta<typeof Accordion>;

export default meta;
type Story = StoryObj<AccordionProps>;

export const Default: Story = {
  render: () => (
    <Accordion>
      <AccordionHeader title='Accordion Header' />
      <AccordionBody>Accordion Body</AccordionBody>
    </Accordion>
  ),
};

const ExternalAccordionRefComponent = (): JSX.Element => {
  const accordionRef = useAccordionRef();

  return (
    <>
      <Button.Group sx={{ marginBottom: 2 }}>
        <Button onClick={() => accordionRef.current?.expand()}>Open</Button>
        <Button onClick={() => accordionRef.current?.collapse()}>Close</Button>
        <Button primary onClick={() => accordionRef.current?.toggle()}>
          Toggle
        </Button>
      </Button.Group>

      <Accordion ref={accordionRef}>
        <AccordionHeader title='Accordion Header' />
        <AccordionBody>Accordion Body</AccordionBody>
      </Accordion>
    </>
  );
};

export const ExternallyControlled: Story = {
  render: ExternalAccordionRefComponent,
};

const GroupedAccordionsComponent = (): JSX.Element => {
  const [lastIndex, setLastIndex] = useState(3);
  const [accordionsArr, setAccordionsArr] = useState([1, 2, 3]);

  return (
    <>
      <Button
        primary
        sx={{ marginBottom: 2 }}
        onClick={() => {
          const newIndex = lastIndex + 1;
          setLastIndex(newIndex);
          setAccordionsArr([...accordionsArr, newIndex]);
        }}
      >
        Add Accordion
      </Button>

      <AccordionGroup>
        {accordionsArr.map(acc => (
          <Accordion key={acc}>
            <AccordionHeader title={`Accordion ${acc}`}>
              <AccordionHeader.Button
                label='Delete'
                icon={MuiDeleteIcon}
                onClick={() =>
                  setAccordionsArr(accordionsArr.filter(a => a !== acc))
                }
              />
            </AccordionHeader>
            <AccordionBody>Accordion Body</AccordionBody>
          </Accordion>
        ))}
      </AccordionGroup>
    </>
  );
};

export const GroupedAccordions: Story = {
  render: GroupedAccordionsComponent,
};
