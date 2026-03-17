import Image from "next/image";

type BrandLogoProps = {
  className?: string;
};

export default function BrandLogo({ className = "h-11 w-11" }: BrandLogoProps) {
  return (
    <div className={`relative shrink-0 ${className}`}>
      <Image
        src="/logo.png"
        alt="Logo Kiều Gia"
        fill
        sizes="(max-width: 768px) 40px, 56px"
        className="object-contain"
        priority
      />
    </div>
  );
}
