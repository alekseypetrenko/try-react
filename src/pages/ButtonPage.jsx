import Button from "../components/Button";
import { GoBell, GoCloudDownload, GoDatabase } from "react-icons/go";

function ButtonPage() {
  const handleClick = () => {
    console.log(1555);
  };

  return (
    <div>
      <div>
        <Button onClick={handleClick} primary rounded>
          <GoBell /> Click me!!!
        </Button>
      </div>
      <div>
        <Button success outline>
          <GoCloudDownload />
          Buy
        </Button>
      </div>
      <div>
        <Button warning rounded>
          <GoDatabase />
          Go
        </Button>
      </div>
      <div>
        <Button secondary>Search</Button>
      </div>
      <div>
        <Button danger>aaaaa</Button>
      </div>
    </div>
  );
}

export default ButtonPage;
