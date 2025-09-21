import Link from "next/link";

export default function Home() {
  return (
    <div>
      <p>Next js starter pack</p>
      <Link href="/auth/login">Login</Link>
    </div>
  );
}
