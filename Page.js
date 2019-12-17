import React from 'react'
import StandardWizLayout from 'components/Layout/StandardWizLayout'
import './Manage.css'
import { RichTextEditor } from 'benefithub-uikit'
import OfferLogo from '../Create/List/OfferLogoTemp2.png'
import OfferPreviewComponent from '../Create/List/OfferPreview'
import OfferComponent from './OfferComponent'
import DetailPreviewComponent from '../Create/Detail/DetailPreview'

const Page = (props) => {
    const { t } = props

    const approvedIcon = (<i className='fas fa-check-circle' />);
    const pendingIcon = (<i className='fas fa-hourglass-start' />);
    const notSubmittedIcon = (<i className='fas fa-exclamation-triangle' />);
    const notApprovedIcon = (<i className='fas fa-times-octagon' />);

    const statWordApproved = 'APPROVED';
    const statWordPending = 'PENDING';
    const statWordNotSubmitted = 'NOT SUBMITTED';
    const statWordNotApproved = 'NOT APPROVED';

    const localOffer = (<i className='fas fa-store' />);
    const onlineOffer = (<i className='fas fa-desktop-alt' />);

    const colorApproved = 'status-approved';
    const colorPending = 'status-pending';
    const colorNotSubmitted = 'status-notsubmitted';
    const colorNotApproved = 'status-notapproved';

    const selectedOfferHighlight = 'selected-offer';

    const temporaryCouponSection = (<section className='coupon-section'>
        <p className='coupon-code'>CouponCode</p>
        <div className='copy-coupon-btn'>
            <h5>{t('Copy Coupon Code')}</h5>
        </div>
    </section>);

    return (
        <StandardWizLayout
            className='manage-offer-page'
            nav={[{ navText: 'Manage offers', to: '/home' }, { navText: 'Manage users' }, { navText: 'Reports' }]}
        >
            <section className='title-bar'>
                <div className='offer-side'>
                    <h2>{t('My offers')}</h2>
                </div>
                <div className='preview-side'>
                    <h2>{t('List preview')}</h2>
                    <h2>{t('Detail preview')}</h2>
                </div>
            </section>
            <section className='offer-preview-sec'>
                <div className='offer-side'>
                    <OfferComponent
                        classNameSelected={selectedOfferHighlight}
                        StatusWord={t(statWordApproved)}
                        className={colorApproved}
                        StatusIcon={pendingIcon}
                        OfferIcon1={localOffer}
                        OfferIcon2={onlineOffer}
                        SampleCompany={t('Topgolf')}
                        OfferDetails={t('50% Off Tee Time on Fridays')}
                        OfferTitle={t('Half Off Tee Time')}
                    />
                    <OfferComponent
                        StatusWord={t(statWordPending)}
                        className={colorPending}
                        StatusIcon={approvedIcon}
                        OfferIcon2={onlineOffer}
                        SampleCompany={t('Topgolf')}
                        OfferDetails={t('50% Off Tee Time on Fridays')}
                        OfferTitle={t('Half Off Tee Time')}
                    />
                    <OfferComponent
                        StatusWord={t(statWordNotSubmitted)}
                        className={colorNotSubmitted}
                        StatusIcon={notSubmittedIcon}
                        OfferIcon1={localOffer}
                        OfferIcon2={onlineOffer}
                        SampleCompany={t('Topgolf')}
                        OfferDetails={t('50% Off Tee Time on Fridays')}
                        OfferTitle={t('Half Off Tee Time')}
                    />
                    <OfferComponent
                        StatusWord={t(statWordNotApproved)}
                        className={colorNotApproved}
                        StatusIcon={notApprovedIcon}
                        OfferIcon1={localOffer}
                        SampleCompany={t('Topgolf')}
                        OfferDetails={t('50% Off Tee Time on Fridays')}
                        OfferTitle={t('Half Off Tee Time')}
                    />
                </div>
                <div className='preview-side'>
                    <section className='list-view-side'>
                        <OfferPreviewComponent>
                            <div className='listview-offer-wrapper'>
                                <div className='offer-img'>
                                    <div className='helper' />
                                    <img src={OfferLogo} alt='Brand logo' />
                                </div>
                                <div className='offer-input-text'>
                                    <h5>SampleCompany HERE</h5>
                                    <p>OfferDetails HERE</p>
                                    <p>OfferTitle HERE</p>
                                </div>
                            </div>
                        </OfferPreviewComponent>
                    </section>
                    <section className='detail-view-side'>
                        <DetailPreviewComponent>
                            <section className='details-input-wrapper'>
                                <div className='brand-logo-wrapper'>
                                    <div className='helper' />
                                    <div className='offer-img'>
                                        <div className='helper' />
                                        <img src={OfferLogo} alt='Offer logo preview' />
                                    </div>
                                </div>
                                <div className='offer-input-text'>
                                    <h5 className='offer-title'>OfferTitle</h5>
                                    {temporaryCouponSection}
                                    <div className='details-text'>
                                        <h5>Details GO HERE</h5>
                                        <p>{t('details here i am going to keep typing to see if i can see what i am typing in the input box on my screen, and it looks like i can go on for days and days here')}</p>
                                    </div>
                                    <div className='descrpt-text'>
                                        <h5>Desription</h5>
                                        <p className='live-desc-text'>
                                            <RichTextEditor
                                                mode='live'
                                                initialEditorState={t('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eros felis, sodales quis nulla ut, scelerisque gravida purus. Morbi ex toleo sagittis vehicula a sodales metus. Sed et arcu accumsan, ullamcorper ipsum ut, aliquet erat. In nunc nisi, suscipit et tempus et, lacinia eget libero. Lorem ipsum dolor sit amet, codales quis nulla ut, scelerisque gravida purus. Morbi ex toleo sagittis vehicula a sodales metus. Sed et arcu accumsan, ullamcorper ipsum ut, aliquet erat. In nunc nisi, suscipit et tempus et, lacinia eget libero.titor, ut blandit mi maximus. Donec quis neque metus.</p>')}
                                            />
                                        </p>
                                    </div>
                                </div>
                                <div className='view-more-wrapper'>
                                    <p>{t('View more')} <i className='far fa-chevron-down' /></p>
                                    <div className='button-text-wrapper'>
                                        <div className='link-button'>
                                            <div className='button-text'>LinkURLText Goes Here</div>
                                        </div>
                                    </div>
                                    <p>{t('View All Deals')}</p>
                                </div>
                            </section>
                        </DetailPreviewComponent>
                    </section>
                </div>
            </section>
        </StandardWizLayout>
    )
}

export default Page
