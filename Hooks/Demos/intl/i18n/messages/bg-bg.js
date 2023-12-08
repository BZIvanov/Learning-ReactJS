import { LOCALES } from '../constants';

const bulgarian = {
  [LOCALES.BULGARIAN]: {
    hello: 'Здравейте от React Intl ръководство.',
    'subscribe-invite': 'Здравей, {name}. Добре дошъл!',
    menu: {
      home: 'Начало',
      blog: 'Блог',
      about: 'За мен',
      contacts: 'Контакти',
    },
    form: {
      name: 'Въведи името си',
      dogs: 'Колко кучета имаш?',
      country: {
        us: 'United States',
        bulgaria: 'Bulgaria',
        other: 'Other',
      },
    },
    richtext: 'Имам <bold>{num, plural, one {# куче} other {# кучета}}</bold>',
  },
};

export default bulgarian;
