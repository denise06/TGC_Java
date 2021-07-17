// 1. We define the chart options. 
const options =  {
    chart: {
        type: 'line',
        height:"100%"
    },
    // each series represents one set of data
    // each series separated by ","
    // series:[
    //     {
    //         name: 'sightings',
    //         data:[10, 13, 15, 22, 34, 23, 55, 78, 44]
    //     },
    //     {
    //         name: 'temperature',
    //         data:[33, 21, 22, 24, 25, 26, 26, 21, 31, 44]
    //     }

    // ],
    // hands on exercise
    series:[
        {
            name: 'Deals Closed',
            data:[3000,3200,4100,1500,1000,2000,7000
                
                ]
        },
        {
            name: 'Deals Rejected',
            data:[1500
                ,1000
                ,500
                ,1200
                ,1500
                ,500
                ,2000
                
                ]
        }

    ],

    // what is are the labels along the x-axis (horizontal line)
    xaxis: {
        categories:['1999'
        ,'2000'
        ,'2001'
        ,'2002'
        ,'2003'
        ,'2004'
        ,'2005'
    ]
    },
    
}
 
// create the chart
const chart = new ApexCharts(document.querySelector('#chart'), options);
 
// render the chart
chart.render()


// hands on 
// Bar chart
const baroptions =  {
    chart: {
        type:'bar',
        height:"100%"
    },
    // each series represents one set of data
    series:[
        {
            name: 'revenue',
            data:[120000, 75000, 80000, 45000, 33000, 55000]
        },
        {
            name: 'losses',
            data:[15000
                ,10000
                ,5000
                ,12000
                ,15000
                ,5000
                ,20000
                ]
        }
    ],
    // what is are the labels along the x-axis (horizontal line)
    xaxis: {
        categories:['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']
    },
    
}
// create the chart
const barchart = new ApexCharts(document.querySelector('#chart'), baroptions);
 
// render the chart
barchart.render()


// pie chart
const pieoptions =  {
    chart: {
        type: 'pie',
        height:"100%"
    },
    // each series represents one set of data
    series:[21, 23, 22, 27, 45],
 
    // what is are the labels along the x-axis (horizontal line)
    labels:['English', 'Mathematics', 'Mother Tongue', 'Science', 'PE'],
     // primary colors
    colors:['#043380', '#9ae3aa', '#eba2bb', '#f4f7b7', '#dfa5fa']

    
}
 
// create the chart
const piechart = new ApexCharts(document.querySelector('#chart'), pieoptions);
 
// render the chart
piechart.render()


