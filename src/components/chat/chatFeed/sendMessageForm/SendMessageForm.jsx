import { useFormik } from "formik"
// import * as Yup from 'yup';

import { 
  Button,
  ComposeMessageContainer,
  Container,
  CustomFrom,
  TextArea 
} from "./sendMessageForm.styled"

function SendMessageForm() {
  const { values, handleChange } = useFormik({
    initialValues: {
      message: ''
    }
  })
  console.log(values.message);
  return (
    <Container>
      <CustomFrom autoComplete="off">
        <ComposeMessageContainer>
          <TextArea 
            value={values.message}
            onChange={handleChange}
            id="message"
            name="message"
            placeholder="Type something..."
            rows={5}
          />
        </ComposeMessageContainer>
        <div>
          <Button
            type="submit" 
            disabled={values.message.length > 0 ? false : true}
          >Send</Button>
        </div>
      </CustomFrom>
    </Container>
  )
}

export default SendMessageForm