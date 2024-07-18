import React from 'react';

import { DUMMY_NEWS } from '@/dummy-news';
import NewsList from '@/app/components/NewsList';

const page = () => {
  return (
    <>
      <h1>News page</h1>
      <NewsList news={DUMMY_NEWS} />
    </>
  );
};

export default page;
