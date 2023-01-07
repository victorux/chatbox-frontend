// styled elements
import { Container, ChatsHeaderTools, ToolButton } from "./chatsHeader.styled"
// icons
import userAddIcon from '../../../../assets/icons/addUser.svg'
import searchIcon from '../../../../assets/icons/search.svg'

function ChatsHeader() {
	return (
		<Container>
				<h1>Messages</h1>
				<ChatsHeaderTools>
						<ToolButton><img src={userAddIcon} alt="Add" /><span>Invite</span></ToolButton>
						<ToolButton><img src={searchIcon} alt="Search" /></ToolButton>
				</ChatsHeaderTools>
		</Container>
  )
}

export default ChatsHeader