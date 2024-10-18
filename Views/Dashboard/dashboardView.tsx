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
                <span className="text-2xl font-semibold">Player Info</span>
                <Button><PlusIcon aria-hidden="true" className="h-6 w-6" />Actions</Button>
            </div>
            <div className="border-t mt-5 mb-5 border-neutral-800 w-full" />
            <div className="grid lg:grid-cols-3 gap-5">
                {cardData.map((card, index) => (
                    <InfoCard key={index} title={card.title} content={card.content} icon={card.icon} height={card.limitHeight} />
                ))}
            </div>
        </>
    );
}

export default DashboardView;

const cardData = [
    {
        title: "Player Info",
        icon: PlayerIcon,
        limitHeight: false,
        content: [
            { label: "Status", badge: { text: "Active", variant: "default" } },
            { label: "Self-exclusion status", value: "Not self-excluded" },
            { label: "User ID", value: "6297036" },
            { label: "Username", value: "yev_42" },
            { label: "Email", value: "yevgeni@test42@monkeytilt.co" },
            { label: "Date of birth", value: "05/05/2000 (23 years)" },
            { label: "Gender", value: "Unknown" },
            { label: "Attachments", value: "0" },
            { label: "Registered at", value: "24/04/2024" },
            { label: "Last login", value: "24/04/2024" },
        ]
    },
    {
        title: "Contact Details",
        limitHeight: false,
        icon: CallIcon,
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
        limitHeight: false,
        icon: MiscIcon,
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
        icon: BalanceIcon,
        limitHeight: true,
        content: [
            { label: "GmWallet.RealCash", value: "$9,982.80" },
            { label: "GmWallet.Bonus Cash", value: "$210.00" },
            { label: "GmWallet.Locked", value: "$0.00" },
            { label: "GmWallet.Negative Remainder", value: "$0.00" },
            { label: "Available Balance", value: <span className="text-green-500">$10,192.80</span> },
        ]
    },
    {
        title: "Security Info",
        icon: SecurityIcon,
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
        icon: IpIcon,
        limitHeight: true,
        content: [
            {
                label: "IP 1",
                value: "154.192.48.49",
                country: "PK",
            },
            {
                label: "IP 2",
                value: "192.168.0.1",
                country: "AF",
            },
            {
                label: "IP 3",
                value: "203.0.113.1",
                country: "US",
            },
            {
                label: "IP 4",
                value: "198.51.100.1",
                country: "GB",
            },
            {
                label: "IP 5",
                value: "203.0.113.2",
                country: "DE",
            },
            {
                label: "IP 6",
                value: "198.51.100.2",
                country: "FR",
            },
            {
                label: "IP 7",
                value: "192.0.2.1",
                country: "JP",
            },
        ],
    },
];
const InfoCard = ({ title, content, icon, height }: any) => (
    <Card
        className={classNames(
            "w-full bg-neutral-900 text-primaryText border-neutral-700 rounded-lg",
            height && "h-72 overflow-y-auto"
        )}

    >
        <CardHeader>
            <div className="flex items-center h-auto space-x-2">
                <Image src={icon} alt={`${title} Icon`} width={16} height={16} />
                <CardTitle>{title}</CardTitle>
            </div>
        </CardHeader>
        <CardContent>
            <div className="divide-y divide-gray-600">
                {content.map((item: any, index: number) => (
                    <div key={index} className="py-2 flex justify-between">
                        <div className="flex items-center">
                            {item.country && (

                                <div className="w-10 h-10 flex items-center">
                                    <FlagIcon code={item.country} size={20} />
                                </div>
                            )}
                            <span className="text-sm">{item.label}</span>
                        </div>
                        {item.badge ? (
                            <Badge variant={item.badge.variant}>{item.badge.text}</Badge>
                        ) : (
                            <>

                                <span className="text-sm">{item.value}</span>
                            </>
                        )}
                    </div>
                ))}
            </div>
        </CardContent>
    </Card>
);




