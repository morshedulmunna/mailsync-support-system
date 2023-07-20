type Props = {
  children: React.ReactNode;
};

export default function MainLayout({ children }: Props) {
  return (
    <>
      {/* <Navbar /> */}
      <main className="">{children}</main>
    </>
  );
}
