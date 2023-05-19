import HeadlineHead from "./HeadlineHead";

import "../assets/styles/side-content.scss";

interface AsideContentProps {
  headlineKicker: string;
  headlineLink: string;
  headline: string;
  summary: string;
  href: string;
  imgSrc: string;
  alt: string;
}

const AsideContent = ({headlineKicker, headlineLink, headline, summary, href, imgSrc, alt}: AsideContentProps) => {
  return (
    <article>
      <div className="image-headline-container">
        <img
        className="aside-image"
          src={imgSrc}
          alt={alt}
        />
        <div>
          <HeadlineHead kickerLink={headlineLink} headlineKicker={headlineKicker} />
          <a href={href}>
            <h2 className="aside-headline">
              {headline}
            </h2>
          </a>
        </div>
      </div>
      <p className="aside-summary">
        {summary}
      </p>
    </article>
  )
}

export default AsideContent;