import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div>
      <div className=' text-2xl text-center pt-8 border-t'>
        <Title text1={"ABOUT"} text2={"US"}/>
      </div>
      <div className=' my-10 flex flex-col md:flex-row gap-16'>
        <img className=' w-full md:max-w-[450px]' src={assets.about_img} alt="" />
        <div className=' flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, beatae et tempora molestias qui eligendi dicta, officia alias eius facilis illum nam tenetur veritatis. Eius dolorem minima sequi nisi ab?</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere a labore facilis numquam architecto suscipit corporis eius sit dolorem odio magnam provident quisquam, quidem ipsam id quos accusamus animi quod?</p>
        <b className=' text-gray-800'>Our Mission</b>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis est ad ipsum quis distinctio! Ex voluptas aperiam quos rerum similique consequatur, earum eum ipsum, atque ab quaerat ut a sequi?</p>
        </div>

      </div>
      <div className=' text-xl py-4'>
        <Title text1={"WHY"} text2={"CHOOSE US"}/>
      </div>
      <div className=' flex flex-col md:flex-row text-sm mb-20'>
        <div className=' border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus tenetur exercitationem adipisci soluta laboriosam hic laudantium molestiae necessitatibus temporibus, asperiores, sequi debitis culpa sapiente, quaerat earum aut sit a quisquam.</p>
        </div>
        <div className=' border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Conveenience:</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus tenetur exercitationem adipisci soluta laboriosam hic laudantium molestiae necessitatibus temporibus, asperiores, sequi debitis culpa sapiente, quaerat earum aut sit a quisquam.</p>
        </div>
        <div className=' border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Service:</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus tenetur exercitationem adipisci soluta laboriosam hic laudantium molestiae necessitatibus temporibus, asperiores, sequi debitis culpa sapiente, quaerat earum aut sit a quisquam.</p>
        </div>
      </div>
      <NewsletterBox/>
    </div>
  )
}

export default About
