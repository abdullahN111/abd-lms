import { buttonVariants } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { ReactNode } from "react";
import Logo from "@/public/logo.png";

const AuthLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="relative flex min-h-svh flex-col items-center justify-center">
      <Link
        href="/"
        className={buttonVariants({
          variant: "outline",
          className: "absolute left-5 top-5",
        })}
      >
        <ArrowLeft className="size-5" />
        Back
      </Link>
      <div className="flex w-full max-w-sm flex-col gap-6">
        <Link
          href="/"
          className="flex items-center gap-2 self-center font-medium text-lg"
        >
          {" "}
          <Image src={Logo} alt="AbdLMS." width={34} height={34} /> AbdLMS.
        </Link>
        {children}
        <div className="text-balance text-center text-[13px] text-muted-foreground">
          By clicking continue, you agree to our <span className="hover:text-primary hover:underline hover:cursor-default">Terms of Servie</span>{" "}
          and <span className="hover:text-primary hover:underline hover:cursor-default">Privacy Policy</span>.
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
