function AboutSection({ title, description, imageSrc, links }) {
  return (
    <section>
      <h1>{title}</h1>
      <p>{description}</p>
      {imageSrc && <img src={imageSrc} alt={title} />}
      {links && links.length > 0 && (
        <ul>
          {links.map((link, index) => (
            <li key={index}>
              <a href={link.url}>{link.text}</a>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

export default AboutSection;
