import { DUMMY_NEWS } from '@/dummy-news';
import { notFound } from 'next/navigation';

const page = ({ params }) => {
  const newsItemSlug = params.itemsSlug;

  const newsItem = DUMMY_NEWS.find(
    (newsItem) => newsItem.slug === newsItemSlug
  );

  if (!newsItem) {
    notFound();
  }
  return (
    <div className="fullscreen-image">
      <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
    </div>
  );
};

export default page;
