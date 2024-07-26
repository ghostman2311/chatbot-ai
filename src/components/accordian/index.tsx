import {
  Accordion as ShadcnAccordian,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "../ui/accordion";

type Props = {
  trigger: string;
  content: string;
};

const Accordion = ({ trigger, content }: Props) => {
  return (
    <ShadcnAccordian type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger>{trigger}</AccordionTrigger>
        <AccordionContent>{content}</AccordionContent>
      </AccordionItem>
    </ShadcnAccordian>
  );
};

export default Accordion;
