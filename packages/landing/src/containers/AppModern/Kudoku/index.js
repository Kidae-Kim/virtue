import React, { useState } from 'react';
import Fade from 'react-reveal/Fade';
import Text from 'common/components/Text';
import Heading from 'common/components/Heading';
import NextImage from 'common/components/NextImage';
import Container from 'common/components/UI/Container';
import SectionWrapper, { ContentWrapper } from './kudoku.style';
import { SectionHeader } from '../appModern.style';

import { teamportfolio } from 'common/data/AppModern';

const TeamPortfolioSection = () => {
  const { title, description, teammember } = teamportfolio;
  const [hover, setHover] = useState({
    active: 6, // active item when start
  });

  return (
    <div style={{paddingTop: 105}} id="kudoku">
      <SectionHeader>
        <Fade up>
          <Heading content={'Sushi Kudoku'} />
          <Heading as="h5" content={'부산 북구 덕천로25번길 2 스시쿠도쿠'} />
        </Fade>
      </SectionHeader>
      <SectionWrapper>
        <Container>
          <ContentWrapper>
            <div className="image">
              {teammember.map((item, index) => (
                <Fade up key={index}>
                  <div
                    className={`item_wrapper ${
                      hover.active === index ? '' : ''
                    }`}
                    key={index}
                  >
                    <div className="imageWrapper">
                      <NextImage src={item.img} alt={item.text} />
                    </div>
                    <Text className="author_name" content={item.text} />
                  </div>
                </Fade>
              ))}
            </div>
            <div className="content">
              <Heading content={title} />
              <Text content={description} />
            </div>
          </ContentWrapper>
        </Container>
      </SectionWrapper>
    </div>
  );
};

export default TeamPortfolioSection;
