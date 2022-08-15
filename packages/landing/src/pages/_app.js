import { Modal } from '@redq/reuse-modal';
import '@redq/reuse-modal/es/index.css';
import 'common/assets/css/flaticon.css';
import 'common/assets/css/icon-example-page.css';
// swiper bundle styles
import 'swiper/css/bundle';
import 'common/assets/css/react-slick.css';
import 'common/assets/css/rc-collapse.css';
import 'rc-collapse/assets/index.css';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';
import { theme } from 'common/theme/appModern';
import ResetCSS from 'common/assets/css/style';
import Sticky from 'react-stickynode';
import Navbar from 'containers/AppModern/Navbar';
import Banner from 'containers/AppModern/Banner';
import Mentene from 'containers/AppModern/Virtue';
import TeamPortfoilo from 'containers/AppModern/Kudoku';
import Gallery from 'containers/AppModern/Mentene';
import Footer from 'containers/AppModern/Footer';
import Shop from 'containers/AppModern/Shop';
import GlobalStyle, {
  AppWrapper,
  ContentWrapper,
} from 'containers/AppModern/appModern.style';

export default function CustomApp({ Component, pageProps }) {
  return (
    <Modal>
      <ThemeProvider theme={theme}>
      <>
        <Head>
          <title>Mentene</title>
          <meta name="Description" content="React next landing page" />
          <meta name="theme-color" content="#2563FF" />
          <meta
            name="keywords"
            content="Mentene"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Heebo:300,400,500,700&display=swap"
            rel="stylesheet"
          />
        </Head>
        {/* end of head */}

        <ResetCSS />
        <GlobalStyle />
        {/* end of global and reset style */}

        {/* start app classic landing */}
        <AppWrapper>
          <Sticky top={0} innerZ={9999} activeClass="sticky-active">
            <Navbar />
          </Sticky>
          <ContentWrapper>
            <Banner />
            <Mentene />
            <Gallery />
            <TeamPortfoilo />
            {/* <AppSlider /> */}
            <Shop />
            {/* <ProductSlide /> */}
            {/* <DesignedAndBuilt /> */}
            {/* <PricingPolicy /> */}
          </ContentWrapper>
          <Footer />
        </AppWrapper>
        {/* end of app classic landing */}
      </>
    </ThemeProvider>
    </Modal>
  );
}
