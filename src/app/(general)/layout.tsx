import {Navbar} from "@/app/components/navbar/Navbar";
export default function PublicLayout({
 children
}: {
 children: React.ReactNode;
}) {
  return (
	<>
	<Navbar/>
	<main className="flex flex-col items-center p-24">
	  <span className="text-lg"> Layout page</span>
	  {children}
	</main>
	</>
	
  );
}
