import PageWrapper from '@/components/wrapper/page.wrapper';
import { PREAMBLE } from '@/shared/constants/app';

const HomePage: React.FC = () => {
  return (
    <PageWrapper pageTitle='Dua & Dhikr' showSetting>
      <div className='bg-primary rounded-xl px-4 py-6 text-white text-center shadow-lg'>
        <p className='text-lg mb-4'>"{PREAMBLE.latin_id}"</p>
        <p className='text-sm'>{PREAMBLE.surah}</p>
      </div>
    </PageWrapper>
  );
};

export default HomePage;
