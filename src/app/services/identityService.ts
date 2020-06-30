import callAjax from './ajaxService';

type AccessTokenInfo = {
  accessToken: string;
  expiration: string;
};

/**
 * Identity service
 */
export class IdentityService {
  private static storageKey = 'user_identity';
  private static accessTokenApiUrl = '/api/identity/v1/accesstoken';

  /**
   * Returns access token for logged user.
   */
  static getAccessToken(): Promise<string> {
    const promise = new Promise<string>((resolve, reject) => {
      const tokenInfo = IdentityService.getTokenFromStore();
      const now = Date.now() / 1000;

      if (tokenInfo && parseInt(tokenInfo.expiration) > now) {
        // get token from storage
        resolve(tokenInfo.accessToken);
      } else {
        // get token from server
        callAjax<AccessTokenInfo>({
          url: IdentityService.accessTokenApiUrl,
        })
          .then(response => {
            if (response.data.accessToken)
              IdentityService.storeToken(response.data);

            resolve(response.data.accessToken);
          })
          .catch(error => {
            reject(error);
          });
      }
    });

    return promise;
  }

  private static storeToken(model: AccessTokenInfo): void {
    sessionStorage.setItem(IdentityService.storageKey, JSON.stringify(model));
  }

  private static getTokenFromStore(): AccessTokenInfo | null {
    const storageItem = sessionStorage.getItem(IdentityService.storageKey);

    if (storageItem) {
      return JSON.parse(storageItem);
    }

    return null;
  }
}
