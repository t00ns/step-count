// works the same way as vanilla js querySelector
const todaySvg = d3.select("svg.today")

// domain = input ; range = output
const barScale = d3.scaleLinear().domain([0, 2000]).range([1, 112])

const hourFormat = d3.format("02")

const todayGroups = todaySvg
  .selectAll("g")
  .data(todayData)
  .enter()
  .append("g")
  .attr("transform", (d, i) => {
    return "translate(" + i * 36 + ", 0)"
  })

// rectangle tags
todayGroups
  .append("rect")
  .attr("x", 0)
  .attr("y", (d, i) => {
    return 120
  })
  .attr("width", 24)
  .attr("height", 0)
  .transition()
  .attr("y", (d, i) => {
    return 120 - barScale(d)
  })
  .delay((d, i) => {
    return i * 15
  })
  .ease(d3.easeCubicOut)
  .attr("height", (d, i) => {
    return barScale(d)
  })

// d = data ; i = index

// text tags
todayGroups
  .append("rect")
  .attr("x", 0)
  .attr("y", 0)
  .attr("width", 24)
  .attr("height", 140)
  .attr("class", "empty")

todayGroups
  .append("text")
  .attr("x", 12)
  .attr("y", 140)
  .attr("class", "hours")
  .text((d, i) => {
    return hourFormat(i)
  })

todayGroups
  .append("text")
  .attr("x", 12)
  .attr("y", (d, i) => {
    return 110 - barScale(d)
  })
  .attr("class", "steps")
  .text((d, i) => {
    return d
  })
