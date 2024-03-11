const Dropdown = () => {
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
          <option selected>Relevency</option>
          <option>Lowest Price</option>
          <option>Highest Price</option>
          <option>Top Customers Reviews</option>
          <option>Most Recent</option>
        </select>
      </div>
    </div>
  );
};

export default Dropdown;
