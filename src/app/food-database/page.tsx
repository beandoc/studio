
"use client";

import Header from "@/components/header";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { 
    Bean, 
    Beer, 
    Sandwich, 
    Milk, 
    Egg, 
    Pizza, 
    Fish, 
    Apple, 
    Beef, 
    Shell, 
    Wheat, 
    Salad, 
    UtensilsCrossed, 
    Cookie, 
    Soup, 
    IceCream, 
    Carrot, 
    CircleHelp
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const foodCategories = [
  { slug: "baked-beans", icon: Bean, title: "Beans & Legumes", description: "All types of beans and legumes like baked beans, green beans, refried beans and lentils." },
  { slug: "beverages", icon: Beer, title: "Beverages", description: "Hot and cold drinks like juices, soda, smoothies, coffee, beer, wine and cocktails." },
  { slug: "breads-cereals", icon: Sandwich, title: "Breads & Cereals", description: "Different types of breads and cereals like bagels, tortillas, rye, wheat bread and oatmeal." },
  { slug: "dairy", icon: Milk, title: "Cheese, Milk & Dairy", description: "Cheese varieties and dairy products like cheddar, mozzarella, provolone, skim milk and yogurt." },
  { slug: "eggs", icon: Egg, title: "Eggs", description: "Variety of plain and cooked eggs like, egg whites, hard-boiled, scrambled, fried and poached." },
  { slug: "fast-food", icon: Pizza, title: "Fast Food", description: "Foods from all your favorite chains like burgers, fries, burritos, tacos, hot dogs and pizza." },
  { slug: "fish-seafood", icon: Fish, title: "Fish & Seafood", description: "A range of seafood and fish like shrimp, lobster, scallops, tuna, salmon, mahi mahi and tilapia." },
  { slug: "fruit", icon: Apple, title: "Fruit", description: "Popular fruits like apples, bananas, strawberries, oranges, grapes, peaches, pears and grapefruit." },
  { slug: "meat", icon: Beef, title: "Meat", description: "Full range of meats and cuts like bacon, ribs, chicken breast, pork chops, corned beef and roast turkey." },
  { slug: "nuts-seeds", icon: Shell, title: "Nuts & Seeds", description: "Popular nuts and seeds like almonds, peanuts, pecans, pistachios, walnuts and sunflower seeds." },
  { slug: "pasta-rice", icon: Wheat, title: "Pasta, Rice & Noodles", description: "All types of pasta and rice like spaghetti, macaroni, ravioli, lasagna, white rice and fried rice." },
  { slug: "salads", icon: Salad, title: "Salads", description: "All your favorite salads like coleslaw, potato salad caesar salad, egg salad and chicken salad." },
  { slug: "sauces-spices", icon: UtensilsCrossed, title: "Sauces, Spices & Spreads", description: "All types of sauces and spices like ketchup, applesauce, pasta sauce, salsa, olive oil, mayo, salad dressing, hummus and maple syrup." },
  { slug: "snacks", icon: Cookie, title: "Snacks", description: "Sweet and salty snacks like potato chips, tortilla chips, jerky, popcorn, pretzels, crackers, granola bars, trail mix and rice cakes." },
  { slug: "soups", icon: Soup, title: "Soups", description: "All types of soups like chili, gumbo, bisques, chowders, stews and broths." },
  { slug: "sweets", icon: IceCream, title: "Sweets, Candy & Desserts", description: "Sweet treats like candy, chocolate, cake, donuts, ice cream, pastries, muffins, pancakes and brownies." },
  { slug: "vegetables", icon: Carrot, title: "Vegetables", description: "All vegetables like mushrooms, carrots, potatoes, tomatoes, broccoli, lettuce, peas and onions." },
  { slug: "other", icon: CircleHelp, title: "Other", description: "Popular foods like dumplings, croutons, chow mein, french toast, quiche, spring rolls and grits." }
];

export default function FoodDatabasePage() {
  return (
    <div className="flex flex-col w-full">
      <Header
        title="Food Database"
        description="Browse common foods and products from your favorite brands and restaurants."
      />
      <main className="flex-1 p-4 md:p-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {foodCategories.map((category) => (
            <Card key={category.title} className="flex flex-col">
              <CardHeader className="flex-row items-center gap-4 space-y-0">
                <category.icon className="w-8 h-8 text-primary" />
                <CardTitle>{category.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-sm text-muted-foreground">{category.description}</p>
              </CardContent>
              <CardFooter>
                 <Button asChild variant="outline" size="sm" className="w-full">
                    {/* The slug for baked-beans is hardcoded, for other categories it should be dynamic */}
                    <Link href={`/food-database/${category.slug === 'baked-beans' ? 'baked-beans' : '#'}`}>More</Link>
                 </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
}
