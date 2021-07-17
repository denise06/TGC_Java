const options =  {
    chart: {
        type: 'line',
        height:"100%"
    },
    series:[
        
    ],
    noData: {
        "text": "Loading..."
    }
    
}
 
// create the chart
const csvChart = new ApexCharts(document.querySelector('#chart'), options);

 
// render the chart
csvChart.render()

window.addEventListener('DOMContentLoaded', async ()=>{
    let series = await loadData('data/crude_births.csv');
    console.log(transformedData)
    csvChart.updateSeries([{
        'name': 'Crude Birth Rates',
        'data': transformObjectToSeries(transformData.totalBirthsByYear)
    }])
})
