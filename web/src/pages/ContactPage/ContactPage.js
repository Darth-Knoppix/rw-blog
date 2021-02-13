import {
  Form,
  TextField,
  TextAreaField,
  FieldError,
  Submit,
  FormError,
} from '@redwoodjs/forms'
import { Flash, useFlash, useMutation } from '@redwoodjs/web'
import BlogLayout from 'src/layouts/BlogLayout'
import { useForm } from 'react-hook-form'

const CREATE_CONTACT = gql`
  mutation CreateContactMutation($input: CreateContactInput!) {
    createContact(input: $input) {
      id
    }
  }
`

const ContactPage = () => {
  const formMethods = useForm({ mode: 'onBlur' })
  const { addMessage } = useFlash()
  const [createContact, { loading, error }] = useMutation(CREATE_CONTACT, {
    onCompleted: () => {
      addMessage('Thanks!')
      formMethods.reset()
    },
  })
  const handleSubmit = (data) => {
    createContact({ variables: { input: data } })
  }
  return (
    <BlogLayout>
      <Flash timeout={2000} />
      <Form onSubmit={handleSubmit} error={error} formMethods={formMethods}>
        <label htmlFor="name">Name</label>
        <TextField name="name" validation={{ required: true }} />
        <FieldError name="name" />

        <label htmlFor="email">Email</label>
        <TextField name="email" type="email" validation={{ required: true }} />
        <FieldError name="name" />

        <label htmlFor="message">Message</label>
        <TextAreaField name="message" validation={{ required: true }} />
        <FieldError name="name" />

        <Submit disabled={loading}>Save</Submit>
        <FormError error={error} />
      </Form>
    </BlogLayout>
  )
}

export default ContactPage
