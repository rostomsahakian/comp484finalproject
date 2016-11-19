<?php // 
/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
//
//$host = "localhost";
//
//$user = "comp484";
//
//$password = "Comp484FinalProject@";
//
//$db = "comp484";
//
//$conn = mysqli_connect($host, $user, $password, $db);
//if (mysqli_connect_errno()) {
//    echo "Connection error : " . mysqli_connect_error();
//}
//
//
//if (isset($_GET['userInput'])) {
//    $value = $_GET['userInput']; //assign the value
//   
//} else {
//    echo "no input";
//}
////Select query
//
//$sql = "SELECT * FROM comp484_schooldistrict WHERE district LIKE '%".$value."%'";
//if ($result = mysqli_query($conn, $sql)) {
//    if (mysqli_num_rows($result) > 0) {
////Store the result in an array list[]
//
//        while ($row = mysqli_fetch_array($result)) {
//            $list[] = $row['district'];
//        }
//    } else {
////set a null value to list[] if no result to prevent error
//
//        $list[] = "";
//    }
//}
//
//if (!empty($value)) {
//    if ($matched = preg_grep('~' . $value . '~i', $list)) {
//        $count = 0;
//        echo '<ul>';
//        while ($count < sizeOf($list)) {
//            if (isset($matched[$count])) {
//                /*
//                  link the real target search file which should be opened when we click the search button or select the one from the drop down suggestion.
//                 */
//                echo '<a href=?searchItem=' . $matched[$count] . '><li>' . $matched[$count] . '</li></a>';
//            }
//            $count++;
//        }
//        echo '</ul>';
//    } else {
//        echo "No result";
//    }
//}
//include 'classes/loader.php';
//
////$b = new body();
//$body->GetSchools($_GET['userInput']);