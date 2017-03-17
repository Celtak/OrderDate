function orderDate(date) {

  var timeStp = [];

  for (var i = 0; i < date.length; i++) {
    
    date[i] = date[i].split('/');
    
    date[i] = date[i][1] + '/' + date[i][0] + '/' + date[i][2];
    
    timeStp[i] = Date.parse(date[i]);
    
  }

  timeStp.sort();

  var ascendingDate = [];

  for (var j = 0; j < timeStp.length; j++) {
    
    ascendingDate[j] = new Date(timeStp[j]);
    
    ascendingDate[j] = ascendingDate[j].toLocaleDateString();
    
    ascendingDate[j] = ascendingDate[j].split("/");
    
    ascendingDate[j][2] = ascendingDate[j][2].slice(2);
    
    ascendingDate[j] = ascendingDate[j][0] + '/' + ascendingDate[j][1] + '/' + ascendingDate[j][2];
    
  }

  return ascendingDate;

}
