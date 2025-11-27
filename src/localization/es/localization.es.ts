import type { PartialLocalization } from 'src/localization';

import common from './common.localization';
import components from './components.localization';
import layout from './layout.localization';
import views from './views.localization';

export default {
  layout,
  common,
  components,
  views,
} satisfies PartialLocalization;
