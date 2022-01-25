// Flags
import Brz from '../assets/svgs/flags/br.svg';
import Arg from '../assets/svgs/flags/ar.svg';
import Btc from '../assets/svgs/flags/btc.svg';
import Eur from '../assets/svgs/flags/european_union.svg';
import Usd from '../assets/svgs/flags/us.svg';

export const badgeDictionary = [
    {
        title: 'Bitcoin',
        flag: Btc,
        badge: 'BTC',
        color: "#ffae00",
        backgroundClass: "btc-flag",
    },
    {
        title: 'Dólares americanos',
        flag: Usd,
        badge: 'US$',
        color: "#2da06e",
        backgroundClass: "usd-flag",
    },
    {
        title: 'Euros',
        flag: Eur,
        badge: '€',
        color: "#004aa2",
        backgroundClass: "eur-flag"
    },
    {
        title: 'Pesos argentinos',
        flag: Arg,
        badge: 'AR$',
        color: "#338af3",
        backgroundClass: "arg-flag"
    },
];

export const nationalitiesFlagsLang = [
    {
        language: 'language.option.es',
        region: 'region.option.ar',
        flag: Arg,
        code: 'es-AR'
    },
    {
        language: 'language.option.en',
        region: 'region.option.us',
        flag: Usd,
        code: 'en-US'
    },
    {
        language: 'language.option.pt',
        region: 'region.option.br',
        flag: Brz,
        code: 'pt-BR'
    },
]

export const nationalBadgeDictionary = ["ARS", "USD", "EUR"];

export const getPrincipalCurrency = () => {
    return localStorage.getItem("principalCurrency") || "ARS";
}

//? Get the current blue usd price in Argentina
export const getUsdPrice = async () => {
    return fetch(`https://www.dolarsi.com/api/api.php?type=valoresprincipales`)
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            return parseFloat(data[1].casa.venta).toFixed(2);
            /* data.forEach((item) => {
                if (item.casa.nombre === 'Dolar Blue') {
                    return (parseFloat(item.casa.venta));
                }
            }); */
        })
        .catch((err) => {
            console.log(err);
        });
};

export const getTokenPrice = async (token) => {
    let api;
    token = token.toUpperCase();
    if (token !== "MDX") {
        api = `https://api.binance.com/api/v3/ticker/price?symbol=${token}USDT`;
    } else {
        api = `https://api.huobi.pro/market/trade?symbol=mdxusdt`;
    }

    return await fetch(api)
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            if (api.includes("binance")) {
                return parseFloat(data.price).toFixed(2);
            } else {
                return parseFloat(data.tick.data[0].price).toFixed(2);
            }
        })
        .catch((err) => {
            console.log(err);
        });
};