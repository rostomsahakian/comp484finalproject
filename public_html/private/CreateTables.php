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

}
