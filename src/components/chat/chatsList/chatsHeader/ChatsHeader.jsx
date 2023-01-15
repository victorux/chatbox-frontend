import { Container, ChatsHeaderTools, ToolButton, Search, SearchInput, SearchIcon, UserCard, UserDetails, ActionButton, UserPicture, Labels, ListUsers } from "./chatsHeader.styled"
import searchIcon from '../../../../assets/icons/search.svg'
import { useState } from "react";
import Modal from "../../../modal/Modal"
import searchSVG from "../../../../assets/icons/search.svg"
import avatarImg from "../../../../assets/images/avatar2.jpg"

function ChatsHeader() {
	const [isModalOpen, setIsModalOpen] = useState(null);
	return (
		<Container>
				<h1>Messages</h1>
				<ChatsHeaderTools>
						<ToolButton onClick={() => setIsModalOpen(true)}><img src={searchIcon} alt="Add" /><span>Search</span></ToolButton>
				</ChatsHeaderTools>
				<Modal
					label="Find a user"  
					isOpened={isModalOpen} 
					closeModal={() => setIsModalOpen(null)}
				>
					{/* Search */}
					<Search>
						<SearchInput placeholder="Search user by name or email..." />
						<SearchIcon src={searchSVG} alt="search" />
					</Search>
					{/* Display Users */}
					<ListUsers>
						<UserCard>
							<UserDetails>
								<UserPicture src={avatarImg} alt="" />
								<UserDetails>
									<Labels>
										<span>Joseph Allison</span>
									</Labels>
								</UserDetails>
							</UserDetails>
							<ActionButton>Add</ActionButton>
						</UserCard>
						<UserCard>
							<UserDetails>
								<UserPicture src={avatarImg} alt="" />
								<UserDetails>
									<Labels>
										<span>Joseph Allison</span>
									</Labels>
								</UserDetails>
							</UserDetails>
							<ActionButton>Add</ActionButton>
						</UserCard>
						<UserCard>
							<UserDetails>
								<UserPicture src={avatarImg} alt="" />
								<UserDetails>
									<Labels>
										<span>Joseph Allison</span>
									</Labels>
								</UserDetails>
							</UserDetails>
							<ActionButton>Add</ActionButton>
						</UserCard>
					</ListUsers>
					
				</Modal>
		</Container>
  )
}

export default ChatsHeader