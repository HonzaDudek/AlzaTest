import BaseModule from './base.module';
import { DetailPageApp } from '../app/pages/detailPage/detailPageApp';

export class DetailPage extends BaseModule {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  getComponentDictionary(): any {
    return {
      // TODO: Přidat komponenty pro DetailPage
      DetailPageComponent: DetailPageApp,
    };
  }
}

BaseModule.render(new DetailPage());
