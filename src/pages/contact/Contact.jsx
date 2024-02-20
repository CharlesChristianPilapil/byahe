import ContactForm from "./ContactForm";
import Section from '../../components/Section'
import Map from "./Map";

export default function Contact() {
  return (
    <>
      <Section title='Contact Us'>
        <ContactForm />
      </Section>
      <Map />
    </>
  )
}
