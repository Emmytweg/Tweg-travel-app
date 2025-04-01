import React from 'react'
import { navLinks } from '../../../constant/constant'
import Link from 'next/link'
import { CgClose } from 'react-icons/cg'

type Props = {
    showNav: boolean,
    closeNav: () => void,
}

const MobileNav = ({ closeNav, showNav }: Props) => {
    const navOpen = showNav ? 'translate-x-0' : 'translate-x-[-100%]'

    return (
        <div>
            {/* Overlay */}
            {showNav && (
                <div className="fixed inset-0 z-[1002] bg-black opacity-70 w-full h-screen  " onClick={closeNav}></div>
            )}
            {/* navLinks */}
            <div className={ `text-white  ${navOpen} fixed top-0 left-0  justify-center flex flex-col h-full transform transition-all duration-500 delay-300 w-[80%] sm:w-[60%] bg-rose-900 space-y-6 z-[1050]`}>
                {
                    navLinks.map((link) => {
                        return (
                            <Link key={link.id} href={link.url}>
                                <p className='text-white w-fit text-[20px] ml-12 border-b-[1.5px] pb-1 border-white sm:text-[30px] relative  text-base font-medium  block after:block after:content-empty after:absolute after:h-[3px] after:bg-yellow-300 after:w-full after:scale-x-0 hover:after:scale-x-100 after:transition duration-300 after:origin-right hover:border-b-0 '>{link.label}</p>
                            </Link>
                        )
                    })
                }
                {/* close button */}
                <CgClose className="absolute top-[0.7rem] right-[1.4rem] sm:w-8 sm:h-8 w-6 h-6" onClick={closeNav} />
            </div>
        </div>
    )
}

export default MobileNav