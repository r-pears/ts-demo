import FooterLink from "./Components/FooterLink";

function Footer({ links }) {
  return (
    <footer>
      <ul>
        {links.map((link) => (
          <FooterLink key={link.href} link={link} />
        ))}
      </ul>
    </footer>
  );
}

export default Footer;
