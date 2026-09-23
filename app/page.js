import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <h2>Go to http://localhost:3000/dashboard</h2>
      <Button>Click Me!</Button>
    </div>
  );
}

// To redirect for the url http://localhost:3000/dashboard instead of manual typing then use the following code 
// import { Button } from "@/components/ui/button";
// import Link from "next/link";

// export default function Home() {
//   return (
//     <div>
//       <h2>Go to http://localhost:3000/dashboard</h2>

//       <Link href="/dashboard">
//         <Button>Click Me!</Button>
//       </Link>
//     </div>
//   );
// }
