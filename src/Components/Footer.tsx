interface FooterProps {
  main: MainData;
}

const Footer = ({ main }: FooterProps) => {
  const year = new Date().getFullYear();
  return (
    <footer className="site-footer">
      <p>
        © {year} {main.name}
      </p>
      <p>Designed &amp; built with care.</p>
    </footer>
  );
};

export default Footer;
