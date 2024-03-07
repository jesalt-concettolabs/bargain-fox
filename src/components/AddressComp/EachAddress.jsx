import { Checkbox } from "pretty-checkbox-react";

const EachAddress = ({ data, checked, onChange }) => {
  const { addName, addDescp, addPhone } = data;
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
          <h3 className="text-lg sm:text-xl font-bold">{addName}</h3>
          <p className="font-normal">{addDescp}</p>
          <h5 className="text-[14px] sm:text-[18px] font-bold">
            Phone Number: <span className="font-normal">{addPhone}</span>
          </h5>
        </div>
      </section>
      <section className="text-[18px]  font-semibold text-[#FF7900] cursor-pointer">
        Edit Address
      </section>
    </main>
  );
};

export default EachAddress;
