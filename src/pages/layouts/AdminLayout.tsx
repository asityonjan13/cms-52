import { useState } from "react";
import { ChevronLeft, ChevronRight, ChevronDown, ChevronUp, Home, FileText, Package, Users, BarChart3, TrendingUp, Settings, Plus, Trash2, List, Bell, Search, Menu } from "lucide-react";
import { Outlet } from "react-router";

const AdminLayoutPage = () => {
    const [sidebarOpen, setSidebarOpen] = useState(true);
    const [productsExpanded, setProductsExpanded] = useState(false);
    const [customersExpanded, setCustomersExpanded] = useState(false);
    const [reportsExpanded, setReportsExpanded] = useState(false);
    const [activeMenu, setActiveMenu] = useState("Dashboard");

    const handleMenuClick = (menu: string) => {
        setActiveMenu(menu);
    };

    return (
    <div className="flex flex-col min-h-screen bg-gray-50">
        {/* Header */}
        <header className="sticky top-0 z-50 flex items-center justify-between px-6 py-4 bg-white border-b border-gray-200 shadow-sm backdrop-blur-sm bg-opacity-90">
            <div className="flex items-center gap-4">
                <button
                    className="text-gray-600 hover:text-teal-600 hover:bg-teal-50 p-2 rounded-lg transition-all duration-200"
                    onClick={() => setSidebarOpen((prev) => !prev)}
                >
                    <Menu size={24} />
                </button>
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-teal-500 to-teal-600 flex items-center justify-center text-white font-bold text-lg shadow-lg">
                        P
                    </div>
                    <span className="font-bold text-xl text-gray-800 tracking-tight">POS Admin</span>
                </div>
            </div>
            
            <div className="flex items-center gap-3">
                <div className="hidden md:flex items-center gap-2 bg-gray-100 rounded-lg px-4 py-2 w-80">
                    <Search size={18} className="text-gray-400" />
                    <input 
                        type="text" 
                        placeholder="Search anything..." 
                        className="bg-transparent outline-none text-sm w-full text-gray-700 placeholder-gray-400"
                    />
                </div>
                
                <button className="relative p-2 hover:bg-gray-100 rounded-lg transition-all duration-200">
                    <Bell size={20} className="text-gray-600" />
                    <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
                </button>
                
                <div className="flex items-center gap-3 pl-3 ml-3 border-l border-gray-200">
                    <div className="hidden md:block text-right">
                        <p className="text-sm font-semibold text-gray-800">Admin User</p>
                        <p className="text-xs text-gray-500">admin@company.com</p>
                    </div>
                    <img 
                        className="w-10 h-10 rounded-full border-2 border-teal-500 shadow-md hover:scale-105 transition-transform duration-200 cursor-pointer" 
                        src="https://ui-avatars.com/api/?name=Admin&background=0d9488&color=fff&bold=true" 
                        alt="Admin avatar" 
                    />
                </div>
            </div>
        </header>
        
        <div className="flex flex-1 min-h-0">
            {/* Sidebar */}
            <aside
                className={`transition-all duration-300 bg-white border-r border-gray-200 h-[calc(100vh-73px)] flex flex-col shadow-sm
                ${sidebarOpen ? "w-72" : "w-20"} overflow-hidden`}
            >
                <div className="p-4">
                    {/* Sidebar toggle */}
                    <button
                        className="mb-4 flex items-center justify-start text-gray-400 hover:text-teal-600 hover:bg-teal-50 p-2.5 rounded-lg transition-all duration-200 w-full"
                        onClick={() => setSidebarOpen((prev) => !prev)}
                    >
                        {sidebarOpen ? <ChevronLeft size={20} /> : <ChevronRight size={20} />}
                    </button>
                </div>
                
                {/* Sidebar menu */}
                <nav className="flex flex-col gap-1 px-3 flex-1 overflow-y-auto">
                    {/* Dashboard */}
                    <button
                        onClick={() => handleMenuClick("Dashboard")}
                        className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 font-medium group ${
                            activeMenu === "Dashboard" 
                                ? "bg-gradient-to-r from-teal-500 to-teal-600 text-white shadow-lg shadow-teal-500/30" 
                                : "text-gray-700 hover:bg-gray-100"
                        }`}
                    >
                        <Home size={20} className="flex-shrink-0" />
                        {sidebarOpen && <span>Dashboard</span>}
                    </button>
                    
                    {/* Orders */}
                    <button
                        onClick={() => handleMenuClick("Orders")}
                        className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 font-medium group ${
                            activeMenu === "Orders" 
                                ? "bg-gradient-to-r from-teal-500 to-teal-600 text-white shadow-lg shadow-teal-500/30" 
                                : "text-gray-700 hover:bg-gray-100"
                        }`}
                    >
                        <FileText size={20} className="flex-shrink-0" />
                        {sidebarOpen && <span>Orders</span>}
                    </button>
                    
                    {/* Products with submenu */}
                    <div className="flex flex-col">
                        <button
                            className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 font-medium group ${
                                activeMenu === "Products" 
                                    ? "bg-gradient-to-r from-teal-500 to-teal-600 text-white shadow-lg shadow-teal-500/30" 
                                    : "text-gray-700 hover:bg-gray-100"
                            }`}
                            onClick={() => {
                                setProductsExpanded(!productsExpanded);
                                handleMenuClick("Products");
                            }}
                        >
                            <Package size={20} className="flex-shrink-0" />
                            {sidebarOpen && (
                                <>
                                    <span className="flex-1 text-left">Products</span>
                                    {productsExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                                </>
                            )}
                        </button>
                        {sidebarOpen && productsExpanded && (
                            <div className="ml-11 mt-1 mb-1 flex flex-col gap-0.5 border-l-2 border-teal-200 pl-4">
                                <button className="flex items-center gap-2.5 px-3 py-2.5 rounded-lg hover:bg-teal-50 text-sm text-gray-600 hover:text-teal-700 transition-all text-left">
                                    <Plus size={16} className="flex-shrink-0" />
                                    <span>Add Product</span>
                                </button>
                                <button className="flex items-center gap-2.5 px-3 py-2.5 rounded-lg hover:bg-teal-50 text-sm text-gray-600 hover:text-teal-700 transition-all text-left">
                                    <List size={16} className="flex-shrink-0" />
                                    <span>Product List</span>
                                </button>
                                <button className="flex items-center gap-2.5 px-3 py-2.5 rounded-lg hover:bg-teal-50 text-sm text-gray-600 hover:text-teal-700 transition-all text-left">
                                    <Trash2 size={16} className="flex-shrink-0" />
                                    <span>Delete Product</span>
                                </button>
                            </div>
                        )}
                    </div>
                    
                    {/* Customers with submenu */}
                    <div className="flex flex-col">
                        <button
                            className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 font-medium group ${
                                activeMenu === "Customers" 
                                    ? "bg-gradient-to-r from-teal-500 to-teal-600 text-white shadow-lg shadow-teal-500/30" 
                                    : "text-gray-700 hover:bg-gray-100"
                            }`}
                            onClick={() => {
                                setCustomersExpanded(!customersExpanded);
                                handleMenuClick("Customers");
                            }}
                        >
                            <Users size={20} className="flex-shrink-0" />
                            {sidebarOpen && (
                                <>
                                    <span className="flex-1 text-left">Customers</span>
                                    {customersExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                                </>
                            )}
                        </button>
                        {sidebarOpen && customersExpanded && (
                            <div className="ml-11 mt-1 mb-1 flex flex-col gap-0.5 border-l-2 border-teal-200 pl-4">
                                <button className="flex items-center gap-2.5 px-3 py-2.5 rounded-lg hover:bg-teal-50 text-sm text-gray-600 hover:text-teal-700 transition-all text-left">
                                    <Plus size={16} className="flex-shrink-0" />
                                    <span>Add Customer</span>
                                </button>
                                <button className="flex items-center gap-2.5 px-3 py-2.5 rounded-lg hover:bg-teal-50 text-sm text-gray-600 hover:text-teal-700 transition-all text-left">
                                    <List size={16} className="flex-shrink-0" />
                                    <span>Customer List</span>
                                </button>
                                <button className="flex items-center gap-2.5 px-3 py-2.5 rounded-lg hover:bg-teal-50 text-sm text-gray-600 hover:text-teal-700 transition-all text-left">
                                    <BarChart3 size={16} className="flex-shrink-0" />
                                    <span>Analytics</span>
                                </button>
                            </div>
                        )}
                    </div>
                    
                    {/* Inventory */}
                    <button
                        onClick={() => handleMenuClick("Inventory")}
                        className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 font-medium group ${
                            activeMenu === "Inventory" 
                                ? "bg-gradient-to-r from-teal-500 to-teal-600 text-white shadow-lg shadow-teal-500/30" 
                                : "text-gray-700 hover:bg-gray-100"
                        }`}
                    >
                        <BarChart3 size={20} className="flex-shrink-0" />
                        {sidebarOpen && <span>Inventory</span>}
                    </button>
                    
                    {/* Reports with submenu */}
                    <div className="flex flex-col">
                        <button
                            className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 font-medium group ${
                                activeMenu === "Reports" 
                                    ? "bg-gradient-to-r from-teal-500 to-teal-600 text-white shadow-lg shadow-teal-500/30" 
                                    : "text-gray-700 hover:bg-gray-100"
                            }`}
                            onClick={() => {
                                setReportsExpanded(!reportsExpanded);
                                handleMenuClick("Reports");
                            }}
                        >
                            <TrendingUp size={20} className="flex-shrink-0" />
                            {sidebarOpen && (
                                <>
                                    <span className="flex-1 text-left">Reports</span>
                                    {reportsExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                                </>
                            )}
                        </button>
                        {sidebarOpen && reportsExpanded && (
                            <div className="ml-11 mt-1 mb-1 flex flex-col gap-0.5 border-l-2 border-teal-200 pl-4">
                                <button className="flex items-center gap-2.5 px-3 py-2.5 rounded-lg hover:bg-teal-50 text-sm text-gray-600 hover:text-teal-700 transition-all text-left">
                                    <TrendingUp size={16} className="flex-shrink-0" />
                                    <span>Sales Report</span>
                                </button>
                                <button className="flex items-center gap-2.5 px-3 py-2.5 rounded-lg hover:bg-teal-50 text-sm text-gray-600 hover:text-teal-700 transition-all text-left">
                                    <BarChart3 size={16} className="flex-shrink-0" />
                                    <span>Inventory Report</span>
                                </button>
                                <button className="flex items-center gap-2.5 px-3 py-2.5 rounded-lg hover:bg-teal-50 text-sm text-gray-600 hover:text-teal-700 transition-all text-left">
                                    <Users size={16} className="flex-shrink-0" />
                                    <span>Customer Report</span>
                                </button>
                            </div>
                        )}
                    </div>
                    
                    {/* Settings */}
                    <button
                        onClick={() => handleMenuClick("Settings")}
                        className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 font-medium group ${
                            activeMenu === "Settings" 
                                ? "bg-gradient-to-r from-teal-500 to-teal-600 text-white shadow-lg shadow-teal-500/30" 
                                : "text-gray-700 hover:bg-gray-100"
                        }`}
                    >
                        <Settings size={20} className="flex-shrink-0" />
                        {sidebarOpen && <span>Settings</span>}
                    </button>
                </nav>
                
                {sidebarOpen && (
                    <div className="p-4 m-3 bg-gradient-to-br from-teal-50 to-teal-100 rounded-xl border border-teal-200">
                        <div className="flex items-start gap-2">
                            <div className="w-8 h-8 rounded-lg bg-teal-500 flex items-center justify-center flex-shrink-0">
                                <span className="text-white text-lg">💡</span>
                            </div>
                            <div>
                                <p className="font-semibold text-sm text-teal-900">Need Help?</p>
                                <p className="mt-1 text-xs text-teal-700 leading-relaxed">Check our comprehensive documentation</p>
                                <button className="mt-2 text-xs font-medium text-teal-700 hover:text-teal-800 underline">
                                    Learn More →
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </aside>
            <Outlet/>
        </div>

        {/* Footer */}
        <footer className="text-center py-4 bg-white text-gray-500 border-t text-sm shadow-sm">
            <p>&copy; {new Date().getFullYear()} <span className="font-semibold text-gray-700">YourCompany</span>. All rights reserved.</p>
        </footer>
    </div>
    );
};

export default AdminLayoutPage;