import { useEffect, useState } from "react";
import { useSelector } from "react-redux"
import { Container, ChatsHeaderTools, ToolButton, Search, SearchInput, SearchIcon, UserCard, UserDetails, ActionButton, UserPicture, Labels, ListUsers } from "./chatsHeader.styled"
import searchIcon from '../../../../assets/icons/search.svg'
import Modal from "../../../modal/Modal"
import searchSVG from "../../../../assets/icons/search.svg"
import axios from "axios";
import noAvatar from "../../../../assets/images/user.png"
import { useDispatch } from "react-redux";
import { setCurrentChat, addNewConversation } from "../../../../redux/userRedux";


function ChatsHeader() {
	const user = useSelector(state => state.user.currentUser);
	const [isModalOpen, setIsModalOpen] = useState(null);
	const [users, setUsers] = useState(null);
	const [loading, setLoading] = useState(false);
	const dispatch = useDispatch();

	useEffect( () => {
		setLoading(true);
		const getUsers = async () => {
			try {
				const res = await axios.get("http://localhost:8800/api/users/all");
				setUsers(current => res.data);
				setLoading(false);
			} catch (err) {
				console.log(err);
				setLoading(false);
			}
		}
		getUsers();	
	},[isModalOpen]);

	const addUserHandler = async (receiverId) => {
		try {
			const res = await axios.post("http://localhost:8800/api/conversations/", {
				senderId: user._id,
				receiverId: receiverId
			});
			dispatch(setCurrentChat(res.data));
			dispatch(addNewConversation(res.data._id));
			setIsModalOpen(false);
		} catch (err) {
			console.log(err);
		}
	}
	

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
					{ loading ? <span>loading...</span> : null}
					<ListUsers>
						{ users 
						? 	users.map(({_id, profilePicture, firstName, lastName}) => 
							<div key={_id}><UserCard>
								<UserDetails>
									<UserPicture src={profilePicture ? profilePicture : noAvatar} alt="Profile Image" />
									<UserDetails>
										<Labels>
											<span>{firstName + " " + lastName}</span>
										</Labels>
									</UserDetails>
								</UserDetails>
								<ActionButton onClick={() => addUserHandler(_id)}>Add</ActionButton>
							</UserCard></div>)		
						: null
						}
					</ListUsers>
					
				</Modal>
		</Container>
  )
}

export default ChatsHeader