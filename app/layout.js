import Bio from "./bio";
import NavBar from "./navbar";

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="h-fit flex flex-row bg-black text-white">
        <div className='basis-1/3 px-7'>
          <Bio classProps="sticky top-0" />
        </div>
        <div className='basis-2/3 flex flex-col h-fit'>
          <NavBar classProps="py-7 sticky top-0 bg-black/70" />
          <div className="px-7">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
