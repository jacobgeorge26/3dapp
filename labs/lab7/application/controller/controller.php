<?php
class Controller{
    public $load;
    public $model;

    function __construct($pageURI = null){
        $this->load = new Load();
        $this->model = new Model();
        $this->$pageURI();
    }
    function home()
    {
        // print("trying1");
        // $data = $this->model->model3D_info();
        // print("trying2");
        // $this->load->view('view3DAppTest2', $data);
    }

    function apiCreateTable()
	{
        print("trying3");
		$data = $this->model->dbCreateTable();
		$this->load->view('viewMessage', $data);
	}
	function apiInsertData()
	{
		$data = $this->model->dbInsertData();
	   	$this->load->view('viewMessage', $data);
	}  
	function apiGetData()
	{
		$data = $this->model->dbGetData();
		$this->load->view('view3DAppData', $data);
	}  

	public function dbCreateTable()
	{
		try {
			$this->dbhandle->exec("CREATE TABLE Model_3D (Id INTEGER PRIMARY KEY, brand TEXT, x3dModelTitle TEXT, x3dCreationMethod TEXT, modelTitle TEXT, modelSubtitle TEXT, modelDescription TEXT)");
			return "Model_3D table is successfully created inside test1.db file";
		}
		catch (PD0EXception $e){
			print new Exception($e->getMessage());
		}
		$this->dbhandle = NULL;
	}

    function dbInsertData(){
        try{
            $this->dbhandle->exec(
                "INSERT INTO Model3D (Id, x3dTitle, CreateMethod, ModelTitle, ModelDescription) VALUES (1, 'test1', 'test2', 'test3', 'test4')");
                return "Data inserted";
        }
        catch(PDOException $e){
            print new Exception($e->getMessage());
        }
        $this->dbhandle = NULL;
    }

    function dbGetData(){
        try{

            $sql = 'SELECT * FROM Model3D';

            $stmt = $this->dbhandle->query($sql);

            $result = null;

            $i=-0;

            while($data = $stmt->fetch()){
                $result[$i]['x3dTitle'] = $data['x3dTitle'];
                $result[$i]['CreateMethod'] = $data['CreateMethod'];
                $result[$i]['ModelTitle'] = $data['ModelTitle'];
                $result[$i]['ModelDescription'] = $data['ModelDescription'];
                $i++;
            }
        }
        catch(PDOException $e){
            print new Exception($e->getMessage());
        }
        $this->dbhandle = NULL;
        return $result;
    }
}
?>