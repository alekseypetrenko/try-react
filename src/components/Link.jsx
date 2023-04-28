import NavigationContext from "../context/navigation";
import { useContext } from "react";

function Link({ to, children }) {
  const { navigate } = useContext(NavigationContext);

  const handleClick = (event) => {
    event.preventDefault();
    navigate(to);
  };

  return <a onClick={handleClick}>{children}</a>;
}

export default Link;
