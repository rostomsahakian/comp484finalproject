-- phpMyAdmin SQL Dump
-- version 4.0.10.14
-- http://www.phpmyadmin.net
--
-- Host: localhost:3306
-- Generation Time: Dec 11, 2016 at 08:00 PM
-- Server version: 5.5.52-cll-lve
-- PHP Version: 5.6.20

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `comp484`
--

-- --------------------------------------------------------

--
-- Table structure for table `comp484_children_info`
--

CREATE TABLE IF NOT EXISTS `comp484_children_info` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `fname` varchar(250) NOT NULL,
  `mname` varchar(50) NOT NULL,
  `lname` varchar(250) NOT NULL,
  `student_id` varchar(250) NOT NULL,
  `dob` varchar(100) NOT NULL,
  `age` varchar(10) NOT NULL,
  `gender` varchar(50) NOT NULL,
  `last_grade` varchar(50) NOT NULL,
  `district` varchar(250) NOT NULL,
  `schoolname` varchar(200) NOT NULL,
  `teacher` varchar(250) NOT NULL,
  `parent_id` int(10) NOT NULL,
  `date_added` varchar(150) NOT NULL,
  `date_modified` varchar(150) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=7 ;

--
-- Dumping data for table `comp484_children_info`
--

INSERT INTO `comp484_children_info` (`id`, `fname`, `mname`, `lname`, `student_id`, `dob`, `age`, `gender`, `last_grade`, `district`, `schoolname`, `teacher`, `parent_id`, `date_added`, `date_modified`) VALUES
(6, 'Matin', '', 'Sahakian', '1060756', '02/02/2010', '6', 'male', '3rd', '1', '1', 'Miss Piggy', 1, '12/07/2016', ''),
(2, 'Emily', '', 'Mark', '2222', '12/10/2008', '7', 'female', '2nd', '1', '11', 'Mrs.Clarke', 2, '12/03/2016', ''),
(3, 'Dorian', '', 'Sahakian', '1060759', '02/05/2011', '5', 'male', '2nd', '1', '13', 'Miss Piggy', 3, '12/04/2016', ''),
(5, 'Matt', '', 'ted', '1234567', '08/11/2011', '5', 'male', 'first', '1', '1', 'smith', 4, '12/04/2016', '');

-- --------------------------------------------------------

--
-- Table structure for table `comp484_early_signout`
--

CREATE TABLE IF NOT EXISTS `comp484_early_signout` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `student_id` varchar(150) NOT NULL,
  `parent_id` int(10) NOT NULL,
  `checkout_time` varchar(100) NOT NULL,
  `request_date` varchar(100) NOT NULL,
  `picker` varchar(100) NOT NULL,
  `picker_id` varchar(100) NOT NULL,
  `picker_relation` varchar(250) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=9 ;

--
-- Dumping data for table `comp484_early_signout`
--

INSERT INTO `comp484_early_signout` (`id`, `student_id`, `parent_id`, `checkout_time`, `request_date`, `picker`, `picker_id`, `picker_relation`) VALUES
(1, '3', 3, '08:35 am', 'December 4,2016, 4:33 am', 'Rouben Sahakian', 'D566582', 'uncle'),
(2, '--', 3, '04:22 am', 'December 4,2016, 4:37 am', 'self', '', ''),
(3, '3', 3, '09:35 am', 'December 4,2016, 5:51 am', 'Demitrious', 'D566582', 'Uncle'),
(4, '3', 3, '11:44 am', 'December 4,2016, 7:44 am', 'Rouben Sahakian', 'D566582', 'uncle'),
(5, '3', 3, '11:46 am', 'December 4,2016, 7:46 am', 'self', '', ''),
(6, '1', 1, '01:25 pm', 'December 4,2016, 9:28 am', 'Bob', 'D556789', 'Brother'),
(7, '1', 1, '01:25 pm', 'December 4,2016, 9:28 am', 'Bob', 'D556789', 'Brother'),
(8, '1', 1, '03:43 pm', 'December 5,2016, 9:44 pm', 'self', '', '');

-- --------------------------------------------------------

--
-- Table structure for table `comp484_messages`
--

CREATE TABLE IF NOT EXISTS `comp484_messages` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `from` varchar(100) NOT NULL,
  `to` varchar(100) NOT NULL,
  `message` text CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `date_sent` varchar(100) NOT NULL,
  `time_sent` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=5 ;

--
-- Dumping data for table `comp484_messages`
--

INSERT INTO `comp484_messages` (`id`, `from`, `to`, `message`, `date_sent`, `time_sent`) VALUES
(1, 'do_not_reply@cde.ca.gov', '1', 'We have received your request and will notify you if there are any additional information is needed.\r\n\r\nThank you', '11/30/2016', '20:16'),
(2, 'do_not_reply@cde.ca.gov', '1', 'I look forward to partnering with you to make this an exciting and successful year for our students.  Thank you in advance for your support and commitment.  If you have any questions, please do not hesitate to contact me at principle@cde.ca.gov', '11/29/2016', '08:30'),
(3, 'do_not_reply@cde.ca.gov', '7', 'Dear Lincoln Elementary Friends and Families,\r\n\r\n     Welcome to our school website!  At Lincoln, we pride ourselves in maintaining high expectations for student achievement while focusing on the individual needs of each student.  Our school has an outstanding reputation for providing a variety of educational opportunities including art, music, P.E., technology, garden, nutrition, 3rd-5th grade Science Labs and more. I know you will find that working together leads to the highest quality educational program for your child.  ', '11/28/2016', '0805'),
(4, 'do_not_reply@cde.ca.gov', '7', 'Dear Hidden Hills Families,\r\n\r\nMy name is Melodie Stibich and I am thrilled to be joining the Hidden Hills community as your new principal!   I am so looking forward to getting to know each of you and your children.  I would like to thank everyone for your extraordinary patience these past few weeks as the transition process unfolded.  Moving from one school district to another mid-year required that our two districts strategically plan the timeline.  Monday, March 3rd will be my first official day at Hidden Hills!', '11/25/2016', '1230');

-- --------------------------------------------------------

--
-- Table structure for table `comp484_parent_dl`
--

CREATE TABLE IF NOT EXISTS `comp484_parent_dl` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `parent_id` int(10) NOT NULL,
  `other_name` varchar(250) NOT NULL,
  `folder` text NOT NULL,
  `image_name` text NOT NULL,
  `date_added` varchar(150) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=9 ;

--
-- Dumping data for table `comp484_parent_dl`
--

INSERT INTO `comp484_parent_dl` (`id`, `parent_id`, `other_name`, `folder`, `image_name`, `date_added`) VALUES
(4, 3, '', '../UserData/license_parentid_3/', 'dl_number_1.jpg', 'December 4,2016, 4:30 am'),
(2, 2, '0', '../UserData/license_5843471b1eb15/', 'dl_number_1.jpg', 'December 3,2016, 10:28 pm'),
(5, 3, 'Rouben Sahakian', '../UserData/license_parentid_3/', 'dl_number_2.jpg', 'December 4,2016, 4:33 am'),
(6, 3, 'Demitrious', '../UserData/license_parentid_3/', 'dl_number_3.png', 'December 4,2016, 5:51 am'),
(7, 3, 'Rouben Sahakian', '../UserData/license_parentid_3/', 'dl_number_4.png', 'December 4,2016, 7:44 am'),
(8, 4, '', '../UserData/license_parentid_4/', 'dl_number_1.JPG', 'December 4,2016, 9:38 pm');

-- --------------------------------------------------------

--
-- Table structure for table `comp484_report_absence`
--

CREATE TABLE IF NOT EXISTS `comp484_report_absence` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `student_id` varchar(250) NOT NULL,
  `parent_id` int(10) NOT NULL,
  `absent_from` varchar(100) NOT NULL,
  `absent_to` varchar(100) NOT NULL,
  `reason` text NOT NULL,
  `date_reported` varchar(100) NOT NULL,
  `time_reported` varchar(100) NOT NULL,
  `school_district` int(10) NOT NULL,
  `school` int(10) NOT NULL,
  `teacher` varchar(250) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=38 ;

--
-- Dumping data for table `comp484_report_absence`
--

INSERT INTO `comp484_report_absence` (`id`, `student_id`, `parent_id`, `absent_from`, `absent_to`, `reason`, `date_reported`, `time_reported`, `school_district`, `school`, `teacher`) VALUES
(1, '2222', 2, '30-Nov-2016', '1-Dec-2016', 'Illness', '08/29/2016', '20:08:56', 1, 2, 'Tom'),
(2, '2222', 2, '29-Nov-2016', '30-Nov-2016', 'weak Knees', '04/29/2015', '20:30:19', 1, 1, 'Miss Keneth'),
(3, '1060756', 1, '2-Dec-2016', '3-Dec-2016', 'Home coming', '07/29/2016', '22:08:49', 1, 2, 'Tom'),
(4, '2222', 2, '30-Nov-2016', '1-Dec-2016', 'sdsds', '06/29/2016', '22:56:33', 1, 1, 'Miss Keneth'),
(5, '1060756', 1, '30-Nov-2016', '1-Dec-2016', 'asas', '11/29/2016', '22:57:39', 1, 2, 'Tom'),
(6, '1060756', 1, '30-Nov-2016', '2-Dec-2016', 'sdsds', '11/29/2016', '22:58:00', 1, 2, 'Tom'),
(7, '2222', 2, '30-Nov-2016', '1-Dec-2016', 'Sick', '04/29/2016', '23:09:17', 1, 7, 'Mrs. Brown'),
(8, '1060759', 1, '1-Dec-2016', '4-Dec-2016', 'jimmy', '11/29/2016', '23:48:33', 1, 1, 'Miss Keneth'),
(9, '1060756', 1, '1-Dec-2016', '2-Dec-2016', 'Sick', '11/30/2016', '09:18:47', 1, 2, 'Tom'),
(10, '2222', 2, '1-Dec-2016', '2-Dec-2016', 'Dad died', '10/30/2016', '09:19:17', 1, 1, 'Miss Keneth'),
(11, '2222', 2, '3-Dec-2016', '4-Dec-2016', 'Dead cat', '02/30/2014', '09:20:24', 1, 2, 'Tom'),
(12, '1060756', 1, '4-Dec-2016', '5-Dec-2016', 'Youthube', '02/30/2016', '09:21:17', 1, 2, 'Tom'),
(13, '2222', 2, '6-Dec-2016', '7-Dec-2016', 'Enough', '05/30/2016', '09:21:45', 1, 2, 'Tom'),
(14, '2222', 2, '1-Dec-2016', '2-Dec-2016', 'ding dong', '09/30/2016', '10:17:10', 1, 1, 'Miss Keneth'),
(15, '1060756', 1, '1-Dec-2016', '2-Dec-2016', 'haulin ass ', '09/30/2016', '10:17:48', 1, 1, 'Miss Keneth'),
(16, '1060756', 1, '4-Dec-2016', '5-Dec-2016', 'sick', '11/30/2016', '10:27:25', 1, 1, 'Miss Keneth'),
(17, '1060756', 1, '1-Dec-2016', '2-Dec-2016', 'sick', '11/30/2016', '12:55:59', 1, 2, 'Tom'),
(18, '1234', 1, '30-Nov-2016', '1-Dec-2016', 'Travel', '11/30/2016', '13:11:26', 1, 11, ''),
(19, '1234', 1, '19-Oct-2016', '29-Oct-2016', 'Flu', '11/30/2016', '13:12:43', 1, 11, ''),
(20, '1234', 1, '6-Sep-2016', '7-Sep-2016', 'Sick', '11/30/2016', '13:15:28', 1, 11, ''),
(21, '10522648', 1, '1-Dec-2016', '2-Dec-2016', 'caught cold', '11/30/2016', '20:55:12', 1, 7, 'Mrs. Brown'),
(22, '1060756', 1, '1-Dec-2016', '2-Dec-2016', 'ill', '11/30/2016', '22:10:05', 1, 2, 'Tom'),
(23, '1060756', 1, '2-Dec-2016', '3-Dec-2016', 'Busy', '12/01/2016', '14:41:21', 1, 2, 'Tom'),
(24, '1060756', 1, '2-Dec-2016', '3-Dec-2016', 'Arrested ', '12/01/2016', '15:44:43', 1, 2, 'Tom'),
(25, '1060756', 1, '2-Dec-2016', '3-Dec-2016', 'Arrested', '12/01/2016', '16:38:45', 1, 2, 'Tom'),
(26, '1060759', 1, '2-Dec-2016', '9-Dec-2016', 'Holidays', '12/01/2016', '17:06:25', 1, 1, 'Miss Keneth'),
(27, '1060756', 1, '2-Dec-2016', '3-Dec-2016', 'No reason', '12/01/2016', '21:41:15', 1, 11, 'Tom'),
(28, '1060756', 1, '5-Dec-2016', '13-Dec-2016', 'Vacation', '12/02/2016', '00:11:39', 1, 11, 'Tom'),
(29, '1060756', 1, '5-Dec-2016', '12-Dec-2016', 'Vacation', '12/03/2016', '12:47:14', 1, 11, 'Tom'),
(30, '2222', 2, '3-Dec-2016', 'arenoosh@yahoo.com', 'Sick', '12/03/2016', '15:17:53', 1, 11, 'Mrs.Clarke'),
(31, '2222', 2, '2-Dec-2016', 'arenoosh@yahoo.com', 'Sick', '12/03/2016', '15:18:12', 1, 11, 'Mrs.Clarke'),
(32, '2222', 2, '1-Dec-2016', 'arenoosh@yahoo.com', 'Sick', '12/03/2016', '15:18:35', 1, 11, 'Mrs.Clarke'),
(33, '2222', 2, '8-Dec-2016', 'arenoosh@yahoo.com', 'Travel', '12/03/2016', '15:28:39', 1, 11, 'Mrs.Clarke'),
(34, '2222', 2, '11-Dec-2016', 'arenoosh@yahoo.com', 'travel', '12/03/2016', '15:28:56', 1, 11, 'Mrs.Clarke'),
(35, '1060759', 3, '5-Dec-2016', '6-Dec-2016', 'ill', '12/03/2016', '23:48:37', 1, 13, 'Miss Piggy'),
(36, '1234567', 4, '6-Dec-2016', '8-Dec-2016', 'ill', '12/04/2016', '13:42:44', 1, 1, 'smith'),
(37, '1060756', 1, '6-Dec-2016', '7-Dec-2016', 'Sick', '12/05/2016', '13:42:40', 1, 7, 'patty');

-- --------------------------------------------------------

--
-- Table structure for table `comp484_reset_pass`
--

CREATE TABLE IF NOT EXISTS `comp484_reset_pass` (
  `sid` varchar(250) NOT NULL,
  `uid` varchar(500) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `comp484_reset_pass`
--

INSERT INTO `comp484_reset_pass` (`sid`, `uid`) VALUES
('584349d87997e', '2');

-- --------------------------------------------------------

--
-- Table structure for table `comp484_schooldistrict`
--

CREATE TABLE IF NOT EXISTS `comp484_schooldistrict` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `district` varchar(250) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=81 ;

--
-- Dumping data for table `comp484_schooldistrict`
--

INSERT INTO `comp484_schooldistrict` (`id`, `district`) VALUES
(1, 'ABC Unified School District'),
(2, 'Acton-Agua Dulce Unified School District'),
(3, 'Alhambra Unified School District'),
(4, 'Antelope Valley Union High School District'),
(5, 'Arcadia Unified School District'),
(6, 'Azusa Unified School District'),
(7, 'Baldwin Park Unified School District'),
(8, 'Bassett Unified School District'),
(9, 'Bellflower Unified School District'),
(10, 'Beverly Hills Unified School District'),
(11, 'Bonita Unified School District'),
(12, 'Burbank Unified School District'),
(13, 'Calabasas school district, see?Las Virgenes Unified School District'),
(14, 'Castaic Union School District'),
(15, 'Centinela Valley Union High School District'),
(16, 'Charter Oak Unified School District'),
(17, 'Claremont Unified School District'),
(18, 'Compton Unified School District'),
(19, 'Covina-Valley Unified School District'),
(20, 'Culver City Unified School District'),
(21, 'Downey Unified School District'),
(22, 'Duarte Unified School District'),
(23, 'East Whittier City School District'),
(24, 'Eastside Union School District'),
(25, 'El Monte City School District'),
(26, 'El Monte Union High School District'),
(27, 'El Rancho Unified School District'),
(28, 'El Segundo Unified School District'),
(29, 'Garvey School District'),
(30, 'Glendale Unified School District'),
(31, 'Glendora Unified School District'),
(32, 'Gorman Joint School District'),
(33, 'Hacienda La Puente Unified School District'),
(34, 'Hawthorne School District'),
(35, 'Hermosa Beach City School District'),
(36, 'Inglewood Unified School District'),
(37, 'Keppel Union School District'),
(38, 'La Ca?ada Unified School District'),
(39, 'Lancaster School District'),
(40, 'Las Virgenes Unified School District'),
(41, 'Lawndale Elementary School District'),
(42, 'Lennox School District'),
(43, 'Little Lake City School District'),
(44, 'Long Beach Unified School District'),
(45, 'Los Angeles Unified School District'),
(46, 'Los Nietos School District'),
(47, 'Lowell Joint School District'),
(48, 'Lynwood Unified School District'),
(49, 'Manhattan Beach Unified School District'),
(50, 'Monrovia Unified School District'),
(51, 'Montebello Unified School District'),
(52, 'Mountain View School District (Los Angeles County)'),
(53, 'Newhall School District'),
(54, 'Norwalk La Mirada Unified School District'),
(55, 'Palmdale School District'),
(56, 'Palos Verdes Area Unified School District'),
(57, 'Palos Verdes Peninsula Unified School District'),
(58, 'Paramount Unified School District'),
(59, 'Pasadena Unified School District'),
(60, 'Pomona Unified School District'),
(61, 'Redondo Beach Unified School District'),
(62, 'Rosemead School District'),
(63, 'Rowland Unified School District'),
(64, 'San Gabriel Unified School District'),
(65, 'San Marino Unified School District'),
(66, 'Santa Monica-Malibu Unified School District'),
(67, 'Saugus Union School District'),
(68, 'South Pasadena Unified School District'),
(69, 'South Whittier School District'),
(70, 'Sulphur Springs School District'),
(71, 'Temple City Unified School District'),
(72, 'Torrance Unified School District'),
(73, 'Valle Lindo Elementary School District'),
(74, 'Walnut Valley Unified School District'),
(75, 'West Covina Unified School District'),
(76, 'Westside Union School District'),
(77, 'Whittier City School District'),
(78, 'Whittier Union High School District'),
(79, 'William S. Hart Union High School District'),
(80, 'Wiseburn School District');

-- --------------------------------------------------------

--
-- Table structure for table `comp484_schoolname`
--

CREATE TABLE IF NOT EXISTS `comp484_schoolname` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `school_name` varchar(250) NOT NULL,
  `district_id` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=90 ;

--
-- Dumping data for table `comp484_schoolname`
--

INSERT INTO `comp484_schoolname` (`id`, `school_name`, `district_id`) VALUES
(1, 'Whitney High School?(Cerritos)', 1),
(2, 'Artesia High School?(Lakewood)', 1),
(3, 'Cerritos High School?(Cerritos)', 1),
(4, 'Gahr High School?(Cerritos)', 1),
(5, 'Carmenita Middle School (Cerritos)', 1),
(6, 'Fedde Middle School (Hawaiian Gardens)', 1),
(7, 'Haskell Middle School (Cerritos)', 1),
(8, '(Faye) Ross Middle School (Artesia)', 1),
(9, 'Tetzlaff Middle School (Cerritos)', 1),
(10, 'Aloha Health Medical Academy (Lakewood) -', 1),
(11, 'Bloomfield Elementary School (Hawaiian Gardens) (closed in the 1980s)[1]', 1),
(12, 'Bragg Elementary School (Cerritos)', 1),
(13, 'Burbank Elementary School (Artesia)', 1),
(14, 'Cabrillo Lane Elementary School (Cerritos) (Closed)', 1),
(15, 'Carver Elementary School (Cerritos)', 1),
(16, 'Cerritos Elementary School (Cerritos)', 1),
(17, 'Elliott Elementary School (Artesia)', 1),
(18, 'Furgeson Elementary School (Hawaiian Gardens)', 1),
(19, 'Gonsalves Elementary School (Cerritos)', 1),
(20, 'Hawaiian Elementary School (Hawaiian Gardens)', 1),
(21, 'Juarez Elementary School (Cerritos)', 1),
(22, 'Kennedy Elementary School (Artesia)', 1),
(23, 'Frank Leal Elementary School (Cerritos)', 1),
(24, 'Melbourne Elementary School (Lakewood) (Cerritos)', 1),
(25, 'Niemes Elementary School (Artesia)', 1),
(26, 'Nixon Elementary School (Cerritos)', 1),
(27, 'Palms Elementary School (Lakewood)', 1),
(28, 'Stowers Elementary School (Cerritos)', 1),
(29, 'Willow Elementary School (Lakewood)', 1),
(30, 'Helen Wittmann Elementary School (Cerritos)', 1),
(31, 'Ramona School?(Alhambra)', 2),
(32, 'Martha Baldwin School?(Alhambra)', 2),
(33, 'Brightwood School (Monterey Park)', 2),
(34, 'Emery Park School (Alhambra)', 2),
(35, 'Fremont School (Alhambra)', 2),
(36, 'Garfield School (Alhambra)', 2),
(37, 'Granada School (Alhambra)', 2),
(38, 'Marguerita School (Alhambra)', 2),
(39, 'Monterey Highlands School (Monterey Park)', 2),
(40, 'Park School (Alhambra)', 2),
(41, 'Repetto School?(Monterey Park)', 2),
(42, 'Ynez School (Monterey Park)', 2),
(43, 'William Northrup School (Alhambra)', 2),
(44, 'Mark Keppel High School', 2),
(45, 'Alhambra High School?(Alhambra)', 2),
(46, 'Mark Keppel High School?(Alhambra)', 2),
(47, 'San Gabriel High School?(Alhambra)', 2),
(48, 'Century High School?(Alhambra)', 2),
(49, 'Independence High School?(Alhambra)', 2),
(50, 'Littlerock High School', 3),
(51, 'Highland High School', 3),
(52, 'Palmdale High School', 3),
(53, 'Knight High School', 3),
(54, 'Antelope Valley High School', 3),
(55, 'Eastside High School', 3),
(56, 'Lancaster High School', 3),
(57, 'Quartz Hill High School', 3),
(58, 'SOAR High School', 3),
(59, 'Antelope Valley Regional Occupational Program?(AV ROP) in Palmdale', 3),
(60, 'R. Rex Parris Continuation High School?in Palmdale', 3),
(61, 'Desert Winds Continuation High School?in Lancaster', 3),
(62, 'Holly Avenue Elementary School', 4),
(63, 'Longley Way Elementary School', 4),
(64, 'Baldwin Stocker Elementary School', 4),
(65, 'Camino Grove Elementary School', 4),
(66, 'Highland Oaks Elementary School', 4),
(67, 'Hugo Reid Elementary School', 4),
(68, 'Richard Henry Dana Middle School', 4),
(69, 'Foothills Middle School', 4),
(70, 'First Avenue Middle School', 4),
(71, 'Arcadia Hight School', 4),
(72, 'Henry Dalton Elementary schools', 5),
(73, 'Gladstone Street Elementary schools', 5),
(74, 'Victor Hodge Elementary schools', 5),
(75, 'Charles Lee Elementary schools', 5),
(76, 'Longfellow (Pre K-Kindergarten)', 5),
(77, 'Magnolia Elementary schools', 5),
(78, 'Mountain View Elementary schools', 5),
(79, 'Clifford Murray Elementary schools', 5),
(80, 'Paramount Elementary schools', 5),
(81, 'W. R. Powell Elementary schools', 5),
(82, 'Valleydale Elementary schools', 5),
(83, 'Alice M. Ellington (K-8)', 5),
(84, 'Center Middle schools', 5),
(85, 'Foothill Middle schools', 5),
(86, 'Slauson Middle schools', 5),
(87, 'Azusa High School', 5),
(88, 'Gladstone High School', 5),
(89, 'Sierra High School (California)', 5);

-- --------------------------------------------------------

--
-- Table structure for table `comp484_studentInfo`
--

CREATE TABLE IF NOT EXISTS `comp484_studentInfo` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `f_name` varchar(250) NOT NULL,
  `m_name` varchar(50) NOT NULL,
  `l_name` varchar(250) NOT NULL,
  `date_added` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `comp484_users_info`
--

CREATE TABLE IF NOT EXISTS `comp484_users_info` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `username` varchar(250) NOT NULL,
  `password` varchar(500) NOT NULL,
  `added_date` varchar(150) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=5 ;

--
-- Dumping data for table `comp484_users_info`
--

INSERT INTO `comp484_users_info` (`id`, `username`, `password`, `added_date`) VALUES
(1, 'rostom.sahakian@gmail.com', '616812d7a966392405fdf0b166c377a0', '12/03/2016'),
(2, 'arenoosh@yahoo.com', '9c14fe98fbb2ec5e8b38e2d610ffb107', '12/03/2016'),
(3, 'wareaglez2007@hotmail.com', '616812d7a966392405fdf0b166c377a0', '12/04/2016'),
(4, 'selina.aghamalian.509@my.csun.edu', 'a906449d5769fa7361d7ecc6aa3f6d28', '12/04/2016');

-- --------------------------------------------------------

--
-- Table structure for table `comp484_user_contact`
--

CREATE TABLE IF NOT EXISTS `comp484_user_contact` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `phone1` varchar(15) NOT NULL,
  `phone2` varchar(15) NOT NULL,
  `userid` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `userid` (`userid`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=5 ;

--
-- Dumping data for table `comp484_user_contact`
--

INSERT INTO `comp484_user_contact` (`id`, `phone1`, `phone2`, `userid`) VALUES
(1, '8187233190', '', 1),
(2, '2222222222', '', 2),
(3, '8187233190', '', 3),
(4, '8888855555', '', 4);

-- --------------------------------------------------------

--
-- Table structure for table `comp484_user_name`
--

CREATE TABLE IF NOT EXISTS `comp484_user_name` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `fname` varchar(250) NOT NULL,
  `mname` varchar(250) NOT NULL,
  `lname` varchar(250) NOT NULL,
  `userid` int(10) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `userid` (`userid`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=5 ;

--
-- Dumping data for table `comp484_user_name`
--

INSERT INTO `comp484_user_name` (`id`, `fname`, `mname`, `lname`, `userid`) VALUES
(1, 'Rostom', '', 'Sahakian', 1),
(2, 'Arenoosh', '', 'Mark', 2),
(3, 'Rostom', '', 'Sahakian', 3),
(4, 'Selina', '', 'Aghamal', 4);

-- --------------------------------------------------------

--
-- Table structure for table `comp484_user_relation`
--

CREATE TABLE IF NOT EXISTS `comp484_user_relation` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `relation` varchar(150) NOT NULL,
  `userid` int(10) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `userid` (`userid`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=5 ;

--
-- Dumping data for table `comp484_user_relation`
--

INSERT INTO `comp484_user_relation` (`id`, `relation`, `userid`) VALUES
(1, 'Father', 1),
(2, 'Mother', 2),
(3, 'Father', 3),
(4, 'mother', 4);

-- --------------------------------------------------------

--
-- Table structure for table `comp484_user_status`
--

CREATE TABLE IF NOT EXISTS `comp484_user_status` (
  `userid` int(10) NOT NULL,
  `status` int(2) NOT NULL DEFAULT '0',
  `role` varchar(100) NOT NULL,
  `date_login` varchar(150) NOT NULL,
  UNIQUE KEY `userid` (`userid`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `comp484_user_status`
--

INSERT INTO `comp484_user_status` (`userid`, `status`, `role`, `date_login`) VALUES
(1, 1, 'parent', ''),
(2, 1, 'parent', ''),
(3, 1, 'parent', ''),
(4, 1, 'parent', '');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
