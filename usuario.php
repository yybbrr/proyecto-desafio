<?php

require 'conexion.php';

$usuario= $_POST['txt_usuario'];

$insertar="INSERT INTO usuario values ('','$usuario')";

$query= mysqli_query($conectar,$insertar);

if($query) {

echo "<script>
alert('Usuario Ingresado Correctamente, Comience a Jugar');
location.href='index.html';
</script>";

}
else{

echo "No se puedo ingresar su nombre de usuario";

}
    ?>