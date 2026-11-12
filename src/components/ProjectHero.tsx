import Image from "next/image";

const ProjectHero = () => {
  return (
    <div className="relative h-screen max-h-[595px] mt-1 overflow-hidden">
      <div className="absolute inset-x-3 inset-y-0 overflow-hidden rounded-[32px]">
        <Image
          src="/project.jpg"
          alt="Hero Image"
          fill
          className="object-cover"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
      </div>
      <div>
        <div className="absolute inset-x-8 bottom-8 flex flex-col items-start justify-center gap-4 pb-12 px-3 text-center ">
          <h1 className="text-3xl font-semibold text-white sm:text-4xl md:text-5xl lg:text-6xl max-w-[672px] leading-relaxed">
            مشاريعنا
          </h1>
        </div>
      </div>
    </div>
  );
};

export default ProjectHero;
