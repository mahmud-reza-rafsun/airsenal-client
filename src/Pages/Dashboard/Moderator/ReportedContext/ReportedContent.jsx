import axios from "axios";
import useAuth from "../../../../hooks/useAuth";
import ReportedContentRow from "./ReportedContentRow";
import { useQuery } from "@tanstack/react-query";

const ReportedContent = () => {
    const { user } = useAuth();
    const { data: reports = [], refetch } = useQuery({
        queryKey: ['reports', user],
        queryFn: async () => {
            const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/get-report/${user?.email}`);
            return data
        }
    })
    console.log(reports);
    return (
        <div className="overflow-x-auto w-full py-4 lg:py-0  flex flex-col justify-center items-center text-gray-800 rounded-xl bg-red-100">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th>SL.</th>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Votes</th>
                        <th>Details</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {/* row 1 */}
                    {
                        reports.length > 0 ? reports.map((report, index) => <ReportedContentRow key={report?._id} report={report} index={index} refetch={refetch} />) : <tr>
                            <td>
                                <p>No Report Found</p>
                            </td>
                        </tr>
                    }
                </tbody>
            </table>
        </div>
    );
};

export default ReportedContent;