'use client'

import Link from 'next/link'
import { useStore } from '@nanostores/react'
import * as stylex from '@stylexjs/stylex'
import { atom, computed, type WritableAtom } from 'nanostores'

import { color } from '../globalTokens.stylex'

const EMOJI = [
	'🖤',
	'😍',
	'🫦',
	'😈',
	'💋',
	'🤤',
	'💦',
	'😘',
	'🤌🏻',
	'🥵',
	'👀',
] as const

const AUTHOR = ['morgan ashly', 'thedoomshine'] as const

const $emojiCount = atom(0)
const $authorCount = atom(0)

const $emoji = computed($emojiCount, (index) => EMOJI[index])
const $author = computed($authorCount, (index) => AUTHOR[index])

const incrementEmoji = () => handleIncrement($emojiCount, EMOJI.length - 1)
const incrementAuthor = () => handleIncrement($authorCount, AUTHOR.length - 1)

const handleIncrement = (store: WritableAtom, length: number) => {
	if (store.get() === length) {
		store.set(0)
	} else {
		store.set(store.get() + 1)
	}
	return store.get() as number
}

let intervalID: NodeJS.Timeout | undefined
export default function FooterLink() {
	const handleMouseEnter = () => {
		intervalID = setInterval(incrementEmoji, 500)
		incrementEmoji()
		incrementAuthor()
	}

	const handleMouseLeave = () => {
		clearInterval(intervalID)
		$emojiCount.set(0)
		incrementAuthor()
	}

	return (
		<div {...stylex.props(styles.wrapper)}>
			made with <Emoji /> by{' '}
			<Link
				onMouseEnter={handleMouseEnter}
				onMouseLeave={handleMouseLeave}
				href='https://bsky.app/profile/thedoomshine.social'
				target='_blank'
				{...stylex.props(styles.link)}
			>
				<Author />
			</Link>
		</div>
	)
}

function Emoji() {
	return useStore($emoji)
}

function Author() {
	const author = useStore($author)
	return <div style={{ width: '11ch' }}>{author}</div>
}

const styles = stylex.create({
	wrapper: {
		display: 'flex',
		gap: '0.5ch',
		alignItems: 'center',
	},
	link: {
		textDecoration: 'underline',
		':hover': {
			textDecorationColor: color.red,
		},
	},
})
