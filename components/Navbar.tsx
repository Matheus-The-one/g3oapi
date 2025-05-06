"use client";

import * as React from "react";
import { useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Menu, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";

const apiServices: { title: string; href: string; description: string }[] = [
  {
    title: "Payment API",
    href: "/services/payment-api",
    description:
      "Secure payment processing API for startups to handle transactions efficiently.",
  },
  {
    title: "Authentication",
    href: "/services/authentication-api",
    description:
      "User authentication and authorization APIs for secure access management.",
  },
  {
    title: "Data Storage",
    href: "/services/data-storage",
    description:
      "Scalable data storage solutions for growing startups with flexible pricing.",
  },
  {
    title: "Analytics API",
    href: "/services/analytics",
    description:
      "Track user behavior and performance metrics with our analytics API.",
  },
  {
    title: "Integration Hub",
    href: "/services/integration-hub",
    description:
      "Connect your applications with third-party services through our integration APIs.",
  },
  {
    title: "AI Services",
    href: "/services/ai-services",
    description:
      "Access machine learning and AI capabilities through simple API endpoints.",
  },
];

export function Navbar() {
  const [isServicesVisible, setIsServicesVisible] = useState(false);
  const [isApiProductsVisible, setIsApiProductsVisible] = useState(false);
  return (
    <>
      {/* Desktop Navigation - Only visible on md and larger screens */}
      <div className="hidden md:block">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Services</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                  <li className="row-span-3">
                    <NavigationMenuLink asChild>
                      <a
                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-muted p-6 no-underline outline-none focus:shadow-md"
                        href="/"
                      >
                        <div className="mb-2 mt-4 text-lg font-medium">
                          g3o api
                        </div>
                        <p className="text-sm leading-tight text-muted-foreground">
                          Powerful, reliable APIs for startups and funded
                          projects.
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                  <ListItem href="/pricing" title="Pricing">
                    Flexible pricing plans designed for startups at every stage.
                  </ListItem>
                  <ListItem href="/docs" title="Documentation">
                    Comprehensive guides to integrate our APIs into your
                    projects.
                  </ListItem>
                  <ListItem href="/support" title="Support">
                    24/7 developer support to help you succeed.
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>API Products</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                  {apiServices.map((service) => (
                    <ListItem
                      key={service.title}
                      title={service.title}
                      href={service.href}
                    >
                      {service.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/pricing" passHref>
                <p>Pricing</p>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/docs" passHref>
                <p>Documentation</p>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      {/* Mobile Navigation - Only shows the burger menu button */}
      <div className="md:hidden p-4 justify-end ">
        <Sheet>
          <SheetTrigger asChild>
            <Button className="justify-end" variant="ghost" size="icon">
              <Menu className="j h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <SheetTitle className="text-left hidden">Menu</SheetTitle>
            <nav className="flex flex-col gap-4 mt-8">
              <Link href="/" className="text-lg font-semibold">
                Home
              </Link>
              <button
                onClick={() => setIsServicesVisible(!isServicesVisible)}
                className="flex items-center justify-between w-full text-lg font-semibold text-left"
              >
                <span>Services</span>
                <ChevronDown
                  className={`h-4 w-4 transition-transform ${
                    isServicesVisible ? "rotate-180" : ""
                  }`}
                />
              </button>
              {isServicesVisible && (
                <div className="pl-4 space-y-3 mt-2">
                  <Link
                    href="/pricing"
                    className="block text-sm hover:underline"
                  >
                    Pricing
                  </Link>
                  <Link href="/docs" className="block text-sm hover:underline">
                    Documentation
                  </Link>
                  <Link
                    href="/support"
                    className="block text-sm hover:underline"
                  >
                    Support
                  </Link>
                </div>
              )}
              <button
                onClick={() => setIsApiProductsVisible(!isApiProductsVisible)}
                className="flex items-center justify-between w-full text-lg font-semibold text-left mt-2"
              >
                <span>API Products</span>
                <ChevronDown
                  className={`h-4 w-4 transition-transform ${
                    isApiProductsVisible ? "rotate-180" : ""
                  }`}
                />
              </button>
              {isApiProductsVisible && (
                <div className="pl-4 space-y-3 mt-2">
                  {apiServices.map((service) => (
                    <Link
                      key={service.title}
                      href={service.href}
                      className="block text-sm hover:underline"
                    >
                      {service.title}
                    </Link>
                  ))}
                </div>
              )}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
