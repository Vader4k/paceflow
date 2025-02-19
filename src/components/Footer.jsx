import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const media = [
    {
      id: 1,
      icon: "/facebook.svg",
      title: "facebook",
      url: "/",
    },
    {
      id: 2,
      icon: "/insta.svg",
      title: "instagram",
      url: "/",
    },
    {
      id: 3,
      icon: "/linkedin.svg",
      title: "linkedin",
      url: "/",
    },
  ];

  return (
    <footer className="w-full bg-[#0d121f] p-20 text-white">
      <div className="w-full flex items-end justify-between">
        <div className="space-y-7">
          <Image
            alt="footerLogo"
            height={60}
            width={250}
            className="w-full max-w-[250px] h-auto"
            src={"/footerLogo.svg"}
          />
          <div className="flex items-center gap-7 text-xs font-light">
            <a title="Features" href="#features">
              Features
            </a>
            <a title="Testimonials" href="#testimonials">
              Testimonials
            </a>
            <a title="Pricing" href="#pricing">
              Pricing
            </a>
          </div>
        </div>
        <form className="flex items-center gap-2">
          <input
            type="text"
            placeholder="Enter your email"
            className="px-5 pr-20 outline-none rounded-full bg-transparent py-1.5 border border-white text-sm text-white"
          />
          <button className="bg__gradient para__3 text-white px-3 py-2 rounded-full">
            Subscribe Now
          </button>
        </form>
      </div>
      <hr className="my-8 border border-[#4b5162]" />
      <div className="w-full flex items-center justify-between para__3 text-white">
        <span>Copyrighted &copy; 2025</span>
        <div className="flex items-center gap-3">
          {media.map((link) => (
            <Link title={link.title} href={link.url} key={link.id}>
              <Image alt={link.title} width={20} height={20} src={link.icon} />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
