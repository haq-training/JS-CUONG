
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

	const getData1 = (element,idx) => {
	  let a = {};
	  let dailyData = [];
	  let  temperature = [];
	  let relativeHumidity = [];
	  let windSpeed = [];
	  let day = data.hourly.time;
	  let d=day.length;
     
     
    
	  if(idx!=0){
		let b = Number(element.slice(8,element.length))+idx;
        element = element.slice(0,8)+b;
	  }
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

  const getData2 = (arr) => {
     
	 let day1 = getData1(arr[0]);

	 let day2 = getData1(arr[1]);

	 let temperatureysTB = 0;

	 let relativeHumidityysTB=0

	 let windSpeedysTB=0;

	 let day = data.hourly.time;

	 for(let i = 0 ; i<day;i++){
		 temperatureysTB= temperatureysTB + (day1.temperature[i]+day2.temperature[i])
		 relativeHumidityysTB= relativeHumidityysTB + (day1.relativeHumidity[i]+day2.relativeHumidity[i])
		 windSpeedysTB= windSpeedysTB + (day1.windSpeed[i]+day2.windSpeed[i])
	 }
	  let weatherPrediction;
	  if ((temperatureysTB/48) > 25 && (relativeHumidityysTB/48) > 70 && (windSpeedysTB/48) < 48) {
		weatherPrediction = "Nắng";
	  } else {
		weatherPrediction = "Mưa";
	  }
	 return  weatherPrediction;
 }
 const getData3 = () => {
	const today = new Date();

	const daysToSaturday = 7 - today.getDay();

	const daysToSunday = 8 - today.getDay();

	const saturday = new Date(today.getFullYear(), today.getMonth(), today.getDate() + daysToSaturday);

	const sunday = new Date(today.getFullYear(), today.getMonth(), today.getDate() + daysToSunday);

	const formattedSaturday = saturday.toISOString().slice(0, 10);

	const formattedSunday = sunday.toISOString().slice(0, 10);

	console.log("đoán thời tiết ngày thứ bảy là",getData2(formattedSaturday));

	console.log("đoán thời tiết ngày chủ nhật là",getData2(formattedSunday));

}

console.log("2023-04-17",getData1("2023-04-17",0));

console.log("nhiệt độ , độ ẩm và tốc độ gió của 1 ngày sau ngày 2023-04-17",getData1("2023-04-17",1));

console.log("nhiệt độ , độ ẩm và tốc độ gió của 3 ngày sau ngày 2023-04-18",getData1("2023-04-18",3));

console.log("đoán thời tiết ngày 2023-04-24 là",getData2(["2023-04-22","2023-04-23"]));

getData3();


})();
