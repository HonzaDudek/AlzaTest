/* eslint-disable */
const useMock = [k => k, {}];
useMock.t = k => k;
useMock.i18n = {};

const fn = () => useMock;

module.exports = {
  useTranslation: fn,
};
