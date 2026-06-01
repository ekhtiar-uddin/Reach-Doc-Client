"use client";
import { loginUser } from "@/services/auth/loginUser";
import { useActionState, useEffect } from "react";
import { toast } from "sonner";
import InputFieldError from "./shared/InputFieldError";
import { Button } from "./ui/button";
import { Field, FieldDescription, FieldGroup, FieldLabel } from "./ui/field";
import { Input } from "./ui/input";

const DEMO_CREDENTIALS = {
  admin: { email: "admin.souvik@gmail.com", password: "secure123" },
  patient: { email: "patient2@gmail.com", password: "123456" },
  doctor: { email: "doctor1@gmail.com", password: "secure123" },
};

const LoginForm = ({ redirect }: { redirect?: string }) => {
  const [state, formAction, isPending] = useActionState(loginUser, null);

  useEffect(() => {
    if (state && !state.success && state.message) {
      toast.error(state.message);
    }
  }, [state]);

  const fillCredentials = (role: keyof typeof DEMO_CREDENTIALS) => {
    const emailInput = document.getElementById("email") as HTMLInputElement;
    const passwordInput = document.getElementById(
      "password",
    ) as HTMLInputElement;
    if (emailInput && passwordInput) {
      emailInput.value = DEMO_CREDENTIALS[role].email;
      passwordInput.value = DEMO_CREDENTIALS[role].password;
    }
  };

  return (
    <form action={formAction}>
      {redirect && <input type="hidden" name="redirect" value={redirect} />}
      <FieldGroup>
        <div className="flex items-center gap-2 flex-wrap">
          <Button
            type="button"
            className="hover:bg-primary hover:text-white"
            variant="outline"
            size="sm"
            onClick={() => fillCredentials("admin")}
          >
            Admin
          </Button>
          <Button
            type="button"
            className="hover:bg-primary hover:text-white"
            variant="outline"
            size="sm"
            onClick={() => fillCredentials("patient")}
          >
            Patient
          </Button>
          <Button
            type="button"
            className="hover:bg-primary hover:text-white"
            variant="outline"
            size="sm"
            onClick={() => fillCredentials("doctor")}
          >
            Doctor
          </Button>
        </div>

        <div className="grid grid-cols-1 gap-4">
          <Field>
            <FieldLabel htmlFor="email">Email</FieldLabel>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="m@example.com"
            />
            <InputFieldError field="email" state={state} />
          </Field>

          <Field>
            <FieldLabel htmlFor="password">Password</FieldLabel>
            <Input
              id="password"
              name="password"
              type="password"
              placeholder="Enter your password"
            />
            <InputFieldError field="password" state={state} />
          </Field>
        </div>

        <FieldGroup className="mt-4">
          <Field>
            <Button type="submit" disabled={isPending}>
              {isPending ? "Logging in..." : "Login"}
            </Button>
            <FieldDescription className="px-6 text-center">
              Don&apos;t have an account?{" "}
              <a href="/register" className="text-blue-600 hover:underline">
                Sign up
              </a>
            </FieldDescription>
            <FieldDescription className="px-6 text-center">
              <a
                href="/forget-password"
                className="text-blue-600 hover:underline"
              >
                Forgot password?
              </a>
            </FieldDescription>
          </Field>
        </FieldGroup>
      </FieldGroup>
    </form>
  );
};

export default LoginForm;
