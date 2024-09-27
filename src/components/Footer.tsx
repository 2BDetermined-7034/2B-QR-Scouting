import { Logo } from './Logo';

export function Footer() {
  return (
    <div className="mt-4 flex h-24 flex-col items-center justify-center p-2">
      <Logo className="h-12 md:h-20 lg:h-28" />
    </div>
  );
}