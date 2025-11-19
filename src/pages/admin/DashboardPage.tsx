
const kpis = [
    { title: "Total Sales", value: "$12,450", change: "+5%", trend: "up", icon: "💸", color: "from-emerald-500 to-emerald-600" },
    { title: "Orders", value: "324", change: "+2%", trend: "up", icon: "🛒", color: "from-blue-500 to-blue-600" },
    { title: "Customers", value: "157", change: "+3%", trend: "up", icon: "👤", color: "from-amber-500 to-amber-600" },
    { title: "Products", value: "1,201", change: "+1%", trend: "up", icon: "📦", color: "from-purple-500 to-purple-600" },
];

const latestOrders = [
    { id: "ORD1237", customer: "John Doe", amount: "$257.00", status: "Paid", date: "2024-06-06" },
    { id: "ORD1236", customer: "Jane Smith", amount: "$124.99", status: "Pending", date: "2024-06-05" },
    { id: "ORD1235", customer: "Jin Woo", amount: "$999.00", status: "Paid", date: "2024-06-05" },
    { id: "ORD1234", customer: "Sarah Lee", amount: "$62.50", status: "Refunded", date: "2024-06-03" },
];

const stockAlerts = [
    { product: "Logitech Mouse", stock: 2 },
    { product: "Apple iPhone 13", stock: 4 },
    { product: "Samsung TV", stock: 1 },
];

const AdminDashboard = () =>{
    return(<>
    
    {/* Main dashboard area */}
    <main className="flex-1 bg-gradient-to-br from-gray-50 to-gray-100 p-8 min-w-0 overflow-auto">
        {/* Page Title */}
        <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">Dashboard Overview</h1>
            <p className="text-gray-500">Welcome back! Here's what's happening with your store today.</p>
        </div>

        {/* KPI Grids */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {kpis.map((kpi, idx) => (
                <div
                    key={idx}
                    className="group relative bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
                >
                    <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${kpi.color} opacity-10 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500`}></div>
                    
                    <div className="relative z-10">
                        <div className="flex items-start justify-between mb-4">
                            <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${kpi.color} flex items-center justify-center text-2xl shadow-lg`}>
                                {kpi.icon}
                            </div>
                            <span className="text-emerald-600 text-sm font-semibold bg-emerald-50 px-2.5 py-1 rounded-full">
                                {kpi.change}
                            </span>
                        </div>
                        
                        <div>
                            <p className="text-sm font-medium text-gray-500 mb-1">{kpi.title}</p>
                            <p className="text-3xl font-bold text-gray-800">{kpi.value}</p>
                            <p className="text-xs text-gray-400 mt-2">vs yesterday</p>
                        </div>
                    </div>
                </div>
            ))}
        </section>

        {/* Quick Overviews: Latest Orders, Stock Alerts */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Latest Orders */}
            <div className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 p-6 col-span-2 border border-gray-100">
                <div className="flex justify-between items-center mb-6">
                    <div>
                        <h2 className="font-bold text-xl text-gray-800">Latest Orders</h2>
                        <p className="text-sm text-gray-500 mt-1">Recent transactions from your store</p>
                    </div>
                    <button className="text-teal-600 text-sm font-semibold hover:text-teal-700 hover:bg-teal-50 px-4 py-2 rounded-lg transition-all">
                        View all →
                    </button>
                </div>
                <div className="overflow-x-auto">
                    <table className="table-auto w-full text-sm">
                        <thead>
                            <tr className="text-left border-b-2 border-gray-100">
                                <th className="py-3 px-4 font-semibold text-gray-600 text-xs uppercase tracking-wider">Order ID</th>
                                <th className="py-3 px-4 font-semibold text-gray-600 text-xs uppercase tracking-wider">Customer</th>
                                <th className="py-3 px-4 font-semibold text-gray-600 text-xs uppercase tracking-wider">Amount</th>
                                <th className="py-3 px-4 font-semibold text-gray-600 text-xs uppercase tracking-wider">Status</th>
                                <th className="py-3 px-4 font-semibold text-gray-600 text-xs uppercase tracking-wider">Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {latestOrders.map(order => (
                                <tr className="border-b last:border-b-0 hover:bg-gray-50 transition-colors" key={order.id}>
                                    <td className="py-4 px-4 font-mono text-xs text-gray-500 font-semibold">{order.id}</td>
                                    <td className="py-4 px-4">
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-teal-400 to-teal-500 flex items-center justify-center text-white text-xs font-bold">
                                                {order.customer.split(' ').map(n => n[0]).join('')}
                                            </div>
                                            <span className="font-medium text-gray-800">{order.customer}</span>
                                        </div>
                                    </td>
                                    <td className="py-4 px-4 font-bold text-gray-800">{order.amount}</td>
                                    <td className="py-4 px-4">
                                        <span className={`px-3 py-1.5 rounded-full text-xs font-bold inline-flex items-center gap-1
                                            ${order.status === "Paid" ? "bg-emerald-100 text-emerald-700" :
                                            order.status === "Pending" ? "bg-amber-100 text-amber-700" :
                                            "bg-red-100 text-red-700"}`}>
                                            <span className={`w-1.5 h-1.5 rounded-full ${order.status === "Paid" ? "bg-emerald-500" : order.status === "Pending" ? "bg-amber-500" : "bg-red-500"}`}></span>
                                            {order.status}
                                        </span>
                                    </td>
                                    <td className="py-4 px-4 text-gray-500">{order.date}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Stock Alerts */}
            <div className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 p-6 border border-gray-100">
                <div className="mb-6">
                    <h2 className="font-bold text-xl text-gray-800">Low Stock Alerts</h2>
                    <p className="text-sm text-gray-500 mt-1">Items running low</p>
                </div>
                <ul className="space-y-3">
                    {stockAlerts.map((alert, idx) => (
                        <li key={idx} className="flex justify-between items-center p-4 hover:bg-red-50 transition-all rounded-xl border border-gray-100 group">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-lg bg-red-100 flex items-center justify-center group-hover:bg-red-200 transition-colors">
                                    {/* Replace missing Package icon with a simple SVG box icon */}
                                    <svg width={18} height={18} viewBox="0 0 20 20" fill="none" className="text-red-600" xmlns="http://www.w3.org/2000/svg">
                                        <rect x="3" y="5" width="14" height="10" rx="2" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                                        <path d="M3 7.5L10 12L17 7.5" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                                    </svg>
                                </div>
                                <span className="text-gray-800 font-medium text-sm">{alert.product}</span>
                            </div>
                            <span className="bg-red-100 text-red-700 px-3 py-1.5 rounded-full text-xs font-bold shadow-sm">
                                {alert.stock} left
                            </span>
                        </li>
                    ))}
                </ul>
                <button className="w-full mt-4 text-teal-600 font-semibold text-sm hover:text-teal-700 hover:bg-teal-50 py-3 rounded-xl transition-all border-2 border-dashed border-teal-200 hover:border-teal-300">
                    Manage Inventory →
                </button>
            </div>
        </section>
    </main>
    
    
    </>)
}

export default AdminDashboard;