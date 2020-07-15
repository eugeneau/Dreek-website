<?
    $to = "dreek16@yahoo.com";
	$from = "dreek16designer.com";
	$subject = "A message from Dreek16designer.com";
	
	$headers  = "From: $from\r\n";
	$headers .= "Content-type: text/html\r\n";

	$message = <<<EOF
	    <html>
		    <body>
			<h1>Email from Dreek16designer.com</h1>
			<a href="https://dreek16designer.com/">Back to the website</a>
			</body>
	    </html>
	EOF;

	mail($to, $subject, $message, $headers);
?>
