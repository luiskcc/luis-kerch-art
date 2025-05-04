import EmotionalLandscape from './components/EmotionalLandscape';
import Hero from './components/Hero';
import FirstPage from './components/FirstPage';
import ThirdPage from './components/ThirdPage';
import WeavingLight from './components/WeavingLight';
import CvOnePage from './components/CvOnePage';
import CvTwoPage from './components/CvTwoPage';
import Image from 'next/image';

// Define CenteredImage OUTSIDE the Home function or at the top of the file
function CenteredImage({ src, alt, ...props }) {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <Image
        src={src}
        alt={alt}
        className="relativeo bject-cover sm:object-contain sm:object-center"
        width={800}
        height={800}
        {...props}
      />
    </div>
  );
}

export default function Home() {
  const pages = [
    { component: Hero, className: "h-screen" },
    { component: EmotionalLandscape, className: "h-screen" },
    { component: FirstPage, className: "min-h-screen mb-24" },
    {
      component: () => (
        <CenteredImage
          src="/02.jpg"
          alt="Concrete stairs with light"
        />
      ),
      className: "h-screen md:m-24"
    },

    { component: ThirdPage, className: "min-h-screen mb-24" },
    
    { component: () => (
      <CenteredImage
        src="/03.jpg"
        alt="Concrete stairs with light"
      />
    ),
    className: "md:h-screen md:my-24"
  },
  { component: () => (
    <CenteredImage
      src="/05.jpg"
      alt="Concrete stairs with light"
    />
  ),
    className: "md:h-screen md:my-24"
  },
  { component: () => (
    <CenteredImage
      src="/04.jpg"
      alt="Concrete stairs with light"
      />
    ),
    className: "md:m-24"
  },
    { component: () => (
      <CenteredImage
        src="/08.jpg"
        alt="Concrete stairs with light"
      />
    ),
      className: "md:h-screen md:my-24"
    },
    { component: () => (
      <CenteredImage
        src="/09.jpg"
        alt="Concrete stairs with light"
      />
    ),
      className: "md:h-screen md:my-24"
    },
    { component: () => (
      <CenteredImage
        src="/010.jpg"
        alt="Concrete stairs with light"
      />
    ),
      className: "md:h-screen md:my-24"
    },
    { component: () => (
      <CenteredImage
        src="/011.jpg"
        alt="Concrete stairs with light"
      />
    ),
      className: "md:h-screen md:my-24"
    },
    { component: () => (
      <CenteredImage
        src="/065.jpg"
        alt="Concrete stairs with light"
      />
    ),
      className: "md:h-screen md:my-24"
    },
    { component: () => (
      <CenteredImage
        src="/012.jpg"
        alt="Concrete stairs with light"
      />
    ),
      className: "md:h-screen md:my-24"
    },
    { component: () => (
      <CenteredImage
        src="/014.jpg"
        alt="Concrete stairs with light"
      />
    ),
      className: "md:h-screen md:my-24"
    },
    { component: () => (
      <CenteredImage
        src="/015.jpg"
        alt="Concrete stairs with light"
      />
    ),
      className: "md:h-screen md:my-24"
    },
    { component: () => (
      <CenteredImage
        src="/016.jpg"
        alt="Concrete stairs with light"
      />
    ),
      className: "md:h-screen md:my-24"
    },
    { component: () => (
      <CenteredImage
        src="/017.jpg"
        alt="Concrete stairs with light"
      />
    ),
      className: "md:h-screen md:my-24"
    },
    { component: () => (
      <CenteredImage
        src="/018.jpg"
        alt="Concrete stairs with light"
      />
    ),
      className: "md:h-screen md:my-24"
    },
    { component: () => (
      <CenteredImage
        src="/019.jpg"
        alt="Concrete stairs with light"
      />
    ),
      className: "md:h-screen md:my-24"
    },
    { component: () => (
      <CenteredImage
        src="/020.jpg"
        alt="Concrete stairs with light"
      />
    ),
      className: "md:h-screen md:my-24"
    },
    { component: () => (
      <CenteredImage
        src="/021.jpg"
        alt="Concrete stairs with light"
      />
    ),
      className: "md:h-screen md:my-24"
    },
    { component: () => (
      <CenteredImage
        src="/022.jpg"
        alt="Concrete stairs with light"
      />
    ),
      className: "md:h-screen md:my-24"
    },
    { component: () => (
      <CenteredImage
        src="/023.jpg"
        alt="Concrete stairs with light"
      />
    ),
      className: "md:h-screen md:my-24"
    },
    { component: () => (
      <CenteredImage
        src="/024.jpg"
        alt="Concrete stairs with light"
      />
    ),
      className: "md:h-screen md:my-24"
    },
    { component: () => (
      <CenteredImage
        src="/025.jpg"
        alt="Concrete stairs with light"
      />
    ),
      className: "md:h-screen md:my-24"
    },
    { component: () => (
      <CenteredImage
        src="/026.jpg"
        alt="Concrete stairs with light"
      />
    ),
      className: "md:h-screen md:my-24"
    },
    { component: () => (
      <CenteredImage
        src="/027.jpg"
        alt="Concrete stairs with light"
      />
    ),
      className: "md:h-screen md:my-24"
    },
    { component: () => (
      <CenteredImage
        src="/028.jpg"
        alt="Concrete stairs with light"
      />
    ),
      className: "md:h-screen md:my-24"
    },
    { component: () => (
      <CenteredImage
        src="/029.jpg"
        alt="Concrete stairs with light"
      />
    ),
      className: "md:h-screen md:my-24"
    },
    { component: () => (
      <CenteredImage
        src="/058.jpg" 
        alt="Concrete stairs with light"
      />
    ),
      className: "md:h-screen md:my-24"
    },
    { component: () => (
      <CenteredImage
        src="/030.jpg"
        alt="Concrete stairs with light"
      />
    ),
      className: "md:h-screen md:my-24"
    },
    { component: () => (
      <CenteredImage
        src="/031.jpg"
        alt="Concrete stairs with light"
      />
    ),
      className: "md:h-screen md:my-24"
    },
    { component: () => (
      <CenteredImage
        src="/032.jpg"
        alt="Concrete stairs with light"
      />
    ),
      className: "md:h-screen md:my-24"
    },
    { component: () => (
      <CenteredImage
        src="/033.jpg"
        alt="Concrete stairs with light"
      />
    ),
      className: "md:h-screen md:my-24"
    },
    { component: () => (
      <CenteredImage
        src="/034.jpg"
        alt="Concrete stairs with light"
      />
    ),
      className: "md:h-screen md:my-24"
    },
    { component: () => (
      <CenteredImage
        src="/035.jpg"
        alt="Concrete stairs with light"
      />
    ),
      className: "md:h-screen md:my-24"
    },
    { component: () => (
      <CenteredImage
        src="/036.jpg"
        alt="Concrete stairs with light"
      />
    ),
      className: "md:h-screen md:my-24"
    },
    { component: () => (
      <CenteredImage
        src="/037.jpg"
        alt="Concrete stairs with light"
      />
    ),
      className: "md:h-screen md:my-24"
    },
    { component: () => (
      <CenteredImage
        src="/038.jpg"
        alt="Concrete stairs with light"
      />
    ),
      className: "md:h-screen md:my-24"
    },
    { component: () => (
      <CenteredImage
        src="/039.jpg"
        alt="Concrete stairs with light"
      />
    ),
      className: "md:h-screen md:my-24"
    },
    { component: () => (
      <CenteredImage
        src="/040.jpg" 
        alt="Concrete stairs with light"
      />
    ),
      className: "md:h-screen md:my-24"
    },
    { component: () => (
      <CenteredImage
        src="/042.jpg" 
        alt="Concrete stairs with light"
      />
    ),
      className: "md:h-screen md:my-24"
    },
    { component: () => (
      <CenteredImage
        src="/043.jpg" 
        alt="Concrete stairs with light"
      />
    ),
      className: "md:h-screen md:my-24"
    },
    { component: () => (
      <CenteredImage
        src="/044.jpg" 
        alt="Concrete stairs with light"
      />
    ),
      className: "md:h-screen md:my-24"
    },
    { component: () => (
      <CenteredImage
        src="/045.jpg" 
        alt="Concrete stairs with light"
      />
    ),
      className: "md:h-screen md:my-24"
    },
    { component: () => (
      <CenteredImage
        src="/047.jpg" 
        alt="Concrete stairs with light"
      />
    ),
      className: "md:h-screen md:my-24"
    },
    { component: () => (
      <CenteredImage
        src="/048.jpg" 
        alt="Concrete stairs with light"
      />
    ),
      className: "md:h-screen md:my-24"
    },
    { component: () => (
      <CenteredImage
        src="/049.jpg" 
        alt="Concrete stairs with light"
      />
    ),
      className: "md:h-screen md:my-24"
    },
    { component: () => (
      <CenteredImage
        src="/050.jpg" 
        alt="Concrete stairs with light"
      />
    ),
      className: "md:h-screen md:my-24"
    },
    { component: () => (
      <CenteredImage
        src="/051.jpg" 
        alt="Concrete stairs with light"
      />
    ),
      className: "h-screen mt-24"
    },
    { component: () => (
      <CenteredImage
        src="/052.jpg" 
        alt="Concrete stairs with light"
      />
    ),
      className: "md:h-screen md:my-24"
    },
    { component: () => (
      <CenteredImage
        src="/053.jpg" 
        alt="Concrete stairs with light"
      />
    ),
      className: "md:h-screen md:my-24"
    },
    { component: () => (
      <CenteredImage
        src="/054.jpg" 
        alt="Concrete stairs with light"
      />
    ),
      className: "md:h-screen md:my-24"
    },
    { component: () => (
      <CenteredImage
        src="/055.jpg" 
        alt="Concrete stairs with light"
      />
    ),
      className: "md:h-screen md:my-24"
    },
    { component: () => (
      <CenteredImage
        src="/061.jpg" 
        alt="Concrete stairs with light"
      />
    ),
      className: "md:h-screen md:my-24"
    },
    { component: () => (
      <CenteredImage
        src="/062.jpg" 
        alt="Concrete stairs with light"
      />
    ),
      className: "md:h-screen md:my-24"
    },
    { component: () => (
      <CenteredImage
        src="/059.jpg" 
        alt="Concrete stairs with light"
      />
    ),
      className: "md:h-screen md:my-24"
    },
    { component: () => (
      <CenteredImage
        src="/056.jpg" 
        alt="Concrete stairs with light"
      />
    ),
      className: "md:h-screen md:my-24"
    },
    { component: () => (
      <CenteredImage
        src="/057.jpg" 
        alt="Concrete stairs with light"
      />
    ),
      className: "md:h-screen md:my-24"
    },

    { component: WeavingLight, className: "min-h-screen" },
    { component: CvOnePage, className: "min-h-screen" },
    { component: CvTwoPage, className: "min-h-screen" },
  ];

  return (
    <main className="relative">
      {pages.map(({ component: Component, className }, index) => (
        <section key={index} className={className}>
          <Component />
        </section>
      ))}
    </main>
  );
}