import { useEffect, useState } from 'react';
import BlogComponent from '../BlogComponent';

interface LiveBlogUpdate {
  time: string;
  content: string;
  link: string;
}

interface Headline {
  title: string;
  link: string;
}

function NewsComponent() {
  const [liveBlogUpdates, setLiveBlogUpdates] = useState<LiveBlogUpdate[]>([]);
  const [headline, setHeadline] = useState<Headline | null>(null);

  useEffect(() => {
    const apiUrl = 'https://aljazeera-articles-falesteen.vercel.app/get-liveblog';

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        
        setHeadline(data.headline);
        setLiveBlogUpdates(data.blogs);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div className="px-28">
      <img src="/assets/news/240px-Al_Jazeera 1.svg" alt="aljazeera" />
      <div className="px-4 py-10">
        {headline && (
          <a className="text-5xl font-bold text-mainText " href={headline.link}>
            {headline.title}
          </a>
        )}
      </div>
      <ul className='flex flex-col gap-8'>
        {liveBlogUpdates &&
          liveBlogUpdates.map((update, index) => (
            <li key={index}>
            <BlogComponent link={update.link} text={update.content} time={update.time} last={(liveBlogUpdates.length -1) == index} />
            </li>
          ))}
      </ul>
    </div>
  );
}

export default NewsComponent;
