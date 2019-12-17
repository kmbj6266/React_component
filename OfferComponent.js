import React, { Component } from 'react'
import { tLogin as t } from 'locales'
import OfferLogo from '../Create/List/OfferLogoTemp2.png'
import './Manage.css'

export default class OfferComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {}
    }

    render() {
        const { SampleCompany, OfferDetails, OfferTitle, StatusWord, StatusIcon, OfferIcon1, OfferIcon2, className = '', classNameSelected = '' } = this.props

        return (<div className={`${classNameSelected} offer-box`}>
            <section className='status-bar-section'>
                <div className={`${className} status-icon-box`}>{StatusIcon}</div>
                <div className='status-word'><h4>{StatusWord}</h4></div>
                <div className='status-location-box'>
                    <div className='location-icon'>{OfferIcon1}</div>
                    <div className='location-icon'>{OfferIcon2}</div>
                </div>
            </section>
            <section className='offer-section'>
                <div className='offer-side-input-wrapper'>
                    <div className='offer-img'>
                        <div className='helper' />
                        <img src={OfferLogo} alt='Brand logo' />
                    </div>
                    <div className='offer-input-text'>
                        <h5>{SampleCompany}</h5>
                        <p>{OfferDetails}</p>
                        <p>{OfferTitle}</p>
                    </div>
                </div>
            </section>
            <section className='button-section'>
                <button className='cancelButton' type='button'><i className='far fa-edit' />&nbsp;Edit</button>
                <button className='cancelButton' type='button'><i className='far fa-trash-alt' />&nbsp;Delete</button>
            </section>
        </div>
        )
    }
}
