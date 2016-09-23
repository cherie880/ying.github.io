$(function () {

    //設定myData　
    //幫.readMore-btn加上 click 事件
    
 $("#websiteDesign").click(function(){
     var showMenu = ".subMenu";
         
     $(showMenu).fadeToggle();
     });

//設定myData　
    //幫.readMore-btn加上 click 事件
    
 $("#readMore-btn").click(function(){
     var showdata = ".dataHide";
         
     $(showdata).fadeIn();
     });
});
