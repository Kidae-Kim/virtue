import React, { Fragment } from 'react';
import Fade from 'react-reveal/Fade';
import { Icon } from 'react-icons-kit';
import { mediaRecordOutline } from 'react-icons-kit/typicons/mediaRecordOutline';
import { plus } from 'react-icons-kit/typicons/plus';
import { starOutline } from 'react-icons-kit/typicons/starOutline';
import Text from 'common/components/Text';
import Heading from 'common/components/Heading';
import NextImage from 'common/components/NextImage';
import Container from 'common/components/UI/Container';
import FeatureBlock from 'common/components/FeatureBlock';
import { SectionHeader } from '../appModern.style';
import SectionWrapper, { FeatureWrapper, Feature2Wrapper } from './virtue.style';

import { features1, features2 } from 'common/data/AppModern';

const Mentene = () => {
  const { slogan, title, items } = features1;
  const { slogan2, title2, items2 } = features2;

  return (
    <SectionWrapper id="virtue">
      <Container>
        <SectionHeader>
          <Fade up>
            <Heading content={slogan} />
            <Heading  as="h5" content={title} />
          </Fade>
        </SectionHeader>
        <Feature2Wrapper>
          {items.map((item) => (
            <Fade up delay={100 * item.id} key={`feature-key${item.id}`}>
              <FeatureBlock
                style={{ '--color': `${item.color}` }}
                icon={
                  <Fragment>
                    <Icon className="plus" icon={plus} />
                    <Icon className="circle" icon={mediaRecordOutline} />
                    <NextImage width="100" height="100"  src={item.icon} alt={item.title} />
                    <Icon className="star" icon={starOutline} />
                  </Fragment>
                }
                iconPosition="left"
                title={<div style={{paddingTop: 20}}><Heading as="h3" content={item.title} /></div>}
                description={<Text content={item.description} />}
              />
            </Fade>
          ))}
        </Feature2Wrapper>
        <FeatureWrapper>
          {items2.map((item) => (
            <Fade up delay={100 * item.id} key={`feature-key${item.id}`}>
              <FeatureBlock
                style={{ '--color': `${item.color}` }}
                icon={
                  <Fragment>
                    <Icon className="plus" icon={plus} />
                    <Icon className="circle" icon={mediaRecordOutline} />
                    <NextImage width="100" height="100"  src={item.icon} alt={item.title} />
                    <Icon className="star" icon={starOutline} />
                  </Fragment>
                }
                iconPosition="left"
                title={<div style={{paddingTop: 20}}><Heading as="h3" content={item.title} /></div>}
                description={<Text content={item.description} />}
              />
            </Fade>
          ))}
        </FeatureWrapper>
        <div style={{ textAlign: 'center', paddingTop: '30px',  paddingBottom: '30px', color: 'gray' }}>
          <Fade up>
            일식을 상징하는 벚꽃잎을 모티브로,
          </Fade>
          <Fade up>
            추구하는 가치인 '친절함/공손함/정중함/맛'의 의미를 각각의 잎에 담아내었습니다.
          </Fade>
        </div>
      </Container>
    </SectionWrapper>
  );
};

export default Mentene;
