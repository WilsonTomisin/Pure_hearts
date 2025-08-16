import { useState } from 'react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../components/ui/select'
import { RadioGroup, RadioGroupItem } from './ui/radio-group'
import { ArrowBigLeft, ArrowBigUpDash } from 'lucide-react'



const ApplicationForm = () => {

  const [applicantData, setapplicantData] = useState<{
    first_name: string
    last_name: string
    date_of_birth: string
    gender: string
    phone: string
    email: string
    job_title: string
    resume:File| undefined
  }>({
    first_name: '',
    last_name: '',
    date_of_birth: '',
    gender: '',
    phone: '',
    email: '',
    job_title: '',
    resume: undefined,
  })
  type ApplicantErrors = Partial<Omit<typeof applicantData, 'resume'>> & { resume?: string };

  const [errors, seterrors] = useState<ApplicantErrors>();
  const [ isSubmitting, setisSubmitting] = useState(false)
  const validateForm = (): boolean => {
    let formerrors:ApplicantErrors = {}
    
    if (!applicantData.first_name) {
      formerrors.first_name = 'enter you first name'
    }

    if (!applicantData.last_name) {
      formerrors.last_name = 'enter your last name'
    }

    if (!applicantData.date_of_birth) {
      formerrors.date_of_birth = 'input your date of birth'
    }

    if (!applicantData.gender) {
      formerrors.gender = 'select an option'
    }

    if (!applicantData.phone) {
      formerrors.phone = 'enter your phone number'
    }

    if (!applicantData.email) {
      formerrors.email = 'enter your email address'
    } else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(applicantData.email)) {
      formerrors.email = 'Invalid email address'
    }

    if (!applicantData.job_title) {
      formerrors.job_title = 'select a job title'
    }
    if (!applicantData.resume) {
      formerrors.resume = 'Upload your resume'
    }
    seterrors(formerrors)
    return Object.keys(formerrors).length === 0
  }
  const fileChange = (e: React.ChangeEvent<HTMLInputElement>,) => {
  const allowedEXT = ['pdf', 'doc', 'docx']
  const maxFileSize = 5 * 1024 * 1024 // 5MB
  const submittedDoc = e.target.files?.[0]
    if (submittedDoc) {
      const splitSubmittedCV = submittedDoc?.name.split('.').pop()?.toLowerCase() // returns the extension after "." in lowercase

      if (splitSubmittedCV && allowedEXT.includes(splitSubmittedCV)) {
        if (submittedDoc.size <= maxFileSize) {
          setapplicantData(prev => ({ ...prev, resume: submittedDoc }))

          seterrors({resume:''})
        } else {
          setapplicantData(prev=>({...prev,resume:undefined}))
          seterrors(prevData => ({
            ...prevData,
            resume: 'File must be less than 5mb',
          }))
        }
      } else {
        setapplicantData(prev => ({ ...prev, resume: undefined }))
        seterrors(prevData => ({
          ...prevData,
          resume: 'only .pdf and .doc files are allowed',
        }))
      }
    } else {
      setapplicantData(prev => ({ ...prev, resume: undefined }))
      seterrors(preval => ({
        ...preval,
        resume: 'Please Upload a file',
      }))
    }
  
}

  async function sendApplication() {
    try {
      
    } catch (error) {
      
    }
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    e.preventDefault();
    const { name, value} = e.target
    setapplicantData(prev => ({
      ...prev,
      [name]: value
    }))
  }
  function handleSubmit(e:React.MouseEvent<HTMLButtonElement,MouseEvent>) {
    e.preventDefault();

    if (validateForm()) {
      sendApplication();
      return
    }

    return null
  }

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
              name='first_name'
              onChange={handleChange}
              className={`  ${errors?.first_name ? ' border border-red-500' : ''} shadow-xl focus:shadow-blue-300 w-full bg-white p-5 rounded-2xl`}
            />
            {errors?.first_name && (
              <span className=" text-xs text-red-500 font-light">{errors.first_name}</span>
            )}
          </div>
          <div>
            <label htmlFor="" className=" font-semibold text-gray-400 block">
              Last name
            </label>
            <input
              type="text"
              name='last_name'
              onChange={handleChange}
              className={`  ${errors?.last_name ? ' border border-red-500' : ''} shadow-xl focus:shadow-blue-300 w-full bg-white p-5 rounded-2xl`}
            />
            {errors?.last_name && (
              <span className=" text-xs text-red-500 font-light">{errors?.last_name}</span>
            )}
          </div>
        </section>

        <section className=" grid grid-cols-2 gap-10  items-center justify-between">
          <div>
            <label htmlFor="" className=" font-semibold block text-gray-400">
              Date of Birth
            </label>
            <input
              type="date"
              name='date_of_birth'
              onChange={handleChange}
              className={`  ${errors?.date_of_birth ? ' border border-red-500' : ''} shadow-xl focus:shadow-blue-300 w-full bg-white p-5 rounded-2xl`}
            />
            {errors?.date_of_birth && (
              <span className=" text-xs text-red-500 font-light">{errors.date_of_birth}</span>
            )}
          </div>
          <div>
            <label htmlFor="" className=" font-semibold text-gray-400">
              Gender
            </label>
            <RadioGroup className=" flex items-center gap-5" defaultValue="">
              <div className="flex items-center space-x-2">
                <RadioGroupItem
                  value="male"
                  id="male"
                  onClick={() => setapplicantData(prev => ({ ...prev, gender: 'male' }))}
                />
                <label htmlFor="male">Male</label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem
                  onClick={() => setapplicantData(prev => ({ ...prev, gender: 'female' }))}
                  className="text-blue-500 data-[state=checked]:text-blue-500"
                  value="female"
                  id="female"
                />
                <label htmlFor="female">Female</label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem
                  onClick={() => setapplicantData(prev => ({ ...prev, gender: 'not-specified' }))}
                  className="text-blue-500 data-[state=checked]:text-blue-500"
                  value="not-specified"
                  id="not-specified"
                />
                <label htmlFor="not-specified">prefer not to say</label>
              </div>
            </RadioGroup>{' '}
            {errors?.gender && (
              <span className=" text-xs text-red-500 font-light">{errors?.gender}</span>
            )}
          </div>
        </section>

        <section className=" grid grid-cols-2 gap-10  items-center justify-between">
          <div>
            <label className=" font-semibold block text-gray-400" htmlFor="">
              Phone number
            </label>
            <input
              type="text"
              onChange={handleChange}
              name='phone'
              className={`  ${errors?.phone ? ' border border-red-500' : ''} shadow-xl focus:shadow-blue-300 w-full bg-white p-5 rounded-2xl`}
            />
            {errors?.phone && (
              <span className=" text-xs text-red-500 font-light">{errors.phone}</span>
            )}
          </div>
          <div>
            <label className=" font-semibold block text-gray-400" htmlFor="">
              Email address
            </label>
            <input
              type="email"
              name='email'
              onChange={handleChange}
              className={`  ${errors?.email ? ' border border-red-500' : ''}  shadow-xl focus:shadow-blue-300 w-full bg-white p-5 rounded-2xl`}
            />
            {errors?.email && (
              <span className=" text-xs text-red-500 font-light">{errors.email}</span>
            )}
          </div>
        </section>

        <section className=" grid grid-cols-2 gap-10  items-center justify-between">
          <div>
            <label className=" font-semibold block text-gray-400" htmlFor="">
              Job role
            </label>
            <Select onValueChange={val => setapplicantData(prev => ({ ...prev, job_title: val }))}>
              <SelectTrigger
                className={`  ${errors?.job_title ? ' border border-red-500' : ''} w-full  shadow-xl focus:shadow-blue-300 bg-white py-7 px-5 rounded-2xl `}
              >
                <SelectValue placeholder="select role" />
              </SelectTrigger>
              <SelectContent className=" ">
                <SelectItem value="light">Role 1</SelectItem>
                <SelectItem value="dark">Role 2</SelectItem>
                <SelectItem value="system">Role 3</SelectItem>
              </SelectContent>
            </Select>
            {errors?.job_title && (
              <span className=" text-xs text-red-500 font-light">{errors.job_title}</span>
            )}
          </div>
          <div>
            <label className=" font-semibold block text-gray-400" htmlFor="">
              Upload Document
            </label>
            <input
              type="file"
              onChange={fileChange}
              className={` ${errors?.resume ? ' border border-red-500' : ''}   shadow-xl focus:shadow-blue-300 w-full bg-white p-5 rounded-2xl`}
            />
            {errors?.resume && (
              <span className=" text-xs text-red-500 font-light">{errors?.resume}</span>
            )}
          </div>
        </section>

        <div className=" my-10">
          <button
            onClick={handleSubmit}
            disabled ={isSubmitting}
            className=" disabled:bg-gray-200 disabled:text-black text-white bg-brand-colour-primary py-3 px-16 rounded-2xl"
          >
            {' '}
            { !isSubmitting ? <span className=' flex items-center gap-1'> <ArrowBigUpDash className=' animate-bounce'/> sending...</span> : 'send'}
          </button>
        </div>
      </form>
    </div>
  )
}

export default ApplicationForm
