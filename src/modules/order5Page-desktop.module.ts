import BaseModule from './base.module';
import { Order5ShareApp } from '../app/pages/order5/order5ShareApp';

export class Order5PageDesktop extends BaseModule {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  getComponentDictionary(): any {
    return {
      Order5PageComponent: Order5ShareApp,
    };
  }
}

BaseModule.render(new Order5PageDesktop());
