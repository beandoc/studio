
import { SidebarTrigger } from "@/components/ui/sidebar";

type HeaderProps = {
    title: string;
    description?: string;
}

export default function Header({ title, description }: HeaderProps) {
    return (
        <header className="sticky top-0 z-10 flex h-16 shrink-0 items-center gap-4 border-b bg-background/80 px-4 backdrop-blur-sm md:px-6">
          <SidebarTrigger className="flex" />
          <div className="flex flex-col">
            <h1 className="text-2xl font-bold tracking-tight">{title}</h1>
            {description && <p className="text-muted-foreground">{description}</p>}
          </div>
        </header>
    )
}

    