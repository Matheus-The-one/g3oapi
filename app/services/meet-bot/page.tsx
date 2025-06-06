import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ArrowRight,
  Bot,
  Zap,
  Shield,
  Code,
  CheckCircle,
  Calendar,
  Users,
  MessageSquare,
} from "lucide-react";

export default function MeetBotPage() {
  const features = [
    {
      icon: Calendar,
      title: "Smart Scheduling",
      description:
        "AI-powered meeting scheduling with conflict detection and optimization.",
    },
    {
      icon: Users,
      title: "Team Coordination",
      description:
        "Seamless integration with team calendars and availability tracking.",
    },
    {
      icon: MessageSquare,
      title: "Intelligent Assistance",
      description:
        "Natural language processing for meeting management and follow-ups.",
    },
  ];

  const plannedFeatures = [
    "Automated meeting scheduling",
    "Real-time meeting transcription",
    "Action item extraction",
    "Calendar integration",
    "Multi-language support",
    "Smart meeting summaries",
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <div className="flex justify-center mb-6">
              <div className="rounded-full bg-primary/10 p-4">
                <Bot className="h-12 w-12 text-primary" />
              </div>
            </div>

            <div className="mb-4">
              <span className="inline-flex items-center rounded-full bg-amber-100 px-3 py-1 text-sm font-medium text-amber-800 border border-amber-200">
                🚧 Coming Soon
              </span>
            </div>

            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
              <span className="underline decoration-dashed decoration-primary/50">
                Meet Bot API
              </span>
            </h1>

            <p className="mt-6 text-lg leading-8 text-muted-foreground max-w-2xl mx-auto">
              Intelligent meeting assistant and automation bot for seamless
              collaboration. Currently under development - join our waitlist for
              early access.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" variant="outline">
                Join Waitlist
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="ghost" size="lg">
                Get Notified
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Coming Soon Banner */}
      <section className="py-12 bg-gradient-to-r from-amber-50 to-orange-50 border-y border-amber-200">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-amber-900 mb-2">
              🏗️ Under Active Development
            </h2>
            <p className="text-amber-700 max-w-2xl mx-auto">
              Our team is working hard to bring you the most advanced meeting
              bot API. Expected launch: Q2 2024. Join our waitlist to be the
              first to know when it's ready!
            </p>
          </div>
        </div>
      </section>

      {/* Planned Features Section */}
      <section className="py-24 bg-muted/30">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Planned Features
            </h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Advanced meeting automation capabilities in development
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <Card key={index} className="border-border/50 relative">
                <div className="absolute top-3 right-3">
                  <span className="inline-flex items-center rounded-full bg-amber-100 px-2 py-1 text-xs font-medium text-amber-800">
                    In Development
                  </span>
                </div>
                <CardHeader>
                  <div className="rounded-md bg-primary/10 p-2 w-fit">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Preview API Section */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              API Preview
            </h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Get a sneak peek at the planned API structure
            </p>
          </div>

          <div className="mx-auto max-w-4xl">
            <Card className="border-dashed border-2 border-amber-200 bg-amber-50/50">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Code className="h-5 w-5" />
                  <span>Meet Bot API (Preview)</span>
                  <span className="text-xs bg-amber-100 text-amber-800 px-2 py-1 rounded-full">
                    Coming Soon
                  </span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="rounded-md bg-muted/50 p-4">
                  <pre className="text-sm leading-relaxed overflow-x-auto">
                    <code className="text-muted-foreground font-mono">
                      {`// Schedule a meeting with AI assistance
const response = await fetch('https://api.g3o.dev/v1/meet-bot/schedule', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    participants: ['user@example.com', 'team@company.com'],
    duration: 60,
    preferences: {
      time_zone: 'UTC',
      working_hours: '09:00-17:00'
    },
    meeting_type: 'video_call'
  })
});

const meeting = await response.json();
console.log(meeting.meeting_url);`}
                    </code>
                  </pre>
                </div>
                <div className="mt-4 p-3 bg-amber-100 rounded-md border border-amber-200">
                  <p className="text-sm text-amber-800">
                    <strong>Note:</strong> This is a preview of the planned API
                    structure. The actual implementation may vary.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Planned Capabilities Section */}
      <section className="py-24 bg-muted/30">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Planned Capabilities
            </h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Complete meeting automation and intelligence
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 max-w-4xl mx-auto">
            {plannedFeatures.map((feature, index) => (
              <div
                key={index}
                className="flex items-center space-x-3 p-4 rounded-lg bg-background border border-border/50"
              >
                <div className="h-5 w-5 rounded-full border-2 border-amber-400 flex items-center justify-center flex-shrink-0">
                  <div className="h-2 w-2 rounded-full bg-amber-400"></div>
                </div>
                <span className="text-sm font-medium">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Waitlist CTA Section */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <div className="rounded-2xl bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 p-12 shadow-lg border border-border/50">
              <div className="mb-4">
                <Bot className="h-16 w-16 text-primary mx-auto" />
              </div>

              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">
                Be the first to experience Meet Bot
              </h2>

              <p className="text-lg leading-8 text-muted-foreground max-w-2xl mx-auto mb-8">
                Join our exclusive waitlist and get early access when Meet Bot
                API launches. Plus, get 3 months free when you're among the
                first 100 users!
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button size="lg">
                  Join Waitlist
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>

                <Button variant="outline" size="lg">
                  Get Updates
                </Button>
              </div>

              <div className="mt-6 text-sm text-muted-foreground">
                Early access • 3 months free • No credit card required
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
