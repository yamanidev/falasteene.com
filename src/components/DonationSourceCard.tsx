import type { DonationSource } from '../types';
import AlgeriePosteIcon from './icons/AlgeriePosteIcon';
import BankIcon from './icons/BankIcon';
import CopyIcon from './icons/CopyIcon';
import InfoIcon from './icons/InfoIcon';
import InstagramIcon from './icons/InstagramIcon';
import LocationIcon from './icons/LocationIcon';
import PhoneIcon from './icons/PhoneIcon';
import WhatsAppIcon from './icons/WhatsAppIcon';

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
                <a href={details.contactDetails.location.link} className="w-full underline">
                  {details.contactDetails.location.text}
                </a>
              ) : (
                <p className="w-full">{details.contactDetails.location.text}</p>
              )}
            </li>
            {details.paymentMethods?.map((method, index) => (
              <li key={index} className="flex items-center gap-1 rounded-md bg-[#d9d9d9] px-4 py-1">
                <span className="rounded-sm bg-white/40 px-1 py-0.5">
                  {method.label === 'CCP' ? (
                    <AlgeriePosteIcon className="h-3 w-2.5" />
                  ) : (
                    <BankIcon className="h-3 w-3" />
                  )}
                </span>
                <p className="w-full" dir="ltr">
                  {method.accountNumber}
                </p>
                <button className="rounded-sm bg-white/40 px-1 py-0.5">
                  <CopyIcon className="h-3 w-2.5" />
                </button>
              </li>
            ))}
            {!details.local && (
              <ul className="mt-auto flex justify-center gap-1">
                {details.contactDetails.phoneNumbers &&
                  details.contactDetails.phoneNumbers.map((phoneNumber, index) => (
                    <li key={index}>
                      <a
                        href={`tel:${phoneNumber}`}
                        className="inline-block rounded-md bg-black p-2">
                        <PhoneIcon className="w-3.5" />
                      </a>
                    </li>
                  ))}
                {details.contactDetails.whatsapp && (
                  <li>
                    <a
                      href={details.contactDetails.whatsapp}
                      className="inline-block rounded-md bg-[#25D366] p-2">
                      <WhatsAppIcon className="h-3.5 w-3.5" />
                    </a>
                  </li>
                )}
                {details.contactDetails.instagram && (
                  <li>
                    <a
                      href={details.contactDetails.instagram}
                      className="inline-block rounded-md bg-[#FF0069] p-2">
                      <InstagramIcon className="w-3.5" />
                    </a>
                  </li>
                )}
                {details.contactDetails.facebook && (
                  <li>
                    <a
                      href={details.contactDetails.facebook}
                      className="inline-block rounded-md bg-[#1877F2] p-2">
                      <img
                        src="/images/facebook-logo-white.png"
                        alt="Facebook logo"
                        className="w-3.5"
                      />
                    </a>
                  </li>
                )}
              </ul>
            )}
          </ul>
          {!details.local && (
            <a
              href={details.donationLink}
              className="flex flex-col justify-center rounded-md border border-palestine-green px-8 text-palestine-green">
              <span>
                <InfoIcon className="h-6 w-6 text-xs font-normal" />
              </span>
              <span>تبرع</span>
            </a>
          )}
        </div>
        {details.local && (
          <ul className="mt-2 flex justify-center gap-1">
            {details.contactDetails.phoneNumbers &&
              details.contactDetails.phoneNumbers.map((phoneNumber, index) => (
                <li key={index}>
                  <a href={`tel:${phoneNumber}`} className="inline-block rounded-md bg-black p-2">
                    <PhoneIcon className="w-3.5" />
                  </a>
                </li>
              ))}
            {details.contactDetails.whatsapp && (
              <li>
                <a
                  href={details.contactDetails.whatsapp}
                  className="inline-block rounded-md bg-[#25D366] p-2">
                  <WhatsAppIcon className="h-3.5 w-3.5" />
                </a>
              </li>
            )}
            {details.contactDetails.instagram && (
              <li>
                <a
                  href={details.contactDetails.instagram}
                  className="inline-block rounded-md bg-[#FF0069] p-2">
                  <InstagramIcon className="w-3.5" />
                </a>
              </li>
            )}
            {details.contactDetails.facebook && (
              <li>
                <a
                  href={details.contactDetails.facebook}
                  className="inline-block rounded-md bg-[#1877F2] p-2">
                  <img
                    src="/images/facebook-logo-white.png"
                    alt="Facebook logo"
                    className="w-3.5"
                  />
                </a>
              </li>
            )}
          </ul>
        )}
      </div>
    </div>
  );
}

export default DonationSourceCard;
