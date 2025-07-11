import { SidebarTrigger } from "@/components/ui/sidebar";
import Image from "next/image";

type HeaderProps = {
    title: string;
    description?: string;
    showImage?: boolean;
}

export default function Header({ title, description, showImage = false }: HeaderProps) {
    return (
        <header className="sticky top-0 z-10 flex h-16 shrink-0 items-center gap-4 border-b bg-background/80 px-4 backdrop-blur-sm md:px-6">
          <SidebarTrigger className="flex" />
          {showImage && (
            <div className="relative h-10 w-10">
              <Image 
                src="/welcome-image.png" 
                alt="Welcome"
                fill
                className="object-cover rounded-full"
              />
            </div>
          )}
          <div className="flex-grow flex flex-col">
            <h1 className="text-2xl font-bold tracking-tight">{title}</h1>
            {description && <p className="text-muted-foreground">{description}</p>}
          </div>
        </header>
    )
}
