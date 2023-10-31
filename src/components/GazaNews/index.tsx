import SingleNewsComponent from '../SingleNewsComponent';

interface GazaNewsInterface {
  link: string;
  title: string;
}

interface Props {
  GazaNews: GazaNewsInterface[];
}

function GazaNews({ GazaNews }: Props) {
  return (
    <div className="flex flex-col gap-8 pt-14">
      {GazaNews.map((element, index) => {
        if (element.title === '') {
          return null;
        } else {
          return (
            <SingleNewsComponent key={index} link={element.link} title={element.title} />
          );
        }
      })}
    </div>
  );
}

export default GazaNews;
