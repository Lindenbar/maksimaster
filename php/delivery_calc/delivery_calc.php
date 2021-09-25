<?php

$cacheFile = 'citiesCache.txt';

if (!file_exists($cacheFile) or date('d.m.Y', filemtime($cacheFile)) != date('d.m.Y')) {
    $json = file_get_contents('http://exercise.develop.maximaster.ru/service/city/');
    $cities = json_decode($json);
    $file = fopen($cacheFile, 'w');
    foreach ($cities as $city) {
        fwrite($file, $city .PHP_EOL);
    }
    fclose($file);
}

if(isset($_POST['choices'])) {
    $city = $_POST['choices'][0];
    $weight = $_POST['choices'][1];

    $ch = curl_init();

    curl_setopt($ch, CURLOPT_URL, "http://exercise.develop.maximaster.ru/service/delivery/?city=$city&weight=$weight");
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
    curl_setopt($ch, CURLOPT_HEADER, 0);

    $output = curl_exec($ch);
    echo $output;

    curl_close($ch);
}

include_once 'delivery_calc.html';