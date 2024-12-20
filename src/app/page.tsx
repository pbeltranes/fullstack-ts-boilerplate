import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold mb-6">Welcome to My Site</h1>
      <p className="text-xl mb-8">This is a simple one-page layout with a responsive navbar and theme toggle.</p>
      <Card>
        <CardHeader>
          <CardTitle>Content Section</CardTitle>
          <CardDescription>Here you can add more content for your single-page website.</CardDescription>
        </CardHeader>
        <CardContent>
          <p>This could include features, testimonials, or any other relevant information.</p>
          <Button className="mt-4">Learn More</Button>
        </CardContent>
      </Card>
    </div>
  );
}
