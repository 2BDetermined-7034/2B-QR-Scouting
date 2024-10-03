import logo from "../assets/2BLogo.svg"

interface LogoProps {
  className?: string;
}

export function Logo({ className }: LogoProps) {
  return (
    <img
      src={logo}
      alt="Logo"
      className={className}
    />
  );
}