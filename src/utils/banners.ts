import process from 'node:process'
import { lightCyan } from 'kolorist'
import { version } from '../../package.json'

/* eslint-disable no-console */
export function printBanner() {
  const text = `create-unibest@v${version} 快速创建 unibest 项目`
  let colorText = ''

  // const startColor = { r: 0x3B, g: 0xD1, b: 0x91 }
  // const endColor = { r: 0x2B, g: 0x4C, b: 0xEE }
  const startColor = { r: 0xFF, g: 0xA5, b: 0x00 }; // 橙色
  const endColor = { r: 0xFF, g: 0x45, b: 0x00 }; // 橙红色


  for (let i = 0; i < text.length; i++) {
    const ratio = i / (text.length - 1)
    const red = Math.round(startColor.r + (endColor.r - startColor.r) * ratio)
    const green = Math.round(startColor.g + (endColor.g - startColor.g) * ratio)
    const blue = Math.round(startColor.b + (endColor.b - startColor.b) * ratio)
    colorText += `\x1B[38;2;${red};${green};${blue}m${text[i]}\x1B[0m`
  }

  const output = process.stdout.isTTY && process.stdout.getColorDepth() > 8
    ? colorText
    : lightCyan(text)

  console.log()
  console.log(output)
  console.log()
}
