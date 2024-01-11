import type { MDXContent } from 'mdx/types'

import Hanky from '../../_patterns/default.svg'

import * as stylex from '@stylexjs/stylex'

type PageProps = {
	params: {
		color: string
	}
}

type ModuleProps = {
	default: MDXContent
	flag: {
		title: string
		left: string
		right: string
	}
	hanky: {
		name: string
		value: string
		pattern?: string
	}
}

const styles =  stylex.create({
  hanky: (color: string) => ({
    '--hanky-bg': color,
    '--hanky-pattern': color,
    float: 'left',
    maxHeight: '2em'
  })
})

export default async function Page({ params, ...props }: PageProps) {
	const {
		default: MDXComponent,
		flag,
		hanky,
	} = (await import(`../_colors/${params.color}.mdx`)) as ModuleProps

	return (
		<>
			<h1>{flag.title}</h1>
      <Hanky
        {...stylex.props(styles.hanky(hanky.value))}
      />
			<MDXComponent {...props} />
		</>
	)
}
