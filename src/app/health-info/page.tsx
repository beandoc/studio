import Header from "@/components/header";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

const foodGroups = [
  {
    title: "Cereals and millets",
    examples: "Wheat, Rice & Ragi",
    image: "https://placehold.co/300x200.png",
    hint: "cereals millets"
  },
  {
    title: "Grain legumes",
    examples: "Bengal gram, black gram, Rajmah",
    image: "https://placehold.co/300x200.png",
    hint: "legumes beans"
  },
  {
    title: "Vegetables",
    examples: "Brinjal, Cucumber, Drumstick, Ladies finger, Peas",
    image: "https://placehold.co/300x200.png",
    hint: "assorted vegetables"
  },
  {
    title: "Roots and tubers",
    examples: "Beetroot, Carrot, Potato, Radish",
    image: "https://placehold.co/300x200.png",
    hint: "root vegetables"
  },
  {
    title: "Fruits",
    examples: "Apple, Banana, Dates, Grapes, Guava",
    image: "https://placehold.co/300x200.png",
    hint: "assorted fruits"
  }
];

export default function HealthInfoPage() {
  return (
    <div className="flex flex-col w-full">
      <Header
        title="Health Information"
        description="General information about diets and food groups."
      />
      <main className="flex-1 p-4 md:p-8">
        <div className="max-w-6xl mx-auto">
          <Card className="mb-8">
            <CardHeader>
              <div className="relative w-full h-48 md:h-64 rounded-xl overflow-hidden">
                <Image
                  src="https://placehold.co/1200x400.png"
                  alt="Healthy Food Categories"
                  layout="fill"
                  objectFit="cover"
                  data-ai-hint="healthy food"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <h1 className="text-4xl md:text-6xl font-bold text-white text-center">
                    Food Categories
                  </h1>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <CardTitle className="text-2xl mb-2">Let's learn about different food groups...</CardTitle>
              <CardDescription>
                A balanced diet includes a variety of foods from different groups to ensure you get all the necessary nutrients for good health. Understanding these groups can help you make better food choices tailored to your health needs.
              </CardDescription>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {foodGroups.map((group) => (
              <Card key={group.title} className="flex flex-col">
                <CardHeader className="p-0">
                  <div className="relative h-40 w-full">
                    <Image
                      src={group.image}
                      alt={group.title}
                      layout="fill"
                      objectFit="cover"
                      className="rounded-t-lg"
                      data-ai-hint={group.hint}
                    />
                  </div>
                </CardHeader>
                <CardContent className="p-6 flex-grow">
                  <h3 className="text-xl font-bold text-primary">{group.title}</h3>
                  <p className="text-muted-foreground mt-2">{group.examples}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
