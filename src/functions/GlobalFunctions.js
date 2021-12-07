// Flags
import Arg from '../assets/svgs/flags/ar.svg';
import Btc from '../assets/svgs/flags/btc.svg';
import Eur from '../assets/svgs/flags/european_union.svg';
import Usd from '../assets/svgs/flags/us.svg';

export const badgeDictionary = [
    {
        title: 'Bitcoin',
        flag: Btc,
        badge: 'BTC',
        backgroundClass: "btc-flag"
    },
    {
        title: 'Dólares americanos',
        flag: Usd,
        badge: 'US$',
        backgroundClass: "usd-flag"
    },
    {
        title: 'Euros',
        flag: Eur,
        badge: '€',
        backgroundClass: "eur-flag"
    },
    {
        title: 'Pesos argentinos',
        flag: Arg,
        badge: 'AR$',
        backgroundClass: "arg-flag"
    },
];