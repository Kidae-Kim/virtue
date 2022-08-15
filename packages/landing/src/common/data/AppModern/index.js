/* ------------------------------------ */
// Navbar data section
/* ------------------------------------ */
import logo from 'common/assets/image/appModern/logo.png';

export const navbar = {
  logo: logo,
  navMenu: [
    {
      id: 1,
      label: 'Home',
      path: '#home',
      offset: '80',
    },
    {
      id: 2,
      label: 'Mentene',
      path: '#mentene',
      offset: '10',
    },
    {
      id: 3,
      label: 'Sushi Kudoku',
      path: '#kudoku',
      offset: '50',
    },
    {
      id: 4,
      label: 'Market',
      path: '#market',
      offset: '81',
    },
  ],
};

/* ------------------------------------ */
// client data section
/* ------------------------------------ */
import client1 from 'common/assets/image/appModern/company1.png';
import client2 from 'common/assets/image/appModern/company2.png';
import client3 from 'common/assets/image/appModern/company3.png';
import client4 from 'common/assets/image/appModern/company4.png';

import menteneImg1 from 'common/assets/image/appModern/mentene/mentene_feature1.jpeg';
import menteneImg2 from 'common/assets/image/appModern/mentene/mentene_feature2.jpeg';
import menteneImg3 from 'common/assets/image/appModern/mentene/mentene_feature3.jpeg';
import menteneImg4 from 'common/assets/image/appModern/mentene/mentene_feature4.jpeg';
import menteneImg5 from 'common/assets/image/appModern/mentene/mentene_feature5.jpeg';
import menteneImg6 from 'common/assets/image/appModern/mentene/mentene_feature6.jpeg';
import menteneImg7 from 'common/assets/image/appModern/mentene/mentene_feature7.jpeg';
import menteneImg8 from 'common/assets/image/appModern/mentene/mentene_feature8.jpeg';
import menteneImg9 from 'common/assets/image/appModern/mentene/mentene_feature9.jpeg';
import menteneImg10 from 'common/assets/image/appModern/mentene/mentene_feature10.jpeg';

export const galleryData = [
  {
    id: 1,
    thumb_url: menteneImg9,
    name: '정영덕',
    link: '#',
  },
  {
    id: 2,
    thumb_url: menteneImg10,
    name: '바보',
    link: '#',
  },
  {
    id: 3,
    thumb_url: menteneImg9,
    name: '김기대',
    link: '#',
  },
  {
    id: 4,
    thumb_url: menteneImg10,
    name: '천재',
    link: '#',
  },
  {
    id: 5,
    thumb_url: menteneImg9,
    name: 'Restroom',
    link: '#',
  },
];

export const client = [
  {
    id: 1,
    image: client1,
    title: 'The new york times',
  },
  {
    id: 2,
    image: client2,
    title: 'amazon',
  },
  {
    id: 3,
    image: client3,
    title: 'evernote',
  },
  {
    id: 4,
    image: client4,
    title: 'the verge',
  },
];

/* ------------------------------------ */
// Features data section
/* ------------------------------------ */
import featureIcon1 from 'common/assets/image/appModern/detail/kkd-01.png';
import featureIcon2 from 'common/assets/image/appModern/detail/kkd-02.png';
import featureIcon3 from 'common/assets/image/appModern/detail/kkd-03.png';
import featureIcon4 from 'common/assets/image/appModern/detail/kkd-04.png';
import featureIcon5 from 'common/assets/image/appModern/detail/kkd-05.png';
import featureIcon6 from 'common/assets/image/appModern/detail/kkd-06.png';
import backgroundImage from 'common/assets/image/appModern/back.jpeg';

export const features1 = {
  slogan: 'Virtue Company',
  title: '대표 로고',
  items: [
    {
      id: 1,
      color: '#F55767',
      icon: featureIcon2,
      title: '음식을 담는 그릇',
    },
    {
      id: 2,
      color: '#ff4742',
      icon: featureIcon1,
      title: '벚꽃의 잎사귀',
    },
  ],
};

export const features2 = {
  slogan2: 'KEY FEATURES',
  title2: 'Why you choose our app',
  items2: [
    {
      id: 1,
      color: '#F55767',
      icon: featureIcon3,
      title: '정중함',
    },
    {
      id: 2,
      color: '#ff4742',
      icon: featureIcon4,
      title: '공손함',
    },
    {
      id: 3,
      color: '#fb5781',
      icon: featureIcon6,
      title: '친절함',
    },
    {
      id: 4,
      color: '#f18e47',
      icon: featureIcon5,
      title: '음식의 맛',
    },
  ],
};

/* ------------------------------------ */
// App slider data section
/* ------------------------------------ */
import appSlide1 from 'common/assets/image/appModern/appSlider1.png';
import appSlide2 from 'common/assets/image/appModern/appSlider2.png';
import appSlide3 from 'common/assets/image/appModern/appSlider3.png';
import appIcon from 'common/assets/image/appModern/icon1.svg';

export const appSlider = {
  carousel: [
    {
      id: 1,
      image: appSlide1,
      title: 'App Slide 1',
    },
    {
      id: 2,
      image: appSlide2,
      title: 'App Slide 1',
    },
    {
      id: 3,
      image: appSlide3,
      title: 'App Slide 1',
    },
  ],
  title: 'Smart Jackpots that you may love this anytime & anywhere',
  description:
    "The rise of mobile devices transforms the way we consume information entirely and the world's most elevant channels such as Facebook.",
  features: [
    {
      id: 1,
      icon: appIcon,
      title: 'Easy Invoicing',
      description: 'Surprice your clients with professional looking invoices.',
    },
    {
      id: 2,
      icon: appIcon,
      title: 'UX Planning',
      description:
        'UI/UX Design by following and maintaining the latest trends .',
    },
    {
      id: 3,
      icon: appIcon,
      title: 'Customer Support',
      description: 'A Dedicated support team will be always ready for you.',
    },
  ],
};

/* ------------------------------------ */
// Design and built data section
/* ------------------------------------ */
import codingImage from 'common/assets/image/appModern/code.png';

export const designAndBuilt = {
  image: codingImage,
  slogan: 'CODE INTEGRATION',
  title: 'Introducing coding features of our apps with Customization',
  description:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit sed eiusmod tempor incididunt labore dolore features that Lorem ipsum dolor sit amet consectetur.',
};

/* ------------------------------------ */
// Product  Slide  section
/* ------------------------------------ */
import slide1 from 'common/assets/image/appModern/page1.png';
import slide2 from 'common/assets/image/appModern/page2.png';
import slide3 from 'common/assets/image/appModern/page3.png';

export const productData = {
  slogan: 'PRODUCT SHOWCASE',
  title: 'Meet Client Satisfaction by using our product',
  carousel: [
    {
      id: 1,
      thumb_url: slide1,
      link: '#1',
      title: 'slide 1',
    },
    {
      id: 2,
      thumb_url: slide2,
      link: '#1',
      title: 'slide 2',
    },
    {
      id: 3,
      thumb_url: slide3,
      link: '#1',
      title: 'slide 3',
    },

    {
      id: 4,
      thumb_url: slide1,
      link: '#1',
      title: 'slide 4',
    },

    {
      id: 5,
      thumb_url: slide3,
      link: '#1',
      title: 'slide 5',
    },
    {
      id: 6,
      thumb_url: slide2,
      link: '#1',
      title: 'slide 6',
    },
  ],
};

/* ------------------------------------ */
// Pricing policy data section
/* ------------------------------------ */
export const pricing = {
  slogan: 'PRICING PLAN',
  title: 'Choose your pricing policy',
  monthly: [
    {
      id: 1,
      title: 'Business Class',
      description: 'For Small teams or office',
      suggested: false,
      price: 0,
      features: [
        {
          id: 1,
          text: 'Drag & Drop Builder',
        },
        {
          id: 2,
          text: "1,000's of Templates",
        },
        {
          id: 3,
          text: 'Blog Support Tools',
        },
        {
          id: 4,
          text: 'eCommerce Store ',
        },
      ],
    },
    {
      id: 2,
      title: 'Pro Master',
      description: 'For Best opportunities',
      suggested: true,
      price: 99,
      trail: 14,
      trailLink: '#',
      features: [
        {
          id: 1,
          text: 'Drag & Drop Builder',
        },
        {
          id: 2,
          text: "1,000's of Templates",
        },
        {
          id: 3,
          text: 'Blog Support Tools',
        },
        {
          id: 4,
          text: 'eCommerce Store ',
        },
      ],
    },
  ],
  annualy: [
    {
      id: 1,
      title: 'Pro Master',
      description: 'For Small teams or office',
      suggested: true,
      price: 999,
      trail: 14,
      trailLink: '#',
      features: [
        {
          id: 1,
          text: 'Drag & Drop Builder',
        },
        {
          id: 2,
          text: "1,000's of Templates",
        },
        {
          id: 3,
          text: 'Blog Support Tools',
        },
        {
          id: 4,
          text: 'eCommerce Store ',
        },
      ],
    },
    {
      id: 2,
      title: 'Enterprise',
      description: 'For Best opportunities',
      suggested: false,
      price: 1299,
      trail: 30,
      trailLink: '#',
      features: [
        {
          id: 1,
          text: 'Drag & Drop Builder',
        },
        {
          id: 2,
          text: "1,000's of Templates",
        },
        {
          id: 3,
          text: 'Blog Support Tools',
        },
        {
          id: 4,
          text: 'eCommerce Store ',
        },
      ],
    },
  ],
};

/* ------------------------------------ */
// Team Portfolio data section
/* ------------------------------------ */
import member1 from 'common/assets/image/appModern/sushi/001.png';
import member2 from 'common/assets/image/appModern/sushi/002.png';
import member3 from 'common/assets/image/appModern/sushi/003.png';
import member4 from 'common/assets/image/appModern/sushi/004.png';
import member5 from 'common/assets/image/appModern/sushi/005.png';
import member6 from 'common/assets/image/appModern/sushi/006.png';
import member7 from 'common/assets/image/appModern/sushi/007.png';

export const teamportfolio = {
  title: 'おまかせ(오마카세)',
  description:
    'おまかせ(오마카세)란 \"맡기다\"라는 의미로 별도의 메뉴없이 당일 엄선한 신선한 재료로 손님께 내어드리는 방식입니다.',

  teammember: [
    {
      id: 1,
      img: member1,
      text: 'Berlin Corleone',
    },
    {
      id: 2,
      img: member2,
      text: 'Jona White',
    },
    {
      id: 3,
      img: member3,
      text: 'Michael Price',
    },
    {
      id: 4,
      img: member4,
      text: 'Gullyboy Rana',
    },
    {
      id: 5,
      img: member5,
      text: 'Miss Clair',
    },
    {
      id: 6,
      img: member6,
      text: 'Bucky Ali',
    },
    {
      id: 7,
      img: member7,
      text: 'Arthus Doe',
    },
  ],
};

/* ------------------------------------ */
// Testimonial data section
/* ------------------------------------ */
export const testimonial = {
  slogan: 'TESTIMONIAL',
  title: 'Meet Client Satisfaction by using product',
  reviews: [
    {
      id: 1,
      title: 'Modern look & trending design',
      description:
        'Get working experience to work with this amazing team & in future want to work together for bright future projects and also make deposit to freelancer.',
      avatar:
        'https://pbs.twimg.com/profile_images/974736784906248192/gPZwCbdS.jpg',
      name: 'Jon Doe',
      designation: 'CEO of RedQ Inc.',
      review: 4,
    },
    {
      id: 2,
      title: 'User friendly & Customizable',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit sed eiusmod tempor incididunt labore dolore features Lorem ipsum dolor sit amet consectetur adipisicing.',
      avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
      name: 'Jeny Doe',
      designation: 'Co Founder of RedQ Inc.',
      review: 5,
    },
    {
      id: 3,
      title: 'User friendly & Customizable',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit sed eiusmod tempor incididunt labore dolore features Lorem ipsum dolor sit amet consectetur adipisicing.',
      avatar: 'https://randomuser.me/api/portraits/men/44.jpg',
      name: 'Jon Doe',
      designation: 'Co Founder of RedQ Inc.',
      review: 5,
    },
  ],
};

/* ------------------------------------ */
// Footer data section
/* ------------------------------------ */
import chat from 'common/assets/image/appModern/chat.svg';
import group from 'common/assets/image/appModern/group.svg';
import github from 'common/assets/image/appModern/github.svg';
