import AboutHead from "./AboutHead";
import Agents from "./Agents";
import Banner from "../../components/Banner";
import OverlayButton from "../../components/OverlayButton";
import Button from "../../components/Button";
import { images } from "../../constants";

const lorem = 'Sed ut perspiciatis unde omnis iste natus error ipsum voluptatem ut accusa ntium dolor remque et laudantium, totam rem aperiam, eaque ipsa quae abse illo quasi sed.'

export default function About() {
  return (
    <>
      <AboutHead />
      <Banner bgImage={images.banner3}>
        <OverlayButton title='Get Flat 20% Offer On Tours' text={lorem} navlink='/'>
          <Button children='Read More' style='border-yellow text-white bg-yellow hover:bg-white hover:text-dark'/>
        </OverlayButton>
      </Banner>
      <Agents />
    </>
  )
}
