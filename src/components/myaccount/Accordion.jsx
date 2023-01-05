import { useState } from "react"
import arrow from "../../assets/icons/arrow.svg"
import { 
    AccordionContent,
    AccordionHeader, 
    AccordionIcon, 
    AccordionItem, 
    AccordionLabel 
} from "./myaccount.styled"

function Accordion({ label, children }) {
	const [open, setOpen] = useState(false);
	const toggleHandler = () => setOpen(!open);

  return (
    <AccordionItem>
        <AccordionHeader onClick={toggleHandler} isOpen={open}>
            <AccordionIcon isOpen={open}><img src={arrow} alt="icon" /></AccordionIcon>
            <AccordionLabel>{ label }</AccordionLabel>
        </AccordionHeader>
        <AccordionContent isOpen={open}>{children}</AccordionContent>
    </AccordionItem>
  )
}

export default Accordion