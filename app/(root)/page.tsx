import LeftSidebar from "@/components/shared/LeftSidebar";

// (ROOT) -> HOME

export default function Home(): React.ReactElement {
  return (
    <main className="py-2 px-2">
      <div className="flex items-center justify-between mx-auto max-w-7xl">
        {/* LEFT */}
        <div className="inline-flex items-center">
          <LeftSidebar />
        </div>
        {/* MIDDLE */}
        <div className="inline-flex items-center">MIDDLE</div>
        {/* RIGHT */}
        <div className="inline-flex items-center">RIGHT</div>
      </div>
    </main>
  );
}
