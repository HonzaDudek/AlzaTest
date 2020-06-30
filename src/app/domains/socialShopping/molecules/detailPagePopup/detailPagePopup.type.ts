export type DetailPagePopupProps = {
  popoverTexts?: {
    spanText: string | undefined;
    headerText: string | undefined;
    bodyText: string | undefined;
    buttonText: string | undefined;
  };
  setIsOpen: () => void;
};
