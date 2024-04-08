import type { MouseEventHandler } from 'react';
import useCopyToClipboard from '../hooks/useCopyToClipboard';
import type { TelegramChannel } from '../types';
import LinkIcon from './icons/LinkIcon';
import TelegramIcon from './icons/TelegramIcon';
import TelegramInnerIcon from './icons/TelegramInnerIcon';

function TelegramChannelCard({ name, description, logo, channelLink }: TelegramChannel) {
  const [copyStatus, copy] = useCopyToClipboard(channelLink);

  return (
    <article className="mx-auto w-full max-w-2xl rounded-md border border-black/20 xl:mx-0">
      <div className="flex flex-col items-center justify-between gap-5 pt-3 sm:flex-row sm:py-3 sm:pl-6 sm:pr-2.5">
        <div className="flex flex-col gap-6 px-3 text-center sm:flex-row sm:px-0 sm:text-right">
          <img
            src={logo.src}
            alt={logo.alt}
            width="146"
            height="146"
            className="h-[9.125rem] shrink-0 self-center rounded-xl"
          />
          <div className="flex flex-col">
            <h2 className="mx-auto w-fit rounded-xl bg-telegram-blue px-2 py-1 font-medium text-white sm:mx-0">
              {name}
            </h2>
            <p className="mb-5 mt-2.5 text-sm font-light text-[#666]/80">
              {description ? description : 'لا يوجد وصف للقناة.'}
            </p>
            <button
              onClick={copy as MouseEventHandler<HTMLButtonElement>}
              className="mx-auto mt-auto flex items-center gap-1 text-sm font-medium text-telegram-blue sm:mx-0">
              <span className="underline" dir="ltr" lang="en">
                {copyStatus === 'inactive' && 'Copy link'}
                {copyStatus === 'copied' && 'Copied!'}
              </span>
              <span className="inline-block h-1 w-1 rounded-full bg-telegram-blue"></span>
              <span>
                <LinkIcon className="text-telegram-blue" />
              </span>
            </button>
          </div>
        </div>
        <a
          href={channelLink}
          className="inline-block w-full bg-telegram-blue py-3 sm:w-auto sm:bg-transparent sm:py-0">
          <TelegramIcon width="64" height="64" className="hidden sm:inline" />
          <TelegramInnerIcon width="40" height="33" className="mx-auto sm:hidden" />
        </a>
      </div>
    </article>
  );
}

export default TelegramChannelCard;
