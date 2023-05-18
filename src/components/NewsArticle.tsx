import { BsArrowReturnRight } from "react-icons/bs";
import { BiBookmark } from "react-icons/bi";
import { IoMdShare } from "react-icons/io";
import "../assets/styles/news-article.scss";

type headlineSize = "h1"|"h2"|"h3";

interface RelatedArticle {
  title: string;
  link: string;
}

interface NewsArticleProps {
  headlineKicker: string;
  kickerLink: string;
  headlineSize: headlineSize;
  href: string;
  headline: string;
  subheadline?: string;
  relateds: RelatedArticle[];
};

const returnCorrectHeading = (headlineSize: headlineSize, headline: string) => {
  if (headlineSize === "h2") {
    return <h2 className="headline h2">{headline}</h2>
  }

  if (headlineSize === "h3") {
    return <h3 className="headline h3">{headline}</h3>
  }

  return <h1 className="headline h1">{headline}</h1>
}

const NewsArticle = ({
  headlineKicker,
  kickerLink,
  headlineSize,
  href,
  headline,
  subheadline,
  relateds
}: NewsArticleProps) => {
  return (
    <article className="article">
      <div className="headline-head">
        <a href={kickerLink}>
          <h3 className="headline-kicker">
            {headlineKicker}
          </h3>
        </a>
        <IoMdShare />
        <BiBookmark />
      </div>
      <a href={href}>
        {returnCorrectHeading(headlineSize, headline)}
        { subheadline && <p className="subheadline">{subheadline}</p> }
      </a>
      <ul className="summary-list">
        { relateds.map((related, index) => 
          <li key={index}>
            <BsArrowReturnRight />
            <a href={related.link}><h2>{related.title}</h2></a>
          </li>
        )}
      </ul>
    </article>
  )
}

export default NewsArticle;