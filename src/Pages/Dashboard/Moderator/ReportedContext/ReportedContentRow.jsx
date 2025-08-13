import toast from "react-hot-toast";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";

const ReportedContentRow = ({ report, index, refetch }) => {
    const axiosSecure = useAxiosSecure();
    const { image, productName, votes, reportId } = report || {};
    console.log(reportId);
    const handleDelete = async (id) => {
        try {
            await axiosSecure.delete(`/delete-content/${id}`);
            toast.success('Delete Reported Content!!')
            refetch();
        } catch (error) {
            toast.error(error);
        }
    }
    const mordernDelete = (id) => {
        toast(
            (t) => (
                <div className='text-center space-y-3'>
                    <div>
                        <p>Are you <b>Sure?</b> </p>
                    </div>
                    <div className='gap-3 flex'>
                        <button className='bg-red-400 text-white cursor-pointer py-1 px-2 text-sm rounded-md font-semibold' onClick={() => {
                            toast.dismiss(t.id)
                            handleDelete(id)
                        }
                        }>Delete</button>
                        <button className='bg-blue-400 text-white cursor-pointer py-1 px-2 text-sm rounded-md font-semibold' onClick={() => toast.dismiss(t.id)}>Close</button>
                    </div>
                </div>
            )
        );
    }
    return (
        <tr>
            <th>{index + 1}</th>
            <td>
                <div className="avatar">
                    <div className="mask rounded-md h-12 w-12">
                        <img
                            src={image}
                            alt="Avatar Tailwind CSS Component" />
                    </div>
                </div>
            </td>
            <td>
                {productName}
            </td>
            <td>
                {votes}
            </td>

            <th>
                <button className="bg-blue-400  text-white cursor-pointer py-1 px-2 text-sm rounded-md font-semibold">Details</button>
            </th>
            <td>
                <button onClick={() => mordernDelete(reportId)} className={`bg-red-400  text-white cursor-pointer py-1 px-2 text-sm rounded-md font-semibold  `}>Delete</button>
            </td>
        </tr>
    );
};

export default ReportedContentRow;