
var dashboard = {

  'list':function()
  {
    var result = {};
    $.ajax({ url: path+"dashboard/list_json", dataType: 'json', async: false, success: function(data) {result = data;} });
    return result;
  },

  'set':function(id, fields)
  {
    var result = {};
    $.ajax({ url: path+"dashboard/set_json", data: "id="+id+"&fields="+JSON.stringify(fields), async: false, success: function(data){} });
    return result;
  },

  'remove':function(id)
  {
    $.ajax({ url: path+"dashboard/delete_json", data: "id="+id, async: false, success: function(data){} });
  }

}

