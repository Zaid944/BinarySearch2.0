import { useState } from "react";
import { statusList } from "../utils/List";
import StatusDropdownItem from "./StatusDropdownItem";
const StatusDropdown = () => {
  const [selectedStatus, setSelectedStatus] = useState("");
  return (
    <div className='mt-1 absolute rounded-md w-1/12 bg-slate-800 p-4'>
      {statusList.map((status, index) => (
        <StatusDropdownItem
          selectedFn={(status) => setSelectedStatus(status)}
          key={index}
          status={status}
          selected={selectedStatus === status}
        />
      ))}
    </div>
  );
};

export default StatusDropdown;
