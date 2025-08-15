import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../../hooks/useAxiosSecure";
import SliderLoading from "../../../../../components/SliderLoading/SliderLoading";
import ManageCouponRow from "./ManageCouponRow";

const ManageCoupon = () => {
    const axiosSecure = useAxiosSecure();
    const { data: coupons = [], refetch, isLoading } = useQuery({
        queryKey: ['coupons'],
        queryFn: async () => {
            const { data } = await axiosSecure.get('/get-coupon');
            return data
        }
    })
    if (isLoading) return <SliderLoading />
    console.log(coupons);
    return (
        <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th>SL.</th>
                        <th>Name</th>
                        <th>Expair Date</th>
                        <th>Ammount</th>
                        <th>Description</th>
                        <th className="text-center">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        coupons.length > 0 ? coupons.map((coupon, index) => <ManageCouponRow key={coupon?._id} coupon={coupon} refetch={refetch} index={index} />) : <tr>
                            <th>
                                <p>No Coupon Found</p>
                            </th>
                        </tr>
                    }
                </tbody>
            </table>
        </div>
    );
};

export default ManageCoupon;