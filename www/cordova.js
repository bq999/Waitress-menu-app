$('.scan-qrcode').click(function(){
	cordova.plugins.barcodescanner.scan(
		function(result){
			if (result.text){
				materialize.toast('table '+result.text, 2000);
				$('#tablenum').val(result.text);
			}
		},
		function(error){
			materialize.toast('Error ' + error, 2000, 'red-text');
		}
		);
});