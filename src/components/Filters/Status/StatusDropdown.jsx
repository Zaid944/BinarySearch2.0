import { statusList } from "../../../utils/List";
import StatusDropdownItem from "./StatusDropdownItem";
import { useSelector } from "react-redux";
const StatusDropdown = () => {
  const selectedStatus = useSelector((state) => state.slice.status);
  return (
    <div className='mt-1 absolute rounded-md w-1/12 bg-slate-800 p-4'>
      {statusList.map((status, index) => (
        <StatusDropdownItem
          key={index}
          status={status}
          selected={selectedStatus === status}
        />
      ))}
    </div>
  );
};

export default StatusDropdown;
