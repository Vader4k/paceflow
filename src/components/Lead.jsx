import Image from "next/image";

const Lead = () => {
  const data = [
    {
      id: 1,
      title: "Beyond Status Updates",
      desc: "AI-powered conversation starters focused on growth and development",
      icon: "/lead1.svg",
    },
    {
      id: 2,
      title: "Bridge the Technical Gap",
      desc: "Integrated technical context from GitHub and JIRA to better understand your team's challenges",
      icon: "/lead2.svg",
    },
    {
      id: 3,
      title: "Stay Connected",
      desc: "Keep pulse of team sentiment and technical challenges, especially in remote settings.",
      icon: "/lead3.svg",
    },
    {
      id: 4,
      title: "Career Development Framework",
      desc: "Built-in growth paths and actionable next steps, enabling structured plans for team members.",
      icon: "/lead4.svg",
    },
    {
      id: 5,
      title: "Build Real Trust",
      desc: "Structured templates for meaningful conversations about challenges and aspirations.",
      icon: "/lead5.svg",
    },
    {
      id: 6,
      title: "Empower your Team",
      desc: "Tools to help managers foster autonomy and accountability across projects.",
      icon: "/lead6.svg",
    },
  ];

  return (
    <div className="w-full text-center px-32">
      <div className="py-20">
        <h1 className="heading__2">
          Empower Engineering Managers to <br />
          Lead with Impact
        </h1>
        <p className="pt-6 heading__5">
          Enable managers to bridge technical gaps, foster career growth, and
          build stronger <br /> teams with structured tools and actionable
          insights.
        </p>
        <div className="grid grid-cols-3 gap-10 mt-20 text-start">
          {data.map((item) => (
            <div
              className="flex flex-col items-start px-5 py-10 rounded-2xl shadow-md"
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

export default Lead;
