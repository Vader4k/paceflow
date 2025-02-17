import Image from "next/image";

const LogoSlider = () => {
  const images = [
    { id: 1, name: "logo1", src: "/logo1.svg" },
    { id: 2, name: "logo1", src: "/logo2.svg" },
    { id: 3, name: "logo1", src: "/logo3.svg" },
    { id: 4, name: "logo1", src: "/logo4.svg" },
    { id: 5, name: "logo1", src: "/logo5.svg" },
    { id: 6, name: "logo1", src: "/logo6.svg" },
  ];

  return (
    <div className="mt-6 w-full max-w-5xl flex items-center justify-center gap-12">
      {images.map((image) => (
        <Image
          key={image.id}
          alt={image.name}
          src={image.src}
          height={50}
          width={50}
          className="w-auto h-auto"
        />
      ))}
    </div>
  );
};

export default LogoSlider;
