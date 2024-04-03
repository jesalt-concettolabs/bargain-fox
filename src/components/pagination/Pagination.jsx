import { useEffect, useState } from "react";
import { Button, IconButton } from "@material-tailwind/react";
import rightArrow from "/assets/arrowPage.svg";
import leftArrow from "/assets/arrowPage.svg";
import { useLocation, useNavigate } from "react-router-dom";

const Pagination = ({ totalPage }) => {
  const [active, setActive] = useState(1);
  const navigate = useNavigate();
  const location = useLocation();
  const params = new URLSearchParams(location.search);

  useEffect(() => {
    const pageParam = params.get("page");
    if (pageParam) {
      setActive(parseInt(pageParam));
    }
  }, [location.search]);

  const getItemProps = (index) => ({
    variant: active === index ? "filled" : "text",
    color: "orange",
    onClick: () => {
      setActive(index);
      params.set("page", index);
      navigate(`?${params.toString()}`);
    },
  });

  const next = () => {
    if (active === totalPage) return;
    const nextPage = active + 1;
    setActive(nextPage);
    params.set("page", nextPage);
    navigate(`?${params.toString()}`);
  };

  const prev = () => {
    if (active === 1) return;
    const prevPage = active - 1;
    setActive(prevPage);
    params.set("page", prevPage);
    navigate(`?${params.toString()}`);
  };

  const iconButtons = [];
  for (let number = 1; number <= totalPage; number++) {
    iconButtons.push(
      <IconButton key={number} {...getItemProps(number)}>
        {number}
      </IconButton>
    );
  }

  return (
    <div className="flex items-center gap-4">
      <Button
        variant="text"
        className="flex items-center justify-center gap-3"
        onClick={prev}
        disabled={active === 1}
      >
        <span>
          <img
            src={leftArrow}
            alt="leftArrow"
            className="rotate-180"
            height={"7px"}
            width={"7px"}
          />
        </span>
        Previous
      </Button>
      <div className="flex items-center gap-2">{iconButtons}</div>
      <Button
        variant="text"
        className="flex items-center justify-center gap-2"
        onClick={next}
        disabled={active === totalPage}
      >
        Next
        <span>
          <img src={rightArrow} alt="rightArrow" height={"7px"} width={"7px"} />
        </span>
      </Button>
    </div>
  );
};

export default Pagination;
