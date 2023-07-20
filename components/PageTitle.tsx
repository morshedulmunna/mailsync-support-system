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
      <div className="flex justify-between items-center">
        <div className="mb-2 text-blue-500/50 italic text-sm">{title}</div>
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
