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
  title: string;
};

export default function PageTitle({ breadCrumbItems, title }: Props) {
  return (
    <>
      <div>
        <div className="mb-2 text-blue-500/50 italic">{title}</div>
      </div>
    </>
  );
}
