import * as stylex from '@stylexjs/stylex'

const MIN_WIDTH = 320
const MAX_WIDTH = 1240
const MIN_SCALE = 1.2
const MAX_SCALE = 1.333
const MIN_BASE_SIZE = 16
const MAX_BASE_SIZE = 20

export const COLOR = {
	black: '#000000', // s&m
	charcoal: '#333333', // latex
	gray: '#808080', // bondage
	beige: '#faf0e6', // rimming
	holstein: '#fefcff', // milk (cow print)
	white: '#f8f8ff', // hand job
	maroon: '#800000', // blood
	darkRed: '#a40000', // 2 handed fisting
	red: '#ff2800', // fisting
	coral: '#ff7f50', // toes
	apricot: '#fbceb1', // chubby
	orange: '#ff9f00', // anything
	mustard: '#ffdb58', // hung / size queen
	yellow: '#ffe135', // piss
	paleYellow: '#fffacd', // spit
	limeGreen: '#bfff00', // dining / buying
	kellyGreen: '#4cbb17', // renting / buying
	hunterGreen: '#355e3b', // big / little
	robinsEggBlue: '#1fcecb', // 69
	teal: '#008080', // cbt
	lightBlue: '#add8e6', // oral
	navyBlue: '#000080', // top / bottom
	lavender: '#734f96', // drag
	purple: '#9370db', // piercing
	mauve: '#e0b0ff', // navel worship
	magenta: '#8b008b', // armpits
	fuchsia: '#ff00ff', // spanking
	darkPink: '#e75480', // tit torture
	lightPink: '#ffb6c1', // dildo
} as const

export const color = stylex.defineVars(COLOR)

export const uiVars = stylex.defineVars({
	['black-50']: '#fafafa',
	['black-100']: '#f5f5f5',
	['black-200']: '#e5e5e5',
	['black-300']: '#d4d4d4',
	['black-400']: '#a3a3a3',
	['black-500']: '#737373',
	['black-600']: '#525252',
	['black-700']: '#404040',
	['black-800']: '#262626',
	['black-900']: '#171717',
	['black-950']: '#000000',
})

export const ui = {
	black: {... new Proxy(
		{
			['50']:  uiVars['black-50'],
			['100']: uiVars['black-100'],
			['200']: uiVars['black-200'],
			['300']: uiVars['black-300'],
			['400']: uiVars['black-400'],
			['500']: uiVars['black-500'],
			['600']: uiVars['black-600'],
			['700']: uiVars['black-700'],
			['800']: uiVars['black-800'],
			['900']: uiVars['black-900'],
			['950']: uiVars['black-950'],
		},
		{
			get: (target, name) => {
				if (target && target.hasOwnProperty(name)) {
					return target[name as keyof typeof target]
				}
				return target[950]
			},
		}
	)},
	white: uiVars['black-50'],
	gray: uiVars['black-400'],
	red: color.red,
}

/**
 * o--o o    o   o o-O-o o-o       o--o  o-o  o   o o-O-o  o-o
 * |    |    |   |   |   |  \      |    o   o |\  |   |   |
 * O-o  |    |   |   |   |   O     O-o  |   | | \ |   |    o-o
 * |    |    |   |   |   |  /      |    o   o |  \|   |       |
 * o    O---o o-o  o-O-o o-o       o     o-o  o   o   o   o--o
 *
 * Reference: https://utopia.fyi/type/calculator
 *
 * The following constants are used to calculate fluid typography.
 */

// Font sizes in `rem` units
const MIN_FONT = {
	xxs: Math.round(MIN_BASE_SIZE / Math.pow(MIN_SCALE, 3) / 0.16) / 100,
	xs: Math.round(MIN_BASE_SIZE / Math.pow(MIN_SCALE, 2) / 0.16) / 100,
	sm: Math.round(MIN_BASE_SIZE / MIN_SCALE / 0.16) / 100,
	p: Math.round(MIN_BASE_SIZE / 4) / 4,
	h5: Math.round((MIN_BASE_SIZE * MIN_SCALE) / 0.16) / 100,
	h4: Math.round((MIN_BASE_SIZE * Math.pow(MIN_SCALE, 2)) / 0.16) / 100,
	h3: Math.round((MIN_BASE_SIZE * Math.pow(MIN_SCALE, 3)) / 0.16) / 100,
	h2: Math.round((MIN_BASE_SIZE * Math.pow(MIN_SCALE, 4)) / 0.16) / 100,
	h1: Math.round((MIN_BASE_SIZE * Math.pow(MIN_SCALE, 5)) / 0.16) / 100,
}
// Font sizes in `rem` units
const MAX_FONT = {
	xxs: Math.round(MAX_BASE_SIZE / Math.pow(MAX_SCALE, 3) / 0.16) / 100,
	xs: Math.round(MAX_BASE_SIZE / Math.pow(MAX_SCALE, 2) / 0.16) / 100,
	sm: Math.round(MAX_BASE_SIZE / MAX_SCALE / 0.16) / 100,
	p: Math.round(MAX_BASE_SIZE / 4) / 4,
	h5: Math.round((MAX_BASE_SIZE * MAX_SCALE) / 0.16) / 100,
	h4: Math.round((MAX_BASE_SIZE * Math.pow(MAX_SCALE, 2)) / 0.16) / 100,
	h3: Math.round((MAX_BASE_SIZE * Math.pow(MAX_SCALE, 3)) / 0.16) / 100,
	h2: Math.round((MAX_BASE_SIZE * Math.pow(MAX_SCALE, 4)) / 0.16) / 100,
	h1: Math.round((MAX_BASE_SIZE * Math.pow(MAX_SCALE, 5)) / 0.16) / 100,
}
const SLOPE = {
	xxs: (16 * (MAX_FONT.xxs - MIN_FONT.xxs)) / (MAX_WIDTH - MIN_WIDTH),
	xs: (16 * (MAX_FONT.xs - MIN_FONT.xs)) / (MAX_WIDTH - MIN_WIDTH),
	sm: (16 * (MAX_FONT.sm - MIN_FONT.sm)) / (MAX_WIDTH - MIN_WIDTH),
	p: (16 * (MAX_FONT.p - MIN_FONT.p)) / (MAX_WIDTH - MIN_WIDTH),
	h5: (16 * (MAX_FONT.h5 - MIN_FONT.h5)) / (MAX_WIDTH - MIN_WIDTH),
	h4: (16 * (MAX_FONT.h4 - MIN_FONT.h4)) / (MAX_WIDTH - MIN_WIDTH),
	h3: (16 * (MAX_FONT.h3 - MIN_FONT.h3)) / (MAX_WIDTH - MIN_WIDTH),
	h2: (16 * (MAX_FONT.h2 - MIN_FONT.h2)) / (MAX_WIDTH - MIN_WIDTH),
	h1: (16 * (MAX_FONT.h1 - MIN_FONT.h1)) / (MAX_WIDTH - MIN_WIDTH),
}
const INTERCEPT = {
	xxs: Math.round(100 * (MIN_FONT.xxs - SLOPE.xxs * (MIN_WIDTH / 16))) / 100,
	xs: Math.round(100 * (MIN_FONT.xs - SLOPE.xs * (MIN_WIDTH / 16))) / 100,
	sm: Math.round(100 * (MIN_FONT.sm - SLOPE.sm * (MIN_WIDTH / 16))) / 100,
	p: Math.round(100 * (MIN_FONT.p - SLOPE.p * (MIN_WIDTH / 16))) / 100,
	h5: Math.round(100 * (MIN_FONT.h5 - SLOPE.h5 * (MIN_WIDTH / 16))) / 100,
	h4: Math.round(100 * (MIN_FONT.h4 - SLOPE.h4 * (MIN_WIDTH / 16))) / 100,
	h3: Math.round(100 * (MIN_FONT.h3 - SLOPE.h3 * (MIN_WIDTH / 16))) / 100,
	h2: Math.round(100 * (MIN_FONT.h2 - SLOPE.h2 * (MIN_WIDTH / 16))) / 100,
	h1: Math.round(100 * (MIN_FONT.h1 - SLOPE.h1 * (MIN_WIDTH / 16))) / 100,
}

export const font = stylex.defineVars({
	sans: ['"Atkinson Hyperlegible"', 'system-ui', 'sans-serif'].join(', '),
	serif: [
		'Superclarendon',
		'"Bookman Old Style"',
		'"URW Bookman"',
		'"URW Bookman L"',
		'"Georgia Pro"',
		'Georgia',
		'serif',
	].join(', '),
	title: ['Caprasimo', 'sans-serif'].join(', '),
})

export const text = stylex.defineVars({
	xxs: `clamp(${Math.min(MIN_FONT.xxs)}rem, calc(${INTERCEPT.xxs}rem + ${
		Math.round(10000 * SLOPE.xxs) / 100
	}vw), ${Math.max(MAX_FONT.xxs)}rem)`,
	xs: `clamp(${Math.min(MIN_FONT.xs)}rem, calc(${INTERCEPT.xs}rem + ${
		Math.round(10000 * SLOPE.xs) / 100
	}vw), ${Math.max(MAX_FONT.xs)}rem)`,
	sm: `clamp(${Math.min(MIN_FONT.sm)}rem, calc(${INTERCEPT.sm}rem + ${
		Math.round(10000 * SLOPE.sm) / 100
	}vw), ${Math.max(MAX_FONT.sm)}rem)`,
	md: `clamp(${Math.min(MIN_FONT.p)}rem, calc(${INTERCEPT.p}rem + ${
		Math.round(10000 * SLOPE.p) / 100
	}vw), ${Math.max(MAX_FONT.p)}rem)`,
	h5: `clamp(${Math.min(MIN_FONT.h5)}rem, calc(${INTERCEPT.h5}rem + ${
		Math.round(10000 * SLOPE.h5) / 100
	}vw), ${Math.max(MAX_FONT.h5)}rem)`,
	h4: `clamp(${Math.min(MIN_FONT.h4)}rem, calc(${INTERCEPT.h4}rem + ${
		Math.round(10000 * SLOPE.h4) / 100
	}vw), ${Math.max(MAX_FONT.h4)}rem)`,
	h3: `clamp(${Math.min(MIN_FONT.h3)}rem, calc(${INTERCEPT.h3}rem + ${
		Math.round(10000 * SLOPE.h3) / 100
	}vw), ${Math.max(MAX_FONT.h3)}rem)`,
	h2: `clamp(${Math.min(MIN_FONT.h2)}rem, calc(${INTERCEPT.h2}rem + ${
		Math.round(10000 * SLOPE.h2) / 100
	}vw), ${Math.max(MAX_FONT.h2)}rem)`,
	h1: `clamp(${Math.min(MIN_FONT.h1)}rem, calc(${INTERCEPT.h1}rem + ${
		Math.round(10000 * SLOPE.h1) / 100
	}vw), ${Math.max(MAX_FONT.h1)}rem)`,
})

/**
 * o--o o    o   o o-O-o o-o        o-o  o--o    O    o-o o--o
 * |    |    |   |   |   |  \      |     |   |  / \  /    |
 * O-o  |    |   |   |   |   O      o-o  O--o  o---oO     O-o
 * |    |    |   |   |   |  /          | |     |   | \    |
 * o    O---o o-o  o-O-o o-o       o--o  o     o   o  o-o o--o
 *
 * Reference: https://utopia.fyi/space/calculator
 *
 * Similar to the fluid typography, we can create fluid values for spacing.
 * Using similar formulas and similar scales.
 *
 * NOTE: It is common to have more varied needs for spacing than for font-size.
 * So feel free to add some more values by following the pattern below.
 *
 * EXCEPT: We are using `px` instead of `rem`
 * ------------------------------------------
 * When talking about font-size, it is the best practice to use
 * `rem` so that an end user can change the font-size using the
 * browser's font-size setting.
 *
 * However, when talking about spacing, it is the best practice to
 * use `px` because using `rems` here makes font-size behave like zoom.
 *
 * Users that prefer larger text, don't necessarily want larger spacing as well.
 *
 */

const MULT = {
	xxxs: 0.25,
	xxs: 0.5,
	xs: 0.75,
	sm: 1,
	md: 1.5,
	lg: 2,
	xl: 3,
	xxl: 4,
	xxxl: 6,
	xxxxl: 8,
}
const MIN_SPACE = {
	xxxs: MULT.xxxs * MIN_BASE_SIZE,
	xxs: MULT.xxs * MIN_BASE_SIZE,
	xs: MULT.xs * MIN_BASE_SIZE,
	sm: MULT.sm * MIN_BASE_SIZE,
	md: MULT.md * MIN_BASE_SIZE,
	lg: MULT.lg * MIN_BASE_SIZE,
	xl: MULT.xl * MIN_BASE_SIZE,
	xxl: MULT.xxl * MIN_BASE_SIZE,
	xxxl: MULT.xxxl * MIN_BASE_SIZE,
	xxxxl: MULT.xxxxl * MIN_BASE_SIZE,
}
const MAX_SPACE = {
	xxxs: MULT.xxxs * MAX_BASE_SIZE,
	xxs: MULT.xxs * MAX_BASE_SIZE,
	xs: MULT.xs * MAX_BASE_SIZE,
	sm: MULT.sm * MAX_BASE_SIZE,
	md: MULT.md * MAX_BASE_SIZE,
	lg: MULT.lg * MAX_BASE_SIZE,
	xl: MULT.xl * MAX_BASE_SIZE,
	xxl: MULT.xxl * MAX_BASE_SIZE,
	xxxl: MULT.xxxl * MAX_BASE_SIZE,
	xxxxl: MULT.xxxxl * MAX_BASE_SIZE,
}
const SLOPE_SPACE = {
	xxxs: (MAX_SPACE.xxxs - MIN_SPACE.xxxs) / (MAX_WIDTH - MIN_WIDTH),
	xxs: (MAX_SPACE.xxs - MIN_SPACE.xxs) / (MAX_WIDTH - MIN_WIDTH),
	xs: (MAX_SPACE.xs - MIN_SPACE.xs) / (MAX_WIDTH - MIN_WIDTH),
	sm: (MAX_SPACE.sm - MIN_SPACE.sm) / (MAX_WIDTH - MIN_WIDTH),
	md: (MAX_SPACE.md - MIN_SPACE.md) / (MAX_WIDTH - MIN_WIDTH),
	lg: (MAX_SPACE.lg - MIN_SPACE.lg) / (MAX_WIDTH - MIN_WIDTH),
	xl: (MAX_SPACE.xl - MIN_SPACE.xl) / (MAX_WIDTH - MIN_WIDTH),
	xxl: (MAX_SPACE.xxl - MIN_SPACE.xxl) / (MAX_WIDTH - MIN_WIDTH),
	xxxl: (MAX_SPACE.xxxl - MIN_SPACE.xxxl) / (MAX_WIDTH - MIN_WIDTH),
	xxxxl: (MAX_SPACE.xxxxl - MIN_SPACE.xxxxl) / (MAX_WIDTH - MIN_WIDTH),
}
// rounded to the nearest 0.25px
const INTERCEPT_SPACE = {
	xxxs: Math.round(4 * (MIN_SPACE.xxxs - SLOPE_SPACE.xxxs * MIN_WIDTH)) / 4,
	xxs: Math.round(4 * (MIN_SPACE.xxs - SLOPE_SPACE.xxs * MIN_WIDTH)) / 4,
	xs: Math.round(4 * (MIN_SPACE.xs - SLOPE_SPACE.xs * MIN_WIDTH)) / 4,
	sm: Math.round(4 * (MIN_SPACE.sm - SLOPE_SPACE.sm * MIN_WIDTH)) / 4,
	md: Math.round(4 * (MIN_SPACE.md - SLOPE_SPACE.md * MIN_WIDTH)) / 4,
	lg: Math.round(4 * (MIN_SPACE.lg - SLOPE_SPACE.lg * MIN_WIDTH)) / 4,
	xl: Math.round(4 * (MIN_SPACE.xl - SLOPE_SPACE.xl * MIN_WIDTH)) / 4,
	xxl: Math.round(4 * (MIN_SPACE.xxl - SLOPE_SPACE.xxl * MIN_WIDTH)) / 4,
	xxxl: Math.round(4 * (MIN_SPACE.xxxl - SLOPE_SPACE.xxxl * MIN_WIDTH)) / 4,
	xxxxl:
		Math.round(4 * (MIN_SPACE.xxxxl - SLOPE_SPACE.xxxxl * MIN_WIDTH)) / 4,
}
export const spacing = stylex.defineVars({
	xxxs: `clamp(${MIN_SPACE.xxxs}px, calc(${INTERCEPT_SPACE.xxxs}px - ${
		Math.round(10000 * SLOPE_SPACE.xxxs) / 100
	}vw), ${MAX_SPACE.xxxs}px)`,
	xxs: `clamp(${MIN_SPACE.xxs}px, calc(${INTERCEPT_SPACE.xxs}px - ${
		Math.round(10000 * SLOPE_SPACE.xxs) / 100
	}vw), ${MAX_SPACE.xxs}px)`,
	xs: `clamp(${MIN_SPACE.xs}px, calc(${INTERCEPT_SPACE.xs}px - ${
		Math.round(10000 * SLOPE_SPACE.xs) / 100
	}vw), ${MAX_SPACE.xs}px)`,
	sm: `clamp(${MIN_SPACE.sm}px, calc(${INTERCEPT_SPACE.sm}px - ${
		Math.round(10000 * SLOPE_SPACE.sm) / 100
	}vw), ${MAX_SPACE.sm}px)`,
	md: `clamp(${MIN_SPACE.md}px, calc(${INTERCEPT_SPACE.md}px - ${
		Math.round(10000 * SLOPE_SPACE.md) / 100
	}vw), ${MAX_SPACE.md}px)`,
	lg: `clamp(${MIN_SPACE.lg}px, calc(${INTERCEPT_SPACE.lg}px - ${
		Math.round(10000 * SLOPE_SPACE.lg) / 100
	}vw), ${MAX_SPACE.lg}px)`,
	xl: `clamp(${MIN_SPACE.xl}px, calc(${INTERCEPT_SPACE.xl}px - ${
		Math.round(10000 * SLOPE_SPACE.xl) / 100
	}vw), ${MAX_SPACE.xl}px)`,
	xxl: `clamp(${MIN_SPACE.xxl}px, calc(${INTERCEPT_SPACE.xxl}px - ${
		Math.round(10000 * SLOPE_SPACE.xxl) / 100
	}vw), ${MAX_SPACE.xxl}px)`,
	xxxl: `clamp(${MIN_SPACE.xxxl}px, calc(${INTERCEPT_SPACE.xxxl}px - ${
		Math.round(10000 * SLOPE_SPACE.xxxl) / 100
	}vw), ${MAX_SPACE.xxxl}px)`,
	xxxxl: `clamp(${MIN_SPACE.xxxxl}px, calc(${INTERCEPT_SPACE.xxxxl}px - ${
		Math.round(10000 * SLOPE_SPACE.xxxxl) / 100
	}vw), ${MAX_SPACE.xxxxl}px)`,
})
export const width = stylex.defineVars({
	min: `${MIN_WIDTH}px`,
	max: `${MAX_WIDTH}px`,
})
