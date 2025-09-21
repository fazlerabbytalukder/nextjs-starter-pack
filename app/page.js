import Link from "next/link";

export default function Home() {
  return (
    <div className="custom-container">
      <p className="text-base sm:text-3xl font-bold text-primary font-payfair">
        Next js starter pack
      </p>
      <Link href="/auth/login" className="text-secondary">
        Login
      </Link>
    </div>
  );
}
