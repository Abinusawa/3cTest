import { useRef } from 'react'
import Zambia from '@assets/3consultzambia.png'
import TriCore from '@assets/3C_Tricore.png'
import Nigeria from '@assets/3CNew.png'
import emailjs from '@emailjs/browser'
import { toast } from 'sonner'
// import { isPlainObject } from '@tanstack/react-router'

const ContactUs: React.FC = () => {
  const form = useRef<HTMLFormElement>(null)

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    //console form values
    //console.log(form.current)
    //console.log(import.meta.env.VITE_EMAILJS_SERVICE_ID)

    emailjs
      .sendForm(
        "service_ac69gqr",
        "template_fc24l0f",
        form.current as HTMLFormElement,
        "ym1IhNMnZepEsUCJi"
        // import.meta.env.VITE_EMAILJS_SERVICE_ID,
        // import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        // form.current as HTMLFormElement,
        // import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          toast.success('Message sent successfully')
          form.current?.reset()
        },
        (error) => {
          // if error.text exist, show it in toast
          if (error.text) {
            toast.error(error.text)
          } else {
            toast.error('Message sending failed')
          }
        }
      )
  }
  return (
    <section className="mx-auto max-w-7xl px-4 py-24 md:px-8 lg:py-32">
      <div className="grid w-full grid-cols-1 items-center justify-between gap-12 lg:grid lg:grid-cols-2">
        <div className="h-fit w-full lg:mb-0">
          <div className="content pb-12 lg:px-12">
            <div className="heading mb-12">
              <h2 className="mb-5 text-3xl font-bold text-gray-900">
                Contact Us
              </h2>
              <p className="text-lg text-gray-700">
                Our team will love to hear from you.
              </p>
            </div>
            <form
              ref={form}
              onSubmit={sendEmail}
              className="form flex flex-col gap-8"
            >
              <div className="form-field grid grid-cols-2 gap-6 @container/form-field">
                <p className="col-span-2 flex w-full flex-col @md/form-field:col-span-1">
                  <label
                    htmlFor="FName"
                    className="mb-[6px] text-sm font-medium"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    id="FName"
                    name="FName"
                    placeholder="First name"
                    required
                    className="w-full rounded-lg border border-gray-300 px-[0.875rem] py-[10px] outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500 md:py-3"
                  />
                </p>
                <p className="col-span-2 flex w-full flex-col @md/form-field:col-span-1">
                  <label
                    htmlFor="LName"
                    className="mb-[6px] text-sm font-medium"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="LName"
                    name="LName"
                    placeholder="Last name"
                    required
                    className="w-full rounded-lg border border-gray-300 px-[0.875rem] py-[10px] outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500 md:py-3"
                  />
                </p>
                <p className="col-span-2 flex w-full flex-col @2xl/form-field:col-span-1">
                  <label
                    htmlFor="email"
                    className="mb-[6px] text-sm font-medium"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="johndoe@example.com"
                    required
                    className="w-full rounded-lg border border-gray-300 px-[0.875rem] py-[10px] outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500 md:py-3"
                  />
                </p>
                <p className="col-span-2 flex w-full flex-col @2xl/form-field:col-span-1">
                  <label htmlFor="tel" className="mb-[6px] text-sm font-medium">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="tel"
                    name="tel"
                    placeholder="+234 8012345678"
                    required
                    className="w-full rounded-lg border border-gray-300 px-[0.875rem] py-[10px] outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500 md:py-3"
                  />
                </p>
                <p className="col-span-2 flex w-full flex-col @2xl/form-field:col-span-1">
                  <label
                    htmlFor="message"
                    className="mb-[6px] text-sm font-medium"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Leave us a message"
                    required
                    rows={4}
                    className="w-full rounded-lg border border-gray-300 px-[0.875rem] py-[10px] outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500 md:py-3"
                  />
                </p>
              </div>
              <button
                type="submit"
                className="min-w-50 mt-8 w-full cursor-pointer rounded-lg bg-amber-400 px-4 py-3 font-medium text-gray-900 shadow-md hover:bg-amber-500 focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 active:scale-95 active:bg-amber-600 md:mt-0"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
        <div className="h-fit w-full lg:mb-0">
          {/* <img
            src={Zambia}
            draggable="false"
            alt="Cybersecurity Illustration"
            className="h-auto w-[200px] object-cover object-center"
          /> */}

          <div className="h-fit w-full lg:mb-0">
            <div className="content pb-12 lg:px-12">
              <div className="heading mb-12">
                <h2 className="mb-5 text-3xl font-bold text-gray-900">
                 Address
                </h2>
                <p className="text-lg text-gray-700">
                  Our team will love to hear from you.
                </p>
              </div>
              <div className='Nigeria flex flex-col align-center'>
                <img
                    src={Nigeria}
                    draggable="false"
                    alt="Cybersecurity Illustration"
                    className="h-auto w-[150px] pb-[10px] object-cover object-center"
                />
                <div className="border border-gray-200" />

                <h2 className="mb-4 text-1xl pt-[5px] text-gray-900">
                  35A, Dr. Ladi Alakija, Lagos <br /> Nigeria.
                </h2>
              </div>
              <br />
              <div className='Nigeria flex flex-col align-center'>
                <img
                    src={TriCore}
                    draggable="false"
                    alt="Cybersecurity Illustration"
                    className="h-auto w-[150px] pb-[10px] object-cover object-center"
                />
                <div className="border border-gray-200" />

                <h2 className="mb-4 text-1xl pt-[5px] text-gray-900">
                  23, Harare Drive, Marborough <br /> Zimbabwe
                </h2>
              </div>
              <br />
              <div className='Nigeria flex flex-col align-center'>
                <img
                    src={Zambia}
                    draggable="false"
                    alt="Cybersecurity Illustration"
                    className="h-auto w-[150px] object-cover pb-[10px] object-center"
                />
                <div className="border border-gray-200" />

                <h2 className="mb-4 text-1xl pt-[5px] text-gray-900">
                  Plot-2614/M Kalunguti RD, New Kasama, Lusaka, <br /> Zambia.
                </h2>
              </div>
              
              <br />
              <br />
              <br />
              <br />
              <br />
              
              
              
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactUs
