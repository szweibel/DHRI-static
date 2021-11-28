import * as hero from 'hero-patterns'
import colors from '../components/Colors'


const random = (min, max) => Math.floor(Math.random() * (max - min + 1) + min)
const roundTo = (increment, number) => Math.round(number / increment) * increment
const genAlpha = () => {
  // using 102 instead of 100 for the upper range
  // gives us a slightly larger chance of returning 1
  // the same holds true for using 23 for the lower range
  return roundTo(5, random(23, 102)) / 100
}
const markup = name => {
  // generate random color combination and opacity value
  let [c1, c2] = colors[random(1, colors.length) - 1]
  if (random(1, 2) === 1) [c1, c2] = [c2, c1]
  const alpha = genAlpha()

  // generate code example
  const params = alpha === 1 ? `'${c2}'` : `'${c2}', ${alpha}`
  const functionCode = `${name}(${params})`
  const style = {
    backgroundPosition: 'center',
    backgroundColor: c1,
    backgroundImage: hero[name](c2, alpha),
  }
  return style
}

allPatterns = [];
for (const pattern in hero) {
  allPatterns.push(markup(pattern))
};

export default function allPatterns() {
  return allPatterns
}

