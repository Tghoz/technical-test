import Table from "./tables/Table";

import DoughnutChart from "./chart/DoughnutChart";
import LineChart from "./chart/LineChart";
import LikeCard from "./cards/LikeCard";

export default function Page() {
  return (
    <section className="w-full min-h-screen flex flex-col">
      <div className="flex-1 grid grid-cols-1 m-1 md:grid-cols-3 gap-8">
        <div className="h-full w-full">
          <Table />
        </div>

        <div className="flex flex-col  items-center ">
          <div className="bg-[#E9E3F3] p-5 h-80 w-72 rounded-lg mb-5">
            <div className="flex justify-center">
              <h1 className="font-mono text-xl">Metrica Data</h1>
            </div>
            <div className="flex  h-full w-full p-5">
              <DoughnutChart />
            </div>
          </div>
          <div className="flex bg-[#FDEDD4] p-5 w-full justify-center rounded-lg">
            <LineChart />
          </div>
        </div>

        <div className=" flex flex-col justify-start ">
          <div className="my-2">
            <LikeCard title="likes" account="2" text="ola" />
          </div>
          <div className=" my-2">
            <LikeCard title="comments" account="2" text="ola" />
          </div>
          <div className=" my-2">
            <LikeCard title="shares" account="2" text="ola" />
          </div>
          <div className=" my-2">
            <LikeCard title="reactions_count" account="2" text="ola" />
          </div>
        </div>
      </div>
    </section>
  );
}
