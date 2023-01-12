import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import noAvatar from "../../assets/images/user.png"
import styled from "styled-components"
import addImage from "../../assets/icons/add-image.png"
import { useState } from "react";
import { updateUserImage } from "../../redux/apiCall";

const handleButton = (colorType) => {
	switch (colorType) {
		case 'primary':
			return "#CFF32F";
		default:
			return "#E0E0E0";
	}
}

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
const ActionsWrapper = styled.div`
	display: flex;
	justify-content: center;
	gap: 10px;
`
const CustomButton = styled.div`
	padding: 14px 20px;
	background-color: ${({theme, color}) => handleButton(color)};
	cursor: pointer;
	border-radius: 12px;
	transition: all 0.3s ease;
	&:hover {
		opacity: 0.75;
	}
`


function ProfileImageForm() {
	const [selectedFile, setSelectedFile] = useState("");
	const [image, setImage] = useState("");
	const [error, setError] = useState(false);
	const [isLoading, setIsLoading] = useState(false);

	const dispatch = useDispatch();
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
		setError(false);
	}

	const handleCancel = () => {
		setSelectedFile("");
		setImage("");
	}

	const handleSubmit = async (e) => {
		e.preventDefault();
		try{
			setIsLoading(true);
			const res = await updateUserImage(dispatch, user._id, image);
			setIsLoading(false);
			if (!res){ throw new SyntaxError("Error")}
		} catch (err) {
			setError(true);
		}
		setSelectedFile(null);
		setImage("");
	}

  return (
    <Container>
			{
				isLoading ? <p>Please Wait...</p>
				: 	<ImageDiv>
						{ image 
							? <img src={image} alt="preview profile img" />
							: <img src={user.profilePicture ? user.profilePicture : noAvatar} alt="profile" />
						}
						<HoverSelectBg onClick={handleClick} />
					</ImageDiv> 
			}
			
				<input 
					type="file" 
					ref={inputFileRef} 
					style={{ display: "none"}} 
					onChange={handleChange} 
					accept="image/png, image/jpg, image/jpeg, image/webp"
					required
					/>
				{error ? <ErrorStyled>Something went wrong..</ErrorStyled> : null}
				{ selectedFile 
						? <ActionsWrapper>
								<CustomButton type="reset" onClick={handleCancel} disabled={isLoading}>Cancel</CustomButton>
								<CustomButton type="submit" onClick={handleSubmit} disabled={isLoading} color="primary">Upload</CustomButton>
							</ActionsWrapper>
						: <CustomButton type="button" onClick={handleClick}>Upload New Picture</CustomButton>
				}
    </Container>
  )
}

export default ProfileImageForm