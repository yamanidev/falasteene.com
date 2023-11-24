export type PaymentMethod = {
  label: string;
  accountNumber: string;
};

export type ContactDetails = {
  website: string;
  facebook?: string;
  twitter?: string;
  instagram?: string;
  whatsapp?: string;
  phoneNumbers?: string[];
  location: {
    text: string;
    link?: string;
  };
};

export type DonationSource = {
  name: string;
  local: boolean;
  wilaya?: string;
  country?: string;
  logo: {
    src: string;
    alt: string;
  };
  paymentMethods?: PaymentMethod[];
  donationLink?: string;
  contactDetails: ContactDetails;
};
