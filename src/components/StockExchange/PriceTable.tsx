import React from 'react';
import {BitcoinPriceIndex} from "../../models/Price.ts";
import './PriceTable.scss'

interface PriceTableProps {
    data: BitcoinPriceIndex;
}

const PriceTable: React.FC<PriceTableProps> = ({ data }) => {
    const { bpi } = data;

    return (
        <table className="table">
            <thead>
            <tr>
                <th>Currency</th>
                <th>Code</th>
                <th>Symbol</th>
                <th>Rate</th>
                <th>Description</th>
                <th>Rate (Float)</th>
            </tr>
            </thead>
            <tbody>
            {Object.keys(bpi).map((currencyKey) => {
                const currency = bpi[currencyKey as keyof typeof bpi];
                return (
                    <tr key={currency.code}>
                        <td>{currency.description}</td>
                        <td>{currency.code}</td>
                        <td dangerouslySetInnerHTML={{ __html: currency.symbol }}></td>
                        <td>{currency.rate}</td>
                        <td>{currency.description}</td>
                        <td>{currency.rate_float.toFixed(2)}</td>
                    </tr>
                );
            })}
            </tbody>
        </table>
    );
};

export default PriceTable;
