$(function () {	$(".dateTF").datepicker();	$(".dateTF").focusin(function () {		$(this).attr("placeholder", "");	});	$("#danchengBtn").addClass("selected");	$("#wangfanAddr").hide();	$("#wangfanTime").hide();	$("#duocheng").hide();	$("#gaoji").hide();	$("#RIP").hide();	$("#danchengBtn").click(function () {		$(this).parent().siblings().children("a").removeClass("selected");		$(this).addClass("selected");		$("#dancheng").show(100);		$("#RIP").hide();		$("#duocheng").hide();		$("#wangfanAddr").hide();		$("#wangfanTime").hide();	});	$("#wangfanBtn").click(function () {		$(this).parent().siblings().children("a").removeClass("selected");		$(this).addClass("selected");		$("#dancheng").show(100);		$("#RIP").hide();		$("#duocheng").hide();		$("#wangfanAddr").show();		$("#wangfanTime").show();	});	$("#duochengBtn").click(function () {		$(this).parent().siblings().children("a").removeClass("selected");		$(this).addClass("selected");		$("#dancheng").hide();		$("#RIP").hide();		$("#duocheng").show(100);	});	$("#RIPBtn").click(function () {		$(this).parent().siblings().children("a").removeClass("selected");		$(this).addClass("selected");		$("#dancheng").hide();		$("#duocheng").hide();		$("#RIP").show(100);	});	$("#gaojiBtn").click(function () {		$("#gaoji").toggle(100);	});});