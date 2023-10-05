import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="bg-red-500">
      <h1 className="text-black">tailwind test</h1>
    </div>
  );
}

// import type { NextPage } from "next";

// const Home: NextPage = () => {
//   return (
//     <div className="bg-red-500">
//       <h1 className="text-black">it works</h1>
//     </div>
//   );
// };

// export default Home;
