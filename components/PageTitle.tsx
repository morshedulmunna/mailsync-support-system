import { logo } from "@/assets";
import Image from "next/image";

type Props = {
  breadCrumbItems: (
    | {
        label: string;
        path: string;
      }
    | {
        label: string;
        path: string;
        active: boolean;
      }
  )[];
};

export default function PageTitle({ breadCrumbItems }: Props) {
  return (
    <>
      <div className="flex justify-between items-center">
        <div className="mb-2 text-blue-500/50  text-lg">
          <Image src={logo} alt="logo" />
        </div>
        <div>
          {breadCrumbItems.map((each, index) => (
            <div className="mb-2 text-blue-500/50 text-sm" key={index}>
              <span className="px-4">{each.label}</span>
              <span>{each.path}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
