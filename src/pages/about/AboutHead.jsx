import React from 'react'
import { images } from '../../constants'
const content = {
    title: 'Sed Ut Perspiciatis Unde Omnis',
    subtitle: 'VOLUPTATEM UT ACCUSA !',
    text: 'Sed ut perspiciatis unde omnis iste natus error ipsum voluptatem ut accusa ntium dolor remque laudantium, totam rem aperiam, eaque ipsa quae abse illo quasi sed architecto beatae vitae dicta sut dolor etr explicabo. Morbi a luctus magna, eu rutrum turpis. Sed perspi ciatis unde error ipsum voluptatem.',
    image: images.abouthero

}

export default function AboutHead() {
  return (
    <section className='container px-6 py-[3rem]'>
        <div className='max-w-[1110px] mx-auto grid gap-[2rem] lg:grid-cols-2'>
            <div className='flex flex-col gap-[.5rem] justify-center'>
                <h4 className='text-[1.5rem] font-bold font-inter text-dark'> {content.title}  </h4>
                <p className='text-[1.2rem] font-semibold font-inter text-light'> {content.subtitle} </p>
                <p className='font-rubik text-stone-500'> {content.text} </p>
            </div>
            <img src={content.image} alt="train" />
        </div>

    </section>
  )
}
