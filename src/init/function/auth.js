/**
 * @returns {Object}
 */
export function getAuthInfo() {
  let isAuthenticated
  let isBlogOwner
  g.ajaxStorage.forEach(item => {
    if (item.url === '/oceans/ajax/blogSubscription') {
      isAuthenticated = item.xhr['responseJSON'].isAuthenticated
      isBlogOwner = item.xhr['responseJSON'].isBlogOwner
    }
  })
  return {isAuthenticated, isBlogOwner}
}
