import OverlayButton from "../../components/OverlayButton";
import Button from "../../components/Button";
import Section from "../../components/Section";
import Stats from "./Stats";
import Banner from "../../components/Banner";
import WhatWeDo from "./WhatWeDo";
import { images } from "../../constants";
import Testimonials from "./Testimonials";



const lorem = "Create unforgettable travel experiences. Our team is dedicated to providing exceptional service and crafting personalized journeys tailored to your preferences. Whether you're planning a relaxing getaway or an adventurous expedition, we are here to turn your travel dreams into reality. Let's embark on this journey together and make your travel aspirations a delightful reality."

export default function Home() {
  return (
    <>
      <Section title='What We Do'> 
        <WhatWeDo />
      </Section>

      <Banner bgImage={images.banner}>
        <Stats />
      </Banner>

      <Section title='What People Are Saying'>
        <Testimonials />
      </Section>


      <Banner bgImage={images.banner}>
        <OverlayButton title='We Are Ready To Work With You' text={lorem} navlink='/contact'>
            <Button children='Contact Us' style='border-yellow text-white bg-yellow hover:bg-white hover:text-dark'/>
        </OverlayButton>
      </Banner>
    </>
  )
}