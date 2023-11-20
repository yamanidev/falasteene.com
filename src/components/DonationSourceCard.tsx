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
        <h2 className="mt-4 text-xl">{details.name}</h2>
      </header>
      <div className="mt-5 px-4 pb-3">
        <div className="flex w-full gap-3">
          <div className="flex h-28 w-28 shrink-0 items-center justify-center rounded-md bg-black">
            <p className="font-semibold text-white">LOGO</p>
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
              <ContactLinks details={details.contactDetails} className="mt-auto" />
            )}
          </ul>
          {!details.local && (
            <a
              href={details.donationLink}
              rel="noreferrer"
              target="_blank"
              className="flex flex-col justify-center rounded-md border border-palestine-green px-8 text-palestine-green">
              <span>
                <InfoIcon className="h-6 w-6 text-xs font-normal" />
              </span>
              <span>تبرع</span>
            </a>
          )}
        </div>
        {details.local && <ContactLinks details={details.contactDetails} className="mt-2" />}
      </div>
    </div>
  );
}

export default DonationSourceCard;
