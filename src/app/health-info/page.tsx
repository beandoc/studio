
import Header from "@/components/header";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { CheckCircle2, Info, XCircle } from "lucide-react";
import Image from "next/image";

const potassiumFoods = {
  high: [
    { name: "Avocado", amount: "1/4 whole" },
    { name: "Banana", amount: "1 medium" },
    { name: "Cantaloupe", amount: "1 cup" },
    { name: "Oranges & Orange Juice", amount: "1 cup" },
    { name: "Potatoes & Sweet Potatoes", amount: "1 medium" },
    { name: "Spinach (cooked)", amount: "1/2 cup" },
    { name: "Tomatoes & Tomato Sauce", amount: "1 cup" },
    { name: "Yogurt", amount: "1 cup" },
  ],
  low: [
    { name: "Apples & Apple Juice", amount: "1 medium" },
    { "name": "Berries (strawberries, blueberries)", amount: "1/2 cup" },
    { name: "Cabbage", amount: "1/2 cup" },
    { name: "Carrots (cooked)", amount: "1/2 cup" },
    { name: "Cauliflower", amount: "1/2 cup" },
    { name: "Cucumber", amount: "1/2 cup" },
    { name: "Grapes & Grape Juice", amount: "1/2 cup" },
    { name: "White Rice / Pasta", amount: "1/2 cup" },
  ]
};

const phosphorusFoods = {
    high: [
        { name: "Dairy products (milk, cheese, yogurt)" },
        { name: "Nuts and seeds" },
        { name: "Whole-grain bread and cereals" },
        { name: "Dark-colored sodas (cola)" },
        { name: "Processed meats (hot dogs, bacon)" },
        { name: "Dried beans and peas (lentils, kidney beans)" },
    ],
    low: [
        { name: "Rice milk or almond milk (unenriched)" },
        { name: "White bread, pasta, and rice" },
        { name: "Fresh fruits and vegetables" },
        { name: "Corn and rice cereals" },
        { name: "Light-colored sodas (lemon-lime)" },
    ]
}

const sodiumTips = [
    "Cook from scratch to control salt levels.",
    "Choose fresh or frozen vegetables over canned.",
    "Rinse canned foods to remove some sodium.",
    "Use herbs, spices, lemon juice, and vinegar for flavor instead of salt.",
    "Read food labels for 'sodium-free' or 'low-sodium' options.",
    "Avoid processed meats, packaged meals, and fast food.",
];

export default function HealthInfoPage() {
  return (
    <div className="flex flex-col w-full">
      <Header
        title="Kidney Health Nutrition"
        description="Understanding your diet is key to managing kidney health."
      />
      <main className="flex-1 p-4 md:p-8">
        <div className="max-w-6xl mx-auto space-y-8">
          <Card>
            <CardHeader>
                <div className="relative w-full h-48 md:h-64 rounded-xl overflow-hidden">
                    <Image
                    src="https://placehold.co/1200x400.png"
                    alt="A vibrant display of healthy foods"
                    fill
                    className="object-cover"
                    data-ai-hint="healthy food"
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center p-4">
                    <h1 className="text-4xl md:text-6xl font-bold text-white text-center">
                        Your Guide to a Kidney-Friendly Diet
                    </h1>
                    </div>
                </div>
            </CardHeader>
             <CardContent>
              <CardTitle className="text-2xl mb-2">The Importance of What You Eat</CardTitle>
              <CardDescription className="max-w-prose">
                When you have kidney disease, your kidneys cannot remove waste products and fluid from your blood as well as they should. A kidney-friendly diet helps to protect your kidneys from further damage by limiting certain foods and fluids. This guide will help you understand the key nutrients to manage: potassium, phosphorus, sodium, and protein.
              </CardDescription>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
                <CardTitle>Managing Potassium</CardTitle>
                <CardDescription>Potassium is a mineral that helps your nerves and muscles work properly. Damaged kidneys have trouble filtering it, leading to unsafe levels in the blood.</CardDescription>
            </CardHeader>
            <CardContent className="grid md:grid-cols-2 gap-6">
                <div>
                    <h3 className="font-semibold mb-2 flex items-center gap-2 text-destructive"><XCircle /> High-Potassium Foods to Limit</h3>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Food</TableHead>
                                <TableHead>Serving Size</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {potassiumFoods.high.map(food => (
                                <TableRow key={food.name}>
                                    <TableCell>{food.name}</TableCell>
                                    <TableCell>{food.amount}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
                 <div>
                    <h3 className="font-semibold mb-2 flex items-center gap-2 text-green-600"><CheckCircle2 /> Low-Potassium Foods to Enjoy</h3>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Food</TableHead>
                                <TableHead>Serving Size</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {potassiumFoods.low.map(food => (
                                <TableRow key={food.name}>
                                    <TableCell>{food.name}</TableCell>
                                    <TableCell>{food.amount}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
                <CardTitle>Managing Phosphorus</CardTitle>
                <CardDescription>Phosphorus works with calcium to build strong bones. With kidney disease, it can build up in your blood, pulling calcium from your bones and making them weak. Many packaged foods have added phosphorus.</CardDescription>
            </CardHeader>
            <CardContent className="grid md:grid-cols-2 gap-6">
                <div>
                    <h3 className="font-semibold mb-2 flex items-center gap-2 text-destructive"><XCircle /> High-Phosphorus Foods to Limit</h3>
                    <ul className="list-disc pl-5 space-y-1 text-sm">
                       {phosphorusFoods.high.map(food => <li key={food.name}>{food.name}</li>)}
                    </ul>
                </div>
                 <div>
                    <h3 className="font-semibold mb-2 flex items-center gap-2 text-green-600"><CheckCircle2 /> Low-Phosphorus Foods to Enjoy</h3>
                     <ul className="list-disc pl-5 space-y-1 text-sm">
                       {phosphorusFoods.low.map(food => <li key={food.name}>{food.name}</li>)}
                    </ul>
                </div>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="flex flex-col">
                <CardHeader>
                    <CardTitle>Tips for Reducing Sodium (Salt)</CardTitle>
                    <CardDescription>Too much sodium can make you thirsty, which can be difficult if you are on a fluid restriction. It also raises blood pressure.</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                    <ul className="space-y-3">
                       {sodiumTips.map(tip => (
                            <li key={tip} className="flex items-start gap-3">
                                <Info className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                                <span>{tip}</span>
                            </li>
                       ))}
                    </ul>
                </CardContent>
            </Card>

            <Card className="flex flex-col">
                <CardHeader>
                    <CardTitle>Understanding Your Protein Needs</CardTitle>
                    <CardDescription>Protein is essential, but the right amount depends on your kidney health stage. Eating too much can overwork your kidneys, while eating too little can cause muscle loss.</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow space-y-4">
                    <div>
                        <h4 className="font-bold text-accent-foreground">Early Stage / Non-Dialysis</h4>
                        <p className="text-sm text-muted-foreground">You may need to limit protein to help slow down further kidney damage. Your doctor or dietitian will recommend a specific daily goal, often around 0.6-0.8 grams per kilogram of body weight.</p>
                    </div>
                     <div>
                        <h4 className="font-bold text-accent-foreground">Dialysis (Hemodialysis or Peritoneal)</h4>
                        <p className="text-sm text-muted-foreground">Dialysis removes protein from your body, so you'll need to eat more high-quality protein to replace what is lost. Your goal may increase to 1.2 grams or more per kilogram of body weight.</p>
                    </div>
                </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
