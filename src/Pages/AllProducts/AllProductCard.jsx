const AllProductCard = ({ product }) => {
    const { _id, productName, newTag, description, image, votes } = product || {};
    return (
        <div className="border p-3 rounded-md border-gray-300">
            <figure>
                <img
                    src={image}
                    className="rounded-md h-48 object-cover w-full"
                    alt="Shoes" />
            </figure>
            <div className="mt-3 space-y-3">
                <h2 className="text-lg lg:text-xl font-semibold">{productName}</h2>
                <p className="text-gray-600 text-[15px]">{description.substring(0, 100)}.....</p>

                {newTag?.slice(0, 3).map((tag, index) => (
                    <span key={index} className="w-full px-3 py-1 mr-1 cursor-pointer bg-blue-100 text-blue-500 rounded-full text-[13px] text-center">
                        #{tag}
                    </span>
                ))}
                <div className="flex justify-between items-center mt-4">
                    <button className="btn btn-sm rounded-xl bg-indigo-400 text-white">DownVote: 0</button>
                    <button className="btn btn-sm rounded-xl bg-indigo-400 text-white">UpVote: {votes}</button>
                </div>
            </div>
        </div>
    );
};

export default AllProductCard;