"use client";

import Loading from "@/components/Loading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { usePostEmailMutation } from "@/redux/email/emailApi";
import { useState } from "react";
import { toast } from "react-toastify";

type Props = {};

export default function Compose({}: Props) {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");

  const [postEmail, { data, error, isSuccess, isLoading, isError, status }] =
    usePostEmailMutation();

  /**
   * On editor body change
   */
  const handleSubmit = (e: any) => {
    e.preventDefault();
    const object = {
      sendingEmail: email,
      subject,
      body,
    };

    setEmail("");
    setSubject("");
    setBody("");
    postEmail(object);
  };

  if (isLoading) {
    <Loading />;
  }
  if (isError) {
    toast.error("Something Wrong!");
    console.log(error);
  }

  if (isSuccess) {
    toast.success("Your message has been sent successfully!");
  }

  return (
    <div className="p-6 overflow-hidden  ">
      <form action="">
        {/* Email */}
        <div className="bg-white p-4 mb-5 rounded">
          <label className="text-sm pb-1  block" htmlFor="email">
            Email Address
          </label>
          <Input
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            id="email"
            name="email"
            value={email}
            className="outline-none focus:outline-none placeholder:text-gray-300"
            placeholder="Email Address"
          />
        </div>
        {/* Email */}

        <div className="bg-white p-4 rounded">
          <label className="text-sm pb-1  block" htmlFor="subject">
            Subject
          </label>
          <Input
            onChange={(e) => setSubject(e.target.value)}
            type="text"
            value={subject}
            id="subject"
            name="subject"
            className="outline-none focus:outline-none placeholder:text-gray-300"
            placeholder="Typing Subject"
          />
        </div>

        {/* Category */}

        {/* Text Box */}
        <div className="bg-white p-4 rounded mt-4">
          <label className="text-sm pb-1  block" htmlFor="email">
            Problem Details
          </label>
          <textarea
            value={body}
            onChange={(e) => setBody(e.target.value)}
            className="border w-full text-sm p-2 rounded outline-none"
            placeholder="Write your problem Details......."
            name="description"
            id=""
            cols={20}
            rows={10}
          ></textarea>
        </div>

        <div className="mt-6 bg-white rounded">
          <div className="space-x-4  float-right mt-4">
            <Button
              className="px-12 bg-blue-500 hover:bg-blue-500/80"
              type="submit"
            >
              Draft
            </Button>

            <Button
              className="px-12 bg-red-500 hover:bg-red-500/80 "
              type="submit"
              onClick={handleSubmit}
            >
              Send
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
}
