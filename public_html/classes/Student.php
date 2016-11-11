<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * Description of Student
 *
 * @author rostom
 */
class Student {

    public $student;
    public $info;
    public $SParent;
    public $flag = 0;

    public function __construct() {
        ;
    }

    /*
     * Student name will include:
     * .first name
     * .middle name
     * .last name
     * .suffix (sinior, junior, I, III, ...)
     */

    public function StudentName(array $name) {
        
    }

    /*
     * Student Infor will include:
     * 1. email
     * 2. age
     * 3. gender
     * 4. ssn number
     * 5. DOB
     * 6. disabilities (if they have any)
     * 7. grade
     * 8. student ID
     */

    public function StudentInfo(array $info) {
        
    }

    /*
     * StudentParent will include:
     * 1. parent first name (mother)
     * 2. parent last name (mother)
     * 3. parent first name (father)
     * 4. parent last name (father)
     * 5. contact information (mother)
     * 6. contact information (father)
     * 7. occupation (mother)
     * 8. occupation (father)
     * 9. place of residence
     * 
     */

    public function StudentParent(array $parent) {

        if (!is_array($parent)) {
            $this->flag = 1;
        } else {
        /*
         * We will insert the given data into the parents table
         */
       
        }
    }

    public function StudentSchool(array $school) {
        
    }

    public function StudentAttendanceHistory($history) {
        
    }

    public function StudentPhote($photo) {
        
    }

}
