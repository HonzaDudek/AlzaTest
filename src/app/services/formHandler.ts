import { FormV2 } from '../../utils/apiDataTypes';
import { formatFormV2 } from '../../utils/formFormatter';
import { RequestMethods } from '../../utils/constants';
import axios from 'axios';
import { getCurrentCulture } from './applicationService';

export const handleFormAction = (
  formAction?: FormV2 | undefined,
  redirectUrl?: string
): void => {
  if (!formAction) {
    console.error(
      'handleFormAction got empty action - control should have never been rendered!' +
        'Maybe {formaction && <component /> missing? }'
    );
    return;
  }

  const method = formAction.method;
  const requestBody = formatFormV2(formAction.value);
  const url = formAction.href;

  if (window.location.port === '9009') {
    console.log(`Method: ${method}`);
    console.log(`Url: ${url}`);
    console.log('Body:');
    console.log(requestBody);
    return;
  }

  if (url !== undefined) {
    switch (method) {
      case RequestMethods.DELETE:
        axios
          .delete(url, {
            headers: { 'Accept-Language': getCurrentCulture() },
          })
          .then(() => {
            if (redirectUrl != null) {
              window.location.href = redirectUrl;
            }
          });
        break;
      case RequestMethods.POST:
        axios
          .post(url, requestBody, {
            headers: { 'Accept-Language': getCurrentCulture() },
          })
          .then(() => {
            if (redirectUrl != null) {
              window.location.href = redirectUrl;
            }
          });
        break;
      case RequestMethods.PUT:
        axios
          .put(url, requestBody, {
            headers: { 'Accept-Language': getCurrentCulture() },
          })
          .then(() => {
            if (redirectUrl != null) {
              window.location.href = redirectUrl;
            }
          });
        break;
      case RequestMethods.GET:
        axios
          .get(url, {
            headers: { 'Accept-Language': getCurrentCulture() },
          })
          .then(() => {
            if (redirectUrl != null) {
              window.location.href = redirectUrl;
            }
          });
        break;
      default:
        axios
          .post(url, requestBody, {
            headers: { 'Accept-Language': getCurrentCulture() },
          })
          .then(() => {
            if (redirectUrl != null) {
              window.location.href = redirectUrl;
            }
          });
        return;
    }
  }
};
