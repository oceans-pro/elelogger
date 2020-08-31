/**
 *
 * @return {{isBlogOwner: string, isAuthenticated: string}}
 */
export function getAuthInfo() {
  let isAuthenticated
  let isBlogOwner
  let isSubscribed

  for (let item of g.ajaxStorage) {
    if (item.url === `/${g.g.userPath}/ajax/blogSubscription`) {
      isAuthenticated = item.xhr['responseJSON'].isAuthenticated
      isBlogOwner = item.xhr['responseJSON'].isBlogOwner
      isSubscribed = item.xhr['responseJSON'].isSubscribed
      return {isAuthenticated, isBlogOwner, isSubscribed}
    }

  }
  return {isAuthenticated: 'no-data', isBlogOwner: 'no-data', isSubscribed: 'no-data'}
}
