
import { SidebarTrigger } from "@/components/ui/sidebar";

type HeaderProps = {
    title: string;
    description?: string;
}

export default function Header({ title, description }: HeaderProps) {
    return (
        <header className="sticky top-0 z-10 flex h-16 items-center gap-4 border-b bg-background/80 backdrop-blur-sm px-4 md:px-6">
          <SidebarTrigger />
          <div className="flex flex-col">
            <h1 className="text-2xl font-bold tracking-tight font-headline">{title}</h1>
            {description && <p className="text-muted-foreground">{description}</p>}
          </div>
        </header>
    )
}
