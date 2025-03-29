import Image from 'next/image';

export default function Hero() {
    return (
        <div className="relative w-full h-full">
            {/* Background Image */}
            <div className="absolute inset-0 w-full h-full">
                <Image
                    src="/hero_luis_kerch.jpg" 
                    alt="Abstract blue and mauve artwork"
                    fill
                    className="object-cover"
                    priority
                />
            </div>

            {/* Text Overlay */}
            <div className="relative z-10 h-full flex flex-col items-center justify-center">
                <h1 className="text-6xl font-jost font-thin tracking-[.25em] text-white mb-6">
                    LUIS KERCH
                </h1>
                <p className="text-2xl font-jost font-thin tracking-[.15em] text-white mb-2">
                    OBRAS
                </p>
                <p className="text-xl font-jost font-thin tracking-wider text-white opacity-80">
                    2 0 2 5
                </p>
            </div>
        </div>
    );
}