import { Button } from "@/components/ui/button";


const BrandedButton = () => {
  return (
    <Button className="rounded-full h-12" size={"lg"}>
      <img src="/logo/logo-light.webp" className="h-5 w-auto mr-2" alt="Logo" />
      <span>Get Started</span>
    </Button>
  );
}

export default BrandedButton