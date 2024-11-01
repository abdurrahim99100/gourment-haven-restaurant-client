import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import { FaBabyCarriage, FaCar, FaUsers, FaWallet } from "react-icons/fa";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";
// chert
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Legend } from 'recharts';
const colors = [ '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];
// pieChart
import { PieChart, Pie } from 'recharts';
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#FF9742'];




const AdminHome = () => {

    const axiosSecure = useAxiosSecure();
    const { user } = useAuth();

    const { data: stats } = useQuery({
        queryKey: ['admin-stats'],
        queryFn: async () => {
            const result = await axiosSecure.get('/admin-stats');
            return result.data
        }
    });

    const { data: chartData = [] } = useQuery({
        queryKey: ['order-stats'],
        queryFn: async () => {
            const chartData = await axiosSecure.get('/order-stats');
            return chartData.data
        }
    });



    // chat related function;

    const getPath = (x, y, width, height) => {
        return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
  Z`;
    };

    const TriangleBar = (props) => {
        const { fill, x, y, width, height } = props;

        return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
    };

    // pieChart custom function;

    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);

        return (
            <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
                {`${(percent * 100).toFixed(0)}%`}
            </text>
        );
    };

    const pieChartData = chartData.map(data => {
        return { name: data._id, value: data.revenue }
    })

    return (
        <>
            <Helmet>
                <title>Gourment | Admin Home</title>
            </Helmet>
            <section className="">
                <h3 className="text-4xl my-5">Hi, Welcome to {user?.displayName}</h3>
                <div className="stats shadow">
                    <div className="stat place-items-center flex gap-10">
                        <FaWallet className="text-5xl" />
                        <div>
                            <div className="stat-value">${stats?.revenue}</div>
                            <div className="stat-desc text-4xl">Revenue</div>
                        </div>
                    </div>
                    <div className="stat place-items-center flex gap-10">
                        <FaUsers className="text-5xl" />
                        <div>
                            <div className="stat-value">{stats?.user}</div>
                            <div className="stat-desc text-4xl">Customers</div>
                        </div>
                    </div>
                    <div className="stat place-items-center flex gap-10">
                        <FaBabyCarriage className="text-5xl" />
                        <div>
                            <div className="stat-value">{stats?.menuItems}</div>
                            <div className="stat-desc text-4xl">Products</div>
                        </div>
                    </div>
                    <div className="stat place-items-center flex gap-10">
                        <FaCar className="text-5xl" />
                        <div>
                            <div className="stat-value">{stats?.orders}</div>
                            <div className="stat-desc text-4xl">Orders</div>
                        </div>
                    </div>
                </div>
                <div className="flex gap-5 my-14">
                    <div className="w-6/12">
                        <BarChart
                            className=""
                            width={500}
                            height={400}
                            data={chartData}
                            margin={{
                                top: 20,
                                right: 30,
                                left: 20,
                                bottom: 0,
                            }}
                        >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="_id" />
                            <YAxis />
                            <Bar dataKey="quantity" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
                                {chartData.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={colors[index % 5]} />
                                ))}
                            </Bar>
                        </BarChart>
                    </div>
                    <div className="w-6/12">
                        <PieChart width={500} height={400}>
                            <Pie
                                data={pieChartData}
                                cx="50%"
                                cy="50%"
                                labelLine={false}
                                label={renderCustomizedLabel}
                                outerRadius={80}
                                fill="#8884d8"
                                dataKey="value"
                            >
                                {pieChartData.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                ))}
                            </Pie>
                            <Legend></Legend>
                        </PieChart>
                    </div>
                </div>
            </section>
        </>
    );
};

export default AdminHome;