import type { Label } from '@radix-ui/react-select'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../components/ui/select'
import { RadioGroup, RadioGroupItem } from './ui/radio-group'

const ApplicationForm = () => {
  return (
    <div className=" max-w-[1000px] mx-auto bg-brand-header/10 rounded-2xl p-7">
      <h1 className=" mb-3 text-brand-header text-3xl header-font font-bold">Personal Details</h1>
      <form action="" className=" space-y-10">
        <section className="  grid grid-cols-2 gap-10 items-center justify-between">
          <div>
            <label htmlFor="" className=" font-semibold text-gray-400 block">
              First name
            </label>
            <input
              type="text"
              className="  shadow-xl focus:shadow-blue-300 w-full bg-white p-5 rounded-2xl"
            />
          </div>
          <div>
            <label htmlFor="" className=" font-semibold text-gray-400 block">
              Last name
            </label>
            <input
              type="text"
              className=" shadow-xl focus:shadow-blue-300 w-full bg-white p-5 rounded-2xl"
            />
          </div>
        </section>

        <section className=" grid grid-cols-2 gap-10  items-center justify-between">
          <div>
            <label htmlFor="" className=" font-semibold block text-gray-400">
              Date of Birth
            </label>
            <input
              type="date"
              className="  shadow-xl focus:shadow-blue-300 w-full bg-white p-5 rounded-2xl"
            />
          </div>
          <div>
            <label htmlFor="" className=" font-semibold text-gray-400">
              Gender
            </label>
            <RadioGroup className=" flex items-center gap-5" defaultValue="option-one">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="male" id="male" />
                <label htmlFor="male">Male</label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem
                  className="text-blue-500 data-[state=checked]:text-blue-500"
                  value="female"
                  id="female"
                />
                <label htmlFor="female">Female</label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem
                  className="text-blue-500 data-[state=checked]:text-blue-500"
                  value="not-specified"
                  id="not-specified"
                />
                <label htmlFor="not-specified">prefer not to say</label>
              </div>
            </RadioGroup>{' '}
          </div>
        </section>

        <section className=" grid grid-cols-2 gap-10  items-center justify-between">
          <div>
            <label className=" font-semibold block text-gray-400" htmlFor="">
              Phone number
            </label>
            <input
              type="text"
              className="  shadow-xl focus:shadow-blue-300 w-full bg-white p-5 rounded-2xl"
            />
          </div>
          <div>
            <label className=" font-semibold block text-gray-400" htmlFor="">
              Email address
            </label>
            <input
              type="email"
              className="  shadow-xl focus:shadow-blue-300 w-full bg-white p-5 rounded-2xl"
            />
          </div>
        </section>

        <section className=" grid grid-cols-2 gap-10  items-center justify-between">
          <div>
            <label className=" font-semibold block text-gray-400" htmlFor="">
              Job role
            </label>
            <Select>
              <SelectTrigger className="w-full  shadow-xl focus:shadow-blue-300 bg-white py-7 px-5 rounded-2xl ">
                <SelectValue placeholder="select role" />
              </SelectTrigger>
              <SelectContent className=" ">
                <SelectItem value="light">Role 1</SelectItem>
                <SelectItem value="dark">Role 2</SelectItem>
                <SelectItem value="system">Role 3</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <label className=" font-semibold block text-gray-400" htmlFor="">
              Upload Document
            </label>
            <input
              type="file"
              className="  shadow-xl focus:shadow-blue-300 w-full bg-white p-5 rounded-2xl"
            />
          </div>
        </section>

        <div className=" my-10">
          <button className=" text-white bg-brand-colour-primary py-3 px-16 rounded-2xl">
            {' '}
            send
          </button>
        </div>
      </form>
    </div>
  )
}

export default ApplicationForm
