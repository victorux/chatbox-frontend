import { Fragment, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import noAvatar from "../../assets/images/user.png"
import styled from "styled-components"
import addImage from "../../assets/icons/add-image.png"
import { useState } from "react";
import { updateUserImage } from "../../redux/apiCall";


const Container = styled.div`
  display: flex;
	flex-direction: column;
	gap: 10px;
	align-items: center;
	justify-content: center;

	img {
		width: 100%;
		height: 100%;
		border-radius: 50%;
    object-fit: cover;
	}
`
const HoverSelectBg = styled.div`
	opacity: 0;
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, 0.3);
	cursor: pointer;
	background-image: url(${addImage});
	background-size: 26px;
	background-repeat: no-repeat;
	background-position: center;
`
const ImageDiv = styled.div`
	position: relative;
	width: 100px;
	height: 100px;
	overflow: hidden;
	border-radius: 50%;
	background-size: 30px;
	background-position: center;

	&:hover ${HoverSelectBg} {
		opacity: 1;
	}
`
const ErrorStyled = styled.div`
    color: ${({ theme}) => theme.color.danger};
`


function ProfileImageForm() {
	const [selectedFile, setSelectedFile] = useState("");
	const [image, setImage] = useState("");
	const [error, setError] = useState(null);

	const dispatch = useDispatch();
	const { isFetching } = useSelector(state => state.user)

	const user = useSelector(state => state.user.currentUser);
	const inputFileRef = useRef();

	const handleClick = (e) => {
		e.preventDefault();
		inputFileRef.current.click();
	}

	const previewFiles = (files) => {
		const reader = new FileReader();
		reader.readAsDataURL(files);

		reader.onloadend = () => {
			setImage(reader.result);
		}
	}

	const handleChange = (e) => {
		const file = e.target.files[0];
		setSelectedFile(file);
		previewFiles(file);
		setError(null);
	}

	const handleCancel = () => {
		setSelectedFile(null);
		setImage(null);
	}

	const handleSubmit = async (e) => {
		e.preventDefault();
		await updateUserImage(dispatch, user._id, image);
		setSelectedFile(null);
		setImage(null);
	}

  return (
    <Container>
			<ImageDiv>
				{ image 
						? <img src={image} alt="preview profile img" />
    				: <img src={user.profilePicture ? user.profilePicture : noAvatar} alt="profile" />}
				<HoverSelectBg onClick={handleClick} />
			</ImageDiv>
			<form>
				<input 
					type="file" 
					ref={inputFileRef} 
					style={{ display: "none"}} 
					onChange={handleChange} 
					accept="image/png, image/jpg, image/jpeg, image/webp"
					required
					/>
				{/* If user selected a file show buttons */}
				{error ? <ErrorStyled>Something went wrong..</ErrorStyled> : null}
				{ selectedFile 
						? <Fragment>
								<button type="reset" onClick={handleCancel} disabled={isFetching}>Cancel</button>
								<button type="submit" onClick={handleSubmit} disabled={isFetching}>Upload</button>
							</Fragment>
						: <button type="button" onClick={handleClick}>Upload Photo</button>
				}
			</form>
    </Container>
  )
}

export default ProfileImageForm