import EhNavigation from "@/components/EhNavigation";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-screen bg-[#BCE4FA]">
      <EhNavigation />
      {children}
    </div>
  );
}
