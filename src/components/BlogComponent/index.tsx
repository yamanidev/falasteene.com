import { useState, useLayoutEffect, useRef } from 'react';

interface Props {
  link: string;
  text: string;
  time: string;
  last: boolean;
}

function BlogComponent({ link, text, time, last }: Props) {
  const [blogComponentHeight, setBlogComponentHeight] = useState<number | null>(null);
  const elementRef = useRef<HTMLAnchorElement | null>(null);

  function processTime(time: string): string {
    const indexOfSecondمنذ = time.indexOf('منذ', time.indexOf('منذ') + 1);
    if (indexOfSecondمنذ !== -1) {
      return `${time.substring(0, indexOfSecondمنذ).trim()}:`;
    }
    return `${time}:`;
  }
  useLayoutEffect(() => {
    const calculateHeight = () => {
      if (elementRef.current) {
        setBlogComponentHeight(elementRef.current.clientHeight);
      }
    };
    calculateHeight();
    setTimeout(calculateHeight, 0);
    window.addEventListener('resize', calculateHeight);
    return () => {
      window.removeEventListener('resize', calculateHeight);
    };
  }, []);
  return (
    <div className='flex flex-col'>
      <a ref={elementRef} href={link} target="_blank" className="flex items-center gap-4 ">
        <div className="relative">
          <div className="relative h-6 w-6 rounded-full border-2 border-mainBlue">
            <div className="absolute right-[50%] top-[50%] h-4 w-4  translate-x-[50%] translate-y-[-50%]  rounded-full bg-mainBlue "></div>
          </div>
        </div>
        <p className="text-xs text-disabledText sm:text-sm md:text-base">{processTime(time)}</p>
        <p className="text-xs font-bold text-mainText sm:text-sm md:text-base">{text}</p>
      </a>
      {!last && (
        <div
          className={` mr-[11px] w-[2px] h-8  bg-disabledText`}></div>
      )}
    </div>
  );
}

export default BlogComponent;
