import Accordion from "../components/Accordion";

function AccordionPage() {

  const items = [
    {
      id: "sbajs",
      label: "Section 1",
      content: "Section-1 content ..."
    },
    {
      id: "sbsajsnajs",
      label: "Section 2",
      content: "Section-2 content ..."
    },
    {
      id: "sbabsasnjs",
      label: "Section 3",
      content: "Section-3 content ..."
    }
  ];
  
  return (
    <>
      <Accordion items={items} />
    </>
  );
}

export default AccordionPage;
