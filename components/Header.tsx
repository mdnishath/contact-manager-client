import React from "react";
import { ModeToggle } from "./ModeToggle";
import Container from "./Container";
import Link from "next/link";

export const Header = () => {
  return (
    <div className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 py-3">
      <Container>
        <div className="flex items-center gap-10">
          <div>Contact Pro</div>
          <div className="flex flex-grow justify-end">
            <ul className="flex gap-8">
              <li>
                <Link href={"/login"}>Login</Link>
              </li>
              <li>
                <Link href={"/register"}>Register</Link>
              </li>
            </ul>
          </div>
          <div>
            <ModeToggle />
          </div>
        </div>
      </Container>
    </div>
  );
};
