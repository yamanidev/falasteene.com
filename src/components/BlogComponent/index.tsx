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
    <div className="flex flex-col justify-center">
      <a ref={elementRef} href={link} target="_blank" className="flex items-center gap-4 ">
        <div className="relative">
          <div className="flex h-6 w-6 items-center justify-center rounded-full border-2 border-mainBlue">
            <div className=" h-4 w-4  rounded-full bg-mainBlue "></div>
          </div>
        </div>
        <p className="text-xs text-disabledText sm:text-sm md:text-base">{processTime(time)}</p>
        <p className="text-xs font-bold text-mainText sm:text-sm md:text-base">{text}</p>
      </a>
      {!last && <div className={`self-start mr-[11px] h-8 w-[2px]  bg-disabledText `}></div>}
    </div>
  );
}

export default BlogComponent;
