$(function(){$(window).resize(function(){var r=$(window).width(),t,i,n;r<=800?($(".psec_main").css("padding-top","0"),$("#pwrap_banner").hide(),$(".pwrap-b").css({"margin-top":"0"}),$("#psec_4").length&&$(".psec_main_c").children("div:last").attr("id")!="psec_4"&&$("#psec_4").appendTo(".psec_main_c"),$("#psec_11").length&&(n=$("#psec3c_6_11"),n.length?n.children("div:first").attr("id")!="psec_11"&&n.prepend($("#psec_11")):(n=$(".psec_main_c"),n.children("div:last").attr("id")!="psec_11"&&$("#psec_11").appendTo(".psec_main_c")))):(t=$(".psec_main").attr("ptop"),i=$(".topheader_section").height(),$(".psec_main").css("padding-top",t+"px"),$("#pwrap_banner").show(),$(".pwrap-b").css({"margin-top":i}),$("#psec_4").length&&$(".psec_main_c").children("div:first").attr("id")!="psec_4"&&$(".psec_main_c").prepend($("#psec_4")),$("#psec_11").length&&(n=$("#psec3c_6_11"),n.length?n.children("div:first").attr("id")!="psec_11"&&n.prepend($("#psec_11")):(n=$(".psec_main_c"),n.children("div:first").attr("id")!="psec_11"&&n.prepend($("#psec_11")))))}).resize();$("#psec_4").show()});