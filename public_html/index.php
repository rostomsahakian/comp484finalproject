<!DOCTYPE html>
<!--
@author: Rostom Sahakian
Date: 11/10/2016
Description: This is the main page which will be acting as traffic controller.
The templates folder will have the header and footer which are static and the body will be dynamic
-->
<html>
    <head>
        <meta charset="UTF-8">
        <title></title>
    </head>
    <body>
        <?php
        include 'includes.php';
        // check for session if session exists then go to beck-end else remain of front-end
        ///echo "trafic control";
        //$file = new body();
        $parents = new Student();
        $pt = array("m_fname"=>"rosie");
        $parents->StudentParent($pt);
        ?>
    </body>
</html>
