// background: radial-gradient(shape position, color-stop, color-stop);
const CORNER =
  "z-10 h-4 w-4 ml-[3px] mb-1 self-end justify-self-start bg-[radial-gradient(circle_at_top_right,transparent_15px,white_16px)] ";

const ProjectGallery = () => {
  return (
    <div
      className="grid grid-cols-12 grid-rows-12 aspect-[1.29/1] w-full"
      dir="ltr"
    >
      <div className="col-start-4 col-end-13 row-start-1 row-end-8 p-1 z-0">
        <img
          src="/frist.png"
          alt="Project villa"
          className="w-full h-full object-cover rounded-2xl"
        />
      </div>

      <div className="col-start-1 col-end-6 row-start-4 row-end-13 p-1 z-10">
        <img
          src="/sec.png"
          alt="Project aerial view"
          className="w-full h-full object-cover rounded-2xl ring-8 ring-white"
        />
      </div>

      <div className=" col-start-6 col-end-13 row-start-8 row-end-13 p-2 z-0">
        <img
          src="/small.png"
          alt="Project aerial view"
          className=" w-full h-full object-cover rounded-2xl "
        />
      </div>

      <div className={`col-start-4  row-start-3 ${CORNER}`} />
      <div className={`col-start-6  row-start-7 ${CORNER}`} />
    </div>
  );
};

export default ProjectGallery;
