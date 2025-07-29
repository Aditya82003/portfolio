import Link from 'next/link'
import React from 'react'
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'

const FooterTag = () => {
    const email = "adityaraikwar12789@gmail.com"
    const subject = "Impressive Portfolio";
    const body = `
    Dear Aditya Kashyap,

    I recently came across your portfolio and was genuinely impressed with your work.
    I would love the opportunity to connect with you at your earliest convenience to discuss potential collaboration or shared interests.

    Please let me know a time that works for you.

    Best regards,
    Portfolio Visitor
  `;
    return (
        <footer className="bg-black text-white rounded-b-2xl py-8 px-4 text-center space-y-4">
            <div className='container mx-auto'>

                <div className="flex justify-center items-center gap-6 text-sm">
                    <Link href="https://github.com/Aditya82003" className="hover:un">
                        <FiGithub className='w-6 h-6 hover:text-green-600' />
                    </Link>
                    <Link href={`mailto:${email}?subject=${encodeURIComponent(
                        subject
                    )}&body=${encodeURIComponent(body)}`} >
                        <FiMail className='w-6 h-6 hover:text-red-600' />
                    </Link>
                    <Link href="https://www.linkedin.com/in/adityakashyap2003/">
                        <FiLinkedin className='w-6 h-6 hover:text-blue-600' />
                    </Link>

                </div>
                <div className=" mt-4 text-sm text-gray-300">
                    Made by Aditya Kashyap
                </div>
            </div>
        </footer>

    )
}

export default FooterTag