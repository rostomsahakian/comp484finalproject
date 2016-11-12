<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * Description of CreateTables
 *
 * @author rostom
 */
class CreateTables {

    private $_mysqli;
    private $_db;

    public function __construct() {
        $this->_db = DBCon::getInstance();
        $this->_mysqli = $this->_db->getConnection();
    }

    /*
     * Student name will include:
     * .first name
     * .middle name
     * .last name
     * .suffix (sinior, junior, I, III, ...)
     */

    public function CreateStudentInfoTable() {
        $sql = "CREATE TABLE IF NOT EXISTS comp484_studentInfo "
                . " ( "
                . "id INT NOT NULL PRIMARY KEY AUTO_INCREMENT, "
                . "f_name VARCHAR (250) NOT NULL, "
                . "m_name VARCHAR (50) NOT NULL,"
                . "l_name VARCHAR (250) NOT NULL, "
                . "date_added VARCHAR (50) NOT NULL"
                . ")";
        $result = $this->_mysqli->query($sql);
    }

    /*
     * Create Table for school districts
     */

    public function CreateSchoolDistrictTable() {
        $sql = "CREATE TABLE IF NOT EXISTS comp484_schooldistrict "
                . " ( "
                . "id INT NOT NULL PRIMARY KEY AUTO_INCREMENT, "
                . "district VARCHAR (250) NOT NULL "
                . ")";
        $result = $this->_mysqli->query($sql);
    }
    
    /*
     * Create table for all the schools with respective ditricts
     */
    public function CreateSchoolstableNames(){
         $sql = "CREATE TABLE IF NOT EXISTS comp484_schoolname "
                . " ( "
                . "id INT NOT NULL PRIMARY KEY AUTO_INCREMENT, "
                . "school_name VARCHAR (250) NOT NULL, "
                . "district_id INT NOT NULL "
                . ")";
        $result = $this->_mysqli->query($sql);
    }

}
