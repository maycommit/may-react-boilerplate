import get from 'lodash/get'
import routes from 'routes'

export const getRoute = (path) => get(routes, `${path}.path`, '')

export const getComponent = (path) => get(routes, `${path}.component`, ''))