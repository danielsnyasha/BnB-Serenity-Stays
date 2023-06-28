import Image from "next/image";
import { useRouter } from "next/router";

const Logo = () => {
//  const router = useRouter();

  return (
    <Image
      alt="Logo"
      className="hidden md:block cursor-pointer"
      src="/images/eleganza_logo.png"
      width="100" // Replace YOUR_IMAGE_WIDTH with the actual width of your image
      height="100" // Replace YOUR_IMAGE_HEIGHT with the actual height of your image
    />
  );
};

export default Logo;
