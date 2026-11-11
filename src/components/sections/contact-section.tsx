import { ArrowUpRight } from "lucide-react";

export function ContactSection() {
  return (
    <section className="contact section-pad" id="contact">
      <div className="section-wrap">
        <div className="contact-top">
          <div className="section-kicker">
            <span>09 — LET’S CONNECT</span>
            <span>YOUR NEXT CHAPTER STARTS HERE</span>
          </div>
          <h2>
            Have a challenge?
            <br />
            <em>Let’s make it work.</em>
          </h2>
          <p>
            Tell us what you&apos;re working towards. We&apos;ll help you
            find a clear way forward.
          </p>
          <a
            className="button button-lime"
            href="mailto:support@vorizoit.com"
          >
            Start a conversation <ArrowUpRight size={17} />
          </a>
        </div>
        <div className="contact-details">
          <div className="contact-block">
            <span className="contact-label">UNITED STATES</span>
            <h3>Giddings, Texas</h3>
            <p>
              1174 E. Austin Street
              <br />
              Giddings, TX 78942
            </p>
            <a href="tel:+19293230199">+1 929-323-0199 ↗</a>
          </div>
          <div className="contact-block">
            <span className="contact-label">INDIA</span>
            <h3>Hyderabad, Telangana</h3>
            <p>
              Plot No. 865, Road No. 42
              <br />
              Uppal Bhag ayath, Hyderabad 500039
            </p>
            <a href="tel:+917416702682">+91 7416702682 ↗</a>
          </div>
          <div className="contact-block">
            <span className="contact-label">EMAIL</span>
            <h3>Say hello.</h3>
            <p>For general and business enquiries</p>
            <a href="mailto:support@vorizoit.com">support@vorizoit.com ↗</a>
            <a href="mailto:support.india@vorizoit.com">
              support.india@vorizoit.com ↗
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
