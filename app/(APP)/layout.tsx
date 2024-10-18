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
    BellIcon,
    ArrowRightCircleIcon,
    MagnifyingGlassIcon,
    EnvelopeIcon

} from '@heroicons/react/24/outline'
import AppLogo from '@/assests/AppLogo.svg'
import UserAvatar from '@/assests/Ellipse 30.png'
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
    const [openDropdown, setOpenDropdown] = useState<string | null>(null);

    const toggleDropdown = (name: string | null) => {
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
                                        <XMarkIcon aria-hidden="true" className="h-6 w-6 text-primaryText" />
                                    </button>
                                </div>
                            </TransitionChild>

                            <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-black text-primaryText px-6 pb-2">
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
                    <div className="flex grow flex-col gap-y-5 overflow-y-auto border-r border-neutral-800 bg-neutral-900 px-6">
                        <div className="flex h-16 shrink-0 items-center mt-10">
                            <Image
                                alt="Your Company"
                                src={AppLogo}
                                className="h-14 w-auto"
                            />
                      

                        </div>
                        <nav className="flex flex-col h-full">
                            <ul className="flex flex-col gap-y-3 flex-grow">
                                {navigation.map((item) => (
                                    <li key={item.name} className="relative">
                                        <a
                                            href={item.href}
                                            onClick={() => item.subNavigation && toggleDropdown(item.name)}
                                            className="group flex items-center gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-primaryText hover:bg-neutral-800 hover:text-white"
                                        >
                                            <item.icon className="h-6 w-6 text-primaryText group-hover:text-white" />
                                            {item.name}
                                            {item.subNavigation && (
                                                <ChevronDownIcon
                                                    className={`ml-auto h-5 w-5 text-primaryText transition-transform ${openDropdown === item.name ? 'rotate-180' : ''
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
                                                            className="block rounded-md p-2 text-sm font-semibold leading-6 text-primaryText hover:bg-neutral-800 hover:text-white"
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
                            <div className="mx-2 mt-2 mb-2">
                                <li className="mt-auto">
                                    <a
                                        href="#"
                                        className="group -mx-2 flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-primaryText hover:bg-neutral-800 hover:text-white"
                                    >
                                        <Cog6ToothIcon
                                            aria-hidden="true"
                                            className="h-6 w-6 shrink-0 text-primaryText group-hover:text-white"
                                        />
                                        Settings
                                    </a>
                                    <a
                                        href="#"
                                        className="group -mx-2 mt-3 flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-red-600 hover:bg-neutral-800 hover:text-white"
                                    >
                                        <ArrowRightCircleIcon
                                            aria-hidden="true"
                                            className="h-6 w-6 shrink-0 text-red-600 group-hover:text-white"
                                        />
                                        Logout
                                    </a>
                                </li>
                            </div>
                        </nav>
                    </div>
                </div>

                <div className="sticky top-0 z-40 flex items-center gap-x-6 bg-black px-4 py-4 shadow-sm sm:px-6 lg:hidden">
                    <button type="button" onClick={() => setSidebarOpen(true)} className="-m-2.5 p-2.5 text-gray-700 lg:hidden">
                        <span className="sr-only">Open sidebar</span>
                        <Bars3Icon aria-hidden="true" className="h-6 w-6 text-primaryText" />
                    </button>
                    <div className="flex-1 text-sm font-semibold leading-6 text-black">Dashboard</div>
                    <a href="#">
                        <span className="sr-only">Your profile</span>
                        <Image
                            alt=""
                            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                            className="h-8 w-8 rounded-full bg-gray-50"
                            width={256}
                            height={256}
                        />
                    </a>
                </div>

                <div className="lg:sticky top-0 z-40 lg:pl-72">
                    <div className="flex h-16 items-center gap-x-4 border-b border-neutral-800 bg-black px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8">
                        <button
                            type="button"
                            onClick={() => setSidebarOpen(true)}
                            className="-m-2.5 p-2.5 text-gray-700 lg:hidden"
                        >
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
                                    className="block h-10 w-96 border border-[#262626] px-3 py-0 pl-8 rounded-lg pr-0 text-primaryText placeholder:text-gray-400 focus:outline-none sm:text-sm bg-black"
                                />
                            </form>
                            <div className="flex items-center gap-x-4 lg:gap-x-6">
                                <button
                                    type="button"
                                    className="-m-2.5 p-2.5 text-primaryText hover:text-gray-500"
                                >
                                    <span className="sr-only">View notifications</span>
                                    <EnvelopeIcon aria-hidden="true" className="h-6 w-6 text-neutral-50" />
                                </button>

                                <div aria-hidden="true" className="hidden lg:block lg:h-6 lg:w-px lg:bg-neutral-800" />

                                <BellIcon aria-hidden="true" className="h-6 w-6 text-neutral-50" />

                                <Image
                                    alt=""
                                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                    className="h-8 w-8 rounded-full bg-gray-50"
                                    width={256}
                                    height={256}
                                />
                                <div className='flex flex-col'>
                                    <span className='text-xs text-white text-opacity-50'>Role of User</span>
                                    <span className='text-sm font-medium text-white text-opacity-80'>Andrew Smith</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <main className="lg:pl-72 text-primaryText">
                    <div className="xl:pl-72">
                        <div className="px-4 py-10 sm:px-6 lg:px-12 lg:py-6">{children}</div>
                    </div>
                </main>

                <aside className="fixed inset-y-0 left-72 hidden w-80 overflow-y-auto border-r border-neutral-800 border-blur-xl px-4 py-6 sm:px-6 lg:px-8 xl:block text-primaryText mt-20">

                    <nav className="flex flex-col h-full ">
                        <div className='bg-neutral-900 border-neutral-800 flex items-center p-2 rounded-md'>
                            <Image src={UserAvatar} width={36} height={36} alt="" />
                            <div className='flex flex-col gap-.5 ml-3'>
                                <span className='text-base text-white font-semibold'>Miss testing account</span>
                                <span className='text-xs text-primaryText'>Umiiumii BV
                                </span>
                            </div>
                        </div>
                        <ul className="flex flex-col gap-y-3 mt-8 flex-grow">
                            {navigation.map((item) => (
                                <li key={item.name} className="relative">
                                    <a
                                        href={item.href}
                                        onClick={() => item.subNavigation && toggleDropdown(item.name)}
                                        className="group flex items-center gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-primaryText hover:bg-[#262626] hover:text-white"
                                    >
                                        <item.icon className="h-6 w-6 text-gray-400 group-hover:text-white" />
                                        {item.name}
                                    </a>
                                </li>
                            ))}
                        </ul>

                        <div className="mt-auto bg-[#262626] p-4 rounded-lg w-auto -mb-[4%]">
                            <div className="text-left text-md text-white mb-2">Assigned roles</div>
                            <ul className="list-disc pl-5 text-sm text-primaryText">
                                <li>Admin</li>
                                <li>Banana Biter</li>
                                <li>SupportL1</li>
                            </ul>
                        </div>
                    </nav>
                </aside>
            </div>
        </>
    )
}
