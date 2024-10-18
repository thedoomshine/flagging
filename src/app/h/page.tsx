import * as stylex from '@stylexjs/stylex'
import fs from 'fs/promises'
import path from 'path'
import { meetsContrastGuidelines } from 'polished'
import { camel } from 'radash'
import { COLOR, color, font, text } from '../globalTokens.stylex'
import Hanky from '../_patterns/default.svg'
import Link from '../_components/link'

export const getColorVar = (clr: string) => COLOR[clr as keyof typeof COLOR]

export const getColorHex = (clr: string) => color[clr as keyof typeof color]

export const getColorContrast = (clr: string, opaque = false) => meetsContrastGuidelines(COLOR[clr as keyof typeof COLOR], COLOR.black).AA ? opaque ? color.black : 'transparent' : color.white

export const getFiles = async () => {
  const colorFiles = path.resolve('./src/app/h/_colors')
  const filenames = await fs.readdir(colorFiles)
  const colors = filenames.map((name) => name?.split('.')?.[0]);
  return colors
};

export const normalizeFileName = (color: string) => String(color).split('-').join(' ')

const styles = stylex.create({
	container: {
		display: 'flex',
    flexDirection: 'column',
    gap: '.5rem',
    height: '100%',
	},
  box: (clr: string) => ({
		'--hanky-bg': clr,
		'--hanky-pattern': clr,
    display: 'flex',
    alignItems: 'center',
    padding: '0.5rem 1rem',
    gap: '0.5rem',
    border: `solid 1px ${getColorVar(clr)}`,
    borderRadius: '1rem',
    backgroundColor: getColorHex(clr),
    color: getColorContrast(clr, true),
  }),
  color: ({
    display: 'flex',
    color: 'currentColor',
		fontFamily: font.title,
		fontSize: text.h4,
    position: 'relative',
	}),
  hanky: ({
		height: '1.5em',
    position: 'relative',
    top: '0.25rem'
	}),
})

export default async function Pocket() {
  const colors = await getFiles()

  return <div {...stylex.props(styles.container)}>
  {colors.map((clr) => clr &&
    <Link href={`/h/${clr}`} {...stylex.props(styles.box(camel(clr)))}>
      <Hanky {...stylex.props(styles.hanky)} />
      <span key={clr} {...stylex.props(styles.color)}>
        {normalizeFileName(clr)}
      </span>
    </Link>)}
  </div>
}
