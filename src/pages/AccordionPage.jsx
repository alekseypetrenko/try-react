import Accordion from "../components/Accordion";

function AccordionPage() {
  const items = [
    {
      label: "Some lable",
      content: "Lorem ipsum dolor sit amet",
      id: "1",
    },
    {
      label: "Some label 2",
      content: "Lorem ipsum dolor sit amet 2222",
      id: "2",
    },
    {
      label: "Some label 3",
      content: "Lorem ipsum dolor sit amet 34444",
      id: "3",
    },
  ];

  return <Accordion items={items} />;
}
export default AccordionPage;
