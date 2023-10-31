import { useState, useEffect, useRef } from 'react';

interface Props {
  link: string;
  text: string;
  time: string;
  last: boolean;
}

function BlogComponent({ link, text, time, last }: Props) {
  function processTime(time: string): string {
    const indexOfSecondمنذ = time.indexOf('منذ', time.indexOf('منذ') + 1);
    if (indexOfSecondمنذ !== -1) {
      return time.substring(0, indexOfSecondمنذ).trim();
    }
    return time;
  }
  return (
    <a href={link} target="_blank" className="flex items-center gap-4">
      <div className="relative">
        <div className="relative h-6 w-6 rounded-full border-2 border-mainBlue">
          <div className="absolute right-[50%] top-[50%] h-4 w-4  translate-x-[50%] translate-y-[-50%]  rounded-full bg-mainBlue "></div>
        </div>
        {!last && (
          <div className="absolute right-[50%] top-6 h-[33px] w-[2px] translate-x-[50%] bg-disabledText"></div>
        )}
      </div>
      <p className="text-disabledText">{processTime(time)} :</p>
      <p className="font-bold text-mainText">{text}</p>
    </a>
  );
}

export default BlogComponent;
