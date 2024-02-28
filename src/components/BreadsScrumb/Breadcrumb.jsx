import { Breadcrumbs } from "@material-tailwind/react";
import { Link } from "react-router-dom";

const Breadcrumb = ({ linkURL, linkContent }) => {
  return (
    <Breadcrumbs separator=">">
      <Link to={linkURL} className="opacity-60">
        {linkContent}
      </Link>
      <Link to={linkURL} className="opacity-60">
        {linkContent}
      </Link>
      <Link to={linkURL} className={`${linkClass}`}>
        {linkContent}
      </Link>
    </Breadcrumbs>
  );
};

export default Breadcrumb;
