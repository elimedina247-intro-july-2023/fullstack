import { createActionGroup, emptyProps } from '@ngrx/store';

export const FeatureEvents = createActionGroup({
  source: 'Todos Feature',
  events: {
    'Feature Entered': emptyProps(),
  },
});
