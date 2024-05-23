<?php

sleep(1);
$count = rand(1, 12);
$output = [];

for ($i = 0; $i < $count; $i++) :
  $output[] = [
    "username" => "john-doe-$i",
    "comment" => "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. Lorem donec massa
    sapien faucibus et molestie.",
  ];
endfor;

header('Content-Type: application/json');
echo json_encode($output, JSON_PRETTY_PRINT);