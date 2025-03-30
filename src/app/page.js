import EmotionalLandscape from './components/EmotionalLandscape';
import Hero from './components/Hero';
import FirstPage from './components/FirstPage';
import SecondPage from './components/SecondPage';
import ThirdPage from './components/ThirdPage';
import FourthPage from './components/FourthPage';
import FifthPage from './components/FifthPage';
import SixthPage from './components/SixthPage';
import SeventhPage from './components/SeventhPage';
import EighthPage from './components/EighthPage';
import NinethPage from './components/NinethPage';
import TenthPage from './components/TenthPage';
import EleventhPage from './components/EleventhPage';
import WeavingLight from './components/WeavingLight';
import CvOnePage from './components/CvOnePage';
import CvTwoPage from './components/CvTwoPage';
export default function Home() {
  return (
    <main className="relative">
      <section className ="h-screen">
        <Hero />
      </section>
      <section className ="h-screen">
        <EmotionalLandscape />
      </section>
      <section className ="min-h-screen mb-24">
        <FirstPage />
      </section>
      <section className ="h-screen mt-24">
        <SecondPage />
      </section>
      <section className ="min-h-screen mb-24">
        <ThirdPage />
      </section>
      <section className ="h-screen mt-24">
        <FourthPage />
      </section>
      <section className ="h-screen">
        <FifthPage />
      </section>
      <section className ="h-screen">
        <SixthPage />
      </section>
      <section className ="h-screen">
        <SeventhPage />
      </section>  
      <section className ="h-screen">
        <EighthPage />
      </section>
      <section className ="h-screen">
        <NinethPage />
      </section>
      <section className ="h-screen">
        <TenthPage />
      </section>
      <section className ="h-screen">
        <EleventhPage />
      </section>
      <section className ="min-h-screen">
        <WeavingLight />
      </section>
      <section className ="min-h-screen">
        <CvOnePage />
      </section>
      <section className ="min-h-screen">
        <CvTwoPage />
      </section>
    </main>
  );
}