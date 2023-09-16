import Sidebar from "@/components/ui/structuralComponents/Sidebar";
import "../../../globals.css";

export const metadata = {
  title: "moviedetails",
  description: "Movie details",
  icons: {
    icon: "/tvlogo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section lang="en">
      <section>
        <Sidebar>
          <section>{children}</section>
        </Sidebar>
      </section>
    </section>
  );
}
