
	<?php 
	header('Content-Type: application/json');

	function getData() {
		$arr = array('a' => 1, 'b' => 2, 'c' => 3, 'd' => 4, 'e' => 5);

		echo json_encode($arr);
	}

	return getData();
	