import { BsArrowReturnRight } from "react-icons/bs"

type headlineSize = "h1"|"h2"|"h3"

interface NewsArticleProps {
  headlineSize: headlineSize;
  headline: string;
  subheader?: string;
  summaries: string[];
}

const returnCorrectHeading = (headlineSize: headlineSize, headline: string) => {
  if (headlineSize === "h2") {
    return <h2>{headline}</h2>
  }

  if (headline === "h3") {
    return <h3>{headline}</h3>
  }

  return <h1>{headline}</h1>
}

const NewsArticle = ({ headlineSize, headline, subheader, summaries }: NewsArticleProps ) => {
  return (
    <article>
        {returnCorrectHeading(headlineSize, headline)}
        { subheader && <h2>{subheader}</h2> }
        <ul>
          { summaries.map((summay, index) => {
            <li key={index}>
              <BsArrowReturnRight />
              {summay}
            </li>
          })}
        </ul>
    </article>
  )
}

export default NewsArticle;