import React from "react";

import { Link } from 'react-router-dom';
import AliceCarousel from 'react-alice-carousel';

// Images
import Bbva from '../../../assets/images/logos/bbva.svg';
import Binance from '../../../assets/images/logos/binance.svg';
import Brubank from '../../../assets/images/logos/brubank.svg';
import Macro from '../../../assets/images/logos/macro.svg';
import Mdex from '../../../assets/images/logos/mdex.png';
import Uala from '../../../assets/images/logos/uala.svg';

// Styles
import 'react-alice-carousel/lib/alice-carousel.css';
import '../../../css/wallets.css';

const responsive = {
    0: { items: 1 },
    500: { items: 2 },
    815: { items: 3 },
    1124: { items: 4 }
};

const stagePadding = {
    paddingLeft: 50,
    paddingRight: 100
};

const Logos = [Bbva, Binance, Brubank, Macro, Mdex, Uala];

export const Carousel = ({ itemsArray }) => {
    let counter = 0;
    const items = itemsArray.map((item) => {
        let Logo;
        Logos.forEach((img) => {
            // search if item.logo contains a hex code or a emoji in it with regex
            if (
                /(\u00a9|\u00ae|[\u2000-\u3300]|\ud83c[\ud000-\udfff]|\ud83d[\ud000-\udfff]|\ud83e[\ud000-\udfff])/gi.test(
                    item.logo
                )
            ) {
                Logo = (
                    <p className="wallet-carrousel-item-emoji">{item.logo}</p>
                );
            } else {
                if (img.includes(item.logo.toLowerCase())) {
                    Logo = (
                        <img
                            className="wallet-carrousel-item-image"
                            src={img}
                            alt={item.name}
                        />
                    );
                }
            }
        });
        counter++;
        return (
            <Link
                to={`${item.name.toLowerCase()}`}
                className="wallet-carrousel-container"
                data-value={counter}
            /* onMouseDown={(e) => {
                e.preventDefault();
            }} */
            >
                <div
                    className="wallet-carrousel-item"
                    style={{ backgroundColor: item.bgColor, color: item.color }}
                >
                    <div className="description">
                        {Logo}
                        <div className="wallet-carrousel-item-name">
                            {item.name}
                        </div>
                    </div>
                    <div className="balance">
                        <div className="wallet-carrousel-item-currency">
                            {item.currency}
                        </div>
                        <div className="wallet-carrousel-item-balance">
                            {item.balance}
                        </div>
                    </div>
                </div>
            </Link>
        );
    });

    return (
        <AliceCarousel
            mouseTracking
            items={items}
            responsive={responsive}
            controlsStrategy="alternate"
            /* disableDotsControls="true" */
            disableButtonsControls="true"
            infinite={true}
            stagePadding={stagePadding}
        />
    );
};