'use server'

import * as stylex from '@stylexjs/stylex'
import { color, font, text } from '../globalTokens.stylex'
import Hanky from '../_patterns/default.svg'
import { getColors } from '../_utils/getColors'
import { getColorContrast } from '../_utils/getColorContrast'
import { getColorHex } from '../_utils/getColorHex'

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
  box: (clr) => ({
    display: 'flex',
    alignItems: 'center',
    padding: '0.5rem 1rem',
    gap: '0.5rem',
    border: `solid 1px ${clr}`,
    borderRadius: '1rem',
  }),
  color: (clr) => ({
		'--hanky-bg': getColorHex(clr),
		'--hanky-pattern': getColorContrast(clr, true),
    display: 'flex',
    WebkitTextStrokeColor: getColorContrast(clr),
    WebkitTextStrokeWidth: '1px',
    color: clr,
		fontFamily: font.title,
		fontSize: text.h4,
    position: 'relative',
	}),
  hanky: (clr) => ({
		'--hanky-bg': getColorHex(clr),
		'--hanky-pattern': getColorContrast(clr, true),
		height: '1.5em',
    position: 'relative',
    top: '0.25rem'
	}),
})

export default async function Pocket() {
  const colors = await getColors()

  return <div {...stylex.props(styles.container)}>
    <div {...stylex.props(styles.shelf(colors.length))}>
      {colors.map((clr) => clr &&
        <div {...stylex.props(styles.box(clr))}>
          <Hanky {...stylex.props(styles.hanky(clr))} />
          <span key={clr.name} {...stylex.props(styles.color(clr),)}>
            {clr.name} {clr.kink}
          </span>
        </div>)}
    </div>
    <div {...stylex.props(styles.pocket)}></div>
    <div {...stylex.props(styles.pocket)}></div>
  </div>
}
