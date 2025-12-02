import type { TransferListItem } from './TransferList.types';

export const choices: TransferListItem[] = [
  { value: 'afghanistan', label: 'Afghanistan' },
  { value: 'australia', label: 'Australia' },
  { value: 'bangladesh', label: 'Bangladesh' },
  { value: 'bhutan', label: 'Bhutan' },
  { value: 'canada', label: 'Canada' },
  { value: 'china', label: 'China' },
  { value: 'france', label: 'France' },
  { value: 'germany', label: 'Germany' },
  { value: 'greece', label: 'Greece' },
  { value: 'india', label: 'India' },
  { value: 'indonesia', label: 'Indonesia' },
  { value: 'iraq', label: 'Iraq' },
  { value: 'ireland', label: 'Ireland' },
  { value: 'italy', label: 'Italy' },
  { value: 'japan', label: 'Japan' },
  { value: 'korea', label: 'Korea' },
  { value: 'malaysia', label: 'Malaysia' },
  { value: 'maldives', label: 'Maldives' },
  { value: 'nepal', label: 'Nepal' },
  { value: 'new-zealand', label: 'New Zealand' },
  { value: 'pakistan', label: 'Pakistan' },
  { value: 'philippines', label: 'Philippines' },
  { value: 'portugal', label: 'Portugal' },
  { value: 'south-africa', label: 'South Africa' },
  { value: 'spain', label: 'Spain' },
  { value: 'sri-lanka', label: 'Sri Lanka' },
  { value: 'syria', label: 'Syria' },
  { value: 'thailand', label: 'Thailand' },
  { value: 'turkey', label: 'Turkey' },
  { value: 'uk', label: 'United Kingdom' },
  { value: 'usa', label: 'United States' },
  { value: 'vietnam', label: 'Vietnam' },
];

export const choicesLongList: TransferListItem[] = [...Array(500).keys()].map(
  item => ({
    value: `item_${item}`,
    label: `Item - ${item}`,
  }),
);
