import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  CheckCircle,
  ArrowRight,
  ExternalLink,
  Zap,
  TrendingUp,
  Users,
  Crown,
} from "lucide-react";

export default function PricingPage() {
  const apis = [
    {
      name: "AI Image Generation",
      description: "Generate stunning images from text prompts",
      rapidApiUrl:
        "https://rapidapi.com/belchiorarkad-FqvHs2EDOtP/api/realistic-image-generator",
      features: [
        "High-quality image generation",
        "Multiple style options",
        "Fast processing times",
        "Commercial usage license",
        "20,000+ successful calls",
        "100+ paying customers",
      ],
      status: "Live",
      icon: Zap,
      gradient: "from-blue-500/10 to-purple-500/10",
    },
    {
      name: "Background Removal AI",
      description: "Remove backgrounds from images instantly",
      rapidApiUrl:
        "https://rapidapi.com/belchiorarkad-FqvHs2EDOtP/api/background-remover20",
      features: [
        "Precise edge detection",
        "High-resolution output",
        "Bulk processing support",
        "Multiple format support",
        "20,000+ successful calls",
        "Professional quality results",
      ],
      status: "Live",
      icon: TrendingUp,
      gradient: "from-green-500/10 to-blue-500/10",
    },
    {
      name: "Rotten Tomato API",
      description: "Access comprehensive movie data and ratings",
      rapidApiUrl:
        "https://rapidapi.com/belchiorarkad-FqvHs2EDOtP/api/rotten-tomatoes-api/",
      features: [
        "Movie ratings & reviews",
        "Box office data",
        "Cast & crew information",
        "Streaming availability",
        "20,000+ successful calls",
        "Real-time movie data",
      ],
      status: "Live",
      icon: Crown,
      gradient: "from-orange-500/10 to-red-500/10",
    },
    {
      name: "Meet Bot API",
      description: "Intelligent meeting assistant and automation",
      rapidApiUrl: "#",
      features: [
        "Meeting transcription",
        "Action item extraction",
        "Smart summaries",
        "Calendar integration",
        "AI-powered insights",
        "Coming soon",
      ],
      status: "Coming Soon",
      icon: Users,
      gradient: "from-amber-500/10 to-orange-500/10",
    },
  ];

  const stats = [
    {
      label: "Total API Calls",
      value: "80K+",
      description: "Across all endpoints",
    },
    {
      label: "Paying Customers",
      value: "100+",
      description: "Production users",
    },
    { label: "Live APIs", value: "3", description: "Ready to use" },
    { label: "Uptime", value: "99.9%", description: "Reliable service" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      {/* Hero Section */}
      <section className="py-24 sm:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8882_1px,transparent_1px),linear-gradient(to_bottom,#8882_1px,transparent_1px)] bg-[size:14px_24px]" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <div className="flex justify-center mb-8">
              <div className="rounded-full bg-primary/10 p-4">
                <ExternalLink className="h-12 w-12 text-primary" />
              </div>
            </div>

            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
              Available on RapidAPI
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground max-w-2xl mx-auto">
              All our APIs are live on RapidAPI with flexible pricing. Each API
              has served 20,000+ calls with 100+ paying customers.
            </p>

            <div className="mt-8 inline-flex items-center rounded-full border border-border/50 bg-background/50 backdrop-blur-sm px-4 py-2 text-sm">
              <span className="text-muted-foreground">
                Live APIs • Trusted by 100+ customers • 20K+ calls each
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/30">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <div className="font-medium text-foreground mb-1">
                  {stat.label}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* API Cards */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {apis.map((api, index) => (
              <Card
                key={index}
                className={`relative overflow-hidden border-border/50 hover:shadow-xl transition-all duration-300 ${
                  api.status === "Live"
                    ? "ring-2 ring-green-500/20 hover:ring-green-500/40"
                    : "ring-2 ring-amber-500/20 hover:ring-amber-500/40"
                }`}
              >
                {/* Background gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${api.gradient} opacity-50`}
                />

                {/* Status badge */}
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
                  <span
                    className={`px-4 py-1.5 text-sm font-medium rounded-full shadow-lg ${
                      api.status === "Live"
                        ? "bg-green-500 text-white"
                        : "bg-amber-500 text-white"
                    }`}
                  >
                    {api.status}
                  </span>
                </div>

                <div className="relative">
                  <CardHeader className="text-center pb-4">
                    <div className="flex justify-center mb-4">
                      <div className="rounded-full bg-primary/10 p-3">
                        <api.icon className="h-8 w-8 text-primary" />
                      </div>
                    </div>
                    <CardTitle className="text-2xl">{api.name}</CardTitle>
                    <CardDescription className="mt-2 text-base">
                      {api.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent>
                    <ul className="space-y-3 mb-8">
                      {api.features.map((feature, featureIndex) => (
                        <li
                          key={featureIndex}
                          className="flex items-center space-x-3"
                        >
                          <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                          <span className="text-sm font-medium">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="space-y-3">
                      {api.status === "Live" ? (
                        <>
                          <Button asChild className="w-full" size="lg">
                            <a
                              href={api.rapidApiUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              View on RapidAPI
                              <ExternalLink className="ml-2 h-4 w-4" />
                            </a>
                          </Button>
                          <p className="text-xs text-center text-muted-foreground">
                            Pricing available on RapidAPI • Free tier included
                          </p>
                        </>
                      ) : (
                        <>
                          <Button
                            className="w-full"
                            variant="outline"
                            size="lg"
                            disabled
                          >
                            Coming Soon
                          </Button>
                          <p className="text-xs text-center text-muted-foreground">
                            Join our waitlist for early access
                          </p>
                        </>
                      )}
                    </div>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-muted/30">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-muted-foreground">
              Everything you need to know about our APIs on RapidAPI
            </p>
          </div>

          <div className="grid gap-8">
            <Card className="border-border/50">
              <CardHeader>
                <CardTitle className="text-lg">
                  How does pricing work on RapidAPI?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Each API has its own pricing model on RapidAPI. Most offer
                  free tiers and flexible pay-per-use pricing. You only pay for
                  what you use, with transparent pricing displayed on each API's
                  RapidAPI page.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border/50">
              <CardHeader>
                <CardTitle className="text-lg">
                  Can I test the APIs before subscribing?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Yes! Most of our APIs offer free tiers or trial credits so you
                  can test functionality before committing. Check each API's
                  RapidAPI page for specific free tier details.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border/50">
              <CardHeader>
                <CardTitle className="text-lg">
                  What support is available?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We provide comprehensive documentation and support through
                  RapidAPI's platform, plus direct email support at
                  contact@g3oapi.com for complex technical issues or business
                  inquiries.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border/50 bg-gradient-to-r from-green-50/50 to-blue-50/50 dark:from-green-950/20 dark:to-blue-950/20">
              <CardHeader>
                <CardTitle className="text-lg">
                  Are the APIs reliable for production use?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Absolutely! Our APIs have proven reliability with:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>20,000+ API calls per endpoint</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>100+ paying customers</span>
                    </li>
                  </ul>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>99.9% uptime</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>Production-ready infrastructure</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <Card className="border-border/50 bg-gradient-to-r from-primary/5 to-primary/10">
            <CardContent className="p-12">
              <h2 className="text-3xl font-bold mb-4">Ready to get started?</h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Join 100+ developers already using our APIs in production. Start
                with our free tiers and scale as you grow.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <a
                    href="https://rapidapi.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Browse APIs on RapidAPI
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href="mailto:contact@g3oapi.com">Contact Sales</a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
