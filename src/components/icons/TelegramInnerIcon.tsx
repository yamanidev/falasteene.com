function TelegramInnerIcon({
  width = '30',
  height = '25',
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
      viewBox="0 0 30 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M2.76908 10.7256C10.3486 7.42327 15.4028 5.24621 17.9317 4.19436C25.1522 1.19111 26.6525 0.669418 27.6304 0.652192C27.8455 0.648403 28.3264 0.701707 28.6379 0.954477C28.901 1.16791 28.9733 1.45623 29.008 1.65859C29.0426 1.86095 29.0857 2.32193 29.0514 2.68212C28.6602 6.79334 26.9671 16.7702 26.1058 21.3748C25.7413 23.3232 25.0237 23.9765 24.3289 24.0404C22.819 24.1793 21.6725 23.0426 20.2101 22.084C17.9218 20.5839 16.629 19.6502 14.4078 18.1864C11.8408 16.4948 13.5049 15.565 14.9678 14.0456C15.3507 13.6479 22.0032 7.59694 22.1319 7.04803C22.148 6.97937 22.163 6.72347 22.011 6.58835C21.8589 6.45323 21.6346 6.49943 21.4726 6.53618C21.2431 6.58827 17.5875 9.00452 10.5057 13.7849C9.46805 14.4975 8.52819 14.8446 7.6861 14.8264C6.75777 14.8064 4.97203 14.3015 3.64451 13.87C2.01626 13.3407 0.722156 13.0609 0.834843 12.162C0.893538 11.6938 1.53828 11.215 2.76908 10.7256Z"
        fill="white"
      />
    </svg>
  );
}

export default TelegramInnerIcon;
