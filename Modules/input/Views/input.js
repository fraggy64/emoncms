
var input = {

  'list':function()
  {
    var result = {};
    $.ajax({ url: path+"input/list_json", dataType: 'json', async: false, success: function(data) {result = data;} });
    return result;
  },

  'set':function(id, fields)
  {
    var result = {};
    $.ajax({ url: path+"input/set_json", data: "inputid="+id+"&fields="+JSON.stringify(fields), async: false, success: function(data){} });
    return result;
  },

  'remove':function(id)
  {
    $.ajax({ url: path+"input/delete_json", data: "inputid="+id, async: false, success: function(data){} });
  },

  // Process

  'add_process':function(inputid,processid,arg,newfeedname)
  {
    var result = {};
    $.ajax({ url: path+"input/process/add_json", data: "inputid="+inputid+"&processid="+processid+"&arg="+arg+"&newfeedname="+newfeedname, async: false, success: function(data){result = data;} });
    return result;
  },

  'processlist':function(inputid)
  {
    var result = {};
    $.ajax({ url: path+"input/process/list_json", data: "inputid="+inputid, async: false, dataType: 'json', success: function(data){result = data;} });
    return result;
  },

  'delete_process':function(inputid,processid)
  {
    var result = {};
    $.ajax({ url: path+"input/process/delete_json", data: "inputid="+inputid+"&processid="+processid, async: false, success: function(data){result = data;} });
    return result;
  },

  'move_process':function(inputid,processid,moveby)
  {
    var result = {};
    $.ajax({ url: path+"input/process/move_json", data: "inputid="+inputid+"&processid="+processid+"&moveby="+moveby, async: false, success: function(data){result = data;} });
    return result;
  },

  'reset_processlist':function(inputid,processid,moveby)
  {
    var result = {};
    $.ajax({ url: path+"input/process/reset_json", data: "inputid="+inputid, async: false, success: function(data){result = data;} });
    return result;
  }

}

