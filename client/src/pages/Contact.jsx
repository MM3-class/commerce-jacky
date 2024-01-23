import { Check2Circle, Envelope, Telephone } from 'react-bootstrap-icons'
import Button from '../components/Button'
import { useState } from 'react'

const Contact = () => {
  const [input, setInput] = useState("")
  const [isValid, setIsValid] = useState(false)

  const handleChange = ({ target }) => {
    const { name, value } = target
    setInput((prev) => ({
      ...prev,
      [name]: value
    }))
  }
  console.log(input)
  const handleSubmit = (e) => {
    e.preventDefault()
    if (input) {
      setIsValid(true)
    } else {
      setIsValid(false)
    }
  }
  return (
    <div className='lg:h-screen px-7 py-4'>
      <h1 className='mb-4 lg:text-xl text-md'>Contact</h1>
      <section className='xl:translate-y-1/4 lg:flex justify-center xl:items-center mt-10 xl:mt-0 gap-7'>
        <aside className='lg:w-[35%] space-y-6 xl:px-7'>
          <article className='pb-8 border-b border-opacity-50 border-b-text2'>
            <div className='flex items-center gap-4 mb-8'>
              <div className='bg-secondary p-4 text-white rounded-full text-lg'>
                <Telephone />
              </div>
              <span className='font-semibold'>Call To Us</span>
            </div>
            <div className=' space-y-4 '>
              <p>We are available 24/7, 7 days a week.</p>
              <p>phone: +8801611112222</p>
            </div>
          </article>
          <article>
            <div className='flex items-center gap-4 mb-8'>
              <div className='bg-secondary p-4 text-white rounded-full text-lg'>
                <Envelope />
              </div>
              <span className='font-semibold'>Call To Us</span>
            </div>
            <div className=' space-y-4 '>
              <p>Fill out our form and we will contact you within 24 hours.</p>
              <p>Emails: customer@exclusive.com</p>
              <p>Emails: support@exclusive.com</p>
            </div>
          </article>
        </aside>
        {!isValid ? (
          <form className='space-y-8 lg:w-[65%] xl:mt-10 mt-6'>
            <div className='xl:space-x-4 space-y-4'>
              <input
                className='bg-bg-btn p-2 lg:py-3 block lg:inline-block w-full lg:px-4 rounded-lg xl:w-[32%] focus:ring-1 outline-none'
                placeholder='Your Name *'
                type="text"
                name="name"
                value={input.name || ""}
                onChange={handleChange} />
              <input
                className='bg-bg-btn p-2 lg:py-3 block lg:inline-block w-full lg:px-4 rounded-lg xl:w-[32%] focus:ring-1 outline-none'
                placeholder='Your Email *'
                type="email"
                name="email"
                value={input.email || ""}
                onChange={handleChange} />
              <input
                className='bg-bg-btn p-2 lg:py-3 block lg:inline-block w-full lg:px-4 rounded-lg xl:w-[32%] focus:ring-1 outline-none'
                placeholder='Your Phone *'
                type="phone"
                name="phone"
                value={input.phone || ""}
                onChange={handleChange} />
            </div>
            <div>
              <textarea
                className='bg-bg-btn py-3 px-4 rounded-lg w-full resize-none h-52 focus:ring-1 outline-none'
                placeholder='Your Message'
                name="message"
                value={input.message || ""}
                onChange={handleChange}></textarea>
            </div>

            <Button
              className="py-4 px-12 rounded-lg text-white bg-secondary lg:float-right active:bg-red-500 hover:bg-red-500"
              onClick={handleSubmit}>Send Message</Button>
          </form>
        ) : (
          <div className='space-x-2 my-4 lg:w-[65%] text-green-600 text-center text-lg xl:text-4xl flex justify-center items-center'>
            <h1>Submitted Successful</h1>
            <Check2Circle />
            </div>
        )}
      </section>
    </div>
  )
}

export default Contact