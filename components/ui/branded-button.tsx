import { Button } from "@/components/ui/button";
import Link from "next/link";

const BrandedButton = () => {
  return (
    <Link
      href={"https://www.npmjs.com/package/octa-ui"}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Button className="rounded-full h-12" size={"lg"}>
        <img
          src="/logo/logo-light.webp"
          className="h-5 w-auto mr-2"
          alt="Logo"
        />
        <span>Get Started</span>
      </Button>
    </Link>
  );
};

export default BrandedButton;
