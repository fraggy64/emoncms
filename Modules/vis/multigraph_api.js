
var multigraph = {

  'new':function(id)
  {
    var result = {};
    $.ajax({ url: path+"vis/multigraph/new_json", async: false, success: function(data){result = data;} });
    return result;
  },

  'set':function(id,feedlist)
  {
    var result = {};
    $.ajax({ url: path+"vis/multigraph/set_json", data: "id="+id+"&feedlist="+JSON.stringify(feedlist), async: false, success: function(data){result = data;} });
    return result;
  },

  'get':function(id)
  {
    var result = {};
    $.ajax({ url: path+"vis/multigraph/get_json", data: "id="+id, dataType: 'json', async: false, success: function(data){result = data;} });
    return result;
  },

  'remove':function(id)
  {
    var result = {};
    $.ajax({ url: path+"vis/multigraph/delete_json", data: "id="+id, async: false, success: function(data){result = data;} });
    return result;
  },

  'getlist':function()
  {
    var result = {};
    $.ajax({ url: path+"vis/multigraph/getlist_json", async: false, dataType: 'json', success: function(data){result = data;} });
    return result;
  }

}
