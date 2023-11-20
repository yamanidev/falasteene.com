import type { MouseEventHandler, ReactNode } from 'react';
import useCopyToClipboard from '../hooks/useCopyToClipboard';
import CheckIcon from './icons/CheckIcon';
import CopyIcon from './icons/CopyIcon';

function PaymentInfoItem({ text, icon }: { text: string; icon: ReactNode }) {
  const [copyStatus, copy] = useCopyToClipboard(text);

  return (
    <li className="flex items-center gap-1 rounded-md bg-[#d9d9d9] px-4 py-1">
      <span className="rounded-sm bg-white/40 px-1 py-0.5">{icon}</span>
      <p className="w-full">{text}</p>
      <button
        onClick={copy as MouseEventHandler<HTMLButtonElement>}
        className="rounded-sm bg-white/40 px-1 py-0.5">
        {copyStatus === 'inactive' && <CopyIcon className="h-3 w-3" />}
        {copyStatus === 'copied' && <CheckIcon className="h-3 w-3" />}
      </button>
    </li>
  );
}

export default PaymentInfoItem;
