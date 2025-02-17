import Image from "next/image";

const Excel = () => {
  const data = [
    {
      id: 1,
      title: "Protect your flow",
      desc: "Smart scheduling that respects your deep work periods, ensuring minimal interruptions and maximum productivity.",
      icon: "/excel1.svg",
    },
    {
      id: 2,
      title: "Drive your growth",
      desc: "Turn status updates into meaningful career development discussions that align with your goals and drive real growth.",
      icon: "/excel2.svg",
    },
    {
      id: 3,
      title: "track progress",
      desc: "Avoid vague feedback by gaining clear, actionable insights that help you exceed expectations.",
      icon: "/excel3.svg",
    },
    {
      id: 4,
      title: "own your path",
      desc: "Capture and monitor your career goals effortlessly with automated progress tracking that keeps you focused and on course.",
      icon: "/excel4.svg",
    },
    {
      id: 5,
      title: "foster stronger collaboration",
      desc: "Build a culture of transparency and teamwork by streamlining communication and aligning everyone on the same page.",
      icon: "/excel5.svg",
    },
    {
      id: 6,
      title: "unlock your potential",
      desc: "Set clear, measurable goals and receive the support and tools to unlock your full career potential, empowering you to achieve lasting success.",
      icon: "/excel6.svg",
    },
  ];

  return (
    <div className="bg-colors bg-cover bg-center bg-no-repeat w-full text-center px-32">
      <div className="py-20">
        <h1 className="heading__2">Empower Engineers to Excel</h1>
        <p className="pt-6 heading__5">
          Give engineers the tools to focus, grow, and take charge of their
          careers with smart scheduling, <br /> actionable insights, and
          meaningful discussions.
        </p>
        <div className="grid grid-cols-3 gap-10 mt-20 text-start">
          {data.map((item) => (
            <div
              className="flex flex-col items-start px-5 py-10 rounded-2xl border-2 shadow-md"
              key={item.id}
            >
              <Image alt="icon" height={50} width={45} src={item.icon} />
              <div className="mt-8">
                <h2 className="heading__4 capitalize">{item.title}</h2>
                <p className="para__3 mt-3">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Excel;
