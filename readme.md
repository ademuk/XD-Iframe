Installation
============

Step 1
------
Upload xd_receiver.js, and the following file to the same server as that of the parent page (Black Baud). call it xd_receiver.html:

	<!DOCTYPE html>
	<html>
	<head>
		<meta charset="utf-8" />
	</head>
	<body>
		<script src="xd_receiver.js"></script>
	</body>
	</html>

Step 2
------
Upload bcc.js and add the following to every BCC page you wish to auto resize, just above the closing body tag. Set the xdReceiver param to the url of the file created in step one. Feel free to move bcc.js to a more suitable directory.

	<div id="bccRoot"></div>
	<script src="bcc.js"></script>
	<script>
	BCC.init({
		xdReciever: '//parent-domain.local/xd_receiver.html'
	});
	BCC.setIframeSize();
	</script>
