import { donationSources } from '../data/donationSources';
import DonationSourceCard from './DonationSourceCard';

function DonationSourcesList({ className }: { className?: string }) {
  return (
    <section className={className}>
      <div className="space-y-4">
        {donationSources.map((donationSources, index) => (
          <DonationSourceCard key={index} details={donationSources} />
        ))}
      </div>
    </section>
  );
}

export default DonationSourcesList;
