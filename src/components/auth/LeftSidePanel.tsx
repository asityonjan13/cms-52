import type { ReactNode } from "react"

const logo = "https://alextass.com/wp-content/uploads/2021/05/Creative-multimedia-solutions-C-drop-letter-mark-logo-design-by-Alex-Tass.png"

interface IAuthLeftSidePanelProps {
    title: string,
    children?: ReactNode
}

const AuthLeftSidePanel = ({ title, children }: Readonly<IAuthLeftSidePanelProps>) => {
    return (
        <div className="flex flex-col items-center justify-start pt-16 h-full px-8">
            {/* Logo Section */}
            <div className="mb-6 relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-teal-400 to-emerald-400 rounded-2xl blur opacity-40 group-hover:opacity-60 transition duration-300"></div>
                <img 
                    src={logo} 
                    alt="logo" 
                    className="relative h-24 w-24 rounded-2xl shadow-2xl border-4 border-white bg-white p-2 transform group-hover:scale-105 transition-transform duration-300" 
                />
            </div>

            {/* Title Section */}
            <div className="text-center mb-4">
                <h1 className="text-white text-5xl font-extrabold mb-2 tracking-tight leading-tight">
                    {title}
                </h1>
                {children}
                <div className="w-20 h-1 bg-gradient-to-r from-teal-400 to-emerald-400 mx-auto rounded-full mt-3"></div>
            </div>

            {/* Description */}
            <p className="text-teal-100 text-base font-normal text-center max-w-sm mb-6 leading-relaxed">
                Experience seamless management with our powerful platform built for excellence.
            </p>

            {/* Trust Badge */}
            <div className="mt-6 flex items-center gap-2 text-teal-100 text-xs">
                <svg className="w-4 h-4 text-emerald-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="font-medium">Trusted by 10,000+ businesses</span>
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-10 left-10 w-32 h-32 bg-teal-400/20 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute bottom-10 right-10 w-40 h-40 bg-emerald-400/20 rounded-full blur-3xl pointer-events-none"></div>
        </div>
    );
}

export default AuthLeftSidePanel;