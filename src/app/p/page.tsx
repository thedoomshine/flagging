import * as stylex from '@stylexjs/stylex'
import fs from 'fs/promises'
import path from 'path'
import { meetsContrastGuidelines } from 'polished'
import { camel } from 'radash'
import { COLOR, color, font, text } from '../globalTokens.stylex'
import Hanky from '../_patterns/default.svg'

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
		display: 'grid',
		gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
    gridTemplateRows: 'auto 1fr',
    gap: '.5rem',
    height: '100%',
	},
  shelf: (length: number) => ({
    display: 'grid',
    gridTemplateColumns: `repeat(${length}, minmax(max-content, 1fr))`,
    gap: '.5rem',
    gridColumn: '1/-1',
    gridRow: '1',
    padding: '0.5rem',
    border: `solid 1px ${color.white}`,
    overflowX: 'auto',
  }),
  pocket: {
    display: 'flex',
    border: `solid 1px ${color.white}`,
    gridRow: '2',
  },
  box: (clr: string) => ({
    display: 'flex',
    alignItems: 'center',
    padding: '0.5rem 1rem',
    gap: '0.5rem',
    border: `solid 1px ${getColorVar(clr)}`,
    borderRadius: '1rem',
  }),
  color: (clr: string) => ({
		'--hanky-bg': clr,
		'--hanky-pattern': clr,
    display: 'flex',
    WebkitTextStrokeColor: getColorContrast(clr),
    WebkitTextStrokeWidth: '1px',
    color: getColorHex(clr),
		fontFamily: font.title,
		fontSize: text.h4,
    position: 'relative',
	}),
  hanky: (clr: string) => ({
		'--hanky-bg': getColorHex(clr),
		'--hanky-pattern': getColorContrast(clr, true),
		height: '1.5em',
    position: 'relative',
    top: '0.25rem'
	}),
})

export default async function Pocket() {
  const colors = await getFiles()

  return <div {...stylex.props(styles.container)}>
    <div {...stylex.props(styles.shelf(colors.length))}>
      {colors.map((clr) => clr &&
        <div {...stylex.props(styles.box(camel(clr)))}>
          <Hanky {...stylex.props(styles.hanky(camel(clr)))} />
          <span key={clr} {...stylex.props(styles.color(camel(clr)),)}>
            {normalizeFileName(clr)}
          </span>
        </div>)}
    </div>
    <div {...stylex.props(styles.pocket)}></div>
    <div {...stylex.props(styles.pocket)}></div>
  </div>
}
