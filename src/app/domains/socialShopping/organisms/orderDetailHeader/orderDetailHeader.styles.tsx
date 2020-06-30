import styled from 'styled-components';
import { baseTheme } from '../../../../../utils/theme';

const StyledOrderDetailHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  a,
  span {
    font-size: 14px;
  }

  .product-title {
    white-space: nowrap;
    overflow: hidden;
    line-height: 21px;
    text-overflow: ellipsis;
  }

  .product-title__link--product {
    text-decoration: none;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    display: block;
    color: ${baseTheme.availabilityColors.avl1};
  }

  .product-availability {
    padding: 5px;
    color: ${baseTheme.colors.grey5};
  }

  .product-count {
    width: auto;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${baseTheme.colors.grey5};
  }

  .product-remove {
    opacity: 0.3;
    text-align: center;
  }
`;

export const StyledOrderDetailHeaderMobile = styled(StyledOrderDetailHeader)`
  min-height: 120px;
  flex-wrap: wrap;

  .product-image {
    width: 10%;
  }

  .product-title {
    width: 88%;
    text-align: center;
  }

  .product-availability {
    width: auto;
    text-align: left;
  }

  .product-count {
    width: 85px;
    justify-content: flex-end;
  }

  .product-count__value {
    width: auto;
    margin-right: 10px;
  }

  .product-price-per-item {
    width: auto;
  }

  .product-price {
    padding: 5px;

    > div {
      margin-left: auto;
    }
  }

  .product-remove {
    position: absolute;
    right: 6px;
    top: 6px;
  }
`;

export const StyledOrderDetailHeaderDesktop = styled(StyledOrderDetailHeader)`
  height: 90px;

  .product-image {
    margin-left: 10px;
    height: 50px;
    width: 50px;
  }

  .product-title {
    width: 44%;
    margin-left: 10px;
  }

  .product-availability {
    width: 115px;
    margin-left: 10px;
    padding: 5px;
    text-align: center;
  }

  .product-count {
    width: 115px;
    margin-left: 10px;
    height: 100%;
  }

  .product-count__value {
    text-align: left;
    width: 67px;
    margin-left: 10px;
  }

  .product-price-per-item {
    margin-left: 15px;
    width: 115px;
  }

  .product-price {
    margin-left: 10px;
    width: 115px;

    > div {
      margin-left: auto;
    }
  }

  .product-remove {
    margin-left: 15px;
    text-align: left;
    width: 24px;

    &:hover {
      opacity: 1;
    }
  }
`;
