import EmailTopBar from "@/components/EmailTopBar";

type Props = {};

export default function MailDetails({}: Props) {
  return (
    <div className="bg-white h-full w-full overflow-hidden p-2">
      <EmailTopBar />

      <div className="h-full w-full bg-white  overflow-y-scroll p-4">
        <p>Details Email</p>
      </div>
    </div>
  );
}
