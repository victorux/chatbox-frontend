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
	const dispatch = useDispatch();
	const user = useSelector(state => state.user.currentUser);
	const userConversations = useSelector(state => state.user.userConversations);
	
	const [isModalOpen, setIsModalOpen] = useState(null);
	const [users, setUsers] = useState(null);
	const [loading, setLoading] = useState(false);
	const [filteredUsers, setFilteredUsers] = useState(users);

	const handleChange = (event) => {
		const inputValue = event.target.value;
		const filterUsers = (users, searchInput) => {
			return users.filter(user => {
				const fullName = `${user.firstName} ${user.lastName}`;
				return fullName.toLowerCase().includes(searchInput.toLowerCase());
			});
		}
		if(inputValue.length > 0){
			return setFilteredUsers(filterUsers(users, inputValue));
		} else {
			setFilteredUsers(users);
		}
		
	  };

	useEffect( () => {
		setLoading(true);

		const getUsers = async () => {

			function getOtherIds(list, userId) {
				var otherIds = [user._id,];
				list.forEach(function(item) {
				  item.members.forEach(function(id) {
					if (id !== userId) {
					  otherIds.push(id);
					}
				  });
				});
				return otherIds;
			}

			function excludeById(objects, ids) {
				return objects.filter(obj => !ids.includes(obj._id));
			  }

			try {
				const res = await axios.get("https://chabox-server.onrender.com/api/users/all");
				const otherIds = getOtherIds(userConversations, user._id);
				const excludedUsers = excludeById(res.data, otherIds);
				setUsers(excludedUsers);
				setFilteredUsers(excludedUsers);
				setLoading(false);
			} catch (err) {
				console.log(err);
				setLoading(false);
			}
		}
		getUsers();
	}, [isModalOpen]);

	const addUserHandler = async (receiverId) => {
		try {
			const res = await axios.post("https://chabox-server.onrender.com/api/conversations/", {
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
						<SearchInput 
							placeholder="Search user by name or email..."
							onChange={handleChange}
						/>
						<SearchIcon src={searchSVG} alt="search" />
					</Search>
					{/* Display Users */}
					{ loading ? <span>loading...</span> : null}
					<ListUsers>
						{ filteredUsers 
						? 	filteredUsers.map(({_id, profilePicture, firstName, lastName}) => 
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

export default ChatsHeader;