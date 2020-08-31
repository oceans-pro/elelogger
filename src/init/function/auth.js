/**
 * @returns {Object} 用户的认证信息
 */
export function getAuthInfo() {
  let isAuthenticated
  let isBlogOwner
  let isSubscribed
  for (let item of g.ajaxStorage){
    if (item.url === `/${g.userPath}/ajax/blogSubscription`) {
      isAuthenticated = item.xhr['responseJSON'].isAuthenticated
      isBlogOwner = item.xhr['responseJSON'].isBlogOwner
      isSubscribed = item.xhr['responseJSON'].isSubscribed
      return {isAuthenticated, isBlogOwner}
    }
  }
  return {isAuthenticated: 'NO-DATA', isBlogOwner: 'NO-DATA', isSubscribed: 'NO-DATA'}
}
