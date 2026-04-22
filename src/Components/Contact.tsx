interface ContactProps {
  main: MainData;
}

const Contact = ({ main }: ContactProps) => {
  const linkedin = main.social.find((s) => s.name === 'linkedin')?.url;

  return (
    <section className="contact" id="contact">
      <h2 className="reveal">
        Let's <em>work</em>
        <br />
        together.
      </h2>
      <p className="contact-email reveal reveal-delay-1">
        <a href={`mailto:${main.email}`}>{main.email}</a>
      </p>
      <div className="contact-links reveal reveal-delay-2">
        <a className="contact-link" href={`mailto:${main.email}`}>
          Email ↗
        </a>
        <a
          className="contact-link"
          href={main.github}
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub ↗
        </a>
        {linkedin && (
          <a
            className="contact-link"
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn ↗
          </a>
        )}
        <a className="contact-link" href="#booking">
          Book a call ↗
        </a>
      </div>
    </section>
  );
};

export default Contact;
