import Footer from "@/components/Footer";

export const metadata = {
  title: "Hafidz | About"
};
export default function Layout({ children }) {
  return (
    <>
      {children}
      <Footer />
    </>
  );
}
