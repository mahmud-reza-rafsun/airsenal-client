import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import ManageUsersRow from "./ManageUsersRow";
import useAuth from "../../../../hooks/useAuth";

const ManageUsers = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();
    const { data: users = [], refetch } = useQuery({
        queryKey: ['users', user?.email],
        queryFn: async () => {
            const { data } = await axiosSecure.get(`/get-users/${user?.email}`);
            return data;
        }
    })
    console.log(users);
    return (
        <div className="overflow-x-auto w-full py-4 lg:py-0  flex flex-col justify-center items-center text-gray-800 rounded-xl bg-gray-100/30">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th>SL.</th>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Email</th>
                        <td>Current Role</td>
                        <th>Last Sign In Time</th>
                        <th className="text-center">Role</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.length > 0 ? users.map((user, index) => <ManageUsersRow key={user?._id} user={user} index={index} refetch={refetch} />) : <tr>
                            <td>
                                <p>No User Found</p>
                            </td>
                        </tr>
                    }
                </tbody>
            </table>
        </div>
    );
};

export default ManageUsers;