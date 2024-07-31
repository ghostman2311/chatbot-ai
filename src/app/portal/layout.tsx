import PortalBanner from "@/components/portal/banner";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col md:h-screen">
      <PortalBanner />
      <div className="container flex justify-center flex-1 h-0 mt-12">
        {children}
      </div>
    </div>
  );
};

export default Layout;
