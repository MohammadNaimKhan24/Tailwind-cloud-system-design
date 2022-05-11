import { ArrowSmRightIcon, ChipIcon, PhoneIcon, SupportIcon } from "@heroicons/react/outline";

const Support = () => {
  return (
    <div className="w-full  mt-24">
        <div className="w-screen h-[700px] bg-gray-900/90 absolute">
            <img className="w-full h-full object-cover mix-blend-overlay" src="/assets/support.jpg" alt="support" />
        </div>
        <div className="max-w-[1240px] mx-auto text-white relative"><div className="px-4 py-8">
            <h2 className="text-3xl pt-8 text-slate-300 uppercase text-center">Support</h2>
            <h3 className="text-5xl font-bold py-6 text-center">Finding the right team</h3>
            <p className="text-slate-300 py-3 text-3xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita excepturi animi reiciendis assumenda, error nulla doloremque, dolor similique a numquam, consequatur harum minus architecto quasi repellat. Repellendus tempore error fuga.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 relative gap-x-4 gap-y-16 px-4 pt-12 sm:pt-20 text-black">

            <div className="bg-white rounded-xl shadow-2xl">
                <div className="p-8">
                    <PhoneIcon className="w-16 bg-indigo-600 text-white p-4 rounded-lg mt-[-4rem]" />
                    <h3 className="text-2xl font-bold my-6">Sales</h3>
                    <p className="text-xl text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem odit sed dicta fugiat cupiditate, reprehenderit voluptates ipsa aliquid aliquam possimus.</p>
                </div>
                <div className="bg-slate-100 pl-8 py-4">
                    <p className="flex items-center text-indigo-600 gap-1">Contact Us <ArrowSmRightIcon className="w-5" /></p>
                </div>
            </div>
            <div className="bg-white rounded-xl shadow-2xl">
                <div className="p-8">
                    <SupportIcon className="w-16 bg-indigo-600 text-white p-4 rounded-lg mt-[-4rem]" />
                    <h3 className="text-2xl font-bold my-6">Technical Support</h3>
                    <p className="text-xl text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem odit sed dicta fugiat cupiditate, reprehenderit voluptates ipsa aliquid aliquam possimus.</p>
                </div>
                <div className="bg-slate-100 pl-8 py-4">
                    <p className="flex items-center text-indigo-600 gap-1">Contact Us <ArrowSmRightIcon className="w-5" /></p>
                </div>
            </div>
            <div className="bg-white rounded-xl shadow-2xl">
                <div className="p-8">
                    <ChipIcon className="w-16 bg-indigo-600 text-white p-4 rounded-lg mt-[-4rem]" />
                    <h3 className="text-2xl font-bold my-6">Media Inquires</h3>
                    <p className="text-xl text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem odit sed dicta fugiat cupiditate, reprehenderit voluptates ipsa aliquid aliquam possimus.</p>
                </div>
                <div className="bg-slate-100 pl-8 py-4">
                    <p className="flex items-center text-indigo-600 gap-1">Contact Us <ArrowSmRightIcon className="w-5" /></p>
                </div>
            </div>

        </div>
        </div>
    </div>
  )
}

export default Support;