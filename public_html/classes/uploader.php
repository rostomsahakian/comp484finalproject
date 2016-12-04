<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * Description of uploader
 *
 * @author rostom
 */
class uploader {

    private $_mysqli;
    private $_db;
    public $flag = 0;

    public function __construct() {
        $this->_db = DB_Connect::getInstance();
        $this->_mysqli = $this->_db->getConnection();
    }

    /*
     * Upload Images
     * It will got to a frontend fold and will have its own directory for each page type
     */

    public function Do_Upload_images($d) {

        $data = array(
            "table" => "comp484_parent_dl",
            "field" => "parent_id",
            "value" => $d['parent_id']
        );
        $get_number_of_images = $this->GetNumberOfImages($data);

        $number = $get_number_of_images['row_count'];
        $uniq_num = uniqid();

        // Create directory if it does not exist
        $folder_name = "license_" . $uniq_num . '/';
        if (!is_dir(ABSOLUTH_PATH_IMAGES . $folder_name)) {
            mkdir(ABSOLUTH_PATH_IMAGES . $folder_name);
        }


        $upload_file_new_name = preg_replace('/^.*\.([^.]+)$/D', "dl_number_" . ((int) $number + 1) . ".$1", basename($_FILES["uploadimage"]['name']));

        $upload_file = ABSOLUTH_PATH_IMAGES . $folder_name . $upload_file_new_name;

        //$path_2 = FE_IMAGES . $logo_name . "_logo/";
        //$path = P_IMAGE_PATH . $logo_name . "_logo/";

        $uploadOk = 1;

        $imageFileType = pathinfo($upload_file, PATHINFO_EXTENSION);


        if (isset($_POST)) {
            
        }
        if (file_exists($upload_file)) {
            $uploadOk = 0;
        }
        if ($_FILES['uploadimage']["size"] > 5000000) {
            
        }
        if ($imageFileType != "jpg" && $imageFileType != "png" && $imageFileType != "jpeg" && $imageFileType != "gif" && $imageFileType != "PNG" && $imageFileType != "JPG" && $imageFileType != "JPEG" && $imageFileType != "GIF") {
            $uploadOk = 0;
        }
        if ($uploadOk == 0) {
            
        } else {
            if (file_exists("$folder_name.$upload_file")) {
                unlink("$folder_name.$upload_file");
            }

            if (move_uploaded_file($_FILES['uploadimage']["tmp_name"], $upload_file)) {

                $insert_image = "INSERT INTO `comp484_parent_dl` (parent_id, other_name, location, image_name, date_added) "
                        . "VALUES "
                        . "('" . $d['parent_id'] . "', '" . $d['other_name'] . "', '" . $path . "', " . $upload_file_new_name . "', '" . $date_added . "')";
                $insert_result = $this->_mysqli->query($insert_image);
                return true;
            } else {
                return false;
            }
        }
    }

    public function is_dir_empty($dir) {
        if (!is_readable($dir))
            return NULL;
        $handle = opendir($dir);
        while (false !== ($entry = readdir($handle))) {
            if ($entry != "." && $entry != "..") {
                return FALSE;
            }
        }
        return TRUE;
    }

    public function GetNumberOfImages(array $data) {
        $sql = "SELECT COUNT(id) AS row_count FROM `" . $data['table'] . "` WHERE `" . $data['field'] . "` = '" . $data['value'] . "'";
        $result = $this->_mysqli->query($sql);
        $row = $result->fetch_array(MYSQLI_ASSOC);

        if ($result) {
            return $row;
        } else {
            return false;
        }
    }

}

//$u = new uploader();
