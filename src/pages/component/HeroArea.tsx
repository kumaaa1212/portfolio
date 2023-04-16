import Image from 'next/image';
import Link from 'next/link';

const HeroArea = () => {
  return (
    <section className="relative bg-gray-800">
    <div className="absolute inset-0">
      <Image
        src="/earthmap1k.jpg"
        alt="globe"
        width={300}
        height={300}
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-70"></div>
    </div>
    <div className="container mx-auto px-6 py-20">
      <h2 className="text-4xl font-bold mb-2 text-white">
        Welcome to my portfolio!
      </h2>
      <h3 className="text-2xl mb-8 text-gray-200">
        I am a web developer and this is my portfolio website.
      </h3>
      <button className="bg-white font-bold rounded-full py-4 px-8 shadow-lg uppercase tracking-wider">
        <Link href="/component/ContactForm">Get In Touch</Link>
      </button>
    </div>
  </section>
  );
};

export default HeroArea;
<style jsx>{`
  .globe-container {
    width: 100%;
    height: 100%;
    perspective: 1000px;
  }

  .globe {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background-image: url("/globe.png");
    background-size: cover;
    position: relative;
    animation: rotate 10s linear infinite;
    transform-style: preserve-3d;
  }

  @keyframes rotate {
    0% {
      transform: rotateY(0);
    }
    100% {
      transform: rotateY(360deg);
    }
  }
`}</style>;




