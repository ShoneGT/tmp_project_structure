import {fetchPrices} from "../../services/stockExchangePrices.service.ts";
import {useEffect, useState} from "react";
import {BitcoinPriceIndex} from "../../models/Price.ts";
import PriceTable from "../../components/StockExchange/PriceTable.tsx";

const StockExchange = () => {
    const [pricesData, setPricesData] = useState<BitcoinPriceIndex | undefined>();

    useEffect(() => {
        const getPrices = async () => {
            try {
                const prices = await fetchPrices();
                console.log('prices iz komponente', prices);
                setPricesData(prices);
            } catch (error) {
                console.error('Failed to fetch prices:', error);
            }
        };

        getPrices();
    }, []);

    return (
        <div>
            {pricesData ? (
                <PriceTable data={pricesData} />
            ) : (
                <p>Loading...</p>
            )}
        </div>
    )
}

export default StockExchange
