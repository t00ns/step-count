// see Number Formats section on D3 website
const statsFormat = d3.format(",.0f")

d3.select("p.worst").text(statsFormat(d3.min(monthData)) + " steps")
d3.select("p.average").text(statsFormat(d3.mean(monthData)) + " steps")
d3.select("p.best").text(statsFormat(d3.max(monthData)) + " steps")
d3.select("p.total").text(statsFormat(d3.sum(monthData)) + " steps")
d3.select("p.today").text(statsFormat(d3.sum(todayData)) + " steps")

d3.select("p.median").text(
  statsFormat(d3.max(monthData) - d3.min(monthData)) + " steps"
)
