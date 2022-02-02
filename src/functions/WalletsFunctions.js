export const getTotalBalance = () => {
    return 14.249;
}

export const getTableItemsWallets = () => {
    return [
        {
            id: 1,
            name: 'BBVA Francés',
            percentage: '14.78',
            entry: 'ARS 2100',
            performance: '+43.1'
        },
        {
            id: 2,
            name: 'Binance',
            percentage: '23.11',
            entry: 'USD 19.59',
            performance: '+2.84'
        },
        {
            id: 3,
            name: 'Brubank',
            percentage: '11.26',
            entry: 'ARS 1600',
            performance: '+27.28'
        },
        {
            id: 4,
            name: 'Macro',
            percentage: '21.11',
            entry: 'ARS 3000',
            performance: '-17.34'
        },
        {
            id: 5,
            name: 'Mdex',
            percentage: '9.30',
            entry: 'USD 13.02',
            performance: '-35.92'
        },
        {
            id: 6,
            name: 'Ualá',
            percentage: '20.41',
            entry: 'ARS 2,900',
            performance: '-28.26'
        }
    ];
}

export const getBankAccounts = () => {
    return [
        {
            id: 1,
            name: 'Brubank',
            logo: 'brubank',
            balance: '1,600.00',
            currency: 'ARS',
            color: '#ffffff',
            bgColor: '#614ad9',
        },
        {
            id: 3,
            name: 'BBVA Francés',
            logo: 'bbva',
            balance: '2,100.00',
            currency: 'ARS',
            color: '#ffffff',
            bgColor: '#004580',
        },
        {
            id: 6,
            name: 'Macro',
            logo: 'macro',
            balance: '3,000.00',
            currency: 'ARS',
            color: '#ffffff',
            bgColor: '#00a8ed',
        },
    ];
}

export const getApplicationsAccounts = () => {
    return [
        {
            id: 2,
            name: 'Ualá',
            logo: 'uala',
            balance: '2,900.00',
            currency: 'ARS',
            color: '#fcfcfc',
            bgColor: '#FE4F5A',
        },
        {
            id: 4,
            name: 'Binance',
            logo: 'binance',
            balance: '19.59',
            currency: 'USD',
            color: '#f3ba2f',
            bgColor: '#23282d',
        },
        {
            id: 5,
            name: 'Mdex',
            logo: 'mdex',
            balance: '13.02',
            currency: 'USD',
            color: '#ffffff',
            bgColor: '#0E1854',
        }
    ];
}

export const getWallets = () => {
    return [
        {
            id: 1,
            name: 'Efectivo > $100',
            logo: '👑',
            balance: '4600.00',
            currency: 'ARS',
            color: '#363636',
            bgColor: '#f5f5f5',
        },
        {
            id: 2,
            name: 'Efectivo < $100',
            logo: '🤑',
            balance: '240.00',
            currency: 'ARS',
            color: '#363636',
            bgColor: '#f5f5f5',
        },
    ];
}