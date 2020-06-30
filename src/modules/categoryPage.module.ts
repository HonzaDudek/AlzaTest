import BaseModule, { ComponentList } from './base.module';

export class CategoryPage extends BaseModule {
  getComponentDictionary(): ComponentList {
    return {
      // TODO: Přidat komponenty pro CategoryPage
    };
  }
}

BaseModule.render(new CategoryPage(), true, true);
