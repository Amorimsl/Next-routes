import NewsList from '@/app/components/newsList';
import {
  getAvailableNewsYears,
  getNewsForYear,
  getNewsForYearAndMonth,
} from '@/lib/news';
import Link from 'next/link';

export default function FilteredNewsPage({ params }) {
  const filter = params.filter;

  const selectYear = filter ? filter[0] : undefined;
  const selectMonth = filter?.[1];

  let news;
  if (selectYear && !selectMonth) {
    news = getNewsForYear(selectYear);
  }

  let newsContent = <p> No news found</p>;
  if (news && news.length > 0) {
    newsContent = <NewsList news={news} />;
  }
  if (selectYear && selectMonth) {
    news = getNewsForYearAndMonth(selectYear, selectMonth);
  }
  const links = getAvailableNewsYears();
  return (
    <>
      <header id="archive-header">
        <nav>
          <ul>
            {links.map((link) => (
              <li key={link}>
                <Link href={`/archive/${link}`}> {link}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>
      {newsContent}
    </>
  );
}
