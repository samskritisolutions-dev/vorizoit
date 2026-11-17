import { Brand } from "./brand";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="section-wrap">
        <div className="footer-main">
          <Brand footer />
          <p>
            Innovative software, cloud
            <br />& consulting for real outcomes.
          </p>
          <a className="back-top" href="#top">
            BACK TO TOP ↑
          </a>
        </div>
        <div className="footer-bottom">
          <span>© {year} Vorizo Info Tech. All rights reserved.</span>
          <span>US · INDIA · GLOBAL DELIVERY</span>
          <a
            href="https://www.linkedin.com/company/vorizo-infotech/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LINKEDIN ↗
          </a>
        </div>
      </div>
    </footer>
  );
}
