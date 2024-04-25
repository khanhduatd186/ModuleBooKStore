import { Environment } from '@abp/ng.core';

const baseUrl = 'http://localhost:4200';

export const environment = {
  production: true,
  application: {
    baseUrl: 'http://localhost:4200/',
    name: 'BookStore',
    logoUrl: '',
  },
  oAuthConfig: {
    issuer: 'https://localhost:44321/',
    redirectUri: baseUrl,
    clientId: 'BookStore_App',
    responseType: 'code',
    scope: 'offline_access BookStore',
    requireHttps: true
  },
  apis: {
    default: {
      url: 'https://localhost:44321',
      rootNamespace: 'Acme.BookStore',
    },
    BookStore: {
      url: 'https://localhost:44356',
      rootNamespace: 'Acme.BookStore',
    },
  },
} as Environment;
