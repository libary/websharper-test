(function()
{
 "use strict";
 var Global,WebSharper4,Client,Site,WebSharper,UI,Templating,Runtime,Server,ProviderBuilder,Handler,TemplateInstance,Client$1,Templates;
 Global=self;
 WebSharper4=Global.WebSharper4=Global.WebSharper4||{};
 Client=WebSharper4.Client=WebSharper4.Client||{};
 Site=WebSharper4.Site=WebSharper4.Site||{};
 WebSharper=Global.WebSharper;
 UI=WebSharper&&WebSharper.UI;
 Templating=UI&&UI.Templating;
 Runtime=Templating&&Templating.Runtime;
 Server=Runtime&&Runtime.Server;
 ProviderBuilder=Server&&Server.ProviderBuilder;
 Handler=Server&&Server.Handler;
 TemplateInstance=Server&&Server.TemplateInstance;
 Client$1=UI&&UI.Client;
 Templates=Client$1&&Client$1.Templates;
 Client.Startup$20$21=function()
 {
  return function()
  {
   Global.alert("Clicked!");
  };
 };
 Client.Startup=function()
 {
  var b,t,p;
  b=(t=ProviderBuilder.Make$1(),t.WithHole(Handler.EventQ2(t.k,"clickme",function()
  {
   return t.i;
  },function()
  {
   Global.alert("Clicked!");
  }))).WithHole({
   $:1,
   $0:"clicktext",
   $1:"Click me!"
  });
  p=Handler.CompleteHoles(b.k,b.h,[]);
  b.i=new TemplateInstance.New(p[1],Templates.RunFullDocTemplate(p[0]));
 };
 Site.HomePage$32$31=function()
 {
  return function()
  {
   Client.Startup();
  };
 };
}());
