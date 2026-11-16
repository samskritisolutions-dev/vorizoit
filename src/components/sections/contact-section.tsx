import { ArrowUpRight } from "lucide-react";

export interface ContactSettings {
  usCity?: string | null;
  usAddress?: string | null;
  usPhone?: string | null;
  indiaCity?: string | null;
  indiaAddress?: string | null;
  indiaPhone?: string | null;
  emailHeading?: string | null;
  emailSubtext?: string | null;
  primaryEmail?: string | null;
  secondaryEmail?: string | null;
}

export function ContactSection({
  settings,
}: {
  settings?: ContactSettings | null;
}) {
  const usCity = settings?.usCity || "Giddings, Texas";
  const usAddress =
    settings?.usAddress || "1174 E. Austin Street\nGiddings, TX 78942";
  const usPhone = settings?.usPhone || "+1 929-323-0199";
  const usPhoneHref = `tel:${usPhone.replace(/[^\d+]/g, "")}`;

  const indiaCity = settings?.indiaCity || "Hyderabad, Telangana";
  const indiaAddress =
    settings?.indiaAddress ||
    "Plot No. 865, Road No. 42\nUppal Bhag ayath, Hyderabad 500039";
  const indiaPhone = settings?.indiaPhone || "+91 7416702682";
  const indiaPhoneHref = `tel:${indiaPhone.replace(/[^\d+]/g, "")}`;

  const emailHeading = settings?.emailHeading || "Say hello.";
  const emailSubtext =
    settings?.emailSubtext || "For general and business enquiries";
  const primaryEmail = settings?.primaryEmail || "support@vorizoit.com";
  const secondaryEmail =
    settings?.secondaryEmail || "support.india@vorizoit.com";

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
          <a className="button button-lime" href={`mailto:${primaryEmail}`}>
            Start a conversation <ArrowUpRight size={17} />
          </a>
        </div>
        <div className="contact-details">
          <div className="contact-block">
            <span className="contact-label">UNITED STATES</span>
            <h3>{usCity}</h3>
            <p style={{ whiteSpace: "pre-line" }}>{usAddress}</p>
            <a href={usPhoneHref}>{usPhone} ↗</a>
          </div>
          <div className="contact-block">
            <span className="contact-label">INDIA</span>
            <h3>{indiaCity}</h3>
            <p style={{ whiteSpace: "pre-line" }}>{indiaAddress}</p>
            <a href={indiaPhoneHref}>{indiaPhone} ↗</a>
          </div>
          <div className="contact-block">
            <span className="contact-label">EMAIL</span>
            <h3>{emailHeading}</h3>
            <p>{emailSubtext}</p>
            <a href={`mailto:${primaryEmail}`}>{primaryEmail} ↗</a>
            <a href={`mailto:${secondaryEmail}`}>{secondaryEmail} ↗</a>
          </div>
        </div>
      </div>
    </section>
  );
}
