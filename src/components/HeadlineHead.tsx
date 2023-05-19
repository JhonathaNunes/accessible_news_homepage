import { BiBookmark } from "react-icons/bi";
import { IoMdShare } from "react-icons/io";

import "../assets/styles/headline-head.scss";

interface HeadlineHeadProps {
  kickerLink: string;
  headlineKicker: string;
}

const HeadlineHead = ({kickerLink, headlineKicker}: HeadlineHeadProps) => {
  return (
    <div className="headline-head">
      <a href={kickerLink}>
        <h3 className="headline-kicker">
          {headlineKicker}
        </h3>
      </a>
      <IoMdShare />
      <BiBookmark />
    </div>
  );
}

export default HeadlineHead;