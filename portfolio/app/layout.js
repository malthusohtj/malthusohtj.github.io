import Bio from "./bio";
import NavBar from "./navbar";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="h-screen flex flex-row bg-black text-white">
        <div className='basis-1/3 px-7'>
          <Bio />
        </div>
        <div className='basis-2/3 flex flex-col'>
          <div className="my-14">
            <NavBar />
          </div>
          <div className="overflow-y-auto scroll-smooth px-7">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
