import {
  Form,
  TextField,
  TextAreaField,
  FieldError,
  Submit,
} from '@redwoodjs/forms'
import BlogLayout from 'src/layouts/BlogLayout'

const ContactPage = () => {
  const handleSubmit = (data) => {
    alert(JSON.stringify(data))
  }
  return (
    <BlogLayout>
      <Form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <TextField name="name" validation={{ required: true }} />
        <FieldError name="name" />

        <label htmlFor="email">Email</label>
        <TextField name="email" validation={{ required: true }} />
        <FieldError name="name" />

        <label htmlFor="message">Message</label>
        <TextAreaField name="message" validation={{ required: true }} />
        <FieldError name="name" />

        <Submit>Save</Submit>
      </Form>
    </BlogLayout>
  )
}

export default ContactPage
