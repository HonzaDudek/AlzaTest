import React, { FunctionComponent } from 'react';
import AccordionItem, {
  AccordionType,
} from '../../molecules/Accordion/AccordionItem';

type AccordionListType = {
  items: AccordionType[];
};

const AccordionList: FunctionComponent<AccordionListType> = props => {
  return (
    <>
      {typeof props.items !== 'undefined' &&
        props.items.map(({ title, content }, index) => {
          return (
            <AccordionItem
              key={`itemKey${index}`}
              title={title}
              content={content}
              index={index}
            />
          );
        })}
    </>
  );
};

export default AccordionList;
