import React from 'react';
import ReactDOM from 'react-dom';
import '../utils/polyfills';

export declare type ComponentList = {
  [id: string]: React.FunctionComponent;
};

export default abstract class BaseModule {
  abstract getComponentDictionary(): ComponentList;

  public static render(
    pageModule: BaseModule,
    passProps = true,
    passChildren = false
  ): void {
    const componentsToRender: NodeListOf<HTMLElement> = document.querySelectorAll(
      '[data-react-component]'
    );
    const componentList: ComponentList = pageModule.getComponentDictionary();

    componentsToRender.forEach(element => {
      const currentReactElement = element.getAttribute('data-react-component');
      if (currentReactElement !== null) {
        try {
          ReactDOM.render(
            React.createElement(
              componentList[currentReactElement],
              passProps ? element.dataset : null,
              passChildren ? element.children : null
            ),
            element
          );
        } catch {
          console.error(
            'Chyba při načtení React komponenty, zkontrolujte název v placeholderu a zda je přidaná v daném modulu do componentList.'
          );
        }
      }
    });
  }

  public static addLazyRenderFunction(renderFunction: Function): void {
    (window as any).renderLazyReactModule = renderFunction;
    (window as any).unmountReactComponent = (container: Element): void => {
      ReactDOM.unmountComponentAtNode(container);
    };
  }
}
