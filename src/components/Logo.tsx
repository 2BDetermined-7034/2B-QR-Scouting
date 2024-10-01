interface LogoProps {
  className?: string;
}

export function Logo({ className }: LogoProps) {
  return (
    <img
      src="../../src/assets/2BLogo.svg"
      alt="Logo"
      className={className}
    />
  );
}