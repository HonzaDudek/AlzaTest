import React from 'react';
import CSSClasses from './Accordion.module.scss';
import styled from 'styled-components';
import IconSVG from '../../atoms/iconSVG/iconSVG';
import { getImageUrl } from '../../../../utils/getImageUrl';

export type AccordionType = {
  title: string;
  content: string;
  index?: number;
};
export const StyledAccordionItem = styled.div`
  .accordion__title {
    align-items: center;

    .icn {
      margin-right: 10px;
      align-self: flex-start;
      width: 20px;
      height: 20px;
    }
  }
`;

const AccordionItem: React.FC<AccordionType> = props => {
  return (
    <StyledAccordionItem className={CSSClasses.accordion}>
      <input
        type='checkbox'
        className={CSSClasses.accordionCheckbox}
        id={`accChck${props.index}`}
      />
      <label
        className={`${CSSClasses.title} accordion__title`}
        htmlFor={`accChck${props.index}`}
      >
        <IconSVG
          src={getImageUrl('Styles/images/svg/l_arrow_up.svg')}
          width={20}
          height={20}
          className='icn'
        />
        {props.title}
      </label>
      <div className={`${CSSClasses.content} accordion__content`}>
        {props.content}
      </div>
    </StyledAccordionItem>
  );
};

export default AccordionItem;
