import React, { Suspense } from 'react';
import '../../../utils/translation';
import {
  Trans,
  Translation,
  useTranslation,
  withTranslation,
  WithTranslation,
} from 'react-i18next';
import { TFunction } from 'i18next';

const TranslationHookInner: React.FunctionComponent = () => {
  const { t } = useTranslation(['storyBook']);
  return (
    <div>
      <h2>{t('Translation hook')}</h2>
      <h2>{t('Some cool translation')}</h2>
    </div>
  );
};

export const translationHook: React.FunctionComponent = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <TranslationHookInner />
    </Suspense>
  );
};

export const renderProp: React.FunctionComponent = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Translation ns={['storyBook']}>
        {(t): JSX.Element => <h2>{t('Render prop')}</h2>}
      </Translation>
    </Suspense>
  );
};

const TransComponentInner: React.FunctionComponent = () => {
  const { t } = useTranslation('storyBook');
  return (
    <>
      <h2>Trans component</h2>
      <Trans t={t} i18nKey='transComponent'>
        <i>Cool</i> text with trans component
      </Trans>
    </>
  );
};

export const transComponent: React.FunctionComponent = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <TransComponentInner />
    </Suspense>
  );
};

const HoCTranslation: React.FunctionComponent<WithTranslation> = props => {
  return <h2>{props.t('storyBook:HoC translation')}</h2>;
};

const HocTranslationComponent = withTranslation()(HoCTranslation);

export const HocWithTranslationComponent: React.FunctionComponent<WithTranslation> = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <HocTranslationComponent />
    </Suspense>
  );
};

const TranslationPlurals: React.FunctionComponent = () => {
  const { t, i18n } = useTranslation(['storyBook']);
  return (
    <div>
      <button onClick={(): Promise<TFunction> => i18n.changeLanguage('cs')}>
        CZ
      </button>
      <button onClick={(): Promise<TFunction> => i18n.changeLanguage('en')}>
        EN
      </button>
      <h2>Žádná komponenta:</h2>
      <span>
        {t('Some plurals', {
          componentCount: 0,
          postProcess: 'interval',
        })}
      </span>
      <h2>Jedna komponenta:</h2>
      <span>
        {t('Some plurals', {
          componentCount: 1,
          postProcess: 'interval',
        })}
      </span>
      <h2>2 komponenty:</h2>
      <span>
        {t('Some plurals', {
          componentCount: 2,
          postProcess: 'interval',
        })}
      </span>
      <h2>10 komponent:</h2>
      <span>
        {t('Some plurals', {
          componentCount: 10,
          postProcess: 'interval',
        })}
      </span>
    </div>
  );
};

export const translationWithPlurals: React.FunctionComponent = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <TranslationPlurals />
    </Suspense>
  );
};

export default {
  component: translationHook,
  title: 'Misc/Translations',
};
