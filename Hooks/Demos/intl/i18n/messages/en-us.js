import { LOCALES } from '../constants';

const english = {
  [LOCALES.ENGLISH]: {
    hello: 'Welcome to React Intl tutorial',
    'subscribe-invite': 'Hi, {name}. Welcome!',
    menu: {
      home: 'Home',
      blog: 'Blog',
      about: 'About me',
      contacts: 'Contacts',
    },
    form: {
      name: 'Type your name',
      dogs: 'How many dogs you have?',
      country: {
        us: 'United States',
        bulgaria: 'Bulgaria',
        other: 'Other',
      },
    },
    richtext: 'I have <bold>{num, plural, one {# dog} other {# dogs}}</bold>',
  },
};

export default english;
