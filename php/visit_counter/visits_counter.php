<?php
$filePath = "./count.txt";
$currentTime = date('H:i');
$currentData = date('d.m.Y');
$clientIP = $_SERVER['REMOTE_ADDR'];
file_put_contents($filePath, 'Дата: '.$currentData.
    ' Время: '.$currentTime.
    ' IP '.$clientIP.PHP_EOL, FILE_APPEND);
$fileContent = file_get_contents($filePath);
$visitsCount = count(explode(PHP_EOL, $fileContent))-1;
if ($visitsCount > 1) {
    $visitsCount --;
    $fileContent = implode(PHP_EOL, array_slice(explode(PHP_EOL, $fileContent), 1));
}
$visitsMessage = 'Страница была загружена '.$visitsCount.' раз.';
$currTimeMessage = 'Текущее время '.$currentTime;
file_put_contents ($filePath, $visitsMessage.PHP_EOL.$fileContent);
echo $visitsMessage.PHP_EOL.$currTimeMessage;