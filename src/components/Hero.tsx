
import Image from "next/image";
import Link from "next/link";
import { MoveLeft } from 'lucide-react';
const Hero = () => {
  return (
    <div
      className="relative h-screen max-h-[842px] mt-1 overflow-hidden"
    >
      <div className="absolute inset-x-3 inset-y-0 overflow-hidden rounded-[32px]">
        <Image
          src="/hero.jpg"
          alt="Hero Image"
          fill
          className="object-cover"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

      </div>
      <div>
        <div className="absolute inset-x-0 bottom-0 flex flex-col items-center justify-center gap-4 pb-12 px-3 text-center ">
          <h1 className="text-3xl font-semibold text-white sm:text-4xl md:text-5xl lg:text-6xl max-w-[672px] leading-relaxed">
            مساحــــــــــات تُلهمــــــــــك... وحياة تستحق ان تعيشها
          </h1>
          <p className="max-w-[600px] text-[18px] text-white">
            نضع بين يديك مجموعة مختارة من المشروعات السكنية والتجارية في المنصورة، لنساعدك على اختيار المساحة التي تلائم تطلعاتك وتواكب أسلوب حياتك
          </p>
          <button className="bg-[#2563EB] min-w-[302px]  rounded-[8px] mt-2">
            <Link href="#" className="transition-transform duration-300 hover:translate-x-2  flex gap-2 justify-center items-center text-white p-3">
              <p>اكتشف مشروعاتنا</p>

              <MoveLeft size={20} />


            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}


export default Hero;
