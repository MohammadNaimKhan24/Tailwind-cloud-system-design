import {

    FaFacebook, FaInstagram, FaGithub, FaTwitter, FaTwitch
} from "react-icons/fa";
const Footer = () => {
  return (
    <div className="w-full bg-slate-900 text-gray-300 py-8 px-2 mt-24">
        <div className="max-w[1240px] py-8 grid md:grid-cols-6 grid-cols-2 border-b-2 border-gray-600 mx-auto">
            <div>
                <h6 className="font-bold pt-2 uppercase md:ml-10">Solutions</h6>
                <ul>
                    <li className="py-1">Marketing</li>
                    <li className="py-1">Analytics</li>
                    <li className="py-1">Commerce</li>
                    <li className="py-1">Data</li>
                    <li className="py-1">Cloud</li>
                </ul>
            </div>
            <div>
                <h6 className="font-bold pt-2 uppercase md:ml-10">Support</h6>
                <ul>
                    <li className="py-1">Pricing</li>
                    <li className="py-1">Documentation</li>
                    <li className="py-1">Guides</li>
                    <li className="py-1">API Status</li>
                </ul>
            </div>
            <div>
                <h6 className="font-bold pt-2 uppercase md:ml-10">Company</h6>
                <ul>
                    <li className="py-1">About</li>
                    <li className="py-1">Blog</li>
                    <li className="py-1">Jobs</li>
                    <li className="py-1">Press</li>
                    <li className="py-1">Partners</li>
                </ul>
            </div>
            <div>
                <h6 className="font-bold pt-2 uppercase md:ml-10">Legal</h6>
                <ul>
                    <li className="py-1">Claims</li>
                    <li className="py-1">Privacy</li>
                    <li className="py-1">Terms</li>
                    <li className="py-1">Policies</li>
                    <li className="py-1">Conditions</li>
                </ul>
            </div>
            <div className="col-span-2 pt-8 md:pt-2">
                <p className="font-bold uppercase">Subscribe to our newsletter</p>
                <p className="py-4">The latest news, articles and resources, sent to your inbox weekly</p>
                <form className="flex flex-col sm:flex-row">
                    <input type="email" className="rounded focus:outline-none text-gray-500 mr-4 p-2 w-full mb-4"/>
                    <button className="mb-4 p-2">Subscribe</button>
                </form>
            </div>
        </div>

        <div className="flex justify-between flex-col items-center py-4 px-2 sm:flex-row text-center mx-auto max-w-[1240px]">
            <p className="pt-4">2022 Workflow, LLC. All rights reserved</p>
            <div className="flex items-center sm:w-[300px] text-2xl  pt-4 justify-between">
                <FaFacebook className="mr-1" />
                <FaInstagram className="mr-1" />
                <FaTwitter className="mr-1" />
                <FaGithub className="mr-1" />
                <FaTwitch className="mr-1" />
            </div>
        </div>
    </div>
  )
}

export default Footer;