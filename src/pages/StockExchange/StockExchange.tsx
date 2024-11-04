import {fetchPrices} from "../../services/stockExchangePrices.service.ts";
import {useEffect, useState} from "react";
import {BitcoinPriceIndex} from "../../models/Price.ts";
import PriceTable from "../../components/StockExchange/PriceTable.tsx";

const StockExchange = () => {
    const [pricesData, setPricesData] = useState<BitcoinPriceIndex[] | undefined>()

    useEffect(() => {
        const prices = fetchPrices()
        console.log('prices iz komponente', prices)
        setPricesData(prices)

    }, [])
    return (
        <div>
            <PriceTable data={pricesData} />
        </div>
    )
}

export default StockExchange
