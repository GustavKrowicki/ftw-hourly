import React from 'react';
import {
  LayoutSingleColumn,
  LayoutWrapperTopbar,
  LayoutWrapperMain,
  LayoutWrapperFooter,
  Footer,
  NamedLink,
  ExternalLink,
} from '../../components';

import StaticPage from '../../containers/StaticPage/StaticPage';
import TopbarContainer from '../../containers/TopbarContainer/TopbarContainer';
import css from './subscriptionStaticPage.module.css';
import boom from './subscriptionStatic-Page.css';
import image from './about-us-1056.jpg';


const subscriptionStaticPage = () => {
  return (
    <StaticPage
      className={css.root}
      title="subscriptionStaticPage"
      schema={{
        '@context': 'http://schema.org',
        '@type': 'subscriptionStaticPage',
        description: 'Description of this page',
        name: 'About page',
      }}
    >
      <LayoutSingleColumn>
        <LayoutWrapperTopbar>
          <TopbarContainer />
        </LayoutWrapperTopbar>
        <LayoutWrapperMain>

        <div className="Card">
        <div className="upper-container">

          <h2> Basic plan</h2>  
          <h6> 400kr/måneden</h6>
        </div>
        <div className="lower-container">
        <p> Limitid features</p>
        <p> Limitid features</p>
        <p> Limitid margins</p>
       


        </div>



        </div>

        <div className="Card">
        <div className="upper-container">

          <h2> premium plan</h2>  
          <h6> 1000kr/måneden</h6>
        </div>
        <div className="lower-container">
        <p> Limitid features</p>
        <p> Limitid features</p>
        <p> Limitid margins</p>
       


        </div>



        </div>


          <h1>Sdddddt</h1>
          <img src={image} alt="My first ice cream." />
          <div>
            <NamedLink name="LandingPage">Go to home page</NamedLink> or
            <ExternalLink href="https://google.com">
              Go to Google
            </ExternalLink>
          </div>

        </LayoutWrapperMain>
        <LayoutWrapperFooter>
          <Footer />
        </LayoutWrapperFooter>
      </LayoutSingleColumn>
    </StaticPage>
  );
};

export default subscriptionStaticPage;