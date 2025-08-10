import { uploadImage } from "../../../apis/utils";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const AddProduct = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();
    const handleAddProduct = async (e) => {
        e.preventDefault();
        const form = e.target;
        const productName = form.productName.value;
        const tag = form.tag.value;
        const email = form.email.value;
        const description = form.description.value;
        const photo = form.image.files[0];
        const image = await uploadImage(photo);

        const newTag = tag.split('\n').map((item) => item.trim()).filter(Boolean);
        const productDetails = { productName, newTag, description, image, owner: { email, name: user.displayName } };
        // send data in db
        const { data } = await axiosSecure.post(`${import.meta.env.VITE_API_URL}/add-product`, productDetails);
        console.log(data);
    }
    return (
        <div className='w-full min-h-[calc(100vh-40px)] flex flex-col justify-center items-center text-gray-800 rounded-xl bg-gray-50'>
            <form onSubmit={handleAddProduct}>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-10'>
                    <div className='space-y-6'>
                        {/* Name */}
                        <div className='space-y-1 text-sm'>
                            <label htmlFor='name' className='block text-gray-600'>
                                Product Name
                            </label>
                            <input
                                className='w-full px-4 py-3 text-gray-800 border border-indigo-300 focus:outline-indigo-500 rounded-md bg-white'
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
                                placeholder='Write plant description here...'
                                className='block rounded-md focus:indigo-300 w-full h-32 px-4 py-3 text-gray-800  border border-indigo-300 bg-white focus:outline-indigo-500 '
                                name='description'
                            ></textarea>
                        </div>
                    </div>
                    <div className='space-y-6 flex flex-col'>
                        <div className='flex justify-between gap-2'>
                            {/* tag */}
                            <div className='space-y-1 text-sm'>
                                <label htmlFor='price' className='block text-gray-600 '>
                                    Tag
                                </label>
                                <textarea name="tag" className='w-full px-4 py-3 text-gray-800 border border-indigo-300 focus:outline-indigo-500 rounded-md bg-white' id=""></textarea>
                            </div>
                            {/* {Owner } */}
                            <div className='space-y-1 text-sm'>
                                <label htmlFor='category' className='block text-gray-600 '>
                                    Owner
                                </label>
                                <input
                                    className='w-full px-4 py-3 text-gray-800 border border-indigo-300 focus:outline-indigo-500 rounded-md bg-white'
                                    name='email'
                                    id='name'
                                    type='text'
                                    defaultValue={user?.email}
                                    disabled
                                    required
                                />
                            </div>

                        </div>
                        {/* Image */}
                        <div className=' p-4  w-full  m-auto rounded-lg flex-grow'>
                            <div className='file_upload px-5 py-5 relative border-2 border-indigo-500 border-dotted rounded-lg'>

                                <div className='flex flex-col w-max mx-auto text-center'>
                                    <label>
                                        <input
                                            className='text-sm cursor-pointer w-36 hidden'
                                            type='file'
                                            name='image'
                                            id='image'
                                            accept='image/*'
                                            hidden
                                        />
                                        <div className='bg-indigo-500 text-white border border-gray-300 rounded font-semibold cursor-pointer p-1 px-3 hover:bg-indigo-500'>
                                            Upload
                                        </div>
                                    </label>
                                </div>
                            </div>
                        </div>

                        {/* Submit Button */}
                        <button
                            type='submit'
                            className='w-full p-3 mt-5 text-center font-medium text-white transition duration-200 rounded shadow-md bg-indigo-500 cursor-pointer'
                        >
                            Save
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default AddProduct;