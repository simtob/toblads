import { Link } from "react-router-dom";
import "./PricingCardStyles.css";

import React from 'react'

const PricingCard = () => {
  return (
    <div className="pricing">
        <div className="card-container">
            <div className="card">
                    <h3> - Basic - </h3>
                    <span className="bar"></span>
                    <p className="btc"> - This is a paragraph - </p>
                    <p> - This is a another paragraph - </p>
                    <Link to="/contact" className="btn">
                        PURCHASE NOW
                    </Link>
                </div>
                <div className="card">
                    <h3>- Premium -</h3>
                    <span className="bar"></span>
                    <p className="btc"> - This is a paragraph -</p>
                    <p> - This is a another paragraph -</p>
                    <Link to="/contact" className="btn">
                        PURCHASE NOW
                    </Link>
                </div>
                <div className="card">
                    <h3>- Business -</h3>
                    <span className="bar"></span>
                    <p className="btc"> - This is a paragraph -</p>
                    <p> - This is a another paragraph - </p>
                    <Link to="/contact" className="btn">
                        PURCHASE NOW
                    </Link>
                </div>
            </div>
        </div>
  )
}

export default PricingCard;