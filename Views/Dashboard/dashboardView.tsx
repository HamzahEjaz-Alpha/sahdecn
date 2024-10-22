import { Button } from "@/components/ui/button";
import { PlusIcon } from '@heroicons/react/24/outline';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Badge } from "@/components/ui/badge";
import PlayerIcon from "@/assests/Player Avatar.svg";
import IpIcon from "@/assests/Map Icon.svg";
import CallIcon from "@/assests/Contact Icon.svg"
import MiscIcon from "@/assests/Misc Icon.svg"
import Image from "next/image";
import { FlagIcon } from 'react-flag-kit';
import classNames from "@/helpers/common";
function DashboardView() {
    return (
        <>
            <div className="flex justify-between items-center">
                <span className="text-2xl font-semibold text-white">Player Info</span>
                <Button><PlusIcon aria-hidden="true" className="h-6 w-6" />Actions</Button>
            </div>
            <div className="border-t mt-5 mb-5 border-neutral-800 w-full" />
            <div className="grid md:grid-cols-2 2xl:grid-cols-3 gap-5">
                {cardData.map((card, index) => (
                    <InfoCard key={index} title={card.title} content={card.content} icon={card.icon} height={card.limitHeight} spanFull={card.spanFull} />
                ))}
            </div>
        </>
    );
}

export default DashboardView;
const PhoneIcon = () => (
    <svg
      width="21"
      height="20"
      viewBox="0 0 21 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="text-neutral-50 hover:text-neutral-300"
    >
      <path
        d="M18.6667 14.1V16.6C18.6676 16.8321 18.6201 17.0618 18.5271 17.2745C18.4341 17.4871 18.2978 17.678 18.1267 17.8349C17.9557 17.9918 17.7538 18.1112 17.534 18.1856C17.3141 18.26 17.0812 18.2876 16.85 18.2667C14.2857 17.988 11.8225 17.1118 9.65834 15.7083C7.64487 14.4289 5.93779 12.7218 4.65834 10.7083C3.24999 8.53435 2.37355 6.05917 2.10001 3.48334C2.07919 3.2529 2.10657 3.02064 2.18043 2.80136C2.25428 2.58208 2.37299 2.38058 2.52898 2.20969C2.68498 2.0388 2.87485 1.90227 3.0865 1.80878C3.29816 1.71529 3.52696 1.66689 3.75834 1.66668H6.25834C6.66277 1.6627 7.05484 1.80591 7.36148 2.06962C7.66812 2.33333 7.86841 2.69955 7.92501 3.10001C8.03053 3.90006 8.22622 4.68562 8.50834 5.44168C8.62046 5.73995 8.64473 6.0641 8.57827 6.37574C8.5118 6.68738 8.3574 6.97344 8.13334 7.20001L7.07501 8.25834C8.26131 10.3446 9.98872 12.072 12.075 13.2583L13.1333 12.2C13.3599 11.976 13.646 11.8216 13.9576 11.7551C14.2692 11.6886 14.5934 11.7129 14.8917 11.825C15.6477 12.1071 16.4333 12.3028 17.2333 12.4083C17.6381 12.4655 18.0078 12.6693 18.2721 12.9813C18.5364 13.2932 18.6768 13.6913 18.6667 14.1Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
  const BalanceIcon = () => (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
      className="text-neutral-50 hover:text-neutral-300"
    >
      <path
        d="M6.66668 2.5L3.33334 5.83333L6.66668 9.16667"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3.33334 5.83333H16.6667"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.3333 17.5L16.6667 14.1667L13.3333 10.8333"
        stroke="currentColor"
        strokeWidth="1.39167"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.6667 14.1667H3.33334"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
  const UserIcon = () => (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
      className="text-neutral-50 hover:text-neutral-300"
    >
      <path
        d="M15.8333 17.5V15.8333C15.8333 14.9493 15.4821 14.1014 14.857 13.4763C14.2319 12.8512 13.384 12.5 12.5 12.5H7.49999C6.61593 12.5 5.76809 12.8512 5.14297 13.4763C4.51785 14.1014 4.16666 14.9493 4.16666 15.8333V17.5M13.3333 5.83333C13.3333 7.67428 11.8409 9.16667 9.99999 9.16667C8.15904 9.16667 6.66666 7.67428 6.66666 5.83333C6.66666 3.99238 8.15904 2.5 9.99999 2.5C11.8409 2.5 13.3333 3.99238 13.3333 5.83333Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
  const MenuIcon = () => (
    <svg
      width="21"
      height="20"
      viewBox="0 0 21 20"
      xmlns="http://www.w3.org/2000/svg"
     className="text-neutral-50 hover:text-neutral-300"
    >
      <path
        d="M2.83334 8.33334L4.91668 6.25001L2.83334 4.16667"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2.83334 15.8333L4.91668 13.75L2.83334 11.6667"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.66668 5H17.8333"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.66668 10H17.8333"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.66668 15H17.8333"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
  const MapIcon = () => (
    <svg
      width="21"
      height="20"
      viewBox="0 0 21 20"
      xmlns="http://www.w3.org/2000/svg"
       className="text-neutral-50 hover:text-neutral-300"
    >
      <path
        d="M17.3333 8.33334C17.3333 13.3333 10.6666 18.3333 10.6666 18.3333C10.6666 18.3333 3.99994 13.3333 3.99994 8.33334C3.99994 6.56523 4.70232 4.86954 5.95256 3.61929C7.2028 2.36905 8.8985 1.66667 10.6666 1.66667C12.4347 1.66667 14.1304 2.36905 15.3807 3.61929C16.6309 4.86954 17.3333 6.56523 17.3333 8.33334Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.6666 10.8333C12.0473 10.8333 13.1666 9.71405 13.1666 8.33334C13.1666 6.95263 12.0473 5.83334 10.6666 5.83334C9.28589 5.83334 8.16661 6.95263 8.16661 8.33334C8.16661 9.71405 9.28589 10.8333 10.6666 10.8333Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
  const SecurityIcon = () => (
    <svg
      width="21"
      height="20"
      viewBox="0 0 21 20"
      xmlns="http://www.w3.org/2000/svg"
      className="text-neutral-50 hover:text-neutral-300"
    >
      <path
        d="M2.83334 8.33334L4.91668 6.25001L2.83334 4.16667"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2.83334 15.8333L4.91668 13.75L2.83334 11.6667"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.66668 5H17.8333"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.66668 10H17.8333"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.66668 15H17.8333"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
  
const cardData = [
    {
        title: "Player Info",
        icon: <UserIcon/>,
        content: [
            { label: "Status", badge: { text: "Active", variant: "default" } },
            { label: "Self-exclusion status", badge: { text: "Not self-excluded", variant: "black" } },
            { label: "User ID", value: "6297036" },
            { label: "Username", value: "yev_42" },
            { label: "Email", value: "yevgeni@test42@monkeytilt.co" },
            { label: "Date of birth", value: "05/05/2000 (23 years)" },
            { label: "Gender", value: "Unknown" },
            { label: "Attachments", value: "0" },
            { label: "Registered at", value: "24/04/2024", subText: "22 hours ago" },
            { label: "Last login", value: "24/04/2024", subText: "22 hours ago" },
        ]
    },
    {
        title: "Contact Details",
        icon: <PhoneIcon/>,
        content: [
            { label: "Address 1", value: "Rio de Janeiro" },
            { label: "City/Town", value: "Rio de Janeiro" },
            { label: "Post Code", value: "12345" },
            { label: "Country", value: "United States" },
            { label: "Nationality", value: "Brazillian" },
            { label: "Birth place", value: "Rio de Janeiro / NA" },
            { label: "Birth name", value: "-" },
            { label: "Mother's maiden name", value: "-" },
            { label: "Mobile", value: "(+92) 3213922190" },
        ]
    },
    {
        title: "Additional and Misc Info",
        icon: <MenuIcon/>,
        spanFull: true,
        content: [
            { label: "Language", value: "Portuguese" },
            { label: "E-mail marketing consent", badge: { text: "Expired", variant: "secondary" } },
            { label: "SMS marketing consent", badge: { text: "Active", variant: "default" } },
            { label: "Registered by", value: "^GamMatrixServerAPIRestService proxy" },
            { label: "Registration channel", value: "None" },
            { label: "First deposit at", value: "-" },
            { label: "Affiliate code", value: "-" },
            { label: "Tax code", value: "-" },
            { label: "Last T&C update type", value: "No" },
            { label: "General T&C accepted", badge: { text: "Active", variant: "default" } },
            { label: "Registration Channel", value: "0" },


        ]
    },
    {
        title: "Balance Info",
        icon: <BalanceIcon/>,
        limitHeight: true,
        content: [
            { label: "GmWallet.RealCash", value: "$9,982.80" },
            { label: "GmWallet.Bonus Cash", value: "$210.00" },
            { label: "GmWallet.Locked", value: "$0.00" },
            { label: "GmWallet.Negative Remainder", value: "$0.00" },
            { label: "Available Balance", value: <span className="text-lime-400">$10,192.80</span>, changeBorder: true },
        ]
    },
    {
        title: "Security Info",
        icon: <SecurityIcon/>,
        limitHeight: true,
        content: [
            { label: "Personal ID", value: "123456789" },
            { label: "IBAN", value: "GB29NWBK60161331926819" },
            { label: "2nd Factor Auth", value: "None" },
            { label: "Security Question", value: "What is my pet name?" },
            { label: "Security Answer", value: "saimi" },
        ]
    },
    {
        title: "IP Addresses",
        icon: <MapIcon/>,
        limitHeight: true,
        spanFull: true,
        content: [
            {
                label: "154.192.48.49",
                country: "PK",
            },  
            {
                label: "192.168.0.1",
                country: "AF",
            },
            {
                label: "203.0.113.1",
                country: "US",
            },
            {
                label: "198.51.100.1",
                country: "GB",
            },
            {
                label: "203.0.113.2",
                country: "DE",
            },
            {
                label: "198.51.100.2",
                country: "FR",
            },
            {

                label: "192.0.2.1",
                country: "JP",
            },
        ],
    },
];
const InfoCard = ({ title, content, icon, height, spanFull }: any) => (
<Card
    className={classNames(
        "w-full bg-neutral-900 text-primaryText border border-neutral-700 rounded-lg transition-all duration-200 hover:border-double hover:border-spacing-5 hover:rounded-2xl  hover:cursor-pointer",
        height && "h-72 overflow-y-auto",
        spanFull && "md:col-span-2 2xl:col-span-1"
    )}
>

        <CardHeader>
            <div className="flex items-center h-auto space-x-2">
                {icon}
                <CardTitle>{title}</CardTitle>
            </div>
        </CardHeader>
        <CardContent>
            <div className="divide-y divide-neutral-800">
                {content.map((item: any, index: number) => (
                    <div key={index} className="py-2 flex justify-between truncate">
                        <div className="flex items-center">
                            {item.country && (
                                <div className="w-10 h-auto flex items-center">
                                    <FlagIcon code={item.country} size={20} />
                                </div>
                            )}
                            <span className="text-sm text-neutral-400 min-w-28">{item.label}</span>
                        </div>
                        {item.badge ? (
                            <Badge variant={item.badge.variant}>{item.badge.text}</Badge>
                        ) : (
                            <div className="flex flex-col">
                                <span className="text-sm font-medium text-neutral-100">{item.value}</span>
                                {item.subText &&
                                    <span className="text-xs text-neutral-500">{item.subText}</span>

                                }
                            </div>
                        )}

                    </div>
                ))}
            </div>
        </CardContent>
    </Card>
);




