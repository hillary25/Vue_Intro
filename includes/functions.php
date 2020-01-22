<?php
    require('connect.php');

    function getUser($conn) {
        $getData = 'SELECT * FROM users';
        $runQuery = $conn->query($getData);

        $result = array();

        while ($row = $runQuery->fetch(PDO::FETCH_ASSOC)) {
            // Push each row of data into our array to ake it easy to iterate over
            $result[] = $row;
        }

        return $result;
    }