
import Header from "@/components/header";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { CheckCircle2, Info } from "lucide-react";

const healthyHabits = [
    "Include non-starchy fresh vegetables and green leafy vegetables in every meal. Aim for at least 30 grams of fruit in every meal.",
    "Ensure at least 50% of cereals and grains are whole grains (like millets or brown rice) for adequate nutrients and fibre.",
    "Accompany all cereal-based meals with adequate pulses or beans for good quality protein.",
    "Consume adequate quantities of nuts, oilseeds, and fatty fish. Restrict cooking oils to 25-30g per day.",
    "Avoid ultra-processed foods (UPFs) and foods high in fat, sugar, and salt (HFSS).",
    "Limit added sugar to 20-25g per day for adults.",
    "Incorporate a variety of foods within each food group to ensure a wide range of nutrients."
];

const nutrientsOfConcern = [
    { name: "Vegetarians", concern: "Achieving adequacy of essential Long-chain n-3 PUFA and Vitamin B12 can be a challenge. Good sources of n-3 PUFA include flax seeds, chia seeds, and walnuts. For B12, fortified foods or milk (which contains small amounts) are important." },
    { name: "General Population", concern: "Dietary fibre, antioxidants (like Vitamins C & E, beta-carotene), and phytonutrients are crucial for protecting the body from damage and promoting health. A diet rich in colorful fruits, vegetables, whole grains, and spices helps meet these needs."}
]

export default function HealthInfoPage() {
  return (
    <div className="flex flex-col w-full">
      <Header
        title="A Guide to Healthy Eating"
        description="Understanding the principles of a balanced diet for a healthy life."
      />
      <main className="flex-1 p-4 md:p-8">
        <div className="max-w-6xl mx-auto space-y-8">
          
          <Card>
            <CardHeader className="p-0">
                <div className="relative w-full h-auto rounded-t-xl overflow-hidden">
                    <Image
                    src="https://storage.googleapis.com/project-spark-b8516.appspot.com/static/kidney-wise/healthy-eating-pyramid.png"
                    alt="The food pyramid for a balanced diet, showing vegetables and fruits at the base, then cereals, then pulses and dairy, then nuts and fats at the top."
                    width={1200}
                    height={955}
                    className="object-contain w-full h-full"
                    data-ai-hint="food pyramid"
                    priority
                    />
                </div>
            </CardHeader>
             <CardContent className="p-6">
              <CardTitle className="text-2xl mb-2">What is a Balanced Diet?</CardTitle>
              <CardDescription className="max-w-prose space-y-2">
                <p>A balanced diet is a wholesome and nutritionally adequate diet. It provides the required calories, proteins, vitamins, minerals, and adequate fibre necessary to sustain life, maintain health, and support growth and development. Since no single food contains all essential nutrients, achieving a balanced diet requires eating a diverse variety of foods from different food groups.</p>
                <p>The ICMR-NIN 'My Plate for the Day' recommends that a healthy plate should source macronutrients and micronutrients from multiple food groups, with vegetables, fruits, and greens forming half the plate. Cereals should be about 25%, and protein-rich foods like pulses, beans, and meat should make up the remaining 25%.</p>
              </CardDescription>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
                <CardTitle>Key Principles of Healthy Eating</CardTitle>
                <CardDescription>Follow these habits to maintain a healthy and balanced diet.</CardDescription>
            </CardHeader>
            <CardContent>
                <ul className="space-y-3">
                    {healthyHabits.map((tip, index) => (
                        <li key={index} className="flex items-start gap-3">
                            <CheckCircle2 className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                            <span>{tip}</span>
                        </li>
                    ))}
                </ul>
            </CardContent>
          </Card>
          
           <div className="grid md:grid-cols-2 gap-8">
                <Card className="flex flex-col">
                    <CardHeader>
                        <CardTitle>Understanding Macronutrients</CardTitle>
                        <CardDescription>The building blocks of your diet needed in large amounts.</CardDescription>
                    </CardHeader>
                    <CardContent className="flex-grow space-y-4">
                        <div>
                            <h4 className="font-bold text-accent-foreground">Carbohydrates (50-55% of Calories)</h4>
                            <p className="text-sm text-muted-foreground">The body's main source of energy (4 Kcal/g). Complex carbs from whole grains, millets, and pulses are preferred as they contain dietary fibre, which improves satiety and helps regulate blood glucose.</p>
                        </div>
                        <div>
                            <h4 className="font-bold text-accent-foreground">Proteins (10-15% of Calories)</h4>
                            <p className="text-sm text-muted-foreground">Essential for building and repairing tissues (4 Kcal/g). Animal sources (meat, fish, eggs, milk) are high-quality, while combining cereals and pulses provides good quality plant-based protein.</p>
                        </div>
                        <div>
                            <h4 className="font-bold text-accent-foreground">Fats (20-30% of Calories)</h4>
                            <p className="text-sm text-muted-foreground">A concentrated source of energy (9 Kcal/g) and essential for absorbing fat-soluble vitamins. Focus on healthy fats from nuts, seeds, and fish.</p>
                        </div>
                    </CardContent>
                </Card>
                <Card className="flex flex-col">
                    <CardHeader>
                        <CardTitle>Nutrients of Concern</CardTitle>
                        <CardDescription>Special considerations for certain dietary patterns.</CardDescription>
                    </CardHeader>
                    <CardContent className="flex-grow space-y-4">
                        {nutrientsOfConcern.map(item => (
                             <div key={item.name}>
                                <h4 className="font-bold text-accent-foreground">{item.name}</h4>
                                <p className="text-sm text-muted-foreground">{item.concern}</p>
                            </div>
                        ))}
                    </CardContent>
                </Card>
            </div>

        </div>
      </main>
    </div>
  );
}
