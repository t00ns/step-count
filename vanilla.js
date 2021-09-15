const data = [
  0, 2, 10, 6, 8, 10, 24, 46, 75, 100, 200, 250, 500, 300, 700, 350, 120, 450,
  400, 436, 400, 375, 300, 100,
]
const todaySvg = document.querySelector("svg")

data.forEach((d, i) => {
  // add a rect tag to todaySvg
  const rectTag = document.createElementNS("http://www.w3.org/2000/svg", "rect")
  rectTag.setAttribute("x", i * 36)
  rectTag.setAttribute("y", 112 - d)
  rectTag.setAttribute("width", 24)
  rectTag.setAttribute("height", d)

  todaySvg.append(rectTag)
})
