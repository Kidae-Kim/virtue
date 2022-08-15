import React, { Fragment } from 'react';
import Fade from 'react-reveal/Fade';
import NextImage from 'common/components/NextImage';
import GlideCarousel from 'common/components/GlideCarousel';
import GlideSlide from 'common/components/GlideCarousel/glideSlide';
import GalleryWrapper, { GalleryCard, Button } from './mentene.style';
import { galleryData } from 'common/data/AppModern';
import { SectionHeader } from '../appModern.style';
import Heading from 'common/components/Heading';

const Mentene = () => {
  const glideOptions = {
    type: 'carousel',
    perView: 5,
    gap: 0,
  };
  return (
    <div style={{paddingTop: 105}} id="mentene">
      <SectionHeader>
        <Fade up>
          <Heading content={'Mentene'} />
          <Heading as="h5" content={'부산 북구 덕천로25번길 2 스시쿠도쿠'} />
        </Fade>
      </SectionHeader>
      <GalleryWrapper id="mentene">
        <GlideCarousel
          carouselSelector="gallery_carousel"
          options={glideOptions}
          nextButton={<i className="flaticon-next" />}
          prevButton={<i className="flaticon-left-arrow" />}
        >
          <Fragment>
            {galleryData.map((item) => (
              <GlideSlide key={`gallery_key${item.id}`}>
                <NextImage src={item.thumb_url} alt={item.name} />
              </GlideSlide>
            ))}
          </Fragment>
        </GlideCarousel>
      </GalleryWrapper>
    </div>
  );
};

export default Mentene;
