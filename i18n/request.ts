import {getRequestConfig} from 'next-intl/server';

export default getRequestConfig(async () => ({
  locale: 'en',
  timeZone: 'UTC',
  messages: (await import('../messages/en.json')).default
}));