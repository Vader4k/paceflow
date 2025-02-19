import Image from "next/image";

const Step = () => {
  return (
    <div className=" px-20 flex items-center justify-between w-full gap-32 py-">
      <div className="w-full bg-center bg-cover bg-no-repeat flex-1 bg-steps h-[450px]" />
      <div className="w-full flex-1">
        <h1 className="heading__2 text-[#272727]">
          Take the First Step <br /> Towards Better 1:1s
        </h1>
        <p className="heading__5 my-5">
          Turn your 1:1s from time sinks into career catalysts. <br /> Start
          your 14-day free trial today.
        </p>
        <div className="pt-3 relative">
          <button className="btnText bg__gradient text-sm px-4 py-2 rounded-lg">
            See it in Action
          </button>
          <Image
            alt="step_arrow"
            className="absolute left-[68px] translate-x-[68px] top-7 translate-y-7"
            height={30}
            width={30}
            src={"/stepArror.svg"}
          />
        </div>
      </div>
    </div>
  );
};

export default Step;
