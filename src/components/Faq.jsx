import Image from "next/image";

const Faq = () => {
  const starter = {
    icon: "/starter.svg",
    amount: 9,
    desc: "Perfect for self-employed beginners",
    benefits: [
      { id: 1, text: "Send 10 quotes and invoices" },
      { id: 2, text: "Connect up to 2 bank accounts" },
      { id: 3, text: "Track up to 15 expenses per month" },
      { id: 4, text: "Manual payroll support" },
      { id: 5, text: "Export up to 3 reports" },
    ],
  };

  const smallBiz = {
    icon: "/smallbiz.svg",
    amount: 15,
    desc: "Perfect for small / medium sized businesses",
    benefits: [
      { id: 1, text: "Send 25 quotes and invoices" },
      { id: 2, text: "Connect up to 5 bank accounts" },
      { id: 3, text: "Track up to 50 expenses per month" },
      { id: 4, text: "Automated payroll support" },
      { id: 5, text: "Export up to 12 reports" },
      { id: 6, text: "Bulk reconcile transactions" },
      { id: 7, text: "Track in multiple currencies" },
    ],
  };

  const enterprise = {
    icon: "/enterprise.svg",
    amount: 39,
    desc: "For even the biggest enterprise companies",
    benefits: [
      { id: 1, text: "Send unlimited quotes and invoices" },
      { id: 2, text: "Connect up to 15 bank accounts" },
      { id: 3, text: "Track up to 200 expenses per month" },
      { id: 4, text: "Automated payroll support" },
      { id: 5, text: "Export up to 25 reports including TPS" },
    ],
  };

  return (
    <div className="bg-[#0D121F] px-24 text-center">
      <div className="py-24 ">
        <h2 className="heading__2 text-white">
          Affordable Plans for Every Team
        </h2>
        <p className="heading__5 text-white mt-5">
          Choose a plan that fits your business needs and start improving your
          workflow today. No <br /> hidden fees, just clear value for every size
          team.
        </p>
        <div className="mt-20 flex items-start justify-center gap-6">
          <div className="p-6 bg-white h-full min-h-[600px] rounded-lg flex flex-col items-start gap-4">
            <div className="flex items-center gap-3">
              <Image src={starter.icon} height={25} width={25} alt="icon" />
              <h4 className="heading__4">Starter</h4>
            </div>
            <div className="flex items-end gap-1">
              <h2 className="heading__2">${starter.amount}</h2>
              <span className="text-sm text-[#696780] font-medium">/month</span>
            </div>
            <p className="para__2 text-[#1A202C]">{starter.desc}.</p>
            <div className="mt-5 flex flex-col items-start gap-4">
              {starter.benefits.map((text) => (
                <div className="inline-flex gap-3" key={text.id}>
                  <Image
                    alt="check"
                    height={20}
                    width={20}
                    src={"/check.svg"}
                  />
                  <p>{text.text}</p>
                </div>
              ))}
            </div>
            <button className="btnText bg__gradient w-full p-2 rounded-lg text-sm mt-auto">
              Get Started
            </button>
          </div>

          <div className="p-6 bg-white h-full min-h-[600px] rounded-lg flex flex-col items-start gap-4">
            <div className="flex items-center justify-between w-full">
              <div className="flex items-center gap-3">
                <Image src={smallBiz.icon} height={25} width={25} alt="icon" />
                <h4 className="heading__4">Small business</h4>
              </div>
              <div className="text-[0.7rem] bg-black text-white py-1 px-2.5 rounded-full">
                Popular
              </div>
            </div>
            <div className="flex items-end gap-1">
              <h2 className="heading__2">${smallBiz.amount}</h2>
              <span className="text-sm text-[#696780] font-medium">/month</span>
            </div>
            <p className="para__2 text-[#1A202C]">{smallBiz.desc}.</p>
            <div className="mt-5 flex flex-col items-start gap-4">
              {smallBiz.benefits.map((text) => (
                <div className="inline-flex gap-3" key={text.id}>
                  <Image
                    alt="check"
                    height={20}
                    width={20}
                    src={"/check.svg"}
                  />
                  <p>{text.text}</p>
                </div>
              ))}
            </div>
            <button className="btnText bg__gradient w-full p-2 rounded-lg text-sm mt-auto">
              Get Started
            </button>
          </div>
          <div className="p-6 bg-white h-full min-h-[600px] rounded-lg flex flex-col items-start gap-4">
            <div className="flex items-center gap-3">
              <Image src={enterprise.icon} height={25} width={25} alt="icon" />
              <h4 className="heading__4">Enterprise</h4>
            </div>
            <div className="flex items-end gap-1">
              <h2 className="heading__2">${enterprise.amount}</h2>
              <span className="text-sm text-[#696780] font-medium">/month</span>
            </div>
            <p className="para__2 text-[#1A202C]">{enterprise.desc}.</p>
            <div className="mt-5 flex flex-col items-start gap-4">
              {enterprise.benefits.map((text) => (
                <div className="inline-flex gap-3" key={text.id}>
                  <Image
                    alt="check"
                    height={20}
                    width={20}
                    src={"/check.svg"}
                  />
                  <p>{text.text}</p>
                </div>
              ))}
            </div>
            <button className="btnText bg__gradient w-full p-2 rounded-lg text-sm mt-auto">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
