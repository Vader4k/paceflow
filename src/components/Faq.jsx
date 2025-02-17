"use client";
import Image from "next/image";
import { useState } from "react";

const Faq = () => {
  const [activeAccordion, setActiveAccordion] = useState(0);

  const handleActiveAccordion = (index) => {
    if (activeAccordion === index) {
      setActiveAccordion(0);
    } else {
      setActiveAccordion(index);
    }
  };

  const faqData = [
    {
      id: 1,
      question: "What is the 1-on-1 meeting tracking and note-taking feature?",
      answer:
        "Our feature helps you organize and document your meetings by tracking agendas, decisions, and action items, ensuring productive outcomes every time.",
    },
    {
      id: 2,
      question: "How does it ensure accountability in meetings?",
      answer:
        "Our feature helps you organize and document your meetings by tracking agendas, decisions, and action items, ensuring productive outcomes every time.",
    },
    {
      id: 3,
      question: "Is this feature customizable?",
      answer:
        "Our feature helps you organize and document your meetings by tracking agendas, decisions, and action items, ensuring productive outcomes every time.",
    },
    {
      id: 4,
      question: "Can I access meeting notes across devices?",
      answer:
        "Our feature helps you organize and document your meetings by tracking agendas, decisions, and action items, ensuring productive outcomes every time.",
    },
    {
      id: 5,
      question: "Does this integrate with other tools?",
      answer:
        "Our feature helps you organize and document your meetings by tracking agendas, decisions, and action items, ensuring productive outcomes every time.",
    },
  ];

  return (
    <div className="min-h-screen w-full bg-colors bg-cover bg-center">
      <div className="py-24 text-center">
        <h1 className="heading__2">Frequently Asked Questions</h1>
        <p className="pt-6 heading__5">
          Get all the answers you need about our 1-on-1 meeting tracking and
          note-taking feature. <br />
          Explore how it works, who it&apos;s for, and how it can improve your
          productivity.
        </p>
        <div className="mt-20 flex flex-col gap-5">
          {faqData.map((data) => (
            <button
              onClick={() => handleActiveAccordion(data.id)}
              key={data.id}
              className={`${
                activeAccordion === data.id
                  ? "border-[#6b63ff4f]"
                  : "border-[#D2D6DC] "
              } w-full max-w-4xl border rounded-md mx-auto p-5 text-[#4B5162]`}
            >
              <div className="flex w-full items-center justify-between">
                <div>
                  <h4
                    className={`${
                      activeAccordion === data.id
                        ? "bg__gradient text-transparent bg-clip-text"
                        : ""
                    } heading__4 transition-all duration-300`}
                  >
                    {data.question}
                  </h4>
                </div>
                <div>
                  <Image
                    alt="button"
                    height={15}
                    width={15}
                    src={
                      activeAccordion === data.id ? "/closed.svg" : "open.svg"
                    }
                  />
                </div>
              </div>
              <div
                className={`${
                  activeAccordion === data.id
                    ? "block pt-3 h-auto"
                    : "hidden h-0"
                } text-start max-w-[80%] para__2 text-[#4B5162] transition-all duration-300`}
              >
                {data.answer}
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;
