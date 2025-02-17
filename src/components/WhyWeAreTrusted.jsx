import Image from "next/image";

const WhyWeAreTrusted = () => {
  const data = [
    {
      id: 1,
      desc: "OneSync turned vague career talks into real progress—1:1s no longer feel like interruptions.",
      image: "/trust1.svg",
      name: "Kent Mayert",
      role: "Senior Software Engineer",
    },
    {
      id: 2,
      desc: "OneSync helps me, as a non-technical manager, bridge the gap and support my team's technical challenges.",
      image: "/trust2.svg",
      name: "Ernestine Glover",
      role: "Engineering Manager",
    },
    {
      id: 3,
      desc: "With OneSync, I can focus on what really matters in my 1:1s - my team's growth and satisfaction.",
      image: "/trust3.svg",
      name: "Dave Schultz",
      role: "Engineering Lead",
    },
    {
      id: 4,
      desc: "The automated insights and agenda preparation save me hours every week. I can't imagine going back.",
      image: "/trust4.svg",
      name: "Sherri Gleason",
      role: "Tech Team Manager",
    },
    {
      id: 5,
      desc: "OneSync turned our remote team's 1:1s into meaningful discussions, even across time zones.",
      image: "/trust5.svg",
      name: "Bennie Bogisich",
      role: "Senior Developer",
    },
    {
      id: 6,
      desc: "My engineers finally feel heard, and I have the right tools to support and empower them better.",
      image: "/trust6.svg",
      name: "Kim Kuvalis",
      role: "Engineering Director",
    },
  ];

  return (
    <div className="w-full px-32 text-center">
      <div className="py-20">
        <h1 className="heading__2">Why Engineering Teams Trust OneSync</h1>
        <p className="pt-6 heading__5">
          Real feeback from real users on how OneSync transforms their 1:1s
        </p>

        <div className="pt-24 grid grid-cols-3 gap-x-10 gap-y-24">
          {data.map((team) => (
            <div
              className="flex flex-col px-5 shadow-lg rounded-lg border-t border-gray-200 relative py-10"
              key={team.id}
            >
              <Image
                alt={team.name + "Image"}
                height={76}
                width={76}
                src={team.image}
                className="absolute -top-5 -translate-y-5 -translate-x-1/2 left-1/2"
              />
              <p className="para__1 text-[#797979] pt-6 max-w-[280px] mx-auto">
                {team.desc}
              </p>
              <hr className=" my-4 border border-[#EAEFF3]" />
              <div>
                <h3 className="heading__4 text-[#453232]">{team.name}</h3>
                <span className="para__3">{team.role}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyWeAreTrusted;
