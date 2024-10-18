import fs from 'fs/promises'
import path from 'path'
import { MDXModuleProps } from '../h/[color]/page'

export const getColors = async () => {
  const colorFiles = path.resolve('./src/app/h/_colors')
  const filenames = await fs.readdir(colorFiles)
  const colors = filenames.map(async (name: string) => {
    const { meta } = await import(
      `./../h/_colors/${name}`
    ) as MDXModuleProps
    return meta
  })
  const resolved = await Promise.all(colors)
  return resolved
};
