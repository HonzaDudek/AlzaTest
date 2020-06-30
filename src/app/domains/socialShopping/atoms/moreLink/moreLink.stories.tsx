import React from 'react';
import { CSFStory } from '../../pages/orderDetail/orderDetailMobile.stories';
import MoreLink from './moreLink';

export default {
  component: MoreLink,
  title: 'Domains/Social Shopping/Atoms/More Link',
  parameters: {
    viewport: { defaultViewport: 'desktop' },
  },
};

export const MoreLinkExamples: CSFStory = () => {
  return (
    <>
      <MoreLink linkHref={'#'} linkText={'Default size - 14px'} /> <br />
      <MoreLink size='18px' linkHref={'#'} linkText={'Custom size - 18px'} />
      <br />
      <MoreLink size='22px' linkHref={'#'} linkText={'Custom size - 22px'} />
    </>
  );
};
