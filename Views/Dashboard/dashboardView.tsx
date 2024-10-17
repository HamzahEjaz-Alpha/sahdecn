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
                    <InfoCard key={index} title={card.title} content={card.content} icon={card.icon}/>
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
        icon: CallIcon,
        content: [
            { label: "Address 1", value: "Rio de Janeiro" },
            { label: "City/Town", value: "Rio de Janeiro" },
            { label: "Post Code", value: "12345" },
            { label: "Country", value: "United States" },
            { label: "Mobile", value: "(+92) 3213922190" },
        ]
    },
    {
        title: "Additional Info",
        icon: MiscIcon,
        content: [
            { label: "Language", value: "Portuguese" },
            { label: "E-mail marketing consent", badge: { text: "Expired", variant: "secondary" } },
            { label: "SMS marketing consent", badge: { text: "Active", variant: "default" } },
            { label: "Registered by", value: "GamMatrixServerAPI" },
        ]
    },
    {
        title: "Balance Info",
        icon: BalanceIcon,
        content: [
            { label: "Real Cash", value: "$9,982.80" },
            { label: "Bonus Cash", value: "$210.00" },
            { label: "Locked Cash", value: "$0.00" },
            { label: "Negative Remainder", value: "$0.00" },
            { label: "Available Balance", value: <span className="text-green-500">$10,192.80</span> },
        ]
    },
    {
        title: "Security Info",
        icon: SecurityIcon,
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
        content: Array.from({ length: 7 }, (_, index) => ({
            label: `IP ${index + 1}`,
            value: `154.192.48.49`
        })),
    },
];
const InfoCard = ({ title, content, icon }: any) => (
    <Card className="w-full bg-neutral-900 text-primaryText border-neutral- rounded-lg">
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
                        <span className="text-sm">{item.label}</span>
                        {item.badge ? (
                            <Badge variant={item.badge.variant}>{item.badge.text}</Badge>
                        ) : (
                            <span className="text-sm">{item.value}</span>
                        )}
                    </div>
                ))}
            </div>
        </CardContent>
    </Card>
);




