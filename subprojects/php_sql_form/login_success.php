<?php
session_start();
if(!session_is_registered(myusername)){
header("location:main_login.php");
exit();
}
?>

<html>
<body>
Login Successful
</body>
</html>