
var user = {

  'login':function(username,password,rememberme)
  {
    var result ={};
    $.ajax({
      type: "POST",
      url: path+"user/login_json",
      data: "&username="+username+"&password="+encodeURIComponent(password)+"&rememberme="+rememberme,
      dataType: 'json',
      async: false,
      success: function(data)
      {
        result = data;
      } 
    });
    return result;
  },

  'register':function(username,password,email)
  {
    var result = {};
    $.ajax({
      type: "POST",
      url: path+"user/register_json",
      data: "&username="+username+"&password="+encodeURIComponent(password)+"&email="+email,
      dataType: 'json',
      async: false, 
      success: function(data)
      {
        result = data;
      } 
    });
    return result;
  },

  'get':function()
  {
    var result = {};
    $.ajax({ url: path+"user/get_json", dataType: 'json', async: false, success: function(data) {result = data;} });
    return result;
  },

  'set':function(data)
  {
    var result = {};
    $.ajax({ url: path+"user/set_json", data: "&data="+JSON.stringify(data) ,dataType: 'json', async: false, success: function(data) {result = data;} });
    return result;
  }

}

