import Link from 'next/link'

const hooks = [
  { name: 'useEyeDropper', href: '/use-eye-dropper' },
  { name: 'useMediaQuery', href: '/use-media-query' },
] as const

export default function Home() {
  return (
    <main className="mx-auto flex max-w-md flex-col gap-2 p-6">
      <h1 className="text-2xl font-semibold">React custom hooks examples</h1>

      <ul className="ml-4 w-full max-w-sm list-disc">
        {hooks.map((hook) => (
          <li key={hook.name}>
            <Link href={hook.href} className="text-blue-600 hover:underline">
              {hook.name}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  )
}
