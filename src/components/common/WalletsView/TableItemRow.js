import React from 'react';
import { Link } from 'react-router-dom';

export default function TableItemRow({ id, name, percentage, entry, performance }) {
    return <div className="wallets-table-body--row">
        <div>
            <Link
                to={`${name.toLowerCase()}`}
                className="wallet-carrousel-container"
            >
                {name}
            </Link>
        </div>
        <div>{percentage} %</div>
        <div>{entry}</div>
        <div style={performance.includes("+") ? { color: "#02c076" } : { color: "#f84960" }}>{performance}</div>
    </div >;
}
