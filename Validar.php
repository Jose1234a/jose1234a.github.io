<?php
$usuario=$_POST['usuario'];
$contrasena=$_POST['contrasena'];
session_start();
$_SESSION['usuario']=$usuario;

$conexion=mysqli_connect("localhost","root","","login");

$consulta="SELECT*FROM usuarios where usuario='$usuario' and contrasena='$contrasena'";
$resultado=mysqli_query($conexion, $consulta);

$filas=mysqli_fetch_array($resultado);

if($usuario=$filas['usuario']){
    echo"<script>alert('BIENVENIDO USUARIO');</script>";
    header("location:inicio.html");
}else{
    echo"<script>alert ('error usuario no encontrado');</script>";
    header("location:index.html");

    mysqli_free_result($resultado);
    mysquli_close($conexion);
}

mysqli_free_result($resultado);
mysqli_close($conexion);
?>