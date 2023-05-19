import "../assets/styles/slide.scss"

interface SlideProps {
  imgSrc: string;
  alt: string;
  title: string;
  summary: string;
  href: string;
}

const Slide = ({imgSrc, alt, title, summary, href}: SlideProps) => {
  return (
    <div className="slide-container">
      <img className="slide-image" src={imgSrc} alt={alt} />
      <a href={href}>
        <h3 className="slide-title">
          {title}
        </h3>
        <p className="slide-summary">{summary}</p>
      </a>
    </div>
  );
}

export default Slide;