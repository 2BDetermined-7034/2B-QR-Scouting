import { useState } from 'preact/hooks';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { QRModal } from './components/QR';
import { Sections } from './components/Sections';
import { CommitAndResetSection } from './components/Sections/CommitAndResetSection';
import { ConfigSection } from './components/Sections/ConfigSection';
import { useQRScoutState } from './store/store';
import './index.css';

export function App() {
  const formData = useQRScoutState(state => state.formData);
  const [showQR, setShowQR] = useState(false);

  return (
    <div className="min-h-screen py-2 dark:bg-gray-700">
      <Header />
      <main className="flex flex-1 flex-col items-center justify-center px-4 text-center">
        <h1 className="font-sans text-6xl font-bold">
          <div className={`font-eth text-green-ethnocentric`}>{formData.page_title}</div>
        </h1>
        <QRModal show={showQR} onDismiss={() => setShowQR(false)} />

        <form className="w-full px-4" onSubmit={e => e.preventDefault()}>
          <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            <Sections />
            <CommitAndResetSection onCommit={() => setShowQR(true)} />
            <ConfigSection />
          </div>
        </form>
      </main>
      <Footer />
    </div>
  );
}
