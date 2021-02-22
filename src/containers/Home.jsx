import React from 'react'
import FormSearch from '../components/FormSearch'
import Section from '../components/Section'
import SubHeadingTitle from '../components/SubHeadingTitle'
import IconParagraph from '../components/IconParagraph'
import Testimonial from '../components/Testimonial'
import staticImg from '../assets/team_1_img_2.jpg'

const Home = () => {
  console.log(process.env)
  return (
    <>
      <Section className='bg-dark content_1' align='left'>
        <div className='col-lg-6'>
          <h1 className='color-white text-center big'>Request a ride now</h1>
          <div className='mw-620 mx-auto mt-10  mb-40 f-22 color-white op-7 text-center text-adaptive'>
            We help you rent ambulance everywhere!
          </div>

          <FormSearch btnText='Search' />
        </div>
      </Section>

      {/* Content */}
      <Section className='bg-light' align='center'>
        <SubHeadingTitle
          subheading='Find an Ambulance!'
          heading='Sign Up to Book'
          size='h2'
          to='/signup?u=client'
        />
        <SubHeadingTitle
          subheading='Start Earning!'
          heading='Sign Up to Drive'
          size='h2'
          to='/signup?u=driver'
        />
      </Section>

      {/* Feature */}
      <Section className='bg-dark feature_1' align='center'>
        <div className='col-xl-10 color-white text-center'>
          <h2 className='mb-45'>How it works</h2>
          <div className='row justify-content-center'>
            <IconParagraph
              logo='briefcase'
              title='Find an ambulance'
              paragraph='Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industrys standard dummy text ever
          since the 1500s'
            />
            <IconParagraph
              logo='compress-arrows-alt'
              title='Book an ambulance'
              paragraph='Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industrys standard dummy text ever
          since the 1500s'
            />
            <IconParagraph
              logo='desktop'
              title='Easy payment'
              paragraph='Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industrys standard dummy text
                ever since the 1500s'
            />
          </div>
        </div>
      </Section>

      {/* Testimonial 1 */}
      <Section className='bg-light testimonial_1' align='start'>
        <div className='col-xl-2 col-lg-1'></div>
        <div className='col-md-1 col-sm-2'>
          <i className='fas fa-quote-left f-36 color-gray'></i>
        </div>
        <Testimonial
          details='The most important part of the Startup Framework is the samples. The
          samples form a set of 25 usable pages you can use as is or you can add
          new blocks from UI Kit.'
          propic={staticImg}
          name='Jessey Kirk'
          city='Dhaka'
        />
      </Section>
    </>
  )
}

export default Home
