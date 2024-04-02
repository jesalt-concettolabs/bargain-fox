import React from "react";
import { Checkbox } from "pretty-checkbox-react";
import "@djthoms/pretty-checkbox";
import { useLocation, useNavigate, useParams } from "react-router-dom";

const CheckboxComponent = ({
  data,
  title,
  checkedValues,
  setCheckedValues,
}) => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const searchText = params.get("searchText");
  const navigate = useNavigate();
  const { categoryId, subCategoryId, collectionId } = useParams();

  const handleCheck = (index, label) => {
    const updatedCheckedValues = checkedValues.includes(label)
      ? checkedValues.filter((value) => value !== label)
      : [label];

    let path = "";

    if (searchText) {
      path += `?searchText=${searchText}&condition=${label}`;
      navigate(path);
    } else {
      if (categoryId) {
        path += `/${categoryId}`;
      }
      if (subCategoryId) {
        path += `/${subCategoryId}`;
      }
      if (collectionId) {
        path += `/${collectionId}`;
      }
      path += `?condition=${label}`;
      navigate(path);
    }

    setCheckedValues(updatedCheckedValues);
  };

  return (
    <main className="mt-5">
      <section className="flex flex-col gap-3">
        <span className="text-[#292D32] text-xl font-semibold">{title}</span>
        <section className="mt-2 flex flex-col gap-4">
          {data.map((item, index) => (
            <div key={index}>
              <Checkbox
                shape="round"
                color="warning"
                id={index}
                name="filter"
                className={`cursor-pointer`}
                value={item.label}
                checked={checkedValues.includes(item.label)}
                onChange={() => handleCheck(index, item.label)}
              >
                <span className="ml-2">{item.label}</span>
              </Checkbox>
            </div>
          ))}
        </section>
      </section>
    </main>
  );
};

export default CheckboxComponent;
