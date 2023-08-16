"use client";

import Loading from "@/components/Loading";
import { usePostEmailMutation } from "@/redux/email/emailApi";
import { emailSchema } from "@/types";
import { ErrorMessage, Field, Form, Formik, FormikValues } from "formik";
import { toast } from "react-toastify";

type Props = {};

export default function Compose({}: Props) {
  const [postEmail, { data, error, isSuccess, isLoading, isError, status }] =
    usePostEmailMutation<any>();

  const initialValues = {
    email: "",
    subject: "",
    body: "",
  };

  const handleSubmit = (
    values: FormikValues,
    { resetForm }: { resetForm: () => void }
  ) => {
    const obj = {
      sendingEmail: values.email,
      subject: values.subject,
      body: values.body,
    };

    console.log(obj);

    postEmail(obj);

    resetForm();
  };

  if (isLoading) {
    <Loading />;
  }

  if (error) {
    toast.error(error?.data?.message);
  }

  if (data) {
    toast.success("Email Sent Successfully!");
  }

  /**
   * On editor body change
   */

  return (
    <div className="p-6 overflow-hidden  ">
      <Formik
        initialValues={initialValues}
        validationSchema={emailSchema}
        onSubmit={handleSubmit}
      >
        <Form className="shadow p-3 rounded-md">
          {/* Email address */}
          <div className="flex flex-col mb-2 text-sm text-gray-600">
            <label htmlFor="email">Email Address</label>
            <Field
              className="border mt-1 outline-none px-1 text-sm py-2 rounded"
              type="text"
              id="email"
              name="email"
              placeholder="Email address"
            />
            <ErrorMessage
              className="text-red-500 text-xs"
              name="email"
              component="div"
            />
          </div>
          {/* Subject */}
          <div className="flex flex-col mb-2 text-sm text-gray-600">
            <label htmlFor="subject">Subject</label>
            <Field
              className="border mt-1 outline-none px-1 text-sm py-2 rounded"
              type="text"
              id="subject"
              name="subject"
              placeholder="Subject"
            />
            <ErrorMessage
              className="text-red-500 text-xs"
              name="subject"
              component="div"
            />
          </div>

          {/* area text */}
          <div className="flex flex-col mb-2 text-sm text-gray-600">
            <label htmlFor="body">Email Body </label>
            <Field
              as="textarea"
              rows={10}
              cols={3}
              className={
                "resize-none mt-1 outline-none p-2 text-sm py-2 rounded"
              }
              placeholder="type problem details"
              id="body"
              name="body"
            />
            <ErrorMessage
              name="body"
              className="text-red-500 text-xs"
              component="div"
            />
          </div>

          <div className="flex justify-end space-x-4">
            {/* <button
              className="bg-orange-500 hover:bg-orange-500/50 w-fit px-4 py-1 rounded text-white my-4"
              type="submit"
            >
              Draft
            </button> */}
            <button
              className="bg-red-500 hover:bg-red-500/50 w-fit px-4 py-1 rounded text-white my-4"
              type="submit"
            >
              Send Email
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
}
