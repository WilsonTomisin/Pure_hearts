import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './ui/accordion'


const faqsContent = [
  {
    question: 'What services do you provide',
    answer:
      'We offer a range of healthcare staffing solutions, including short-term and long-term placements for various settings such as learning disabilities, mental health, hospitals, and elderly care. Our services also extend to domiciliary care, providing support in the comfort of clients homes.',
  },
  {
    question: 'Can you support established domiciliary care providers with staff?',
    answer:
      ' Absolutely. We specialize in supporting established domiciliary care providers by offering experienced and reliable staff. Our goal is to assist organizations in maintaining high-quality care services. ',
  },
  {
    question: 'How do I apply for a position in pure heart solution',
    answer:
      ' To apply for a position, please visit our Careers page and follow the instructions provided. We welcome dedicated healthcare professionals to join our team and contribute to our mission of delivering exceptional care. ',
  },
  {
    question: 'How are your staff matched to specific needs?',
    answer:
      'Our staff are meticulously matched to specific service needs. They undergo specialized training tailored to the unique requirements of each service, ensuring they bring the right expertise to the task at hand, be it in learning disabilities, mental health, hospitals, elderly care, or domiciliary care. ',
  },
  {
    question: 'What types of care do you provide in homes?',
    answer:
      'Our in-home care services cover a spectrum of needs, including personal care, companionship, housekeeping, and specialized services such as moving and handling. We aim to provide comprehensive and tailored solutions for our clients. ',
  },
//   { question: '', answer: '' },
]

const FaqsContent = () => {
  return (
    <Accordion type="single" collapsible>
      {faqsContent.map((content, idx) => (
        <AccordionItem value={content.answer} key={idx} className=' py-2 lg:py-7'>
              <AccordionTrigger className=' text-base  lg:text-3xl header-font'>{ content.question }</AccordionTrigger>
              <AccordionContent>{ content.answer }</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}

export default FaqsContent
