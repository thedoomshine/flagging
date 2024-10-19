'use server'

import * as stylex from '@stylexjs/stylex'
import { COLOR, color, font, text } from '../globalTokens.stylex'
import Hanky from '../_components/hanky'
import { getColors } from '../_utils/getColors'
import { getColorHex } from '../_utils/getColorHex'
import { MDXMetaProps } from '../h/[color]/page'
import { meetsContrastGuidelines, darken, lighten, readableColor } from 'polished'


const getCardBG = (clr: MDXMetaProps) => {
  const color = getColorHex(clr);
  const meets = meetsContrastGuidelines(color, COLOR.black)

  if (meets.AA) {
    return darken('0.15', color)
  }
  return lighten('0.15', color)
}

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
  box: (clr: MDXMetaProps) => ({
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    backgroundColor: getCardBG(clr),
    height: '8rem',
    borderRadius: '1rem',
    borderTopLeftRadius: '0',
    color: readableColor(getCardBG(clr), COLOR.black, COLOR.white),
    position: 'relative',
  }),
  color: ({
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',
    color: 'currentColor',
		fontFamily: font.title,
		fontSize: text.h5,
    padding: '0.5rem 1rem',
	}),
  hanky: ({
    color: 'currentColor',
		height: '100%',
	}),
  name: ({
    fontSize: text.md,
    textTransform: 'capitalize',
  })
})

export default async function Pocket() {
  const colors = await getColors()

  return <div {...stylex.props(styles.container)}>
    <div {...stylex.props(styles.shelf(colors.length))}>
      {colors.sort((a, b) => a.kink.localeCompare(b.kink, 'en', { sensitivity: 'base' })).map((clr) => clr &&
        <div {...stylex.props(styles.box(clr))}>
          <Hanky pattern={clr.pattern} fill={getColorHex(clr)} {...stylex.props(styles.hanky)} />
          <div key={clr.name} {...stylex.props(styles.color)}><span>{clr.kink}</span>
          <span {...stylex.props(styles.name)}>{clr.name}</span>
          </div>
        </div>)}
    </div>
    <div {...stylex.props(styles.pocket)}></div>
    <div {...stylex.props(styles.pocket)}></div>
  </div>
}
