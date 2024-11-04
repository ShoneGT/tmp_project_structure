import httpClient from "./http.service";
import { BitcoinPriceIndex } from "../models/Price";

export const fetchPrices = async (): Promise<BitcoinPriceIndex> => {
    try {
        const response = await httpClient.get<BitcoinPriceIndex>('/bpi/currentprice.json');
        const prices = response.data;
        console.log('prices', prices);
        return prices;
    } catch (error) {
        console.error(error);
        throw error;
    }
};
