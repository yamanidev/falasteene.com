import type { DonationSource } from '../types';
import ContactLinks from './ContactLinks';
import PaymentInfoItem from './PaymentInfoItem';
import AlgeriePosteIcon from './icons/AlgeriePosteIcon';
import BankIcon from './icons/BankIcon';
import InfoIcon from './icons/InfoIcon';
import LocationIcon from './icons/LocationIcon';

type Props = {
  details: DonationSource;
  className?: string;
};

function DonationSourceCard({ details, className }: Props) {
  return (
    <div className={`overflow-hidden rounded-md bg-anti-flash-white ${className}`}>
      <header className="text-center">
        <h6
          className={`py-1.5 text-sm font-light text-anti-flash-white ${
            details.local ? 'bg-palestine-green' : 'bg-[#1877F2]'
          }`}>
          {details.local
            ? `من داخل الجزائر: ${details.wilaya}`
            : `من خارج الجزائر: ${details.country}`}
        </h6>
        <h2 className="mt-4 hidden text-xl sm:block">{details.name}</h2>
      </header>
      <div className={`mt-5 ${details.local ? 'pb-3' : 'sm:pb-3'}`}>
        <div className="flex w-full flex-col items-center gap-3 px-4 sm:flex-row sm:items-stretch">
          <div className="shrink-0">
            <div className="mx-auto flex h-28 w-28 items-center justify-center rounded-md bg-black sm:mx-0">
              <p className="font-semibold text-white">LOGO</p>
            </div>
            <h2 className="mt-5 text-center text-xl sm:hidden">{details.name}</h2>
          </div>
          <ul className="flex w-full flex-col gap-1.5 text-xs font-light text-[#817A99]">
            <li className="flex items-center gap-1 rounded-md bg-[#d9d9d9] px-4 py-1">
              <span className="rounded-sm bg-white/40 px-1 py-0.5">
                <LocationIcon className="h-4 w-3" />
              </span>
              {details.contactDetails.location.link ? (
                <a
                  href={details.contactDetails.location.link}
                  rel="noreferrer"
                  target="_blank"
                  className="w-full underline">
                  {details.contactDetails.location.text}
                </a>
              ) : (
                <p className="w-full">{details.contactDetails.location.text}</p>
              )}
            </li>
            {details.paymentMethods?.map((method, index) => (
              <PaymentInfoItem
                key={index}
                text={method.accountNumber}
                icon={
                  method.label === 'CCP' ? (
                    <AlgeriePosteIcon className="h-3 w-2.5" />
                  ) : (
                    <BankIcon className="h-3 w-3" />
                  )
                }
              />
            ))}
            {!details.local && (
              <ContactLinks details={details.contactDetails} className="mt-2 sm:mt-auto" />
            )}
          </ul>
          {!details.local && (
            <a
              href={details.donationLink}
              rel="noreferrer"
              target="_blank"
              className="hidden flex-col justify-center rounded-md border border-palestine-green px-8 text-palestine-green sm:flex">
              <span>
                <InfoIcon className="h-6 w-6 text-xs font-normal" />
              </span>
              <span>تبرع</span>
            </a>
          )}
        </div>
        {details.local && (
          <ContactLinks details={details.contactDetails} className="mt-4 sm:mt-2" />
        )}
        {!details.local && (
          <a
            href={details.donationLink}
            rel="noreferrer"
            target="_blank"
            className="mt-4 flex flex-col items-center justify-center rounded-md border border-palestine-green py-2 text-palestine-green sm:hidden">
            <span>
              <InfoIcon className="h-6 w-6 text-xs font-normal" />
            </span>
            <span>تبرع</span>
          </a>
        )}
      </div>
    </div>
  );
}

export default DonationSourceCard;
