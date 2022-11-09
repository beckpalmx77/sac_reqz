<?php
session_start();
error_reporting(0);

include('../config/connect_db.php');
include('../config/lang.php');
include('../util/record_util.php');


if ($_POST["action"] === 'GET_DATA') {

    $id = $_POST["id"];

    $return_arr = array();

    $sql_get = "SELECT * FROM v_mdevice_group "
    . " WHERE v_mdevice_group.id = " . $id;

    //$myfile = fopen("myqeury_1.txt", "w") or die("Unable to open file!");
    //fwrite($myfile, $sql_get);
    //fclose($myfile);

    $statement = $conn->query($sql_get);
    $results = $statement->fetchAll(PDO::FETCH_ASSOC);

    foreach ($results as $result) {
        $return_arr[] = array("id" => $result['id'],
            "job_date_id" => $result['job_date_id'],
            "job_id" => $result['job_id'],
            "job_problem_detail" => $result['job_problem_detail'],
            "job_date" => $result['job_date'],
            "job_status" => $result['job_status']);
    }

    echo json_encode($return_arr);

}

if ($_POST["action"] === 'SEARCH') {

    if ($_POST["job_date"] !== '') {

        $job_date = $_POST["job_date"];
        $sql_find = "SELECT * FROM mdevice_group WHERE job_date = '" . $job_date . "'";
        $nRows = $conn->query($sql_find)->fetchColumn();
        if ($nRows > 0) {
            echo 2;
        } else {
            echo 1;
        }
    }
}

if ($_POST["action"] === 'ADD') {
    if ($_POST["job_date"] !== '') {
        $job_date_id = "J-" . sprintf('%04s', LAST_ID($conn, "mdevice_group", 'id'));
        $job_id = $_POST["job_id"];
        $job_date = $_POST["job_date"];
        $job_status = $_POST["job_status"];
        $sql_find = "SELECT * FROM mdevice_group WHERE job_date = '" . $job_date . "'";
        $nRows = $conn->query($sql_find)->fetchColumn();
        if ($nRows > 0) {
            echo $dup;
        } else {
            $sql = "INSERT INTO mdevice_group(job_id,job_date,job_status) 
                    VALUES (:job_id,:job_date,:job_status)";
            $query = $conn->prepare($sql);
            $query->bindParam(':job_id', $job_id, PDO::PARAM_STR);
            $query->bindParam(':job_date', $job_date, PDO::PARAM_STR);
            $query->bindParam(':job_status', $job_status, PDO::PARAM_STR);
            $query->execute();
            $lastInsertId = $conn->lastInsertId();

            if ($lastInsertId) {
                echo $save_success;
            } else {
                echo $error;
            }
        }
    }
}


if ($_POST["action"] === 'UPDATE') {

    if ($_POST["job_date"] != '') {

        $id = $_POST["id"];
        $job_date_id = $_POST["job_date_id"];
        $job_date = $_POST["job_date"];
        $job_status = $_POST["job_status"];
        $sql_find = "SELECT * FROM mdevice_group WHERE job_date_id = '" . $job_date_id . "'";
        $nRows = $conn->query($sql_find)->fetchColumn();
        if ($nRows > 0) {
            $sql_update = "UPDATE mdevice_group SET job_date_id=:job_date_id,job_date=:job_date,job_status=:job_status            
            WHERE id = :id";
            $query = $conn->prepare($sql_update);
            $query->bindParam(':job_date_id', $job_date_id, PDO::PARAM_STR);
            $query->bindParam(':job_date', $job_date, PDO::PARAM_STR);
            $query->bindParam(':job_status', $job_status, PDO::PARAM_STR);
            $query->bindParam(':id', $id, PDO::PARAM_STR);
            $query->execute();
            echo $save_success;
        }

    }
}

if ($_POST["action"] === 'DELETE') {

    $id = $_POST["id"];

    $sql_find = "SELECT * FROM mdevice_group WHERE id = " . $id;
    $nRows = $conn->query($sql_find)->fetchColumn();
    if ($nRows > 0) {
        try {
            $sql = "DELETE FROM mdevice_group WHERE id = " . $id;
            $query = $conn->prepare($sql);
            $query->execute();
            echo $del_success;
        } catch (Exception $e) {
            echo 'Message: ' . $e->getMessage();
        }
    }
}

if ($_POST["action"] === 'GET_DEVICE') {

    ## Read value
    $draw = $_POST['draw'];
    $row = $_POST['start'];
    $rowperpage = $_POST['length']; // Rows display per page
    $columnIndex = $_POST['order'][0]['column']; // Column index
    $columnName = $_POST['columns'][$columnIndex]['data']; // Column name
    $columnSortOrder = $_POST['order'][0]['dir']; // asc or desc
    $searchValue = $_POST['search']['value']; // Search value

    $searchArray = array();

## Search
    $searchQuery = " ";
    if ($searchValue != '') {
        $searchQuery = " AND (device_group_id LIKE :device_group_id or
        device_group_desc LIKE :device_group_desc ) ";
        $searchArray = array(
            'device_group_id' => "%$searchValue%",
            'device_group_desc' => "%$searchValue%",
        );
    }

## Total number of records without filtering
    $stmt = $conn->prepare("SELECT COUNT(*) AS allcount FROM mdevice_group ");
    $stmt->execute();
    $records = $stmt->fetch();
    $totalRecords = $records['allcount'];

## Total number of records with filtering
    $stmt = $conn->prepare("SELECT COUNT(*) AS allcount FROM mdevice_group WHERE 1 " . $searchQuery);
    $stmt->execute($searchArray);
    $records = $stmt->fetch();
    $totalRecordwithFilter = $records['allcount'];

## Fetch records
    $stmt = $conn->prepare("SELECT * FROM mdevice_group WHERE 1 " . $searchQuery
        . " ORDER BY " . $columnName . " " . $columnSortOrder . " LIMIT :limit,:offset");

/*
    $txt = $searchQuery . " | " . $columnName . " | " . $columnSortOrder ;
    $my_file = fopen("device_a.txt", "w") or die("Unable to open file!");
    fwrite($my_file, $txt);
    fclose($my_file);
*/

// Bind values
    foreach ($searchArray as $key => $search) {
        $stmt->bindValue(':' . $key, $search, PDO::PARAM_STR);
    }

    $stmt->bindValue(':limit', (int)$row, PDO::PARAM_INT);
    $stmt->bindValue(':offset', (int)$rowperpage, PDO::PARAM_INT);
    $stmt->execute();
    $empRecords = $stmt->fetchAll();
    $data = array();

    foreach ($empRecords as $row) {

        if ($_POST['sub_action'] === "GET_MASTER") {
            $data[] = array(
                "id" => $row['id'],
                "job_id" => $row['job_id'],
                "job_date" => $row['job_date'],
                "device_desc" => $row['device_desc'],
                "job_problem_detail" => $row['job_problem_detail'],
                "update" => "<button type='button' name='update' id='" . $row['id'] . "' class='btn btn-info btn-xs update' data-toggle='tooltip' title='Update'>Update</button>",
                "delete" => "<button type='button' name='delete' id='" . $row['id'] . "' class='btn btn-danger btn-xs delete' data-toggle='tooltip' title='Delete'>Delete</button>",
                "status" => $row['status'] === 'Y' ? "<div class='text-success'>" . $row['status'] . "</div>" : "<div class='text-muted'> " . $row['status'] . "</div>"
            );
        } else {
            $data[] = array(
                "id" => $row['id'],
                "device_group_id" => $row['device_group_id'],
                "device_group_desc" => $row['device_group_desc'],
                "select" => "<button type='button' name='select' id='" . $row['device_group_id'] . "@" . $row['device_group_desc'] . "' class='btn btn-outline-success btn-xs select' data-toggle='tooltip' title='select'>select <i class='fa fa-check' aria-hidden='true'></i>
</button>",
            );
        }

    }

## Response Return Value
    $response = array(
        "draw" => intval($draw),
        "iTotalRecords" => $totalRecords,
        "iTotalDisplayRecords" => $totalRecordwithFilter,
        "aaData" => $data
    );

    echo json_encode($response);

}
