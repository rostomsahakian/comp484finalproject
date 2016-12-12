# Comp 484 Final Project Rostom Sahakian and Arin Zargarian Fall 2016t CSUN
#***********************INSTRUCTIONS*********************************#

#If you want to install this system on your server follow the instructions 
#1. There is a export of the Database including the tables and some data 
# I. create your Database in your cpanel
# II. make sure you remember the username, password, database name. host name (i.e localhost) 
# III. under the public_html go to:
#   i. Folder name private 
#   ii. you will see a file called Defines.php
#   iii. You will see something like this:
#        define("DB_USERNAME", "comp484");//change this 
         define("DB_PASSWORD", "Comp484FinalProject@"); // change this
         define("DB_NAME", "comp484"); //change this
         define("DB_HOST", "localhost");//change this
#   iv. change the second parameters for each of the Constant 

# IV. Goto you database and import the file that is included with the zip called Comp484_db_export.sql
#2. you might need to adjust .htaccess files the root .htaccess needs to be changed if your domain is not a sub domain 
#       # Change 'subdirectory' to be the directory you will use for your main domain.
        RewriteCond %{REQUEST_URI} !^/public_html/  <---------- comment it off if you don't have a folder like that
#       #RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]
        RewriteCond %{HTTP_HOST} ^(www.)?dev.comp484finalp.webulence.com$   <--------------- change this to you domain name
#       # Change 'subdirectory' to be the directory you will use for your main domain.
        RewriteRule ^(.*)$ /public_html/$1 <-------- change this if you don't have it

# 3. Inside the public_html change the .htaccess file as well     RewriteCond %{HTTP_HOST} ^(www.)?dev.comp484finalp.webulence.com$ <------------ to your own domain