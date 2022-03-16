let url = "https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/global-temperature.json"

let baseTemp
let values = []

let xScale
let yScale

let width = 1200
let height = 600
let padding = 60

let canvas = d3.select('#canvas')
               .attr('width', width)
               .attr('height', height)

let generateScales = () => {

  xScale = d3.scaleLinear()
             .range([padding, width - padding])

  yScale = d3.scaleLinear()
             .range([padding, height - padding])

}

let drawCells = () => {

}

let drawAxes = () => {
  let xAxis = d3.axisBottom(xScale)
  let yAxis = d3.axisLeft(yScale)

  canvas.append('g')
        .call(xAxis)
        .attr('id', 'x-axis')
        .attr('transform', `translate(0, ${height - padding})`)

  canvas.append('g')
        .call(yAxis)
        .attr('id', 'y-axis')
        .attr('transform', `translate(${padding}, 0)`)

}

fetch(url)
  .then(response => response.json())
  .then(dataset => {
    values = dataset
    baseTemp = dataset['baseTemperature']
    console.log(values)
    generateScales()
    drawCells()
    drawAxes()
  })