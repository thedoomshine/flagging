import type { MDXModuleProps } from '../../h/[color]/page'

export default async function MDXComponent({ color }: { color: string }) {
	const { default: MDXContent, meta } = (await import(
		`../../h/_colors/${color}.mdx`
	)) as MDXModuleProps

	return (
		<>
			<h1>
				{meta.name} | {meta.title}
			</h1>
			<MDXContent />
		</>
	)
}
