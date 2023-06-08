import styleLogo from '../../../assets/logo_stylecamp.png'
import { FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";
const Footer = () => {
    return (
        <>
            <footer className='max-w-screen-2xl mx-auto px-4'>
                <div className="footer grid md:grid-cols-4 gap-0 border-y-2">
                    <div className='pb-4 w-full'>
                        <div>
                            <img width="80px" src={styleLogo} /><span className="font-extrabold text-xl md:text-2xl text-[#ee4036]">Style Camp</span>
                            <p>Style Camp Industries Ltd.<br />Providing reliable fashion camp since 2020</p>
                        </div>
                    </div>
                    <div className='w-full md:justify-end pt-4'>
                        <span className="footer-title">Services</span>
                        <a className="link link-hover">Branding</a>
                        <a className="link link-hover">Design</a>
                        <a className="link link-hover">Marketing</a>
                        <a className="link link-hover">Advertisement</a>
                    </div>
                    <div className='w-full md:justify-end pt-4'>
                        <span className="footer-title">Company</span>
                        <a className="link link-hover">About us</a>
                        <a className="link link-hover">Contact</a>
                        <a className="link link-hover">Jobs</a>
                        <a className="link link-hover">Press kit</a>
                    </div>
                    <div className='w-full h-full md:justify-end items-center'>
                        <div>
                            <span className="footer-title mb-4">Social</span>
                            <div className="grid grid-flow-col gap-4 text-white py-3">
                                <a>
                                    <FaFacebook className='w-6 h-6 bg-[#3b5998] p-1 rounded'></FaFacebook>
                                </a>
                                <a>
                                    <FaYoutube className='w-6 h-6 bg-[#c4302b] p-1 rounded'></FaYoutube>
                                </a>
                                <a>
                                    <FaTwitter className='w-6 h-6 bg-[#00acee] p-1 rounded'></FaTwitter>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer footer-center p-4">
                    <div className="items-center grid-flow-col gap-0">
                        <img width="30" height="30" className='bg-white p-[2px] rounded-3xl mr-1' src={styleLogo} alt="" />
                        <p className='text-left'>Copyright © 2023 - All right reserved</p>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;