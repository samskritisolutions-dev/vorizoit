export function Brand({ footer = false }: { footer?: boolean }) {
  return (
    <a
      className={`brand ${footer ? "brand-footer" : ""}`}
      href="#top"
      aria-label="Vorizo home"
    >
      <span className="brand-mark">
        v<span>.</span>
      </span>
      <span className="brand-name">
        vorizo<small>INFO TECH</small>
      </span>
    </a>
  );
}
