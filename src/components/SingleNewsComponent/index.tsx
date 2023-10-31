interface Props {
  link: string;
  title: string;
}

function SingleNewsComponent({ link, title }: Props) {
  return (
    <a href={link} target="_blank" className="flex items-center gap-2 rounded-md border-2 p-4">
      <img className="w-[80px] lg:w-[100px] md:w-[120px]" alt="gaza" src="/assets/news/gaza.svg" />
      <div className="flex flex-col gap-2">
        <span className="self-start rounded-lg bg-mainBlue px-2 text-xs text-white  sm:text-sm">
          غزة الآن - Gaza Now
        </span>
        <p className="text-sm text-mainText sm:text-base">{title}</p>
      </div>
    </a>
  );
}
export default SingleNewsComponent;
