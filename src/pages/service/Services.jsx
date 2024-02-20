import ServiceTabs from "./ServiceTabs";
import Stats from '../home/Stats'
import Banner from '../../components/Banner'
import { images } from "../../constants";


export default function Services() {
  return (
    <>
      <ServiceTabs />
      <Banner bgImage={images.banner}>
        <Stats />
      </Banner>
    </>
  )
}
