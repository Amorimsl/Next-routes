import NewsList from '@/app/components/newsList';
import { getLatestNews } from '@/lib/news';
import React from 'react';

const pageLatest = () => {
  const latestNews = getLatestNews();
  return (
    <>
      <h1>Latest News Page</h1>
      <NewsList news={latestNews} />
    </>
  );
};

export default pageLatest;
