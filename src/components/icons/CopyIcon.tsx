function CopyIcon({ className }: { className?: string }) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 10 12"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <title>Copy to clipboard icon</title>
      <path
        d="M7 0.5H1C0.4475 0.5 0 0.9475 0 1.5V8.5H1V1.5H7V0.5ZM8.5 2.5H3C2.4475 2.5 2 2.9475 2 3.5V10.5C2 11.0525 2.4475 11.5 3 11.5H8.5C9.0525 11.5 9.5 11.0525 9.5 10.5V3.5C9.5 2.9475 9.0525 2.5 8.5 2.5ZM8.5 10.5H3V3.5H8.5V10.5Z"
        fill="#009736"
      />
    </svg>
  );
}

export default CopyIcon;
