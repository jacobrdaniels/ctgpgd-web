import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu"
import React from "react"
import { ModeToggle } from "@/components/mode-toggle";


const leaderboards_stuff = [
  {
    title: "Regular Tracks",
    description: "Tracks that are included in Vanilla Mario Kart Wii",
    href: "/leaderboard/rt",
  },
  {
    title: "Custom Tracks",
    description: "Tracks added in the CTGP Revolution Mod",
    href: "/leaderboard/ct",
  }
]

const Navbar = () => {



  return (
    <header className="fixed w-full justify-between flex flex-row items-center h-20 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="pl-20 invisible">
        <ModeToggle/>
      </div>
      <div>
        <NavigationMenu className='flex w-full'>
          <NavigationMenuList className='flex w-full'>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Leaderboards</NavigationMenuTrigger>
              <NavigationMenuContent>
                {/* <ul className="grid w-[400px] gap-3 p-4 md:w-100px md:grid-cols-1 lg:w-[600px] "> */}
                <ul className="min-w-[400px] p-4">
                  {leaderboards_stuff.map((leaderboards_stuff) => (
                    <ListItem
                      key={leaderboards_stuff.title}
                      title={leaderboards_stuff.title}
                      href={leaderboards_stuff.href}
                    >
                      {leaderboards_stuff.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Stats</NavigationMenuTrigger>
              <NavigationMenuContent>
                {/* ...existing code... */}
              </NavigationMenuContent>
            </NavigationMenuItem >
            <NavigationMenuItem>
              <NavigationMenuLink>
                <div className='px-4'>Documentation</div>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink>
                <div className='px-3'>About</div>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem className="ml-auto">
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      <div className="pr-20">
        <ModeToggle/>
      </div>
    </header>
  );
};

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
          }
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})


export default Navbar;