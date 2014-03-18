
var feed = {

  'list':function()
  {
    var result = {};
    $.ajax({ url: path+"feed/list_json", dataType: 'json', async: false, success: function(data) {result = data;} });
    return result;
  },

  'set':function(id, fields)
  {
    var result = {};
    $.ajax({ url: path+"feed/set_json", data: "id="+id+"&fields="+JSON.stringify(fields), async: false, success: function(data){} });
    return result;
  },

  'remove':function(id)
  {
    $.ajax({ url: path+"feed/delete_json", data: "id="+id, async: false, success: function(data){} });
  },


  // if ($route->action == 'data') $result = $feed->get_data(get('id'),get('start'),get('end'),get('dp'));
  'get_data':function(feedid,start,end,dp)
  {
    var feedIn = [];
    $.ajax({                                      
      url: path+'feed/data_json',                         
      data: "&apikey="+apikey+"&id="+feedid+"&start="+start+"&end="+end+"&dp="+dp,
      dataType: 'json',
      async: false,                      
      success: function(data_in) { feedIn = data_in; } 
    });
    return feedIn;
  },
  
  'get_timestore_average':function(feedid,start,end,interval)
  {
    var feedIn = [];
    $.ajax({                                      
      url: path+'feed/timestoreaverage_json',                         
      data: "&apikey="+apikey+"&id="+feedid+"&start="+start+"&end="+end+"&interval="+interval,
      dataType: 'json',
      async: false,                      
      success: function(data_in) { feedIn = data_in; } 
    });
    return feedIn;
  },

  'get_kwhatpowers':function(feedid,points)
  {
    var feedIn = [];
    $.ajax({                                      
      url: path+'feed/kwhatpowers_json',                         
      data: "&apikey="+apikey+"&id="+feedid+"&points="+JSON.stringify(points),
      dataType: 'json',
      async: false,                      
      success: function(data_in) { feedIn = data_in; } 
    });
    return feedIn;
  },

  'histogram':function(feedid,start,end)
  {
    var feedIn = [];
    $.ajax({                                      
      url: path+'feed/histogram_json',                         
      data: "&apikey="+apikey+"&id="+feedid+"&start="+start+"&end="+end+"&res=1",
      dataType: 'json',
      async: false,                      
      success: function(data_in) { feedIn = data_in; } 
    });
    return feedIn;
  }

}

