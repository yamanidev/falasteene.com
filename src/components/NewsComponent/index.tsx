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

interface Props{
  headline:Headline;
  liveBlogUpdates:LiveBlogUpdate[]
}

function NewsComponent({headline,liveBlogUpdates}:Props) {




  return (
    <div>
      <div className="px-2 py-10 lg:px-4">
        {headline && (
          <div className="relative w-[95%]">
            <a
              className="text-xl font-bold text-mainText sm:text-2xl md:text-3xl lg:text-5xl lg:leading-normal "
              href={headline.link}>
              {headline.title}
            </a>
            <img
              className="absolute left-[10%] top-12"
              src="/assets/news/240px-Al_Jazeera 1.svg"
              alt="aljazeera"
            />
          </div>
        )}
      </div>
      <ul className=" flex flex-col">
        {liveBlogUpdates &&
          liveBlogUpdates.map((update, index) => (
            <BlogComponent
              key={index}
              link={update.link}
              text={update.content}
              time={update.time}
              last={liveBlogUpdates.length - 1 == index}
            />
          ))}
      </ul>
    </div>
  );
}

export default NewsComponent;
