import React from 'react'
import Container from '../../elements/Container'
import HeadingTitles from '../../elements/DisplayTitles/HeadingTitles'
import Heading from '../../elements/DisplayTitles/Heading'
import Button from '../../elements/Button'
import Product1 from '../../../medias/images/products/Product-1.jpg';
import Product2 from '../../../medias/images/products/Product-2.jpg';
import Product3 from '../../../medias/images/products/Product-3.jpg';

export default function Products() {
  return (
    <Container>
      <HeadingTitles>
        Toujours des délicieux burgers
      </HeadingTitles>

      <Heading theme="secondary" alignement="center" className="my-5 text-center">
        Choisissez et savourez
      </Heading>
      <p className='text-center'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>

      <div className='grid lg:grid-cols-3 gap-x-1 mb-20 mt-10'>

        <div className='w-full md:w-2/3 lg:w-full h-full mx-auto'>
          <div className='relative w-full h-72'>
            <img src={Product1} alt="Un hamburger" className='bg-primary absolute top-0 left-0 w-full h-full object-cover z-0' />
          </div>

          <div className='flex flex-col items-center justify-center px-5 pb-5'>
            <Heading variant="h3" className="my-5">
              Lorem ipsum dolor
            </Heading>
            <p className='text-center'>
              Lorem ipsum dolor is simply text for designer and developer.
            </p>
            <Button color="danger" className="font-secondary mb-10 lg:mb-0">
              Commandez
            </Button>
          </div>
        </div>

        <div className='w-full md:w-2/3 lg:w-full h-full mx-auto'>
          <div className='relative w-full h-72'>
            <img src={Product2} alt="Un hamburger" className='bg-primary absolute top-0 left-0 w-full h-full object-cover z-0' />
          </div>

          <div className='flex flex-col items-center justify-center px-5 pb-5'>
            <Heading variant="h3" className="my-5">
              Lorem ipsum dolor
            </Heading>
            <p className='text-center'>
              Lorem ipsum dolor is simply text for designer and developer.
            </p>
            <Button color="danger" className="font-secondary mb-10 lg:mb-0">
              Commandez
            </Button>
          </div>
        </div>

        <div className='w-full md:w-2/3 lg:w-full h-full mx-auto'>
          <div className='relative w-full h-72'>
            <img src={Product3} alt="Un hamburger" className='bg-primary absolute top-0 left-0 w-full h-full object-cover z-0' />
          </div>

          <div className='flex flex-col items-center justify-center px-5 pb-5'>
            <Heading variant="h3" className="my-5">
              Lorem ipsum dolor
            </Heading>
            <p className='text-center'>
              Lorem ipsum dolor is simply text for designer and developer.
            </p>
            <Button color="danger" className="font-secondary lg:mb-0">
              Commandez
            </Button>
          </div>
        </div>
      </div>
    </Container>
  )
}
