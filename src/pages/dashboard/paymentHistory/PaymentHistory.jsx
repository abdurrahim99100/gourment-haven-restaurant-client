import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../components/sectionTitle/SectionTitle";
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const PaymentHistory = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();

    const { data: payments = [] } = useQuery({
        queryKey: ['payments', user?.email],
        enabled: !!user,
        queryFn: async () => {
            const res = await axiosSecure.get(`/payments/${user?.email}`)
            return res.data;
        }
    });

    console.log(payments)
    return (
        <>
            <Helmet>
                <title>Gourment | Payment History</title>
            </Helmet>
            <SectionTitle heading={'your payment history'} subHeading={'At a Glancel'} />
            <section className="overflow-x-auto w-9/12 bg-gray-100 rounded px-10 py-20 mb-10">
                <div className="my-2 text-lg uppercase font-bold">
                    <h3>Total Users: {payments?.length}  </h3>
                </div>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead className="bg-yellow-500 text-xl">
                            <tr>
                                <th>Email</th>
                                <th>TransitionId</th>
                                <th>Total Price</th>
                                <th>payment Date</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {
                                payments.length > 0 ? (payments.map((payment) => <tr key={payment._id}>
                                    <td>{payment.email}</td>
                                    <td className="text-green-600">{payment.transactionId}</td>
                                    <td>${parseFloat(payment.price).toFixed(2)}</td>
                                    <td>{payment.date}</td>
                                    <td>{payment.status}</td>

                                </tr>)) : <tr>
                                    <td>Payment history is not available</td>
                                </tr>
                            }
                        </tbody>
                    </table>
                </div>
            </section>
        </>
    );
};

export default PaymentHistory;