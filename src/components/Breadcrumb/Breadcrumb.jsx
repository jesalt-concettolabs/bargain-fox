import { Link, useLocation } from "react-router-dom";
import { Breadcrumbs } from "@material-tailwind/react";

const Breadcrumb = () => {
  const { pathname } = useLocation();
  const pathnames = pathname.split("/").filter((x) => x);
  let breadScrumbPath = "";

  return (
    <Breadcrumbs separator=">" className="px-6 hidden lg:flex">
      {pathnames.length > 0 && (
        <Link
          to={"/"}
          className="capitalize font-normal hover:text-[#ff7900] text-sm text-[#A4A4B8]"
        >
          Home
        </Link>
      )}
      {pathnames.map((linkName, index) => {
        breadScrumbPath += `/${linkName}`;
        const isLast = index === pathnames.length - 1;
        return isLast ? (
          <span
            key={breadScrumbPath}
            className="capitalize font-normal text-sm text-[#292D32] hover:text-[#292D32]"
          >
            {linkName}
          </span>
        ) : (
          <span
            key={breadScrumbPath}
            className="capitalize font-normal text-sm text-[#A4A4B8] hover:text-[#A4A4B8]"
          >
            <Link to={breadScrumbPath}>{linkName}</Link>
          </span>
        );
      })}
    </Breadcrumbs>
  );
};

export default Breadcrumb;
