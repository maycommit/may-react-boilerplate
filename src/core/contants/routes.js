export const ROUTES = {
  MAIN: {
    PATH: '/',
    CHILDREN: {
      HOME: '/',
      VALUE_FLOWS: {
        LIST: '/value-flows',
        SINGLE: '/value-flows/:id',
      }
    }
  },
  DEPLOY: {
    PATH: '/deploy',
  },
  AUTH: {
    PATH: '/auth',
  }
}