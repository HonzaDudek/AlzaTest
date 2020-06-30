/**
 * Copies text to clipboard
 * @param text Text
 * @param onSuccess Success callback
 * @param onError  Error callback
 */
export const CopyToClipboard = (
  text: string,
  onSuccess?: Function,
  onError?: Function
): void => {
  function fallbackCopyTextToClipboard(
    text: string,
    onSuccess?: Function,
    onError?: Function
  ): void {
    const textArea = document.createElement('textarea');
    textArea.value = text;

    // Avoid scrolling to bottom
    textArea.style.top = '0';
    textArea.style.left = '0';
    textArea.style.position = 'fixed';

    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();

    try {
      const successful = document.execCommand('copy');
      if (successful && onSuccess) onSuccess();
      if (!successful && onError) onError();
    } catch (err) {
      if (onError) onError(err);
    }

    document.body.removeChild(textArea);
  }

  if (!navigator.clipboard) {
    fallbackCopyTextToClipboard(text, onSuccess, onError);
    return;
  }
  navigator.clipboard.writeText(text).then(
    () => {
      if (onSuccess) onSuccess();
    },
    err => {
      if (onError) onError(err);
    }
  );
};
