import { Checkbox } from "pretty-checkbox-react";
import "@djthoms/pretty-checkbox";

const CheckboxComponent = ({ data, title }) => {
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
                name="discount"
                className={`cursor-pointer`}
                value={item.label}
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
