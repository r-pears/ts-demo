function FooterLink(props) {
  return (
    <li>
      <a href={props.link.href}>{props.link.text}</a>
    </li>
  );
}

export default FooterLink;
