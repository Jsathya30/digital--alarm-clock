const display=document.getElementById('clock');
const audio=new Audio('https://media.geeksforgeeks.org/wp-content/uploads/20190531135120/beep.mp3');
audio.loop=true;
let alarmTime=null;
let alarmTimeout=null;

function displayTime(){
	const date=new Date();
	
	const hour=addZero(date.getHours());
	const minutes=addZero(date.getMinutes());
	const seconds=addZero(date.getSeconds());
	
	display.innerHTML=`${hour}:${minutes}:${seconds}`;
}
function addZero(time){
	if(time<10){
		return '0'+time;
	}
	return time;
}
function setAlarmTime(value){
	alarmTime=value;
	// console.log(alarmTime);
}
function setAlarm(){
	if(alarmTime){
		const current = new Date();
		const timetoAlarm= new Date(alarmTime);
		
		if(timetoAlarm>current){
			const timeout=timetoAlarm.getTime()- current.getTime();
			alarmTimeout=setTimeout(()=>audio.play(),timeout);
			alert('Alarm set');
		}
	}
}
function clearAlarm(){
	audio.pause();
	if(alarmTimeout){
		clearTimeout(alarmTimeout);
		alert('Alarm cleared');
	}
}
setInterval(displayTime,1000);