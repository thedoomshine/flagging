'use server'

import * as stylex from '@stylexjs/stylex'
import { COLOR, font, text } from '../globalTokens.stylex'
import { getColors } from '../_utils/getColors'
import Hanky from '../_components/hanky'
import Link from '../_components/link'
import { MDXMetaProps } from './[color]/page'
import { getColorHex } from '../_utils/getColorHex'
import { getColorContrast } from '../_utils/getColorContrast'
import { darken, lighten, meetsContrastGuidelines, readableColor } from 'polished'

const getCardBG = (clr: MDXMetaProps) => {
  const color = getColorHex(clr)
  const meets = meetsContrastGuidelines(color, COLOR.black)

  if (meets.AA) {
    return darken('0.15', color)
  }
  return lighten('0.15', color)
}

const styles = stylex.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    height: '100%',
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
    height: '100%',
  }),
  name: ({
    fontSize: text.md,
    textTransform: 'capitalize',
  })
})

export default async function List() {
  const colors = await getColors()

  return <div {...stylex.props(styles.container)}>
    {colors.map((clr) => clr &&
      <Link key={clr.name} href={`/h/${clr.name}`} {...stylex.props(styles.box(clr))}>
        <Hanky pattern={clr.pattern} fill={getColorHex(clr)} {...stylex.props(styles.hanky)} />
        <div key={clr.name} {...stylex.props(styles.color)}>
          <span>{clr.kink}</span>
          <span {...stylex.props(styles.name)}>{clr.name}</span>
        </div>
      </Link>
    )}
  </div>
}
