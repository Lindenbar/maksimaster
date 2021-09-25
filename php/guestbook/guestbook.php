<?php

include_once 'guestbook.html';

$filename = 'guestbookDB.csv';
$firstRowSkip = false;

if ($_GET['text'] ?? '') {
    $file = fopen($filename,'a');
    $name = $_GET['name'];
    $text = $_GET['text'];
    if (empty($name)) {
        $name = 'Анонимно';
    }
    fputcsv($file, array($name, $text, date('d.m.Y H:i')));
    fclose($file);
}

if (file_exists($filename)) {
    $file = fopen($filename, 'r');
    while (($row = fgetcsv($file, 0, ',')) !== false) {
        if (!$firstRowSkip) {
            $firstRowSkip = true;
            continue;
        }
        $row[1] = str_replace(PHP_EOL, '<br>', $row[1]);
        echo "<script type='text/javascript' class='temp'>
                create_comment('comments', '$row[0]', '$row[1]', '$row[2]');
              </script>";
    }
    fclose($file);
    echo "<script type='text/javascript' class='temp'>
        let temp = document.getElementsByClassName('temp');
        while (temp.length) {
            temp[0].parentNode.removeChild(temp[0]);
        }
      </script>";
} else {
    $file = fopen($filename, 'w');
    fputcsv($file, array('Имя:', 'Сообщение:', 'Дата:'));
    fclose($file);
}
