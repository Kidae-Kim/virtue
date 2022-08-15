import React from 'react';
import Link from 'next/link';
import { Icon } from 'react-icons-kit';
import { arrowRight } from 'react-icons-kit/feather/arrowRight';
import Container from 'common/components/UI/Container';
import Heading from 'common/components/Heading';
import NextImage from 'common/components/NextImage';
import Box from 'common/components/Box';
import ShopWrapper from './shop';
import { AVAILABLE_RESTAURANTS_DATA } from 'common/data/Shop';
const Shop = () => {
  const { title, posts } = AVAILABLE_RESTAURANTS_DATA;
  return (
    <ShopWrapper id="market">
      <Container>
        <Heading as="h2" content={title} />
        <Box className="postWrap">
          {posts.map(({ image, title, link, description }, index) => (
            <Box
              className="post"
              key={`available-restaurant-post-key-${index}`}
            >
              <NextImage src={image} alt={title} />
              <div style={{ textAlign: 'center' }}>
                <h3>
                  <Link href={link}>
                    <a>{title}</a>
                  </Link>
                </h3>
                <div style={{ color: 'gray' }} >{description}</div>
              </div>
            </Box>
          ))}
        </Box>
      </Container>
    </ShopWrapper>
  );
};

export default Shop;
