export const getImageUrl = (relativeUrl: string): string => {
  if (window.Alza) {
    return window.Alza.Shared.PageData.CDNUrl + relativeUrl;
  } else {
    return 'https://cdn.alza.cz/' + relativeUrl;
  }
};
