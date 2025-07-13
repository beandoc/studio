
import Header from "@/components/header";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Info } from "lucide-react";

export default function HealthInfoPage() {
  return (
    <div className="flex flex-col w-full">
      <Header
        title="Health Information"
        description="General information about diets, food items, and kidney health."
      />
      <main className="flex-1 p-4 md:p-8">
        <Card>
          <CardHeader className="flex flex-row items-center gap-4">
            <Info className="w-8 h-8 text-primary" />
            <div>
              <CardTitle>Coming Soon!</CardTitle>
              <CardDescription>
                This section will soon contain valuable information about diets and food to help you on your health journey.
              </CardDescription>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              We are working on adding comprehensive guides and articles here. This information will also be used by the Krutrim AI Diet Coach to provide you with even better answers. Please check back later!
            </p>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
