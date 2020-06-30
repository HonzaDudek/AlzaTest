import React, { FunctionComponent } from 'react';
import { ThemeProvider } from 'styled-components';

export const baseTheme = {
  colors: {
    transparent: 'transparent',
    white: '#ffffff',
    grey0: '#f8f8f8',
    grey1: '#f4f5f5',
    grey2: '#e8e8e8',
    grey3: '#e0e0e0',
    grey4: '#c6c6c6',
    grey5: '#a4a4a4',
    grey6: '#535252',
    grey50: '#222222',
    dark1: '#262F38',
    black: '#000000',

    blueLight: '#ECF5FE',
    blueBorder: '#B5E4FE',
    blueSecondary: '#0094E7',
    blueSecondaryDarker: '#0383CB',
    bluePrimary: '#00275B',
    bluePrimaryLight: '#1653A4',

    greenLight: '#F2FDE5',
    greenBorder: '#D3ECB6',
    greenPrimaryLight: '#B1DA0F',
    greenPrimary: '#A1C900',
    greenSecondary: '#84B517',

    yellowLight: '#FFF9D7',
    yellowBorder: '#EAE3B8',
    yellow: '#FFD538',

    goldLight: '#FBF7EE',
    goldPrimaryLight: '#C7B276',
    goldPrimary: '#b7a265',

    orangeLight: '#FFF3EC',
    orangeBorder: '#FFDAC5',
    orangeSecondary: '#F29400',
    orangePrimaryLight: '#FA8F42',
    orangePrimary: '#FD7528',

    redLight: '#FFEEEE',
    redBorder: '#F9CDCD',
    redPrimaryLight: '#E9242E',
    redPrimary: '#C91F28',
    redPrice: '#F00000',
    redPremium: '#AF1528',

    brownLight: '#FAF6F2',
    brownBorder: '#ECE4DB',
    brownPrimaryLight: '#975216',
    brownPrimary: '#764510',
  },

  sectionColors: {
    blueAlza: '#00275b',
    blueAlzaLight: '#1653a4',
    blueMedia: '#0094e7',
    blueMediaLight: '#3cb2f5',
    orangeToys: '#fd7528',
    orangeToysLight: '#fa8f42',
    goldTrendy: '#c7b276',
    goldTrendyDark: '#b7a265',
    redMaxi: '#e9242e',
    redMaxiDark: '#c91f28',
    greenSport: '#a1c900',
    greenSportLight: '#b1da0f',
    brownHobby: '#764510',
    brownHobbyLight: '#975216',
    greyAutoMoto: '#262f38',
    greyAutoMotoLight: '#4f5b68',
    ochrePet: '#cb8f10',
    ochrePetLight: '#e1a82f',
  },

  availabilityColors: {
    avl0: '#398000',
    avl1: '#00275a',
    avl2: '#91c71d',
    avl3: '#84551f',
    avl4: '#e0621f',
    avl5: '#3697d9',
    avl7: '#0000c0',
  },

  socialColors: {
    twitter: '#00a2e1',
    facebook: '#355896',
    googleplus: '#e55045',
    isic: '#D0F0FB',
    isicdark: '#4ebcbd',
    neo: '#2eb3fd',
  },

  energyClassColors: {
    highLandGreen: '#00a651',
    freshGreen: '#50b848',
    limeGreen: '#bfd730',
    telecomYellow: '#fff200',
    mustardYellow: '#fdb913',
    teracottaOrange: '#f36f21',
    lipstickRed: '#ed1c24',
  },

  boxShadowColors: {
    default: 'rgba(0,0,0,0.26)',
  },

  icons: {
    infoIconCircle: '/React/src/assets/icons/icons-circle-info.svg',
  },
};

export const boxShadowDefault = {
  default: `0 8px 20px ${baseTheme.colors.grey3}`,
};

export const defaultPaddingValue = 20;

export const Paddings = {
  defaultPadding: `${defaultPaddingValue}px`,
  defaultPaddingTop: `${defaultPaddingValue}px 0 0 0`,
  defaultPaddingRight: `0 ${defaultPaddingValue}px 0 0`,
  defaultPaddingBottom: `0 0 ${defaultPaddingValue}px 0`,
  defaultPaddingLeft: `0 0 0 ${defaultPaddingValue}px`,
  defaultPaddingTopBottom: `${defaultPaddingValue}px 0`,
  defaultPaddingLeftRight: `0 ${defaultPaddingValue}px`,
};

export const defaultMarginValue = '10px';

export const Margins = {
  defaultMargin: `${defaultMarginValue}`,
  defaultMarginTop: `${defaultMarginValue} 0 0 0`,
  defaultMarginRight: `0 ${defaultMarginValue} 0 0`,
  defaultMarginBottom: `0 0 ${defaultMarginValue} 0`,
  defaultMarginLeft: `0 0 0 ${defaultMarginValue}`,
  defaultMarginTopBottom: `${defaultMarginValue} 0`,
  defaultMarginLeftRight: `0 ${defaultMarginValue}`,
};

export const Borders = {
  defaultBorderRadius: '4px',
  circleRadius: '50%',
};

export const Font = {
  primary: 'Roboto, Verdana, Arial, sans-serif',
};

export enum FontWeight {
  Light = 300,
  Regular = 400,
  Medium = 500,
  Bold = 700,
}

const Theme: FunctionComponent = ({ children }) => (
  <ThemeProvider theme={baseTheme}>{children}</ThemeProvider>
);

export default Theme;
