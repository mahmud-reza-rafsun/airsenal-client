import axios from "axios";
import { IoWarningOutline } from "react-icons/io5";
import { LuBug } from "react-icons/lu";
import toast from "react-hot-toast"
import useAuth from "../../../../hooks/useAuth";

const ReportModal = ({ product }) => {
    const { user } = useAuth();
    const { _id: reportId, image, owner, votes, _id } = product || {};
    const handleReport = async (e) => {
        e.preventDefault();
        const form = e.target;
        const productName = form.productName.value;
        const description = form.description.value;
        const reportData = { productName, description, image, votes, owner, reportId };

        try {
            await axios.post(`${import.meta.env.VITE_API_URL}/reported-content`, reportData);
            toast.success('Report Placed Successful!!!')
            form.reset();
        } catch (error) {
            toast.error(error.message);
        }
    }
    return (
        <div>
            <button disabled={user?.email === owner?.email} className={` bg-yellow-400
                                lg:py-[10px] lg:px-3 px-4 py-1 justify-center items-center 
                                ${user?.email === owner?.email && 'cursor-wait'}
                                ${user?.email === owner?.email && "bg-yellow-500/70"}
                                lg:block flex gap-x-3 
                                text-center rounded-lg cursor-pointer`} onClick={() => document.getElementById('my_modal_1').showModal()}><IoWarningOutline className="text-white text-xl" />
            </button>
            <dialog id="my_modal_1" className="modal">
                <form onSubmit={handleReport} className="modal-box">
                    <div className='space-y-6'>
                        {/* Name */}
                        <div className='space-y-1 text-sm'>
                            <label htmlFor='name' className='block text-gray-600'>
                                Product Name
                            </label>
                            <input
                                className='w-full px-4 py-3 text-gray-800 border border-yellow-300 focus:outline-yellow-500 rounded-md bg-white'
                                name='productName'
                                id='name'
                                type='text'
                                placeholder='Product Name'
                                required
                            />
                        </div>

                        {/* Description */}
                        <div className='space-y-1 text-sm'>
                            <label htmlFor='description' className='block text-gray-600'>
                                Description
                            </label>

                            <textarea
                                id='description'
                                placeholder='Write Product Problem here...'
                                className='block rounded-md focus:indigo-300 w-full h-32 px-4 py-3 text-gray-800  border border-yellow-300 bg-white focus:outline-yellow-500 '
                                name='description'
                            ></textarea>
                        </div>
                    </div>
                    <div className="flex items-center justify-between mt-6">
                        <button className="btn bg-yellow-500 text-white rounded-3xl shadow-none border-none"><LuBug /> Report</button>
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn btn-error text-white shadow-none border-none rounded-3xl">Close</button>
                        </form>
                    </div>
                </form>
            </dialog>
        </div>
    );
};

export default ReportModal;