'use client'

import { useState } from 'react'
import { Dialog, DialogBackdrop, DialogPanel, TransitionChild } from '@headlessui/react'
import {
    Bars3Icon,
    CalendarIcon,
    ChartPieIcon,
    DocumentDuplicateIcon,
    FolderIcon,
    HomeIcon,
    UsersIcon,
    XMarkIcon,
    ChevronDownIcon,
    Cog6ToothIcon,
    ArrowRightCircleIcon,
    MagnifyingGlassIcon,
    EnvelopeIcon

} from '@heroicons/react/24/outline'
import AppLogo from '@/assests/Applogo.png'
import Image from 'next/image'
const navigation = [
    { name: 'Community', href: '#', icon: HomeIcon, current: true },
    {
        name: 'Players', href: '#', icon: UsersIcon, current: false, subNavigation: [
            {
                name: "Roles",
                href: "/",
                icon: "",
                current: false,
            },
            {
                name: "Blocked History",
                href: "/",
                icon: "",
                current: false,
            },
            {
                name: "Manage Consent",
                href: "/",
                icon: "",
                current: false,
            },
        ],
    },
    { name: 'Transactions', href: '#', icon: FolderIcon, current: false },
    { name: 'GMWI', href: '#', icon: CalendarIcon, current: false },
    { name: 'Banking', href: '#', icon: DocumentDuplicateIcon, current: false },
    { name: 'MISC', href: '#', icon: ChartPieIcon, current: false },
]



export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const [sidebarOpen, setSidebarOpen] = useState(false)
    const [openDropdown, setOpenDropdown] = useState(null); // Track which dropdown is open

    const toggleDropdown = (name: any) => {
        setOpenDropdown(openDropdown === name ? null : name);
    };
    return (
        <>
            <div>
                <Dialog open={sidebarOpen} onClose={setSidebarOpen} className="relative z-50 lg:hidden">
                    <DialogBackdrop
                        transition
                        className="fixed inset-0 bg-black transition-opacity duration-300 ease-linear data-[closed]:opacity-0"
                    />

                    <div className="fixed inset-0 flex">
                        <DialogPanel
                            transition
                            className="relative mr-16 flex w-full max-w-xs flex-1 transform transition duration-300 ease-in-out data-[closed]:-translate-x-full"
                        >
                            <TransitionChild>
                                <div className="absolute left-full top-0 flex w-16 justify-center pt-5 duration-300 ease-in-out data-[closed]:opacity-0">
                                    <button type="button" onClick={() => setSidebarOpen(false)} className="-m-2.5 p-2.5">
                                        <span className="sr-only">Close sidebar</span>
                                        <XMarkIcon aria-hidden="true" className="h-6 w-6 text-white" />
                                    </button>
                                </div>
                            </TransitionChild>

                            <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-black text-white px-6 pb-2">
                                <div className="flex h-16 shrink-0 items-center">
                                    <Image
                                        alt="Your Company"
                                        src={AppLogo}
                                        className="h-8 w-auto"
                                    />
                                </div>
                                <nav>
                                    <ul className="flex flex-col gap-y-7">
                                        {navigation.map((item) => (
                                            <li key={item.name} className="relative">
                                                <a
                                                    href={item.href}
                                                    onClick={() => item.subNavigation && toggleDropdown(item.name)}
                                                    className="group flex items-center gap-x-3 rounded-md p-2 text-sm font-semibold leading-6  hover:bg-gray-50 hover:text-indigo-600"
                                                >
                                                    <item.icon className="h-6 w-6 text-gray-400 group-hover:text-indigo-600" />
                                                    {item.name}
                                                    {item.subNavigation && (
                                                        <ChevronDownIcon
                                                            className={`ml-auto h-5 w-5 text-gray-400 transition-transform ${openDropdown === item.name ? 'rotate-180' : ''
                                                                }`}
                                                        />
                                                    )}
                                                </a>
                                                {item.subNavigation && openDropdown === item.name && (
                                                    <ul className="mt-2 space-y-1 pl-4">
                                                        {item.subNavigation.map((subItem) => (
                                                            <li key={subItem.name}>
                                                                <a
                                                                    href={subItem.href}
                                                                    className="block rounded-md p-2 text-sm font-semibold leading-6 text-gray-600 hover:bg-gray-50 hover:text-indigo-600"
                                                                >
                                                                    {subItem.name}
                                                                </a>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                )}
                                            </li>
                                        ))}
                                    </ul>
                                </nav>
                            </div>
                        </DialogPanel>
                    </div>
                </Dialog>

                {/* Static sidebar for desktop */}
                <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
                    {/* Sidebar component, swap this element with another sidebar if you like */}
                    <div className="flex grow flex-col gap-y-5 overflow-y-auto border-r border-gray-200 bg-[#262626] px-6">
                        <div className="flex h-16 shrink-0 items-center mt-10">
                            <Image
                                alt="Your Company"
                                src={AppLogo}
                                className="h-14 w-auto"
                            />
                        </div>
                        <nav>
                            <ul className="flex flex-col gap-y-7">
                                {navigation.map((item) => (
                                    <li key={item.name} className="relative">
                                        <a
                                            href={item.href}
                                            onClick={() => item.subNavigation && toggleDropdown(item.name)}
                                            className="group flex items-center gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-white hover:bg-gray-50 hover:text-indigo-600"
                                        >
                                            <item.icon className="h-6 w-6 text-white group-hover:text-indigo-600" />
                                            {item.name}
                                            {item.subNavigation && (
                                                <ChevronDownIcon
                                                    className={`ml-auto h-5 w-5 text-white transition-transform ${openDropdown === item.name ? 'rotate-180' : ''
                                                        }`}
                                                />
                                            )}
                                        </a>
                                        {item.subNavigation && openDropdown === item.name && (
                                            <ul className="mt-2 space-y-1 pl-4">
                                                {item.subNavigation.map((subItem) => (
                                                    <li key={subItem.name}>
                                                        <a
                                                            href={subItem.href}
                                                            className="block rounded-md p-2 text-sm font-semibold leading-6 text-white hover:bg-gray-50 hover:text-indigo-600"
                                                        >
                                                            {subItem.name}
                                                        </a>
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </li>
                                ))}
                                <li className="mx-2 mt-[38%] fixed">
                                    <a
                                        href="#"
                                        className="group -mx-2 flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-white hover:bg-indigo-700 hover:text-white"
                                    >
                                        <Cog6ToothIcon
                                            aria-hidden="true"
                                            className="h-6 w-6 shrink-0 text-white group-hover:text-white"
                                        />
                                        Settings
                                    </a>
                                    <a
                                        href="#"
                                        className="group -mx-2 mt-3 flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-white hover:bg-indigo-700 hover:text-white"
                                    >
                                        <ArrowRightCircleIcon
                                            aria-hidden="true"
                                            className="h-6 w-6 shrink-0 text-red-600 group-hover:text-white"
                                        />
                                        Logout
                                    </a>

                                </li>

                            </ul>
                        </nav>
                    </div>
                </div>

                <div className="sticky top-0 z-40 flex items-center gap-x-6 bg-black px-4 py-4 shadow-sm sm:px-6 lg:hidden">
                    <button type="button" onClick={() => setSidebarOpen(true)} className="-m-2.5 p-2.5 text-gray-700 lg:hidden">
                        <span className="sr-only">Open sidebar</span>
                        <Bars3Icon aria-hidden="true" className="h-6 w-6 text-white" />
                    </button>
                    <div className="flex-1 text-sm font-semibold leading-6 text-black">Dashboard</div>
                    <a href="#">
                        <span className="sr-only">Your profile</span>
                        <img
                            alt=""
                            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                            className="h-8 w-8 rounded-full bg-gray-50"
                        />
                    </a>
                </div>

                <div className="hidden lg:block lg:pl-72">
                    <div className="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 border-b border-gray-200 bg-black px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8">
                        <button type="button" onClick={() => setSidebarOpen(true)} className="-m-2.5 p-2.5 text-gray-700 lg:hidden">
                            <span className="sr-only">Open sidebar</span>
                            <Bars3Icon aria-hidden="true" className="h-6 w-6" />
                        </button>

                        {/* Separator */}
                        <div aria-hidden="true" className="h-6 w-px bg-gray-200 lg:hidden" />

                        <div className="flex flex-1 gap-x-4 self-stretch lg:gap-x-6">
                            <form action="#" method="GET" className="relative flex flex-1 items-center">
                                <label htmlFor="search-field" className="sr-only">
                                    Search
                                </label>
                                <MagnifyingGlassIcon
                                    aria-hidden="true"
                                    className="pointer-events-none absolute inset-y-0 left-0 h-full w-4 text-gray-400 ml-3"
                                />
                                <input
                                    id="search-field"
                                    name="search"
                                    type="search"
                                    placeholder="Search..."
                                    className="block h-10 w-96 border border-[#262626] px-3 py-0 pl-8 pr-0 text-white placeholder:text-gray-400 focus:outline-none sm:text-sm bg-black"
                                />
                            </form>
                            <div className="flex items-center gap-x-4 lg:gap-x-6">
                                <button type="button" className="-m-2.5 p-2.5 text-white hover:text-gray-500">
                                    <span className="sr-only">View notifications</span>
                                    <EnvelopeIcon aria-hidden="true" className="h-6 w-6" />
                                </button>


                                <div aria-hidden="true" className="hidden lg:block lg:h-6 lg:w-px lg:bg-gray-200" />

                                <img
                                    alt=""
                                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                    className="h-8 w-8 rounded-full bg-gray-50"
                                />

                            </div>
                        </div>
                    </div>
                </div>
                <main className="lg:pl-72 text-white">
                    <div className="xl:pl-72">
                        <div className="px-4 py-10 sm:px-6 lg:px-8 lg:py-6">{children}</div>
                    </div>
                </main>

                <aside className="fixed inset-y-0 left-72 hidden w-72 overflow-y-auto border-r border-gray-200 px-4 py-6 sm:px-6 lg:px-8 xl:block text-white mt-16">
                    <nav>
                        <ul className="flex flex-col gap-y-7">
                            {navigation.map((item) => (
                                <li key={item.name} className="relative">
                                    <a
                                        href={item.href}
                                        onClick={() => item.subNavigation && toggleDropdown(item.name)}
                                        className="group flex items-center gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-white hover:bg-gray-50 hover:text-indigo-600"
                                    >
                                        <item.icon className="h-6 w-6 text-gray-400 group-hover:text-indigo-600" />
                                        {item.name}

                                    </a>

                                </li>
                            ))}
                            <li className="-mx-2 mt-[38%] fixed text-white bg-[#262626] text-left w-auto px-28 h-auto py-4 rounded-lg">
                                <div className='text-left text-md -mx-20'>Assign Roles</div>
                                <ul className="list-disc -mx-14 mt-5 text-sm">
                                    <li>Admin </li>
                                    <li>Banana Biter
                                    </li>
                                    <li>SupportL1</li>
                                </ul>
                            </li>
                        </ul>
                    </nav>
                </aside>
            </div>
        </>
    )
}
