import type { DeepPartial, PathsToStringProps } from 'src/types/utils';

import localizationEn from './en/localization.en';

export type Localization = typeof localizationEn;
export type PartialLocalization = DeepPartial<Localization>;
export type LocalizationKey = PathsToStringProps<Localization>;
