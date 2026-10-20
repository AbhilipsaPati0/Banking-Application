import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-white text-gray-800">

            {/* ================= NAVBAR ================= */}

            <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100">

                <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

                    {/* Logo */}

                    <div
                        className="flex items-center gap-3 cursor-pointer"
                        onClick={() =>
                            window.scrollTo({
                                top: 0,
                                behavior: "smooth"
                            })
                        }
                    >

                        <div className="w-11 h-11 rounded-xl bg-blue-900 text-white flex items-center justify-center font-bold">
                            BNP
                        </div>

                        <div>
                            <h1 className="text-lg font-bold text-blue-950">
                                BNP Paribas
                            </h1>

                            <p className="text-xs text-gray-500">
                                Digital Banking
                            </p>
                        </div>

                    </div>


                    {/* Navigation */}

                    <div className="hidden md:flex items-center gap-8 text-sm font-medium">

                        <a
                            href="#home"
                            className="hover:text-blue-700 transition"
                        >
                            Home
                        </a>

                        <a
                            href="#about"
                            className="hover:text-blue-700 transition"
                        >
                            About
                        </a>

                        <a
                            href="#schemes"
                            className="hover:text-blue-700 transition"
                        >
                            Banking
                        </a>

                        <a
                            href="#services"
                            className="hover:text-blue-700 transition"
                        >
                            Services
                        </a>

                        <a
                            href="#security"
                            className="hover:text-blue-700 transition"
                        >
                            Security
                        </a>

                    </div>


                    {/* Auth buttons */}

                    <div className="flex items-center gap-3">

                        <button
                            onClick={() => navigate("/login")}
                            className="hidden sm:block px-5 py-2.5 text-blue-900 font-semibold hover:bg-blue-50 rounded-lg transition"
                        >
                            Login
                        </button>

                        <button
                            onClick={() => navigate("/register")}
                            className="px-5 py-2.5 bg-blue-900 text-white font-semibold rounded-lg hover:bg-blue-950 transition"
                        >
                            Register
                        </button>

                    </div>

                </div>

            </nav>


            {/* ================= HERO ================= */}

            <section
                id="home"
                className="pt-32 pb-24 bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 text-white overflow-hidden"
            >

                <div className="max-w-7xl mx-auto px-6">

                    <div className="grid lg:grid-cols-2 gap-16 items-center">


                        {/* LEFT CONTENT */}

                        <div>

                            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 px-4 py-2 rounded-full text-sm">

                                <span className="w-2 h-2 bg-green-400 rounded-full"></span>

                                Secure Digital Banking

                            </div>


                            <h2 className="mt-7 text-4xl md:text-6xl font-bold leading-tight">

                                Banking built around
                                <span className="text-green-400">
                                    {" "}your needs.
                                </span>

                            </h2>


                            <p className="mt-6 text-blue-100 text-lg leading-relaxed max-w-xl">

                                Manage your accounts, monitor transactions,
                                make payments and access financial insights
                                through one secure digital banking experience.

                            </p>


                            <div className="flex flex-col sm:flex-row gap-4 mt-9">

                                <button
                                    onClick={() => navigate("/register")}
                                    className="px-7 py-3.5 bg-white text-blue-900 font-bold rounded-lg hover:bg-gray-100 transition"
                                >
                                    Open an Account
                                </button>

                                <button
                                    onClick={() => navigate("/login")}
                                    className="px-7 py-3.5 border border-white/40 rounded-lg font-semibold hover:bg-white/10 transition"
                                >
                                    Access Online Banking
                                </button>

                            </div>


                            {/* Trust indicators */}

                            <div className="flex flex-wrap gap-8 mt-10 text-sm text-blue-200">

                                <div>
                                    <p className="text-white font-semibold">
                                        Secure Access
                                    </p>
                                    <p className="mt-1">
                                        Protected login
                                    </p>
                                </div>

                                <div>
                                    <p className="text-white font-semibold">
                                        Smart Insights
                                    </p>
                                    <p className="mt-1">
                                        Transaction analytics
                                    </p>
                                </div>

                                <div>
                                    <p className="text-white font-semibold">
                                        Digital First
                                    </p>
                                    <p className="mt-1">
                                        Banking anywhere
                                    </p>
                                </div>

                            </div>

                        </div>


                        {/* RIGHT — DIGITAL BANKING PREVIEW */}

                        <div className="relative">

                            {/* Background glow */}

                            <div className="absolute -top-10 -right-10 w-72 h-72 bg-green-400/20 blur-3xl rounded-full"></div>


                            {/* Dashboard window */}

                            <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden text-gray-800">

                                {/* Dashboard top bar */}

                                <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between">

                                    <div>

                                        <p className="text-xs text-gray-400">
                                            DIGITAL BANKING
                                        </p>

                                        <p className="font-bold text-blue-950">
                                            My Overview
                                        </p>

                                    </div>

                                    <div className="flex items-center gap-2">

                                        <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-900">
                                            🔔
                                        </div>

                                        <div className="w-8 h-8 rounded-full bg-blue-900 text-white flex items-center justify-center text-xs font-bold">
                                            A
                                        </div>

                                    </div>

                                </div>


                                {/* Dashboard content */}

                                <div className="p-6 bg-gray-50">


                                    {/* Account */}

                                    <div className="bg-gradient-to-br from-blue-950 to-blue-800 rounded-xl p-5 text-white">

                                        <div className="flex justify-between items-start">

                                            <div>

                                                <p className="text-blue-200 text-xs">
                                                    SAVINGS ACCOUNT
                                                </p>

                                                <p className="font-semibold mt-1">
                                                    •••• 4829
                                                </p>

                                            </div>

                                            <span className="text-green-300 text-xs font-semibold">
                                                ACTIVE
                                            </span>

                                        </div>


                                        <div className="mt-7">

                                            <p className="text-blue-200 text-xs">
                                                Available Balance
                                            </p>

                                            <p className="text-3xl font-bold mt-1">
                                                ₹ 2,50,000
                                            </p>

                                        </div>


                                        <div className="mt-5 flex justify-between text-xs">

                                            <span className="text-blue-200">
                                                Account Overview
                                            </span>

                                            <span className="text-green-300 font-semibold">
                                                View →
                                            </span>

                                        </div>

                                    </div>


                                    {/* Quick actions */}

                                    <div className="grid grid-cols-3 gap-3 mt-5">

                                        <DashboardAction
                                            icon="↗"
                                            title="Transfer"
                                        />

                                        <DashboardAction
                                            icon="₹"
                                            title="Payment"
                                        />

                                        <DashboardAction
                                            icon="▤"
                                            title="Statement"
                                        />

                                    </div>


                                    {/* Recent activity */}

                                    <div className="bg-white rounded-xl mt-5 p-5">

                                        <div className="flex justify-between items-center">

                                            <div>
                                                <p className="font-semibold">
                                                    Recent Activity
                                                </p>

                                                <p className="text-xs text-gray-400 mt-1">
                                                    Latest account transactions
                                                </p>
                                            </div>

                                            <span className="text-blue-700 text-xs font-semibold">
                                                View All
                                            </span>

                                        </div>


                                        <div className="mt-5 space-y-4">

                                            <TransactionPreview
                                                icon="↗"
                                                title="Fund Transfer"
                                                date="Today"
                                                amount="+ ₹25,000"
                                                positive
                                            />

                                            <TransactionPreview
                                                icon="−"
                                                title="Online Payment"
                                                date="Yesterday"
                                                amount="− ₹2,500"
                                            />

                                            <TransactionPreview
                                                icon="↗"
                                                title="Account Transfer"
                                                date="28 Sep"
                                                amount="+ ₹15,000"
                                                positive
                                            />

                                        </div>

                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </section>


            {/* ================= ABOUT ================= */}

            <section
                id="about"
                className="py-24 bg-white"
            >

                <div className="max-w-7xl mx-auto px-6">

                    <div className="grid lg:grid-cols-2 gap-16 items-center">


                        <div>

                            <p className="text-blue-700 font-semibold uppercase tracking-wider text-sm">
                                About Digital Banking
                            </p>

                            <h2 className="text-3xl md:text-4xl font-bold text-blue-950 mt-3">
                                A simpler way to manage your everyday banking.
                            </h2>

                            <p className="text-gray-600 leading-relaxed mt-6">
                                Our digital banking platform brings essential
                                banking services together in one secure
                                experience. Customers can manage their
                                accounts, monitor transactions and access
                                useful financial information from one place.
                            </p>

                            <p className="text-gray-600 leading-relaxed mt-4">
                                Designed with security, accessibility and
                                transparency in mind, the platform provides
                                different experiences for customers,
                                employees and administrators.
                            </p>

                            <button
                                onClick={() => navigate("/register")}
                                className="mt-7 px-6 py-3 bg-blue-900 text-white font-semibold rounded-lg hover:bg-blue-950 transition"
                            >
                                Get Started →
                            </button>

                        </div>


                        <div className="grid grid-cols-2 gap-5">

                            <AboutFeature
                                number="01"
                                title="Secure"
                                description="Role-based access and protected authentication."
                            />

                            <AboutFeature
                                number="02"
                                title="Connected"
                                description="Accounts, customers and transactions in one platform."
                            />

                            <AboutFeature
                                number="03"
                                title="Insightful"
                                description="Understand activity through transaction analytics."
                            />

                            <AboutFeature
                                number="04"
                                title="Convenient"
                                description="Access essential banking services digitally."
                            />

                        </div>

                    </div>

                </div>

            </section>


            {/* ================= SCHEMES ================= */}

            <section
                id="schemes"
                className="py-24 bg-gray-50"
            >

                <div className="max-w-7xl mx-auto px-6">

                    <div className="text-center max-w-2xl mx-auto">

                        <p className="text-blue-700 font-semibold uppercase tracking-wider text-sm">
                            Banking Solutions
                        </p>

                        <h2 className="text-3xl md:text-4xl font-bold text-blue-950 mt-3">
                            Banking solutions for different needs
                        </h2>

                        <p className="text-gray-600 mt-4">
                            Choose an account or explore digital services
                            designed around your financial requirements.
                        </p>

                    </div>


                    <div className="grid md:grid-cols-3 gap-7 mt-14">

                        <SchemeCard
                            title="Savings Account"
                            label="PERSONAL BANKING"
                            description="For everyday banking, savings and convenient account management."
                            features={[
                                "Digital account access",
                                "Transaction monitoring",
                                "Secure banking experience"
                            ]}
                        />

                        <SchemeCard
                            title="Current Account"
                            label="BUSINESS BANKING"
                            description="Designed for regular business transactions and account operations."
                            features={[
                                "Flexible transactions",
                                "Business account access",
                                "Transaction visibility"
                            ]}
                        />

                        <SchemeCard
                            title="Digital Banking"
                            label="SMART SERVICES"
                            description="Access useful tools and insights to better understand your banking activity."
                            features={[
                                "Transaction analytics",
                                "Digital statements",
                                "Financial insights"
                            ]}
                        />

                    </div>

                </div>

            </section>


            {/* ================= SERVICES ================= */}

            <section
                id="services"
                className="py-24 bg-white"
            >

                <div className="max-w-7xl mx-auto px-6">

                    <div className="text-center">

                        <p className="text-blue-700 font-semibold uppercase tracking-wider text-sm">
                            Digital Services
                        </p>

                        <h2 className="text-3xl md:text-4xl font-bold text-blue-950 mt-3">
                            Everything in one place
                        </h2>

                        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                            Manage your everyday banking activities through
                            a single digital platform.
                        </p>

                    </div>


                    <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-14">

                        <ServiceCard icon="↗" title="Transfers" />

                        <ServiceCard icon="₹" title="Payments" />

                        <ServiceCard icon="▤" title="Statements" />

                        <ServiceCard icon="▥" title="Analytics" />

                        <ServiceCard icon="○" title="Accounts" />

                        <ServiceCard icon="♙" title="Profile" />

                        <ServiceCard icon="!" title="Notifications" />

                        <ServiceCard icon="✓" title="Security" />

                    </div>

                </div>

            </section>


            {/* ================= SECURITY ================= */}

            <section
                id="security"
                className="py-24 bg-gray-50"
            >

                <div className="max-w-7xl mx-auto px-6">

                    <div className="grid lg:grid-cols-2 gap-14 items-center">


                        <div>

                            <p className="text-blue-700 font-semibold uppercase tracking-wider text-sm">
                                Security
                            </p>

                            <h2 className="text-3xl md:text-4xl font-bold text-blue-950 mt-3">
                                Your banking information deserves protection.
                            </h2>

                            <p className="text-gray-600 mt-5 leading-relaxed">
                                The platform uses authenticated access and
                                role-based permissions to ensure users only
                                access the information and functionality
                                relevant to their role.
                            </p>

                        </div>


                        <div className="bg-white rounded-2xl p-7 border border-gray-100 shadow-sm">

                            <SecurityRow
                                icon="🔐"
                                title="Protected Authentication"
                                description="Secure login with authenticated access."
                            />

                            <SecurityRow
                                icon="🛡"
                                title="Role-Based Access"
                                description="Different access levels for customers, employees and administrators."
                            />

                            <SecurityRow
                                icon="📊"
                                title="Transaction Visibility"
                                description="Monitor account activity through structured transaction information."
                            />

                            <SecurityRow
                                icon="✓"
                                title="Account Control"
                                description="Manage account information through a secure digital environment."
                            />

                        </div>

                    </div>

                </div>

            </section>


            {/* ================= CTA ================= */}

            <section className="py-20 bg-blue-950 text-white">

                <div className="max-w-5xl mx-auto px-6 text-center">

                    <p className="text-green-400 font-semibold uppercase tracking-wider text-sm">
                        Get Started
                    </p>

                    <h2 className="text-3xl md:text-4xl font-bold mt-3">
                        Start your digital banking journey.
                    </h2>

                    <p className="text-blue-200 mt-4 max-w-xl mx-auto">
                        Create your account and access a secure,
                        convenient digital banking experience.
                    </p>

                    <div className="flex justify-center gap-4 mt-8">

                        <button
                            onClick={() => navigate("/register")}
                            className="px-8 py-3.5 bg-green-400 text-blue-950 font-bold rounded-lg hover:bg-green-300 transition"
                        >
                            Open an Account
                        </button>

                        <button
                            onClick={() => navigate("/login")}
                            className="px-8 py-3.5 border border-white/30 rounded-lg font-semibold hover:bg-white/10 transition"
                        >
                            Login
                        </button>

                    </div>

                </div>

            </section>


            {/* ================= FOOTER ================= */}

            <footer className="bg-gray-950 text-gray-400">

                <div className="max-w-7xl mx-auto px-6 py-10">

                    <div className="grid md:grid-cols-4 gap-10">


                        <div className="md:col-span-2">

                            <div className="flex items-center gap-3">

                                <div className="w-10 h-10 bg-blue-900 text-white rounded-lg flex items-center justify-center font-bold">
                                    BNP
                                </div>

                                <div>
                                    <h3 className="text-white font-bold">
                                        BNP Paribas
                                    </h3>

                                    <p className="text-xs">
                                        Digital Banking
                                    </p>
                                </div>

                            </div>

                            <p className="mt-4 text-sm max-w-md leading-relaxed">
                                A secure digital banking platform for
                                managing accounts, transactions and
                                financial activity.
                            </p>

                        </div>


                        <div>

                            <h4 className="text-white font-semibold">
                                Platform
                            </h4>

                            <div className="mt-4 space-y-3 text-sm">

                                <a href="#about" className="block hover:text-white">
                                    About
                                </a>

                                <a href="#schemes" className="block hover:text-white">
                                    Banking
                                </a>

                                <a href="#services" className="block hover:text-white">
                                    Services
                                </a>

                                <a href="#security" className="block hover:text-white">
                                    Security
                                </a>

                            </div>

                        </div>


                        <div>

                            <h4 className="text-white font-semibold">
                                Account
                            </h4>

                            <div className="mt-4 space-y-3 text-sm">

                                <button
                                    onClick={() => navigate("/login")}
                                    className="block hover:text-white"
                                >
                                    Login
                                </button>

                                <button
                                    onClick={() => navigate("/register")}
                                    className="block hover:text-white"
                                >
                                    Register
                                </button>

                            </div>

                        </div>

                    </div>


                    <div className="border-t border-gray-800 mt-10 pt-6 text-sm">
                        © 2026 BNP Paribas Digital Banking Platform.
                    </div>

                </div>

            </footer>

        </div>
    );
}


/* =========================================================
   COMPONENTS
========================================================= */


function DashboardAction({ icon, title }) {

    return (
        <div className="bg-white rounded-lg p-3 text-center border border-gray-100 hover:border-blue-200 hover:bg-blue-50 transition">

            <div className="text-blue-800 font-bold text-lg">
                {icon}
            </div>

            <p className="text-xs font-semibold mt-1 text-gray-600">
                {title}
            </p>

        </div>
    );
}


function TransactionPreview({
    icon,
    title,
    date,
    amount,
    positive
}) {

    return (
        <div className="flex items-center justify-between">

            <div className="flex items-center gap-3">

                <div className="w-9 h-9 rounded-full bg-blue-50 text-blue-800 flex items-center justify-center font-bold">
                    {icon}
                </div>

                <div>

                    <p className="text-sm font-semibold">
                        {title}
                    </p>

                    <p className="text-xs text-gray-400">
                        {date}
                    </p>

                </div>

            </div>

            <p
                className={`text-sm font-semibold ${
                    positive
                        ? "text-green-600"
                        : "text-gray-700"
                }`}
            >
                {amount}
            </p>

        </div>
    );
}


function AboutFeature({
    number,
    title,
    description
}) {

    return (
        <div className="p-6 border border-gray-100 rounded-xl hover:shadow-md transition">

            <p className="text-blue-700 text-sm font-bold">
                {number}
            </p>

            <h3 className="font-bold text-lg mt-3 text-blue-950">
                {title}
            </h3>

            <p className="text-sm text-gray-500 mt-2 leading-relaxed">
                {description}
            </p>

        </div>
    );
}


function SchemeCard({
    title,
    label,
    description,
    features
}) {

    return (
        <div className="bg-white rounded-2xl p-7 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition duration-300">

            <p className="text-xs font-bold tracking-wider text-blue-700">
                {label}
            </p>

            <h3 className="text-xl font-bold text-blue-950 mt-3">
                {title}
            </h3>

            <p className="text-gray-600 mt-3 leading-relaxed">
                {description}
            </p>

            <div className="mt-6 space-y-3">

                {features.map((feature, index) => (

                    <div
                        key={index}
                        className="flex items-center gap-2 text-sm text-gray-600"
                    >

                        <span className="text-green-600 font-bold">
                            ✓
                        </span>

                        {feature}

                    </div>

                ))}

            </div>

            <div className="mt-7 text-blue-700 text-sm font-semibold">
                Explore solution →
            </div>

        </div>
    );
}


function ServiceCard({
    icon,
    title
}) {

    return (
        <div className="p-7 bg-white border border-gray-100 rounded-xl text-center shadow-sm hover:shadow-lg hover:-translate-y-1 hover:border-blue-100 transition duration-300">

            <div className="w-12 h-12 mx-auto rounded-full bg-blue-50 text-blue-800 flex items-center justify-center text-xl font-bold">
                {icon}
            </div>

            <p className="font-semibold text-gray-800 mt-4">
                {title}
            </p>

        </div>
    );
}


function SecurityRow({
    icon,
    title,
    description
}) {

    return (
        <div className="flex gap-4 py-5 border-b border-gray-100 last:border-0">

            <div className="w-11 h-11 shrink-0 rounded-lg bg-blue-50 flex items-center justify-center">
                {icon}
            </div>

            <div>

                <h3 className="font-semibold text-blue-950">
                    {title}
                </h3>

                <p className="text-sm text-gray-500 mt-1 leading-relaxed">
                    {description}
                </p>

            </div>

        </div>
    );
}


export default Home;