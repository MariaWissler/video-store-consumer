import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '.Customer.css';

const Customer = (props) => {
    return (
        <div className="customer">
            <span className="customer__content">
                <div className="customer__content-name">{props.name}</div>
                <div className="customer__content-created_at">{props.created_at}</div>
                <div className="customer__content-address">{props.address}</div>
                <div className="customer__content-pohone">{props.phone}</div>
                <div className="customer__content-account_credit">{props.account_credit}</div>
            </span>
        </div>
    )
}

Customer.propTypes = {

};

export default Customer;