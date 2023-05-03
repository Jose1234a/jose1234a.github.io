<?php

$conexion=mysqli_connect("localhost","root","","login");
if($conexion){
    echo"<script>alert ('conexion exitosa');</script>";

}else{
    echo"<script>alert ('error');</script>";

}

?>

