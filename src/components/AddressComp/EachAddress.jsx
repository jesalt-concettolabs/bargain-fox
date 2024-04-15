import { Checkbox } from "pretty-checkbox-react";
import { toast } from "react-toastify";

const EachAddress = ({ data, checked, onChange, onClick }) => {
  const { full_name, address, address2, state, country, postcode, mobile } =
    data;

  const handleEditClick = (index) => {
    if (checked) {
      onClick(index);
    } else {
      toast.warning("Please select the address");
    }
  };

  return (
    <main className="flex flex-col gap-1 sm:flex-row sm:justify-between px-1">
      <section className="flex items-center">
        <Checkbox
          shape="round"
          color="warning"
          checked={checked}
          onChange={onChange}
        />
        <div className="text-[#292D32] flex flex-col gap-1">
          <h3 className="text-lg sm:text-xl font-bold">{full_name}</h3>
          <p className="font-normal capitalize">{`${address}, ${address2}, ${state}, ${country}, ${postcode}`}</p>
          <h5 className="text-[14px] sm:text-[18px] font-bold">
            Phone Number: <span className="font-normal">{mobile}</span>
          </h5>
        </div>
      </section>
      <section
        onClick={() => handleEditClick(data.id)}
        className="text-[18px]  font-semibold text-[#0063FF] cursor-pointer"
      >
        Edit Address
      </section>
    </main>
  );
};

export default EachAddress;
