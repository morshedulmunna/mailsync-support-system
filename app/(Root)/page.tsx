import Login from "@/components/Login";

type Props = {};

export default function HomePage({}: Props) {
  return (
    <div className="h-[100vh] bg-gradient-to-bl from-emerald-50 via-red-50 to-orange-50 flex justify-center items-center">
      <Login />
    </div>
  );
}
