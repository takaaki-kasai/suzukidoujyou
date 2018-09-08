function googleCalendarSet(){
  //カレンダーの埋め込みコードをコピペして分割する
  var calendarCode1 = '<iframe src="https://calendar.google.com/calendar/embed?showTitle=0&showTabs=0&showPrint=0&showNav=0&showCalendars=0&showTz=0&';
  var calenderCode2 = 'src=suzukidoujou%40gmail.com&ctz=Asia%2FTokyo" style="border: 0" width="800" height="400" frameborder="0" scrolling="no"></iframe>'
  /*来月のカレンダー*/
  var today = new Date;
  var myYear = today.getFullYear();//年を取得
  var myMonth = today.getMonth()+1;//月を取得、1月が0から始まるからややこしい
  var nextMonth = myMonth+1;
  //12月を超えると1月に
  if(nextMonth>12){nextMonth-=12;myYear+=1;};
  //10以下を二ケタに
  if(nextMonth<10){nextMonth = "0"+nextMonth;};
  //日付を出力
  var dates = "dates="+String(myYear)+String(nextMonth)+"01/"+String(myYear)+String(nextMonth)+"01&amp;";
  //指定したidを書き換え
  document.getElementById("nextMonthCal").innerHTML = calendarCode1+dates+calenderCode2;
  /*再来月のカレンダー*/
  var next2Month = myMonth+2;
  if(next2Month>12){next2Month-=12;
    if(nextMonth==12){myYear+=1;};
  };
  if(next2Month<10){next2Month = "0"+next2Month;};
  var dates = "dates="+String(myYear)+String(next2Month)+"01/"+String(myYear)+String(next2Month)+"01&amp;";
  document.getElementById("next2MonthCal").innerHTML = calendarCode1+dates+calenderCode2;
  /*今月のカレンダー*/
  document.getElementById("MonthCal").innerHTML = calendarCode1+calenderCode2;
}
window.onload = googleCalendarSet;
