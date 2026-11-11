import { FaFacebookF, FaInstagram, FaLinkedinIn, FaWhatsapp , FaYoutubeSquare } from "react-icons/fa";
const QUICK_LINKS = [
    { name: "الرئيسية", href: "/" },
    { name: "المشروعات", href: "/projects" },
    { name: "المواقع", href: "/sites" },
    { name: "من نحن", href: "/about" },
    { name: "تواصل معنا", href: "/contact" },
];
const SOCIALS = [
  { label: "Instagram", href: "https://instagram.com/", Icon: FaInstagram },
  { label: "LinkedIn", href: "https://linkedin.com/", Icon: FaLinkedinIn },
  { label: "Facebook", href: "https://facebook.com/", Icon: FaFacebookF },
  { label: "WhatsApp", href: "https://wa.me/200000000000", Icon: FaWhatsapp },
    { label: "YouTube", href: "https://youtube.com/", Icon: FaYoutubeSquare },

];
const headding = "text-black text-xl font-semibold  ";
const Footer = () => {
    return (
        <div className="mx-auto text-sm my-12 font-semibold grid grid-cols-1 items-start justify-between gap-8  px-5 py-8 text-[#6D96F2] md:grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 md:px-8 lg:px-12 mx-5 " >
            {/* asel section  */}
            <section className="flex flex-col gap-3">
                <h1 className={headding}>أسيل</h1>
                <p className=" text-sm font-normal">
                    شريكك الموثوق في اكتشاف المساحات السكنية والتجارية في المنصورة ومحافظة الدقهلية
                </p>
            </section>
            {/* links section  */}
            <section className="flex flex-col gap-3">
                 <h1 className={headding}>روابط سريعة</h1>
                <ul className="flex flex-col gap-2">
                    {
                        QUICK_LINKS.map((link)=>(
                            <li key={link.href} className="decoration-0 hover:underline ">
                                {link.name}
                            </li>
                        ))
                    }
                </ul>
            </section>
            {/* contact us  */}
            <section className="flex flex-col gap-3">
                 <h1 className={headding}>تواصل معنا</h1>
                 <ul>
                    <li>
                        المنصورة, محافظة الدقهلية, مصر
                    </li>
                   <li>
                    <a href="tel:+20 1x xxxx xxxx" dir="ltr">
                        +20 1x xxxx xxxx
                    </a>
                   </li>
                   <li>
                    <a href="mailTo:Acel@gmail.com">
                      Acel@gmail.com
                    </a>
                   </li>
                 </ul>
            </section>
            <section className="flex flex-col gap-3">
                {/* Social Media Links */}
                <h1 className={headding}>تابعنا</h1>
                <ul className="flex items-center gap-4">
                    {SOCIALS.map((link)=>(
                        <li key={link.label} className="flex items-center gap-2">
                            <a href={link.href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                                <link.Icon className="text-[#6D96F2] w-[24px] h-[24px]"/>
                                
                            </a>
                        </li>
                    ))}
                </ul>
            </section>
        </div>
    )
}

export default Footer
