import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface dropDown {
  button: JSX.Element;
  context: { btn: JSX.Element }[];
}

export function Dropdown({ button, context }: dropDown) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>{button}</DropdownMenuTrigger>
      <DropdownMenuContent>
        {context?.map((each, index) => (
          <DropdownMenuLabel key={index}>{each.btn}</DropdownMenuLabel>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
