import { useCallback, useEffect, useState } from "react";

// From: https://www.benmvp.com/blog/copy-to-clipboard-react-custom-hook/

type CopyStatus = "inactive" | "copied" | "failed";

function useCopyToClipboard(text: string, notifyTimeout = 2500) {
  const [copyStatus, setCopyStatus] = useState<CopyStatus>("inactive");
  const copy = useCallback(() => {
    navigator.clipboard.writeText(text).then(
      () => setCopyStatus("copied"),
      () => setCopyStatus("failed")
    );
  }, [text]);

  useEffect(() => {
    if (copyStatus === "inactive") {
      return;
    }

    const timeoutId = setTimeout(() => setCopyStatus("inactive"), notifyTimeout);

    return () => clearTimeout(timeoutId);
  }, [copyStatus]);

  return [copyStatus, copy];
}

export default useCopyToClipboard;
