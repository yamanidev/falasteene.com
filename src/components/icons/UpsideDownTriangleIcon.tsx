function UpsideDownTriangleIcon({
  width = "41",
  height = "36",
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
      viewBox="0 0 41 36"
      className={className}
      version="1.1"
      xmlns="http://www.w3.org/2000/svg">
      <title>Upside down triangle</title>
      <path d="M20.5 36L0.148403 0.75L40.8516 0.75L20.5 36Z" fill="#EE2A35" />
    </svg>
  );
}

export default UpsideDownTriangleIcon;
