import React from "react";
//find how to create mock data
export type TPainting = {
  id: string;
  name: string;
  author: string;
  year: string;
  imgUrl: string;
  price: string;
  sold: boolean;
};

export const paintings: TPainting[] = [
  {
    id: "1",
    name: "Рождение Венеры",
    author: "Сандро Ботичели",
    year: "1501 г.",
    imgUrl:
      "https://lh3.googleusercontent.com/NlR6TpuLie8wtu7KCjwPhesks4ARewVuqR1lUg-yDUUhc-jAkSRqmj7yRREF2IZ1G951JjxKe1dZRpyqWkiY8R72uL4x7ZgeTgiTOy1Yi97tPeD4rWutGAgz_8Joi_qRWyAn0zIf1w=w2400",
    price: "1000000",
    sold: false,
  },
  {
    id: "2",
    name: "Lorem ipsum",
    author: "Lorem ipsum",
    year: "0000 г.",
    imgUrl:
      "https://lh3.googleusercontent.com/lWU2foVJdcGfLMj-HdDmVNsqKWYN2drutlEdQge3IQ7ZLHIt0Czf4AdVzsQ7ygoQnYwZOuYqsE_Vo_qVCA2RexT05UeCEB-xzVbe6Y_82paos8GhD_kkZ7w1a0oWlU7FUjIUe78BFg=w2400",
    price: "1000000",
    sold: false,
  },
  {
    id: "3",
    name: "Lorem ipsum",
    author: "Lorem ipsum",
    year: "0000 г.",
    imgUrl:
      "https://lh3.googleusercontent.com/d3j3bssy6v2CCTwS2e7urs77oqtMKA3yzCGeANPm_2RSwtwtNJq83SXKHPyNjg6a5dRNMqLHM8dvjt6MSPrXqaF2NRPFjFQXYrBmBh653Sx-zr-i7wtNY46f0SA6wyFEWcCMkC8FFQ=w2400",
    price: "1000000",
    sold: false,
  },
  {
    id: "4",
    name: "Lorem ipsum",
    author: "Lorem ipsum",
    year: "0000 г.",
    imgUrl:
      "https://lh3.googleusercontent.com/BDpgGDEdM8zwC5lbhs4MO9Rjmw8qBl9UzDsDFD1gtWrqFsVyX6mRM74TrcM30ZLkbDkXIG2yTycEXxHrVL6KuS24YT0MOGiRsPLUfyf3fXIbMRBfC-CoJSqssBBI8MS8XqW3Y_FuNg=w2400",
    price: "1000000",
    sold: false,
  },
  {
    id: "5",
    name: "Lorem ipsum",
    author: "Lorem ipsum",
    year: "0000 г.",
    imgUrl:
      "https://lh3.googleusercontent.com/p5UGL0DkDjRexr1f8pTdZMVSsvpPFC2tP-5ywWmCboeI_KJhHNlvWnSsYajddTwkV3kXZ7qsFAh3-0nBkqV_MkTYkxG_DD3QS2wONkQXh6kZO4cMzEcCFWhXq0HF4cASmlhGbSAIPA=w2400",
    price: "1000000",
    sold: true,
  },
  {
    id: "6",
    name: "Lorem ipsum",
    author: "Lorem ipsum",
    year: "0000 г.",
    imgUrl:
      "https://lh3.googleusercontent.com/lw0Rpsbn9zN4WgmBqv2Q5usZR4Yke7yzi2ytjuqZyY79u9sRdWsQjRWcb-VNHfczA-KnIV_RWef5ek88dNB0DCiV-YEn4el2cC30D5tmWSJLnydSUy_w6c3PRNMYqOigOZjDw-N_kg=w2400",
    price: "1000000",
    sold: false,
  },
  {
    id: "7",
    name: "Lorem ipsum",
    author: "Lorem ipsum",
    year: "0000 г.",
    imgUrl:
      "https://lh3.googleusercontent.com/QcI-AFVfHuI5Rm-EJdyGQoAubNRDBsB4_ULm9ftL5nLK8JKc4kmtMTIH5bTLXUZSbT2mWBySuqxeYQt66BWlrm3Qp28FvKrd224MZWPHyjWY6eWfSS2ybEjgyeXxnjbkTPpFJ-Jupg=w2400",
    price: "1000000",
    sold: false,
  },
  {
    id: "8",
    name: "Lorem ipsum",
    author: "Lorem ipsum",
    year: "0000 г.",
    imgUrl:
      "https://lh3.googleusercontent.com/pp7mH4DjNjajJEBlYDeiNwUL9gskzi7FgIMhdkZ7Se371jC7hU3LUfXsqQFmazCWvBvyxItv2Mx2PM5bR7j04Yrn9E15889WVo6JMXgastfDsGKCI_1H3VvW0E4wtVt98u-Z-JrvCA=w2400",
    price: "1000000",
    sold: false,
  },
  {
    id: "9",
    name: "Lorem ipsum",
    author: "Lorem ipsum",
    year: "0000 г.",
    imgUrl:
      "https://lh3.googleusercontent.com/yvfKfIRTTpN__zBE04k18Y8RimAHfxlEqdDC5JmAJl8pKuDcGcbThN04JlJH0q_tWW9435VRjen0pHn2brOTrHxM-ErxhXFqfenpOhVMFLXxvufLODKk7VRdHr9CuVahJBXbeGaMBg=w2400",
    price: "1000000",
    sold: true,
  },
  {
    id: "10",
    name: "Lorem ipsum",
    author: "Lorem ipsum",
    year: "0000 г.",
    imgUrl:
      "https://lh3.googleusercontent.com/NlR6TpuLie8wtu7KCjwPhesks4ARewVuqR1lUg-yDUUhc-jAkSRqmj7yRREF2IZ1G951JjxKe1dZRpyqWkiY8R72uL4x7ZgeTgiTOy1Yi97tPeD4rWutGAgz_8Joi_qRWyAn0zIf1w=w2400",
    price: "1000000",
    sold: false,
  },
  {
    id: "11",
    name: "Lorem ipsum",
    author: "Lorem ipsum",
    year: "0000 г.",
    imgUrl:
      "https://lh3.googleusercontent.com/p5UGL0DkDjRexr1f8pTdZMVSsvpPFC2tP-5ywWmCboeI_KJhHNlvWnSsYajddTwkV3kXZ7qsFAh3-0nBkqV_MkTYkxG_DD3QS2wONkQXh6kZO4cMzEcCFWhXq0HF4cASmlhGbSAIPA=w2400",
    price: "1000000",
    sold: false,
  },
  {
    id: "12",
    name: "Lorem ipsum",
    author: "Lorem ipsum",
    year: "0000 г.",
    imgUrl:
      "https://lh3.googleusercontent.com/lw0Rpsbn9zN4WgmBqv2Q5usZR4Yke7yzi2ytjuqZyY79u9sRdWsQjRWcb-VNHfczA-KnIV_RWef5ek88dNB0DCiV-YEn4el2cC30D5tmWSJLnydSUy_w6c3PRNMYqOigOZjDw-N_kg=w2400",
    price: "1000000",
    sold: false,
  },
  {
    id: "13",
    name: "Lorem ipsum",
    author: "Lorem ipsum",
    year: "0000 г.",
    imgUrl:
      "https://lh3.googleusercontent.com/p5UGL0DkDjRexr1f8pTdZMVSsvpPFC2tP-5ywWmCboeI_KJhHNlvWnSsYajddTwkV3kXZ7qsFAh3-0nBkqV_MkTYkxG_DD3QS2wONkQXh6kZO4cMzEcCFWhXq0HF4cASmlhGbSAIPA=w2400",
    price: "1000000",
    sold: true,
  },
];
