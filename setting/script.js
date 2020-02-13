//JavaScript

$(document).ready(function(){


/*Kicik cihazlar ucun menu acma butonu >>>>>  */

$("#HeaderMenuIcon").on("click", function(){
	$("#HeaderOpenMenu").slideToggle("fast");
});



/*main hissesi uchun yuxaridan bosluq */

var Genislik = $(window).outerWidth();
if (!$("#HeaderMessage").length) {
	if (Genislik >= 1200) {
		var  Offset = 88;
	}else if ((Genislik >= 992) && (Genislik <= 1199)) {
		var  Offset = 88;
	}else if ((Genislik <= 991) && (Genislik >=768)) {
		var  Offset = 88;
	}else if ((Genislik <= 767) && (Genislik >= 576)){
		var Offset = 78;
	}else if (Genislik <= 575){
		var Offset = 78;
	}

} else {
	if (Genislik >= 1200) {
		var  Offset = 128;
	}else if ((Genislik >= 992) && (Genislik <= 1199)) {
		var  Offset = 128;
	}else if ((Genislik <= 991) && (Genislik >=768)) {
		var  Offset = 118;
	}else if ((Genislik <= 767) && (Genislik >= 576)){
		var Offset = 108;
	}else if (Genislik <= 575){
		var Offset = 108;
	}

}

$("main").css("top", Offset);
$("footer").css("top", Offset);

$(window).resize(function(){
	/*main hissesi uchun yuxaridan bosluq */
var Genislik = $(window).outerWidth();
if (!$("#HeaderMessage").length) {
	if (Genislik >= 1200) {
		var  Offset = 88;
	}else if ((Genislik >= 992) && (Genislik <= 1199)) {
		var  Offset = 88;
	}else if ((Genislik <= 991) && (Genislik >=768)) {
		var  Offset = 88;
	}else if ((Genislik <= 767) && (Genislik >= 576)){
		var Offset = 78;
	}else if (Genislik <= 575){
		var Offset = 78;
	}

} else {
	if (Genislik >= 1200) {
		var  Offset = 128;
	}else if ((Genislik >= 992) && (Genislik <= 1199)) {
		var  Offset = 128;
	}else if ((Genislik <= 991) && (Genislik >=768)) {
		var  Offset = 118;
	}else if ((Genislik <= 767) && (Genislik >= 576)){
		var Offset = 108;
	}else if (Genislik <= 575){
		var Offset = 108;
	}

}

$("main").css("top", Offset);
$("footer").css("top", Offset);

})
});



/* En cox verilen sullar (gizlet/goster) >>>>>>>>> */

	$.SuallarGoster = function(ElementID){

		var SualID = ElementID;
		var IslenecekSahe = "#" + SualID;

		$(".FullPageFrameSuallarCavab").slideUp();
		$(IslenecekSahe).parent().find(".FullPageFrameSuallarCavab").slideToggle();
	}

/* En cox verilen sullar (gizlet/goster) <<<<<<<<<< */




/* Sebetdeki formu gonder >>>>>>>>> */
	
	$.SebetFormGonder = function(){
		$("#SebetFormu").submit();
	}

/* Sebetdeki formu gonder <<<<<<<<<< */




/* Odenis formasini goster >>>>>>>>> */

	$.BasketPaymentCreditCardSystem = function(){
		$("#CreditCard").css("display", "block");
		$("#MobilePayment").css("display", "none");
		$("#BankPayment").css("display", "none");
	}

	$.BasketPaymentMobilePaymentSystem = function(){
		$("#CreditCard").css("display", "none");
		$("#MobilePayment").css("display", "block");
		$("#BankPayment").css("display", "none");
	}

	$.BasketPaymentBankPaymentSystem = function(){
		$("#CreditCard").css("display", "none");
		$("#MobilePayment").css("display", "none");
		$("#BankPayment").css("display", "block");
	}

/* Odenis formasini goster <<<<<<<<<< */


/* Mehsulun seklini goster >>>>>>>>> */

	$.ProductImgChange = function(Img){
		var ChangeImgFile = "img/men/";
		var NewImg = ChangeImgFile + Img;

		$('#BigImg').attr("src", NewImg)
	}

/* Mehsulun seklini goster <<<<<<<<<< */


/* Slayd  >>>>> */
	$(function(){
		var SlideElement					=	$(".SlideArea");
		var CreateSlideElement		=	SlideElement.find(".SlideAreaImgs");
		var	SlideListLength			=	CreateSlideElement.find(".SlideAreaImg").length;
		var	SlideDocumentWidth		=	SlideElement.outerWidth();
		var	FullWidth					=	SlideListLength * SlideDocumentWidth;
		var	ImgRow						=	0;
		var	ChangableArea				=	0;
		
		CreateSlideElement.find(".SlideAreaImg").width(SlideDocumentWidth).end().width(FullWidth);

			$(window).resize(function(){
				SlideElement					=	$(".SlideArea");
				CreateSlideElement		=	SlideElement.find(".SlideAreaImgs");
				SlideListLength			=	CreateSlideElement.find(".SlideAreaImg").length;
				SlideDocumentWidth		=	SlideElement.outerWidth();
				FullWidth					=	SlideListLength * SlideDocumentWidth;
				
				CreateSlideElement.find(".SlideAreaImg").width(SlideDocumentWidth).end().width(FullWidth).css("margin-left", "-" + (ImgRow * SlideDocumentWidth) + "px");
		});

		$.OtomatikDegistir			=	function(){
			if(ImgRow < SlideListLength - 1){
			   ImgRow++;
			   ChangableArea			=	"-" + (ImgRow * SlideDocumentWidth) + "px";
			}else{
				ImgRow					=	0;
				ChangableArea			=	0;
			}
			
			CreateSlideElement.stop().animate({
				marginLeft:ChangableArea
			}, 500, function(){
				SlideElement					=	$(".SlideArea");
				CreateSlideElement		=	SlideElement.find(".SlideAreaImgs");
				SlideListLength			=	CreateSlideElement.find(".SlideAreaImg").length;
				SlideDocumentWidth		=	SlideElement.outerWidth();
				FullWidth				=	SlideListLength * SlideDocumentWidth;
				
				CreateSlideElement.find(".SlideAreaImg").width(SlideDocumentWidth).end().width(FullWidth).css("margin-left", "-" + (ImgRow * SlideDocumentWidth) + "px");
			});
		}
		
		var	PlaySlide		=	setInterval("$.OtomatikDegistir()", 2500);
	});
	/* Slayd <<<<< */