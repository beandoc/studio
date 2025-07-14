
import { SidebarTrigger } from "@/components/ui/sidebar";

type HeaderProps = {
    title: string;
    description?: string;
    children?: React.ReactNode;
}

export default function Header({ title, description, children }: HeaderProps) {
    return (
        <header className="sticky top-0 z-30 flex min-h-16 shrink-0 items-center gap-4 border-b bg-background/80 px-4 py-2 backdrop-blur-sm md:px-6">
          <SidebarTrigger className="flex lg:hidden" />
          {children && (
            <div className="flex items-center gap-4">
              {children}
            </div>
          )}
          <div className="flex-grow flex flex-col">
            <h1 className="text-2xl font-bold tracking-tight">{title}</h1>
            {description && <p className="text-muted-foreground">{description}</p>}
          </div>
        </header>
    )
}
