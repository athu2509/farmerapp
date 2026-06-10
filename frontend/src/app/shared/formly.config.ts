import { provideFormlyCore } from '@ngx-formly/core';
import { withFormlyMaterial } from '@ngx-formly/material';

export const formlyProviders = provideFormlyCore(withFormlyMaterial());
