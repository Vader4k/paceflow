import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const navLinks = [
    { name: "Features", path: "#Features" },
    { name: "Testimonies", path: "#Testimonies" },
    { name: "Pricing", path: "#Pricing" },
  ];

  return (
    <header className="px-20 relative">
      <Image
        className="absolute z-[10] h-[550px] w-full -left-[600px]"
        height={100}
        width={100}
        src={"/leftrec.svg"}
        alt="rectangle"
        priority
      />
      <Image
        className="absolute z-[10] h-[550px] w-full -right-[600px]"
        height={100}
        width={100}
        src={"/rightrec.svg"}
        alt="rectangle"
        priority
      />
      <nav className="w-full flex items-center justify-between py-4 para__3 relative z-[20]">
        <a title="Home" href="/" className="flex-1">
          <Image
            alt="logo"
            height={50}
            width={180}
            src="/pace.svg"
            priority
            className="w-[180px] h-[50px]"
          />
        </a>
        <div className="flex items-center gap-10 flex-1 justify-center">
          {navLinks.map((link) => (
            <a key={link.name} title={link.name} href={link.path}>
              {link.name}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-10 flex-1 justify-end">
          <Link title="Sign in" href="/signin">
            Sign in
          </Link>
          <button className="btnText bg__gradient px-6 py-3 rounded-2xl">
            Get Started Today
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
