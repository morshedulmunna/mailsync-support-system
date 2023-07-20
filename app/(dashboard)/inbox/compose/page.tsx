"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";
import { Editor } from "react-draft-wysiwyg";

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
    <div className="pb-20 m-2  bg-white h-full p-4 rounded">
      <form action="">
        {/* Email */}
        <label className="text-base pb-1 block" htmlFor="email">
          Email Address
        </label>
        <Input
          type="text"
          id="email"
          className="outline-none focus:outline-none placeholder:text-gray-300"
          placeholder="example@gmail.com"
        />

        {/* Email */}
        <label className="text-base pb-1 mt-4 block" htmlFor="email">
          Subject
        </label>
        <Input
          type="text"
          id="email"
          className="outline-none focus:outline-none placeholder:text-gray-300"
          placeholder="Typing Subject"
        />

        {/* Category */}
        <div className="mt-4 ">
          <label htmlFor="select" className="text-base pb-1 block">
            Category
          </label>
          <Select>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select Category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">Light</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Text Box */}
        <div className="mt-6">
          <Editor
            placeholder="Write your problem........."
            editorState={editorState}
            toolbarClassName="toolbarClassName"
            wrapperClassName="wrapperClassName border border-1 border-soft-dark mb-3 rounded"
            editorClassName="editorClassName px-2 pt-0"
            editorStyle={{ minHeight: "300px" }}
            onEditorStateChange={onEditorStateChange}
          />
        </div>

        <div className="space-x-4 float-right mt-4">
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
      </form>
    </div>
  );
}
