import { SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";
import React from "react";
import { Link } from "react-router-dom";
import NavItems from "./NavItems";
import MobileNav from "./MobileNav";
import { Button } from "./ui/button";

const NavBar = () => {
  // const navigate = useNavigate();

  return (
    <>
      <header className="w-full border-b">
        <div className="wrapper flex items-center justify-between">
          <Link to="/" className="w-36">
            <h1 className="text-3xl">App</h1>
          </Link>

          <SignedIn>
            <nav className="md:flex-between hidden w-full max-w-xs">
              <NavItems />
            </nav>
          </SignedIn>

          <div className="flex w-32 justify-end gap-3">
            <SignedIn>
              <UserButton afterSignOutUrl="/sign-in" />
              <MobileNav />
            </SignedIn>
            <SignedOut>
              <Button asChild className="rounded-full" size="lg">
                <Link to="/sign-in">Login</Link>
              </Button>
            </SignedOut>
          </div>
        </div>
      </header>
    </>
  );
};

export default NavBar;
