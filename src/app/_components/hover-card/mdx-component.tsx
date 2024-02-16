import stylex from '@stylexjs/stylex'
import { meetsContrastGuidelines } from 'polished'
import type { MDXModuleProps } from '../../h/[color]/page'
import { COLOR, color, font, text } from '../../../app/globalTokens.stylex'

const styles = stylex.create({
	title: (clr: string) => ({
		color: color[clr as keyof typeof color],
		fontFamily: font.title,
		WebkitTextStrokeColor: meetsContrastGuidelines(COLOR[clr as keyof typeof COLOR], COLOR.black).AA ? 'transparent' : color.white,
		WebkitTextStrokeWidth: '1px',
		fontSize: text.h4,
	}),
})

export default async function MDXComponent({ color: flagColor }: { color: string }) {
	const { Preview, meta } = (await import(
		`../../h/_colors/${flagColor}.mdx`
	)) as MDXModuleProps
	return (
		<>
			<h2 {...stylex.props(styles.title(flagColor))}>{ meta.title }</h2>
			<Preview />
		</>
	)
}
