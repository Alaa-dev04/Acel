
import ContactForm from '../ContactForm'
const ContactSection = () => {
    return (
        <div className='grid sm:grid-cols-2 grid-cols-1 gap-2 m-[10px] md:m-[20px] lg:m-[50px] pl-5 py-12' dir='rtl'>
            <div className='flex flex-col justify-center items-start gap-2'>
                <h1 className='sm:text-4xl text-2xl font-medium line-clamp-1 '>هل تبحث عن وحدتك المناسبة؟</h1>
                <p className='sm:text-xl text-base text-[#6F6F6F] font-medium'>اترك بياناتك وسيتواصل معك أحد مستشارينا لمساعدتك في الاختيار</p>
            </div>
            <ContactForm/>
        </div>
    )
}

export default ContactSection
