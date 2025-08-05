import {
    Body,
    Button,
    Column,
    Container,
    Head,
    Heading,
    Hr,
    Html,
    Img,
    Link,
    pixelBasedPreset,
    Preview,
    Row,
    Section,
    Tailwind,
    Text,
} from '@react-email/components';
import logo from '../assets/Logo.png'


type ContactEmailData = {
  first_name: string
  email: string
  phone: string
  message: string
}

type ContactEmailProps = {
    EmailData: ContactEmailData
}
const ContactEmail = ({EmailData}:ContactEmailProps) => {
  return (
    <Html>
      <Head />
      <Tailwind
        config={{
          presets: [pixelBasedPreset],
        }}
      >
        <Body className="mx-auto my-auto bg-white px-2 font-sans">
          <Preview>{EmailData.first_name}</Preview>
          <Container className="mx-auto my-[40px] max-w-[465px] rounded border border-[#eaeaea] border-solid p-[20px]">
            <Section className="mt-[32px]">
              <Img
                src={`${logo}`}
                width="40"
                height="37"
                alt="pure heart logo"
                className="mx-auto my-0"
              />
            </Section>
            <Heading className="mx-0 my-[30px] p-0 text-center font-normal text-[24px] text-black">
              Hello PURE HEARTS.My name is {EmailData.first_name},{' '}
            </Heading>
            <Text className="text-[14px] text-black leading-[24px]">
              <strong>{EmailData.phone}</strong> (
              <Link href={`mailto:${EmailData.email}`} className="text-blue-600 no-underline">
                {EmailData.email}
              </Link>
              )
            </Text>
            <Hr className="mx-0 my-[26px] w-full border border-[#eaeaea] border-solid" />
            <Text className="text-[#666666] text-[12px] leading-[24px]">{EmailData.message}</Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  )
}

export default ContactEmail
