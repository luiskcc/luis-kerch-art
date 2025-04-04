import EmotionalLandscape from './components/EmotionalLandscape';
import Hero from './components/Hero';
import FirstPage from './components/FirstPage';
import ThirdPage from './components/ThirdPage';
import WeavingLight from './components/WeavingLight';
import CvOnePage from './components/CvOnePage';
import CvTwoPage from './components/CvTwoPage';
import ArtworkImage from './components/ArtWorkImage';

export default function Home() {
  const pages = [
    // Special components (unique layouts)
    { component: Hero, className: "h-screen" },
    { component: EmotionalLandscape, className: "h-screen" },
    { component: FirstPage, className: "min-h-screen mb-24" },
    
    // Artwork image (with file number 02)
    { 
      component: ArtworkImage,
      props: { 
        src: "/02.jpg", 
        alt: "Concrete stairs with light", 
        className: "object-cover object-right sm:object-contain sm:object-center" 
      },
      className: "h-screen mt-24" 
    },
    
    { component: ThirdPage, className: "min-h-screen mb-24" },
    
    // Artwork images (with sequential file numbers)
    { 
      component: ArtworkImage, 
      props: { 
        src: "/03.jpg", 
        className: "object-cover sm:object-contain sm:object-center" 
      },
      className: "h-screen mt-24" 
    },
    { component: ArtworkImage, props: { src: "/04.jpg" }, className: "h-screen" },
    { component: ArtworkImage, props: { src: "/05.jpg" }, className: "h-screen" },
    { component: ArtworkImage, props: { src: "/06.jpg" }, className: "h-screen" },
    { component: ArtworkImage, props: { src: "/07.jpg" }, className: "h-screen" },
    { component: ArtworkImage, props: { src: "/08.jpg" }, className: "h-screen" },
    { component: ArtworkImage, props: { src: "/09.jpg" }, className: "h-screen" },
    { component: ArtworkImage, props: { src: "/010.jpg" }, className: "h-screen" },
    { component: ArtworkImage, props: { src: "/011.jpg" }, className: "h-screen" },
    { component: ArtworkImage, props: { src: "/012.jpg" }, className: "h-screen" },
    { component: ArtworkImage, props: { src: "/013.jpg" }, className: "h-screen" },
    { component: ArtworkImage, props: { src: "/014.jpg" }, className: "h-screen" },
    { component: ArtworkImage, props: { src: "/015.jpg" }, className: "h-screen" },
    { component: ArtworkImage, props: { src: "/016.jpg" }, className: "h-screen" },
    { component: ArtworkImage, props: { src: "/017.jpg" }, className: "h-screen" },
    { component: ArtworkImage, props: { src: "/018.jpg" }, className: "h-screen" },
    { component: ArtworkImage, props: { src: "/019.jpg" }, className: "h-screen" },
    { component: ArtworkImage, props: { src: "/020.jpg" }, className: "h-screen" },
    { component: ArtworkImage, props: { src: "/021.jpg" }, className: "h-screen" },
    { component: ArtworkImage, props: { src: "/022.jpg" }, className: "h-screen" },
    { component: ArtworkImage, props: { src: "/023.jpg" }, className: "h-screen" },
    { component: ArtworkImage, props: { src: "/024.jpg" }, className: "h-screen" },
    { component: ArtworkImage, props: { src: "/025.jpg" }, className: "h-screen" },
    { component: ArtworkImage, props: { src: "/026.jpg" }, className: "h-screen" },
    { component: ArtworkImage, props: { src: "/027.jpg" }, className: "h-screen" },
    { component: ArtworkImage, props: { src: "/028.jpg" }, className: "h-screen" },
    { component: ArtworkImage, props: { src: "/029.jpg" }, className: "h-screen" },
    { component: ArtworkImage, props: { src: "/030.jpg" }, className: "h-screen" },
    { component: ArtworkImage, props: { src: "/031.jpg" }, className: "h-screen" },
    { component: ArtworkImage, props: { src: "/032.jpg" }, className: "h-screen" },
    { component: ArtworkImage, props: { src: "/033.jpg" }, className: "h-screen" },
    { component: ArtworkImage, props: { src: "/034.jpg" }, className: "h-screen" },
    { component: ArtworkImage, props: { src: "/035.jpg" }, className: "h-screen" },
    { component: ArtworkImage, props: { src: "/036.jpg" }, className: "h-screen" },
    { component: ArtworkImage, props: { src: "/037.jpg" }, className: "h-screen" },
    { component: ArtworkImage, props: { src: "/038.jpg" }, className: "h-screen" },
    { component: ArtworkImage, props: { src: "/039.jpg" }, className: "h-screen" },
    { component: ArtworkImage, props: { src: "/040.jpg" }, className: "h-screen" },
    { component: ArtworkImage, props: { src: "/041.jpg" }, className: "h-screen" },
    { component: ArtworkImage, props: { src: "/042.jpg" }, className: "h-screen" },
    { component: ArtworkImage, props: { src: "/043.jpg" }, className: "h-screen" },
    { component: ArtworkImage, props: { src: "/044.jpg" }, className: "h-screen" },
    { component: ArtworkImage, props: { src: "/045.jpg" }, className: "h-screen" },
    { component: ArtworkImage, props: { src: "/046.jpg" }, className: "h-screen" },
    { component: ArtworkImage, props: { src: "/047.jpg" }, className: "h-screen" },
    { component: ArtworkImage, props: { src: "/048.jpg" }, className: "h-screen" },
    { component: ArtworkImage, props: { src: "/049.jpg" }, className: "h-screen" },
    { component: ArtworkImage, props: { src: "/050.jpg" }, className: "h-screen" },
    { component: ArtworkImage, props: { src: "/051.jpg" }, className: "h-screen" },
    { component: ArtworkImage, props: { src: "/052.jpg" }, className: "h-screen" },
    { component: ArtworkImage, props: { src: "/053.jpg" }, className: "h-screen" },
    { component: ArtworkImage, props: { src: "/054.jpg" }, className: "h-screen" },
    { component: ArtworkImage, props: { src: "/055.jpg" }, className: "h-screen" },
    { component: ArtworkImage, props: { src: "/056.jpg" }, className: "h-screen" },
    { component: ArtworkImage, props: { src: "/057.jpg" }, className: "h-screen" },
    
    
    // Special components (unique layouts)
    { component: WeavingLight, className: "min-h-screen" },
    { component: CvOnePage, className: "min-h-screen" },
    { component: CvTwoPage, className: "min-h-screen" },
  ];

  return (
    <main className="relative">
      {pages.map(({ component: Component, props = {}, className }, index) => (
        <section key={index} className={className}>
          <Component {...props} />
        </section>
      ))}
    </main>
  );
}