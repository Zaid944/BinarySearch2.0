import Filters from "../components/Filters";
import ProblemsSection from "../components/ProblemsSection";
import StatsPieChart from "../components/StatsPieChart";
import { data, options, doughnutLabel } from "../utils/StatsPieChartProps";

const Home = () => {
  return (
    <div className='flex'>
      <div className='w-8/12'>
        <Filters />
        <ProblemsSection />
      </div>
      <div className='bg-slate-800 w-4/12 mr-5 pt-5 rounded-md pr-10 mt-5'>
        <div className='text-white absolute text-2xl font-bold top-[180px] right-[220px]'>
          Coding Stats
        </div>
        <StatsPieChart
          data={data}
          options={options}
          doughnutLabel={doughnutLabel}
        />
      </div>
    </div>
  );
};

export default Home;
