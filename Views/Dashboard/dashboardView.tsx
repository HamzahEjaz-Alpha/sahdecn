import { Button } from "@/components/ui/button";
import { PlusIcon } from '@heroicons/react/24/outline';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Badge } from "@/components/ui/badge";
import BalanceIcon from "@/assests/Balance.png";
import PlayerIcon from "@/assests/Profile.png";
import IpIcon from "@/assests/IpIcon.png";
import SecurityIcon from "@/assests/Security.png"
import CallIcon from "@/assests/Phone.png"
import MiscIcon from "@/assests/Misc.png"
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

const cardData = [
    {
        title: "Player Info",
        icon: <Image src={PlayerIcon} alt="" width={12} height={12} />,
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
        icon: <Image src={CallIcon} alt="" width={16} height={16} />,
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
        icon: <Image src={MiscIcon} alt="" width={16} height={16} />,
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
        icon: <Image src={BalanceIcon} alt="" width={20} height={20} />,
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
        icon: <Image src={SecurityIcon} alt="" width={18} height={18} />,
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
        icon: <Image src={IpIcon} alt="" width={13} height={13} />,
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
            "w-full bg-neutral-900 text-primaryText border-neutral-700 rounded-lg",
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




