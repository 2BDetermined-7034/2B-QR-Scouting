import { useState, useEffect } from 'preact/hooks';
import { Link } from 'preact-router/match';

const HomePage = () => {
  const years = ['2024']; // Manual list of years
  const [pageTitles, setPageTitles] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    const loadPageTitles = async () => {
      const titles: { [key: string]: string } = {};
      for (const year of years) {
        try {
          const config = await import(`../../config/${year}/config.json`);
          titles[year] = config.page_title;
        } catch (error) {
          console.error(`Error loading config for year ${year}:`, error);
        }
      }
      setPageTitles(titles);
    };

    loadPageTitles();
  }, []);

  return (
    <div className="home-page p-4 md:p-8">
      <h1 className="home-title text-2xl md:text-4xl">Select Game Year</h1>
      <div className="button-container flex flex-col md:flex-row">
        {years.map(year => (
          <Link href={`/${year}`} key={year} className="year-button m-2 md:m-4 p-2 md:p-4 text-sm md:text-base">
            {year} - {pageTitles[year] || 'Loading...'}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HomePage;