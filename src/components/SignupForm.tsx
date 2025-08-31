"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
// import { FadeIn } from "@/components/FadeIn";
import { Label } from "@/components/ui/label";

export function SignupForm() {
  return (
    <div className="w-full max-w-6xl mx-auto border border-border rounded-xl overflow-hidden bg-card/40">
      <div className="grid lg:grid-cols-2">
        <div className="hidden lg:block p-6 lg:p-8 border-b lg:border-r lg:border-b-0 border-border bg-[radial-gradient(900px_380px_at_50%_-40%,_color-mix(in_oklab,_var(--color-primary)_32%,_transparent),_transparent)]">
          <div className="h-full rounded-2xl bg-black/30 p-8 flex flex-col justify-end backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="space-y-3 text-white/90"
            >
              <div className="text-sm/relaxed text-white/70">OnlyPipe</div>
              <h2 className="text-3xl font-semibold">Get Started with Us</h2>
              <p className="text-white/70 max-w-sm">
                Complete these easy steps to register your account.
              </p>

              <div className="mt-6 space-y-3">
                <div className="flex items-center gap-3 bg-white/10 text-white/90 rounded-md p-3">
                  <span className="size-6 rounded-full bg-white/80 text-black text-xs grid place-items-center">
                    1
                  </span>
                  <span>Sign up your account</span>
                </div>
                <div className="flex items-center gap-3 bg-white/5 text-white/70 rounded-md p-3">
                  <span className="size-6 rounded-full bg-white/20 text-white text-xs grid place-items-center">
                    2
                  </span>
                  <span>Set up your workspace</span>
                </div>
                <div className="flex items-center gap-3 bg-white/5 text-white/70 rounded-md p-3">
                  <span className="size-6 rounded-full bg-white/20 text-white text-xs grid place-items-center">
                    3
                  </span>
                  <span>Set up your profile</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="p-4 sm:p-6 lg:p-8">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="max-w-md mx-auto lg:ml-auto space-y-6"
          >
            <div className="space-y-1">
              <h3 className="text-xl sm:text-2xl font-semibold">
                Sign Up Account
              </h3>
              <p className="text-sm text-muted-foreground">
                Enter your personal data to create your account.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Button variant="outline" className="w-full">
                Google
              </Button>
              <Button variant="outline" className="w-full">
                Github
              </Button>
            </div>

            <div className="relative">
              <div
                className="absolute inset-0 flex items-center"
                aria-hidden="true"
              >
                <div className="w-full border-t border-border" />
              </div>
              <div className="relative flex justify-center text-xs">
                <span className="bg-background px-2 text-muted-foreground">
                  Or
                </span>
              </div>
            </div>

            <form className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div className="space-y-2">
                  <Label className="text-sm">First Name</Label>
                  <input
                    type="text"
                    placeholder="eg. John"
                    className="w-full h-10 px-3 rounded-md bg-input/30 border border-input focus:outline-none focus:ring-2 focus:ring-primary/40"
                  />
                </div>
                <div className="space-y-2">
                  <Label className="text-sm">Last Name</Label>
                  <input
                    type="text"
                    placeholder="eg. Francisco"
                    className="w-full h-10 px-3 rounded-md bg-input/30 border border-input focus:outline-none focus:ring-2 focus:ring-primary/40"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label className="text-sm">Email</Label>
                <input
                  type="email"
                  placeholder="eg. johnfrans@gmail.com"
                  className="w-full h-10 px-3 rounded-md bg-input/30 border border-input focus:outline-none focus:ring-2 focus:ring-primary/40"
                />
              </div>

              <div className="space-y-2">
                <Label className="text-sm">Password</Label>
                <input
                  type="password"
                  placeholder="Enter your password"
                  className="w-full h-10 px-3 rounded-md bg-input/30 border border-input focus:outline-none focus:ring-2 focus:ring-primary/40"
                />
                <p className="text-xs text-muted-foreground">
                  Must be at least 8 characters.
                </p>
              </div>

              <Button className="w-full">Sign Up</Button>

              <p className="text-sm text-muted-foreground text-center">
                Already have an account?{" "}
                <button className="text-primary hover:underline focus:outline-none focus:underline">
                  Log in
                </button>
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default SignupForm;
