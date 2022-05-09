<?php
class Model{
    public $dbhandle;


    public function __construct()
	{
        print("Trying to create new model \n");
		// Set up the database source name (DSN)
		$dsn = 'sqlite:../db/test1.db';
		
		// Then create a connection to a database with the PDO() function
		try {	
			// Change connection string for different databases, currently using SQLite
			$this->dbhandle = new PDO($dsn, 'user', 'password', array(
    													PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
    													PDO::ATTR_EMULATE_PREPARES => false,
														));
            //$this->dbhandle->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
			//echo 'Database connection created</br></br>';
		}
		catch (PDOEXception $e) {
			echo "Issue connecting to database: ";
			// Generate an error message if the connection fails
        	print new Exception($e->getMessage());
    	}
	}
}
?>