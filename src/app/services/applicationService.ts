export const getCurrentCulture = (): string => {
  const cultureCode =
    document && document.documentElement && document.documentElement.lang
      ? document.documentElement.lang
      : 'cs-CZ';

  return cultureCode;
};
