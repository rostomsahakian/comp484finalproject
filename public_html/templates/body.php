<?php
/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * Description of body
 *
 * @author rostom
 */
class body {

    public $schoolName;
    public $flag = 0;
    private $_mysqli;
    private $_db;

    public function __construct() {
        $this->_db = DBCon::getInstance();
        $this->_mysqli = $this->_db->getConnection();
    }

    public function GeneratePage() {
        
    }

    public function SearchSchools() {
        ?>
        <div class="main_wrapper">
            <div class="searchForm">

                <form name="search_school">
                    <input type="text" id="userInput" placeholder ="Search" onkeyup="process()"><br>  
                    <div id="filter"></div> <!--Div to display drop down suggestion -->
                </form>
            </div>
        </div>

        <?php
    }

    public function GetSchools() {

        $sql = "SELECT * FROM `comp484_schools`";
        $result = $this->_mysqli->query($sql);
        if ($result->num_rows > 0) {
            while ($row = $result->fetch_array(MYSQLI_ASSOC)) {
                $this->schoolName[] = $row;
            }
        }
    }

    public function SetSchools() {
        return $this->schoolName;
    }

}
