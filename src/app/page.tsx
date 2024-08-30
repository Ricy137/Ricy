import Link from "next/link";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-center gap-y-[24px]">
            <div className="flex flex-col gap-y-[24px]">
                <div className="text-left text-[28px] font-semibold uppercase">
                    100 days
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 items-start sm:min-h-[300px]">
                    <CanvasItem id="001" title="Tree" />
                    <CanvasItem id="002" title="Ice" />
                    <CanvasItem id="003" title="Mass" />
                </div>
                <div className="flex flex-row items-center">
                    @Ricy137, inspired by&nbsp;
                    <a href="https://100.antfu.me/" className="no-underline">
                        100 @antfu&@octref
                    </a>
                </div>
            </div>
        </main>
    );
}

interface CanvasItemProps {
    id: string;
    title: string;
}
const CanvasItem: React.FC<CanvasItemProps> = ({id, title}) => {
    return (
        <Link href={title.toLowerCase()} className="flex flex-row items-center">
            <span className="mr-2">{id}</span>
            <span>{title}</span>
        </Link>
    );
};
