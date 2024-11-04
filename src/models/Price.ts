export interface BitcoinPriceIndex {
    time: {
        updated: string;
        updatedISO: string;
        updateduk: string;
    };
    disclaimer: string;
    chartName: string;
    bpi: {
        USD: CurrencyDetails;
        GBP: CurrencyDetails;
        EUR: CurrencyDetails;
    };
}

export interface CurrencyDetails {
    code: string;
    symbol: string;
    rate: string;
    description: string;
    rate_float: number;
}
