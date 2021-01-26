import Select from "react-select";
import { selectUser } from "../actions";
import { useDispatch } from "react-redux";

const options = [
  { value: "USER_ONE", label: "user 1" },
  { value: "USER_TWO", label: "user 2" },
  { value: "USER_THREE", label: "user 3" },
];

export const UserSelect = () => {
  const dispatch = useDispatch();
  return (
    <Select
      className="user-select"
      options={options}
      defaultValue={options[0]}
      onChange={(e) => dispatch(selectUser(e.value))}
    />
  );
};
