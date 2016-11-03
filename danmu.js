var ref = new Wilddog("https://dale.wilddogio.com/"); //要读写数据，必须先创建 Wilddog 引用
var arr = [];
$(".s_sub").click(function() {
  var text = $(".s_txt").val();
  ref.child('message').push(text);
  $(".s_txt").val('');
});
