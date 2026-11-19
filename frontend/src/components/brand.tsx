import Image from "next/image";

export function Brand({ footer = false }: { footer?: boolean }) {
  return (
    <a
      className={`brand ${footer ? "brand-footer" : ""}`}
      href="#top"
      aria-label="Vorizo Info Tech home"
    >
      <Image
        src={footer ? "/logo-white.svg" : "/logo.svg"}
        alt="Vorizo Info Tech"
        width={footer ? 155 : 165}
        height={42}
        priority
        className="brand-logo-img"
      />
    </a>
  );
}
