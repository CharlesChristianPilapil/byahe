import { images } from '../constants'
import Button from './Button'
import NavBar from './NavBar'
import Overlay from './Overlay'
import OverlayButton from './OverlayButton'

const lorem = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis modi deserunt architecto, quisquam perferendis eos vero sunt aperiam repudiandae perspiciatis fuga dicta sint dolorum atque, dolores, vitae nam numquam iusto officia quaerat. Quo amet hic esse corrupti neque omnis placeat reprehenderit minus, dolorem totam labore voluptas voluptatum'

export default function Header() {
  return (
    <header
      className={`relative py-[10rem] grid place-items-center border-2 bg-cover bg-center`}
      style={{ backgroundImage: `url(${images.hero})` }}>
        <OverlayButton title='START YOUR ADVENTURE WITH US' text={lorem} navlink='/about'>
          <Button children='Read More' style='border-white text-white hover:bg-yellow hover:text-dark'/>
        </OverlayButton>
        <Overlay bg='black'/>
        <NavBar />
    </header>
  )
}
