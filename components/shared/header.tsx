"use client";

import { authClient } from "@/lib/auth-client";
import { NAV_LINKS } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../ui/navigation-menu";
import { Button } from "../ui/button";

function ListItem({ href, title }: { href: string; title: string }) {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          href={href}
          className="block rounded-md px-2 py-1 hover:bg-accent transition text-sm"
        >
          {title}
        </Link>
      </NavigationMenuLink>
    </li>
  );
}

// Use the children of Products as the main nav
const MAIN_NAV = NAV_LINKS.find((l) => l.label === "Products")?.children || [];

export default function Header() {
  const { data: session } = authClient.useSession();

  return (
    <header className="flex items-center justify-between py-4 px-4 xl:px-0 max-w-7xl bg-white mx-auto">
      <Link href="/">
        <Image src="/images/logo.png" alt="My Store" width={100} height={100} />
      </Link>
      <nav className="flex-1 flex justify-center">
        <NavigationMenu>
          <NavigationMenuList>
            {MAIN_NAV.map((link: any) => (
              <NavigationMenuItem key={link.label}>
                {link.children ? (
                  <>
                    <NavigationMenuTrigger>{link.label}</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="min-w-[220px] p-4">
                        {/* For Kids: Boys/Girls as sub-headers, for others: just links */}
                        {link.label === "Kids" ? (
                          link.children.map((sub: any) => (
                            <div key={sub.label} className="mb-4">
                              <div className="font-medium text-sm mb-1">
                                {sub.label}
                              </div>
                              <ul className="space-y-1 ml-2">
                                {sub.children &&
                                  sub.children.map((item: any) => (
                                    <ListItem
                                      key={item.href}
                                      href={item.href}
                                      title={item.label}
                                    />
                                  ))}
                              </ul>
                            </div>
                          ))
                        ) : (
                          <ul className="space-y-1">
                            {link.children.map((item: any) => (
                              <ListItem
                                key={item.href}
                                href={item.href}
                                title={item.label}
                              />
                            ))}
                          </ul>
                        )}
                      </div>
                    </NavigationMenuContent>
                  </>
                ) : (
                  <NavigationMenuLink asChild>
                    <Link href={link.href} className="px-4 py-2">
                      {link.label}
                    </Link>
                  </NavigationMenuLink>
                )}
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </nav>
      <div className="flex items-center gap-2">
        {session?.user ? (
          <Button
            className="rounded-full cursor-pointer"
            onClick={() => authClient.signOut()}
            variant="outline"
          >
            Logout
          </Button>
        ) : (
          <>
            <Button className="rounded-full" variant="outline" asChild>
              <Link href="/login">Login</Link>
            </Button>
            <Button className="rounded-full" asChild>
              <Link href="/register">Register</Link>
            </Button>
          </>
        )}
      </div>
    </header>
  );
}
