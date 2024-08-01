
import { SalesChart } from "@dashboard/components";

const Page = () => {

  return (
    <div className="min-h-screen p-2 md:p-6 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-6">Sales Data</h1>
      <div className="w-full max-w-4xl">
        <SalesChart />
      </div>
    </div>
  );
};

export default Page;
