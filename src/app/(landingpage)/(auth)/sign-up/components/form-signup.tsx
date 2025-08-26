"use client";
import { ActionResult } from "@/app/dashboard/(auth)/sign-in/form/actions";
import Link from "next/link";
import React from "react";
import { useFormState, useFormStatus } from "react-dom";
import { signUpUser } from "../lib/actions";
import { Button } from "@/components/ui/button";

const initialState: ActionResult = {
  errorTitle: null,
  errorDesc: [],
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button
      type="submit"
      disabled={pending}
      className="text-center h-12 text-flysha-black rounded-full bg-flysha-light-purple hover:bg-flysha-light-purple font-bold w-full p-[12px_30px] transition-all duration-300 hover:shadow-[0_10px_20px_0_#B88DFF] disabled:opacity-70"
    >
      {pending ? "Loading..." : "Create New Account"}
    </Button>
  );
}

export default function FormSignUp() {
  const [state, formAction] = useFormState(signUpUser, initialState);

  return (
    <form
      action={formAction}
      className="bg-white text-flysha-black w-[500px] flex flex-col rounded-[20px] gap-5 p-5"
    >
      {state?.errorTitle !== null && (
        <div className="bg-red-500 p-4 w-full rounded-lg text-white">
          <div className="font-bold mb-4">{state.errorTitle}</div>
          <ul className="list-disc list-inside ">
            {state.errorDesc?.map((value, index) => (
              <li key={index + value}>{value}</li>
            ))}
          </ul>
        </div>
      )}
      <div className="flex gap-5">
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="font-medium">
            Complete Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Write your name"
            className="rounded-full w-full p-[12px_20px] h-12 bg-[#EDE8F5] appearance-none outline-none font-semibold focus:ring-2 focus:ring-flysha-light-purple"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="passport" className="font-medium">
            No. Passport
          </label>
          <input
            type="text"
            name="passport"
            id="passport"
            placeholder="Write passport number"
            className="rounded-full w-full p-[12px_20px] h-12 bg-[#EDE8F5] appearance-none outline-none font-semibold focus:ring-2 focus:ring-flysha-light-purple"
          />
        </div>
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="email" className="font-medium">
          Email Address
        </label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Write your email"
          className="rounded-full w-full p-[12px_20px] h-12 bg-[#EDE8F5] appearance-none outline-none font-semibold focus:ring-2 focus:ring-flysha-light-purple"
        />
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="password" className="font-medium">
          Password
        </label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Type your password"
          className="rounded-full w-full p-[12px_20px] h-12 bg-[#EDE8F5] appearance-none outline-none font-semibold focus:ring-2 focus:ring-flysha-light-purple "
        />
      </div>
      <SubmitButton />
      <Link
        href={"/sign-in"}
        className="text-center h-12 text-flysha-black hover:text-white rounded-full bg-white hover:bg-flysha-black font-semibold w-full p-[12px_30px] border border-flysha-black transition-all duration-300"
      >
        Sign In
      </Link>
    </form>
  );
}
