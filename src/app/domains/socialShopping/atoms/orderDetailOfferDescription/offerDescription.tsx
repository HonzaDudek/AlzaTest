import React from 'react';
import styled from 'styled-components';
import { baseTheme, FontWeight } from '../../../../../utils/theme';
import { GroupStatus } from '../../../../services/socialShopping/groupDetail.data';

type OfferDescriptionProps = {
  status: number;
  isMobile?: boolean;
  className?: string;
  description?: string;
};

const StyledOfferDescription = styled.p`
  width: 100%;

  span {
    font-weight: ${FontWeight.Bold};
  }

  .active {
    color: ${baseTheme.colors.blueSecondary};
  }

  .expired {
    color: ${baseTheme.colors.black};
  }
`;

// TODO: Texts will be provided by API, for now hardcoded as we need to find a way how to style texts in a response
export const OfferDescription: React.FC<OfferDescriptionProps> = ({
  status,
  className,
  description,
}: OfferDescriptionProps) => {
  if (status === GroupStatus.Expired) {
    return (
      <StyledOfferDescription className={className}>
        {description}
      </StyledOfferDescription>
    );
  } else if (status === GroupStatus.Active) {
    return (
      <StyledOfferDescription className={className}>
        {description}
      </StyledOfferDescription>
    );
  } else {
    return null;
  }
};
