import type { ContactDetails } from "../types";
import GlobeIcon from "./icons/GlobeIcon";
import InstagramIcon from "./icons/InstagramIcon";
import PhoneIcon from "./icons/PhoneIcon";
import WhatsAppIcon from "./icons/WhatsAppIcon";

function ContactLinks({ details, className }: { details: ContactDetails; className?: string }) {
  return (
    <ul className={`flex justify-center gap-1 ${className}`}>
      {details.phoneNumbers &&
        details.phoneNumbers.map((phoneNumber, index) => (
          <li key={index}>
            <a href={`tel:${phoneNumber}`} className="inline-block rounded-md bg-black p-2">
              <PhoneIcon className="h-3.5 w-3.5" />
            </a>
          </li>
        ))}
      {details.website && (
        <li>
          <a
            href={details.website}
            rel="noreferrer"
            target="_blank"
            className="inline-block rounded-md bg-palestine-green p-2">
            <GlobeIcon className="h-3.5 w-3.5 text-white" />
          </a>
        </li>
      )}
      {details.whatsapp && (
        <li>
          <a
            href={details.whatsapp}
            rel="noreferrer"
            target="_blank"
            className="inline-block rounded-md bg-[#25D366] p-2">
            <WhatsAppIcon className="h-3.5 w-3.5" />
          </a>
        </li>
      )}
      {details.instagram && (
        <li>
          <a
            href={details.instagram}
            rel="noreferrer"
            target="_blank"
            className="inline-block rounded-md bg-[#FF0069] p-2">
            <InstagramIcon className="h-3.5 w-3.5" />
          </a>
        </li>
      )}
      {details.facebook && (
        <li>
          <a
            href={details.facebook}
            rel="noreferrer"
            target="_blank"
            className="bg-facebook-blue inline-block rounded-md p-2">
            <img src="/images/facebook-logo-white.png" alt="Facebook logo" className="w-3.5" />
          </a>
        </li>
      )}
    </ul>
  );
}

export default ContactLinks;
