import Image from "next/image";

const Works = () => {
  return (
    <div className="bg-[#0D121F] px-32 py-20 text-white flex items-center justify-center w-full gap-5">
      <div className="w-full">
        <Image
          className="w-[80%] h-full"
          alt="woman"
          height={50}
          width={50}
          src={"/woman.svg"}
        />
      </div>
      <div className="w-full h-full">
        <h1 className="heading__2 text-white">How it Works</h1>
        <p className="para__1 text-[#90A3BF] mt-5">
          Turn your meetings into engines of growth with streamlined <br />{" "}
          processes and actionable insights.
        </p>
        <div className="mt-20 w-full bg-[#1A202C] p-6 rounded-xl max-w-[500px] flex flex-col items-start gap-4 relative">
          <div className="flex items-start gap-4 z-[5]">
            <div className="size-9 flex items-center justify-center rounded-full bg__gradient p-5 font-semibold">
              1
            </div>
            <div>
              <h3 className="font-bold text-white heading__5">
                Register your Spend.In account.
              </h3>
              <p className="para__3 text-white pt-1">
                Automated meeting agendas based on previous discussions,
                integration with development tools to surface relevant technical
                context, customizable templates for different discussion types
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4 z-[5]">
            <div className="size-9 font-jarkata flex items-center justify-center rounded-full bg__gradient p-5 font-semibold">
              2
            </div>
            <div>
              <h3 className="font-bold text-[#B6BCCD] heading__5">
                Fill in the list of your business expenses.
              </h3>
            </div>
          </div>
          <div className="flex items-center gap-4 z-[5]">
            <div className="font-jarkata size-9 flex items-center justify-center rounded-full bg__gradient p-5 font-semibold">
              3
            </div>
            <div>
              <h3 className="text-[#B6BCCD] heading__5">
                Done, let&apos;s continue the work.
              </h3>
            </div>
          </div>
          <div className="h-[80%] absolute bg-[#2a385c] w-[2px] left-5 translate-x-6 z-1"/>
        </div>
      </div>
    </div>
  );
};

export default Works;
