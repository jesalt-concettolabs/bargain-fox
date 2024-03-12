const Dropdown = ({ selected }) => {
  return (
    <div className="flex justify-center items-center border rounded-2xl p-1">
      <span className="md:block text-[#A4A4B8] text-sm pr-2 hidden">
        Sort by:
      </span>
      <div>
        <select
          id="hs-hidden-select"
          className="py-2 px-4 block w-full bg-transparent rounded-lg text-sm disabled:opacity-50 outline-none"
        >
          <option value={selected}>Relevency</option>
          <option value="LP">Lowest Price</option>
          <option value="HP">Highest Price</option>
          <option value="TCR">Top Customers Reviews</option>
          <option value="MR">Most Recent</option>
        </select>
      </div>
    </div>
  );
};

export default Dropdown;
