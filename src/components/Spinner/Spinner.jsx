import { Spinner } from "@material-tailwind/react";

const Loader = () => {
  return (
    <div className="flex justify-center items-center mt-2">
      <Spinner className="w-4 h-4" />
    </div>
  );
};

export default Loader;
