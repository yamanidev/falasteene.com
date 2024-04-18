function LinkIcon({
  width = "14",
  height = "7",
  className
}: {
  width?: string;
  height?: string;
  className?: string;
}) {
  return (
    <svg
      width={width}
      height={height}
      className={className}
      viewBox="0 0 14 7"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M6.33334 6.83335H3.66668C2.74445 6.83335 1.95845 6.50824 1.30868 5.85802C0.658899 5.2078 0.333788 4.4218 0.333344 3.50002C0.333344 2.5778 0.658455 1.7918 1.30868 1.14202C1.9589 0.492243 2.7449 0.167131 3.66668 0.166687H6.33334V1.50002H3.66668C3.11112 1.50002 2.6389 1.69446 2.25001 2.08335C1.86112 2.47224 1.66668 2.94446 1.66668 3.50002C1.66668 4.05558 1.86112 4.5278 2.25001 4.91669C2.6389 5.30558 3.11112 5.50002 3.66668 5.50002H6.33334V6.83335ZM4.33334 4.16669V2.83335H9.66668V4.16669H4.33334ZM7.66668 6.83335V5.50002H10.3333C10.8889 5.50002 11.3611 5.30558 11.75 4.91669C12.1389 4.5278 12.3333 4.05558 12.3333 3.50002C12.3333 2.94446 12.1389 2.47224 11.75 2.08335C11.3611 1.69446 10.8889 1.50002 10.3333 1.50002H7.66668V0.166687H10.3333C11.2556 0.166687 12.0418 0.491798 12.692 1.14202C13.3422 1.79224 13.6671 2.57824 13.6667 3.50002C13.6667 4.42224 13.3416 5.20846 12.6913 5.85869C12.0411 6.50891 11.2551 6.8338 10.3333 6.83335H7.66668Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default LinkIcon;
