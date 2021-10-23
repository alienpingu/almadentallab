import React from 'react';
import PropTypes from 'prop-types';

import Head from 'next/head';
import absoluteUrl from 'next-absolute-url';
import Link from 'next/link'

import Theme, { theme } from '@pagerland/themes/src/Corporate';
import {
  Navbar,
  Welcome,
  Offer,
  Goals,
  Mission,
  Cta,
  Team,
  Testimonials,
  // Pricing,
  Copyright,
  // Newsletter,
  Contact,
} from '@pagerland/themes/src/Corporate/containers';

import data from '@pagerland/themes/src/Corporate/data';

import preview from '@pagerland/themes/src/Corporate/assets/preview.jpg';


import SEO from '../../components/SEO';

import Logo from '@pagerland/themes/src/Corporate/components/Logo';
import Bio from '@pagerland/themes/src/Corporate/containers/Bio';

const Corporate = ({ url }) => (
  <Theme>
    <Head>
      <link href={theme.typography.googleFont} rel="stylesheet" />
      <meta name="theme-color" content={theme.colors.brand} />
      <meta property="og:image" content={`${url}${preview}`} />
    </Head>
    <SEO title="Almadental" />
    <div className="m-5">
      <Link  href="/">
        <Logo /> 
      </Link>
    </div>
    {/*<Navbar />*/}
    {/*<Welcome name="" />*/}
    {/*<Offer name="offer" />*/}
    {/*<Goals name="goals" />*/}
    <Bio name="bio" />
    {/*<Cta name="cta" {...data.supportCta} />*/}
    {/*<Testimonials name="testimonials" />*/}
    {/*<Cta name="cta" {...data.contactCta} />*/}
    {/*<Pricing name="pricing" />*/}
    <Contact name="contact" />
    {/*<Newsletter name="newsletter" />*/}
    {/*<Copyright />*/}
  </Theme>
);

Corporate.propTypes = {
  url: PropTypes.string,
};

Corporate.defaultProps = {
  url: 'https://pager.land/next/',
};

export default Corporate;
