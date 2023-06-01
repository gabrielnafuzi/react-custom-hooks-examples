import Link from 'next/link'

type ExamplesLayoutProps = {
  children: React.ReactNode
}

export default function ExamplesLayout({ children }: ExamplesLayoutProps) {
  return (
    <main className="flex min-h-screen flex-col items-center p-6">
      <Link href="/" className="mb-6 text-blue-500 hover:underline">
        ← Go back home
      </Link>

      {children}
    </main>
  )
}
