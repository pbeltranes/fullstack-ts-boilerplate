'use server'
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { redirect } from "next/navigation";
import { createClient } from '@/lib/supabase/server'

export default async function Page() {
  const supabase = await createClient()

  const { data, error } = await supabase.auth.getUser()
  if (error || !data?.user) {
    redirect('/login')
  }
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold mb-6">Welcome to My Site</h1>
      <p className="text-xl mb-8">{JSON.stringify(data)}</p>
      <Card>
        <CardHeader>
          <CardTitle>Dashboard</CardTitle>
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
