import BaseModule from './base.module';
import BackOfficePage from '../app/pages/backOffice/backOffice';

export class AngularPage extends BaseModule {
  getComponentDictionary(): any {
    return {
      BackOfficePageComponent: BackOfficePage,
    };
  }
}

BaseModule.addLazyRenderFunction(() => {
  BaseModule.render(new AngularPage());
});
