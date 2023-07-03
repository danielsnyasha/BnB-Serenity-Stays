'use client';

import Image from "next/image";
import { useRouter } from "next/navigation";

const Logo = () => {
 const router = useRouter();

  return (
    <Image
    onClick={()=> router.push('/')}
      alt="Logo"
      className="hidden md:block cursor-pointer"
      src="/images/eleganza_logo.png"
      width="100" // Replace YOUR_IMAGE_WIDTH with the actual width of your image
      height="100" // Replace YOUR_IMAGE_HEIGHT with the actual height of your image
    />
  );
};

export default Logo;
