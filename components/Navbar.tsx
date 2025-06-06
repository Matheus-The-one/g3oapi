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
import { Menu, ChevronDown, Image, Scissors, Bot, Film } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";

const apiServices: {
  title: string;
  href: string;
  description: string;
  icon: React.ElementType;
  isUnderDevelopment?: boolean;
}[] = [
  {
    title: "AI Image Generation",
    href: "/services/ai-image-generation",
    description:
      "Generate stunning images from text prompts using advanced AI models.",
    icon: Image,
  },
  {
    title: "Background Removal AI",
    href: "/services/background-removal",
    description:
      "Remove backgrounds from images instantly with AI-powered precision.",
    icon: Scissors,
  },
  {
    title: "Rotten Tomato API",
    href: "/services/rotten-tomato",
    description: "Access comprehensive movie data, ratings, and reviews.",
    icon: Film,
  },
  {
    title: "Meet Bot API",
    href: "/services/meet-bot",
    description: "Intelligent meeting assistant and automation bot.",
    icon: Bot,
    isUnderDevelopment: true,
  },
];

export function Navbar() {
  const [isApiProductsVisible, setIsApiProductsVisible] = useState(false);

  return (
    <>
      {/* Desktop Navigation */}
      <div className="hidden md:block">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>APIs</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-2 p-3 w-[320px] lg:w-[380px]">
                  <li className="mb-2">
                    <NavigationMenuLink asChild>
                      <a
                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-muted p-4 no-underline outline-none focus:shadow-md"
                        href="/"
                      >
                        <div className="mb-1 text-base font-medium">
                          g3o API
                        </div>
                        <p className="text-xs leading-tight text-muted-foreground">
                          AI APIs live on RapidAPI
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                  {apiServices.map((service) => (
                    <ListItem
                      key={service.title}
                      title={service.title}
                      href={service.href}
                      icon={service.icon}
                      isUnderDevelopment={service.isUnderDevelopment}
                    >
                      {service.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/pricing" passHref>
                <p className="text-sm font-medium hover:text-primary transition-colors">
                  Pricing
                </p>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden p-4 justify-end">
        <Sheet>
          <SheetTrigger asChild>
            <Button className="justify-end" variant="ghost" size="icon">
              <Menu className="h-5 w-5" />
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
                onClick={() => setIsApiProductsVisible(!isApiProductsVisible)}
                className="flex items-center justify-between w-full text-lg font-semibold text-left"
              >
                <span>APIs</span>
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
                      className={`block text-sm hover:underline ${
                        service.isUnderDevelopment
                          ? "underline decoration-dashed"
                          : ""
                      }`}
                    >
                      {service.title}
                      {service.isUnderDevelopment && (
                        <span className="ml-1 text-xs text-muted-foreground">
                          (Coming Soon)
                        </span>
                      )}
                    </Link>
                  ))}
                </div>
              )}

              <Link href="/pricing" className="text-lg font-semibold">
                Pricing
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & {
    icon?: React.ElementType;
    isUnderDevelopment?: boolean;
  }
>(
  (
    { className, title, children, icon: Icon, isUnderDevelopment, ...props },
    ref
  ) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              "block select-none space-y-1 rounded-md p-2 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
              className
            )}
            {...props}
          >
            <div className="flex items-center space-x-2">
              {Icon && <Icon className="h-3 w-3 text-primary" />}
              <div
                className={`text-xs font-medium leading-none ${
                  isUnderDevelopment ? "underline decoration-dashed" : ""
                }`}
              >
                {title}
                {isUnderDevelopment && (
                  <span className="ml-1 text-xs text-muted-foreground">
                    (Soon)
                  </span>
                )}
              </div>
            </div>
            <p className="line-clamp-2 text-xs leading-snug text-muted-foreground mt-1">
              {children}
            </p>
          </a>
        </NavigationMenuLink>
      </li>
    );
  }
);
ListItem.displayName = "ListItem";
