$('.collection-item').on('click', function(){

	var $badge = $('.badge', this);
	if($badge.length == 0){
		$badge = $('<span class="badge brown-text">0</span>').appendTo(this);
	}
	$badge.text(parseInt($badge.text()) + 1);
});

$('.modal-trigger').leanModal();

$('#confirm').on('click', function() {
	var text = '';
	$('.badge').parent().each(function(){
		var product = this.firstChild.textContent;
		var quantity = this.lastChild.textContent;
		text += product + ': ' + quantity + ','
	});

$('#orderview').text(text);
});

$('.collection').on('click', '.badge', function(){
$(this).remove();
return false;
});

$('.action-clear').on('click', function(){
$('#tablenum').val('');
$('.badge').remove();
});



cordova.plugins.barcodeScanner.scan(
      function (result) {
          alert("We got a barcode\n" +
                "Result: " + result.text + "\n" +
                "Format: " + result.format + "\n" +
                "Cancelled: " + result.cancelled);
      },
      function (error) {
          alert("Scanning failed: " + error);
      },
      {
          preferFrontCamera : true, // iOS and Android
          showFlipCameraButton : true, // iOS and Android
          showTorchButton : true, // iOS and Android
          torchOn: true, // Android, launch with the torch switched on (if available)
          prompt : "Place a barcode inside the scan area", // Android
          resultDisplayDuration: 500, // Android, display scanned text for X ms. 0 suppresses it entirely, default 1500
          formats : "QR_CODE,PDF_417", // default: all but PDF_417 and RSS_EXPANDED
          orientation : "landscape", // Android only (portrait|landscape), default unset so it rotates with the device
          disableAnimations : true, // iOS
          disableSuccessBeep: false // iOS
      }
   );