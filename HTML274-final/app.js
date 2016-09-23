$(function(){
	// 幫 #websiteDesign 的 li 子元素加上 .accordionPart
	// 並幫其加上 hover 及 click 事件
	// 同時把兄弟元素加上 .qa_content 並隱藏起來
	$('#websiteDesign li').find('.websiteDesign-on').addClass('websiteDesign-on').hover(function(){$(this).removeClass('websiteDesign-on_on');
	}).click(function(){
		// 當點到標題時，若答案是隱藏時則顯示它，同時隱藏其它已經展開的項目
		// 反之則隱藏
		var $subMenu = $(this).next('div.subMenu');
		if(!$subMenu.is(':visible')){
			$('#subMenu ul li div.subMenu:visible').slideUp();
		}
		$subMenu.slideToggle();
	}).siblings().addClass('subMenu').hide();
});