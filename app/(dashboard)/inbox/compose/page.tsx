"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";

type Props = {};

export default function Compose({}: Props) {
  const [editorState, setEditorState] = useState<any>();

  console.log(editorState);

  /**
   * On editor body change
   */
  const onEditorStateChange = (editorStates: any) => {
    setEditorState(editorStates);
  };

  return (
    <div className="p-6 overflow-hidden  ">
      <form action="">
        {/* Email */}

        <div className="bg-white p-4 rounded">
          <label className="text-sm pb-1  block" htmlFor="email">
            Subject
          </label>
          <Input
            type="text"
            id="email"
            className="outline-none focus:outline-none placeholder:text-gray-300"
            placeholder="Typing Subject"
          />
        </div>

        {/* Category */}
        <div className="bg-white p-4 rounded mt-4">
          <label className="text-sm pb-1  block" htmlFor="email">
            Category
          </label>
          <Select>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select Category" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="programming">Programming</SelectItem>
                <SelectItem value="server-issue">Server Issue</SelectItem>
                <SelectItem value="coding-problem">Coding Problem</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        {/* Text Box */}
        <div className="bg-white p-4 rounded mt-4">
          <label className="text-sm pb-1  block" htmlFor="email">
            Problem Details
          </label>
          <textarea
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
            >
              Send
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
}
