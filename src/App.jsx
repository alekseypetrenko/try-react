import Accordion from "./components/Accordion";

function App() {
  const items = [
    {
      label: "  1 ?",
      content: "adfsg f",
      id: "1",
    },
    {
      label: "2 ?",
      content: "adfsg f",
      id: "2",
    },
    {
      label: "3?",
      content: "adfs356456 56 56g f",
      id: "3",
    },
  ];

  return <Accordion items={items} />;
}
export default App;
