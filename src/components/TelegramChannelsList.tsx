import { telegramChannels } from '../data/telegramChannels';
import TelegramChannelCard from './TelegramChannelCard';

function TelegramChannelsList() {
  return (
    <div className="grid gap-4 xl:grid-cols-2">
      <h1 className="text-center xl:text-right">Some title</h1>
      {telegramChannels.map((channel) => (
        <TelegramChannelCard
          key={channel.name}
          name={channel.name}
          description={channel.description}
          logo={channel.logo}
          channelLink={channel.channelLink}
        />
      ))}
    </div>
  );
}

export default TelegramChannelsList;
