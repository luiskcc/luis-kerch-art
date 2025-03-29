import Image from 'next/image';
export default function EleventhPage() {
    return (
        <div className="relative w-full h-full overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-full h-full overflow-hidden">
                    <Image 
                        src="/11_12_14.jpg" 
                        alt="Abstract artwork by Luis Kerch" 
                        fill 
                        className="object-cover scale-[1.4] object-center" 
                        style={{ objectPosition: '60% 50%' }} // Adjust these values to focus on the center of the painting
                        quality={100}
                        sizes="100vw"
                        priority
                    />
                </div>
            </div>
        </div>
    );
}