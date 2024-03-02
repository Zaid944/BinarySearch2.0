import { useDispatch } from "react-redux";
import { setStatus, unsetStatus } from "../../../redux/filterSlice";
import GREEN_TICK from "../../../assets/green-tick.png";
import clsx from "clsx";
const StatusDropdownItem = ({ status, selected }) => {
  const dispatch = useDispatch();
  return (
    <div
      className={clsx(
        "cursor-pointer flex justify-between",
        status === "Todo" && "text-white",
        status === "Uncomplete" && "text-yellow-400",
        status === "Complete" && "text-green-400"
      )}
      onClick={() => {
        if (selected) {
          dispatch(unsetStatus());
        } else {
          dispatch(setStatus(status));
        }
      }}
    >
      {status}
      {selected && <img src={GREEN_TICK} className='w-4 h-4' />}
    </div>
  );
};

export default StatusDropdownItem;
