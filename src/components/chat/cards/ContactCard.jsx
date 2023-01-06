import Avatar from "../avatar/Avatar"
import { 
  CardContainer,
  BottomBorder,
  CardContent,
  CardLabelContainer
} from "./contactCard.styled"

function ContactCard({ title, desc, lastDate, imgSrc}) {
  return (
    <CardContainer>

      <CardContent>
        <Avatar src={imgSrc} alt='user'  size='medium' />
        <CardLabelContainer>
          <span>{title}</span>
          <p>{desc}</p>
        </CardLabelContainer>
        <span>{lastDate}</span>
      </CardContent>

      <BottomBorder />
    </CardContainer>
  )
}

export default ContactCard