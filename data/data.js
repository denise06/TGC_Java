async function loadData() {
    const response = await axios.get('data.json');
    return response.data.yearly;

}


async function loadData() {
    const response = await axios.get('fake-graph-data.json');
    return response.fake-graph-data.json.temperatures;
}


async function loadData() {
    const response = await axios.get('meteors.json');
    return response.meteors.meteors;
}

async function loadData(url) {
    let response = await axios.get(url);
    // csv object is available from csvtojson package
    let json = await csv().fromString(response.data);
    return transformData(json);
    
}


function transformData(rawData) {
    // transform into x and y
    const transformData = {
        totalBirthsByYear: {},
    };
    // for (let datnum of rawData) {
    //     series.push({
    //         'x': parseInt(datnum.year),
    //         'y': parseFloat(datnum.value)
    //     })
    // }
    // console.log(series);
    // return series;
    for (let row of rawData){
        const year = parseInt(row.year);
        const birthRate = parseFloat(row.crude_birth_rate);

        if (transformData.totalBirthsByYear[year]){
            transformData.totalBirthsByYear[year] +=birthRate;
        }else{
            transformData.totalBirthsByYear[year]= birthRate;
        }
        
    }
    console.log(transformData)
    return transformData
}

function transformObjectToSeries(object){
    const series = []
    for (const[key,value] of Object.entries(object)){
        series.push ({
            'x': key, 
            'y': value
        })
        return series
    }
}