(async function () {
	const loadData = async () => {
	  return await fetch('https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&past_days=10&hourly=temperature_2m,relativehumidity_2m,windspeed_10m')
		.then((res) => {
		  return res.json();
		})
		.then((loadedData) => {
		  return loadedData;
		})
		.catch((err) => {
		  console.error(err);
		});
	};
	const data = await loadData();

	const getData1 = (element) => {
	  let a = {};

	  let dailyData = [];

	  let  temperature = [];

	  let relativeHumidity = [];

	  let windSpeed = [];

	  let day = data.hourly.time;

	  let d=day.length;
	  for(let i=0;i<d;i++){
		  if(day[i].indexOf(element) != -1 ){
	   dailyData.push(data.hourly.time[i]);
	   temperature.push(data.hourly.temperature_2m[i]);
	   relativeHumidity.push( data.hourly.relativehumidity_2m[i]);
	   windSpeed.push( data.hourly.windspeed_10m[i]);
		  }
	  }
	  a.dailyData = dailyData; 
	  a.temperature = temperature; 
	  a.relativeHumidity = relativeHumidity; 
	  a.windSpeed = windSpeed; 
	  return a;
  }
	  
  const relativeHumidity = (element,idx,index) => {
	let time = [];

	let temperature = [];

	let windSpeed=[];

	let c = {};

	let day = data.hourly.time;

	let d=day.length;
	for(let i=0;i<d;i++){
	  if(data.hourly.relativehumidity_2m[i] > element ){
		time.push(day[i].slice(0, 10))
		}
		if(idx != 0){
			temperature.push(data.hourly.temperature_2m[i])
		}
		if(index != 0){
			windSpeed.push(data.hourly.windspeed_10m[i])
		}
	}
	const uniqueSet = new Set(time);
	c.relativehumidity=uniqueSet;
    c.temperature=temperature;
	c.windSpeed=windSpeed;
	return uniqueSet;
}
const relativeHumidity2 = (element ,idx,index) => {
	let time = [];

	let temperature = [];

	let windSpeed=[];

	let c = {};

	let day = data.hourly.time;

	let d=day.length;

	for(let i=0;i<d;i++){
	  if(data.hourly.relativehumidity_2m[i] < element ){
		time.push(day[i].slice(0, 10))
		}
		if(idx != 0){
			temperature.push(data.hourly.temperature_2m[i])
		}
		if(index != 0){
			windSpeed.push(data.hourly.windspeed_10m[i])
		}
	}
	const uniqueSet = new Set(time);
	c.relativehumidity=uniqueSet;
    c.temperature=temperature;
	c.windSpeed=windSpeed;
	return uniqueSet;
}

    const windSpeed = (element,idx,index) => {
	let time = [];

	let temperature = [];

	let relativehumiditys=[];

	let c = {};

	let day = data.hourly.time;

	let d=day.length;

		for(let i=0;i<d;i++){
		  if(data.hourly.windspeed_10m[i] > element ){
				 time.push(day[i].slice(0, 10))
			}
			if( idx !=0){
				temperature.push(data.hourly.temperature_2m[i])
		   }
		   if(index!=0 ){
			relativehumiditys.push(data.hourly.relativehumidity_2m[i])
	   }

		}
	const uniqueSet = new Set(time);
	c.relativehumidity=uniqueSet;
    c.temperature=temperature;
	c.relativehumiditys=relativehumiditys;
	return uniqueSet;
	}
	const windSpeed2 = (element,idx,index) => {
		let time = [];

		let temperature = [];

		let relativehumiditys=[];

		let c = {};

		let day = data.hourly.time;

		let d=day.length;
			for(let i=0;i<d;i++){
			  if(data.hourly.windspeed_10m[i] < element ){
					 time.push(day[i].slice(0, 10))
				}
				if( idx !=0){
					temperature.push(data.hourly.temperature_2m[i])
			   }
			   if(index!=0 ){
				relativehumiditys.push(data.hourly.relativehumidity_2m[i])
		   }
	
			}
		const uniqueSet = new Set(time);
		c.relativehumidity=uniqueSet;
		c.temperature=temperature;
		c.relativehumiditys=relativehumiditys;
		return uniqueSet;
		}
	
  const temperature = (e) => {
	let a = [];

	let day = data.hourly.time;

	let d=day.length;

	for(let i=0;i<d;i++){
	  if(data.hourly.temperature_2m[i] > e ){
			 a.push(day[i].slice(0, 10))
		}
	}
	const uniqueSet = new Set(a);
	return uniqueSet;
}

  const getData4 = (element,idx) => {
  
	let day1 = getData1(element);
	 let temperatureysTB = 0;

	 let relativeHumidityysTB=0

	 let windSpeedysTB=0;
	 for(let i = 0 ; i<idx;i++){
		 temperatureysTB= temperatureysTB + day1.temperature[i]
		 relativeHumidityysTB= relativeHumidityysTB + day1.relativeHumidity[i]
		 windSpeedysTB= windSpeedysTB + day1.windSpeed[i]
	 }
	  let weatherPrediction;
	  if ((temperatureysTB/24) > 25 && (relativeHumidityysTB/24) > 70 && (windSpeedysTB/24) < 10) {
		weatherPrediction = "Nắng";
	  } else {
		weatherPrediction = "Mưa";
	  }
	 return `Dự đoán thời tiết ngày ${element} ${weatherPrediction}`;
 }




  console.log(' 7 giờ tính từ 00:00h ngày 2023-04-24 dự đoán trời : ',getData4("2023-04-24",7));

  console.log('nhiệt độ trên  5  : ',temperature("",5));

  console.log('tốc độ gió trên 7,5   : ',windSpeed("",7,5));

  console.log('độ ẩm trên 60  : ',relativeHumidity("",60));

  console.log('ngày và nhiệt độ có độ ẩm trên 6,5  : ',relativeHumidity("",6,5,1));

  console.log('lọc ra ngày và tốc độ ,nhiệt độ có độ ẩm  trên 70 : ',relativeHumidity("",70,1,1));

  console.log('lọc ra ngày và tốc độ ,nhiệt độ có toc do  trên 8,2 : ',windSpeed("",8,2,1,1));

  console.log('lọc ra ngày và nhiệt độ có độ ẩm dưới 65 : ',relativeHumidity2("",65,1,0));

  console.log('lọc ra ngày, tốc độ và nhiệt độ có độ ẩm dưới 70 : ',relativeHumidity2("",70,1,1));
  
  console.log('lọc ra ngày và tốc độ ,nhiệt độ có tốc độ dưới 8,2 : ',windSpeed2("",8,2,1,1));

})();