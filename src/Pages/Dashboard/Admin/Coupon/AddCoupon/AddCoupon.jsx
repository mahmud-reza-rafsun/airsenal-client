import toast from "react-hot-toast";
import useAxiosSecure from "../../../../../hooks/useAxiosSecure";

const AddCoupon = () => {
    const axiosSecure = useAxiosSecure();
    const handleAddProduct = async (e) => {
        e.preventDefault();
        const form = e.target;
        const code = form.code.value;
        const date = form.date.value;
        const ammount = parseFloat(form.ammount.value);
        const description = form.description.value;
        const couponData = { code, date, ammount, description };

        // send coupon data in db
        try {
            await axiosSecure.post(`/add-coupon/${code}`, couponData);
            toast.success('Add Coupon Successful!!')
        } catch (error) {
            toast.error(error.response?.data?.message || error.message);
            console.log(error.message);
        }
    }

    return (
        <div className='w-full py-14 px-6 text-gray-800 rounded-xl bg-gray-50'>
            <form onSubmit={handleAddProduct}>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-2xl mx-auto'>
                    {/* Coupon Code */}
                    <div className='space-y-1 text-sm'>
                        <label htmlFor='name' className='block text-gray-600'>
                            Coupon Code
                        </label>
                        <input
                            className='w-full px-4 py-3 text-gray-800 border border-indigo-300 focus:outline-indigo-500 rounded-md bg-white'
                            name='code'
                            id='name'
                            type='text'
                            placeholder='Coupon Code'
                            required
                        />
                    </div>
                    {/* Expiry Date */}
                    <div className='space-y-1 text-sm'>
                        <label htmlFor='name' className='block text-gray-600'>
                            Expiry Date
                        </label>
                        <input
                            className='w-full px-4 py-3 text-gray-800 border border-indigo-300 focus:outline-indigo-500 rounded-md bg-white'
                            name='date'
                            id='name'
                            type='date'
                            placeholder='Expiry Date'
                            required
                        />
                    </div>
                    {/* ammount */}
                    {/* Expiry Date */}
                    <div className='space-y-1 text-sm'>
                        <label htmlFor='name' className='block text-gray-600'>
                            Ammount
                        </label>
                        <input
                            className='w-full px-4 py-3 text-gray-800 border border-indigo-300 focus:outline-indigo-500 rounded-md bg-white'
                            name='ammount'
                            id='name'
                            type='text'
                            placeholder='Ammount'
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
                            placeholder='Write a description here...'
                            className='block rounded-md focus:indigo-300 w-full h-32 px-4 py-3 text-gray-800  border border-indigo-300 bg-white focus:outline-indigo-500 '
                            name='description'
                        ></textarea>
                    </div>
                </div>
                <div className="text-center pt-8">
                    <button className="btn bg-indigo-500 text-white shadow-none outline-none border-none">Add Coupon</button>
                </div>
            </form>
        </div>
    );
};

export default AddCoupon;