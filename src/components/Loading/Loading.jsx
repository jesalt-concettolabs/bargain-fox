import { Spinner } from "@material-tailwind/react";

const Loading = () => {
  return (
    <div className="flex h-[100vh] justify-center items-center">
      <h1 className="text-6xl text-gray-900/50">Loading.......</h1>
      <Spinner className="h-16 w-16 text-gray-900/50" />
    </div>
  );
};

export default Loading;
