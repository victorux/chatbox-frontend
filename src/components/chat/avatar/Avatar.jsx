import styled from "styled-components"

const handleSize = (size) => {
    switch (size) {
        case 'small': return '44px'
        case 'medium': return '56px'
        case 'large': return '70px'
        default: return '56px'
    }
}

const RoundedImage = styled.img`
    width: ${({ size }) => handleSize(size)};
    height: ${({ size }) => handleSize(size)};
    object-fit: cover;
    object-position: center;
    border-radius: 50%;
    overflow: hidden;
    vertical-align: middle;
`

function Avatar({ src, alt, size}) {
  return (
    <RoundedImage src={src} alt={alt} size={size} />
  )
}

export default Avatar