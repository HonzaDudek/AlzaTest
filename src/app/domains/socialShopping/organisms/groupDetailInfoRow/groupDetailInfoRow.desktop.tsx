import React from 'react';
import AccordionList from '../../../../sharedComponents/organisms/AccordionList/AccordionList';
import AlzaText from '../../../../sharedComponents/atoms/alzaText/alzaText';
import { baseTheme } from '../../../../../utils/theme';
import { GroupDetailTexts } from '../../pages/groupDetail/groupDetail.data';
import { HowTo } from '../../../../../utils/apiDataTypes';
import { InfoPanel } from '../../molecules/infoPanel/infoPanel';
import { PartlyBoldText } from '../../../../sharedComponents/atoms/partlyBoldText/partlyBoldText';
import {
  LinerBorder,
  StyledFAQContent,
  StyledInfoWrapper,
} from '../../pages/groupDetail/groupDetail.styles';

type GroupDetailInfoRowProps = {
  texts: GroupDetailTexts;
  isMobile?: boolean;
};

const GroupDetailInfoRow: React.FC<GroupDetailInfoRowProps> = ({
  texts,
  isMobile,
}: GroupDetailInfoRowProps) => {
  return (
    <>
      {texts.howTo && (
        <AlzaText
          size={isMobile ? '21px' : '26px'}
          className='howTo__title'
          color={baseTheme.colors.dark1}
        >
          <PartlyBoldText
            boldText={texts.howToTitleDecorated ?? ''}
            regularText={texts.howToTitle ?? ''}
          />
        </AlzaText>
      )}

      <StyledInfoWrapper>
        {texts.howTo?.map((howTo: HowTo, index: number) => {
          return (
            <InfoPanel index={index + 1} icon={howTo.image} key={index}>
              {
                <PartlyBoldText
                  boldText={howTo.decorated}
                  regularText={howTo.description}
                />
              }
            </InfoPanel>
          );
        })}
      </StyledInfoWrapper>
      <LinerBorder />
      <StyledFAQContent>
        <AlzaText
          size={isMobile ? '21px' : '26px'}
          centered={true}
          color={baseTheme.sectionColors.greyAutoMoto}
          className='faq__header'
        >
          {texts.faqTitle}
        </AlzaText>
        <AccordionList
          // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
          // @ts-ignore
          items={texts.faq?.map(({ answer, question }) => ({
            title: question,
            content: answer,
          }))}
        />
      </StyledFAQContent>
    </>
  );
};

export default GroupDetailInfoRow;
