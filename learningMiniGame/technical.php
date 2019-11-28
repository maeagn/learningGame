<?php 
// maze room, theme is TECHNICAL
$rooms = [
    'Only character or integer can be used in switch statement' => [
        'actions' => [
            'Trap' => 'True',
            'Blank spaces may be inserted between two words to improve the readability of the statement.' => 'False'
        ]
    ], 
    'Blank spaces may be inserted between two words to improve the readability of the statement.' => [
        'actions' => [
            'It is necessary that a loop counter must only be an int. It cannot be a float.' => 'True',
            'Trap' => 'False'
        ]
    ],
    'It is necessary that a loop counter must only be an int. It cannot be a float.' => [
        'actions' => [
            'Structure is collection of dissimilar data types.' => 'True',
            'Trap' => 'False'
        ]
    ],
    'Structure is collection of dissimilar data types.' => [
        'actions' => [
            'The keywords cannot be used as variable names.' => 'True',
            'Trap' => 'False'
        ]
    ],
    'The keywords cannot be used as variable names.' => [
        'actions' => [
            'A do-while loop is used to ensure that the statements within the loop are executed at least twice.' => 'True',
            'Trap' => 'False'
        ]
    ],
    'A do-while loop is used to ensure that the statements within the loop are executed at least twice.' => [
        'actions' => [
            'Trap' => 'True',
            'Two case constants within the same switch statement can have the same value.' => 'False'
        ]
    ],   
    'Two case constants within the same switch statement can have the same value.' => [
        'actions' => [
            'Trap' => 'True',
            'A file opened for writing already exists its contents would be overwritten.' => 'False'
        ]
    ],   
    'A file opened for writing already exists its contents would be overwritten.' => [
        'actions' => [
            'Switch statement can have any number of case instances' => 'True',
            'Trap' => 'False'
        ]
    ],  
    'Switch statement can have any number of case instances' => [
        'actions' => [
            'Exit' => 'True',
            'Trap' => 'False'
        ]
    ],        
    'Trap' => [
        'actions' => ['']
    ],
    'Exit' => [
        'actions' => [
            'Only character or integer can be used in switch statement' => 'Start Over'
        ]
    ]
    ];

        // ending once escaped from maze
if (isset($_GET['room']) && isset($rooms[$_GET['room']])) {
    if ($_GET['room'] === 'Exit') {
        $message = 'Sweet! You have escaped this questionable maze... Game Over!';
        // trapped room (no escape...) Game over
    } elseif ($_GET['room'] === 'Trap') {
        $_GET['room'] = 'Exit';
        $message = 'Uh oh, you got trapped and there is no escape... Game Over!';
    } else {
        // code room description
         $action = $rooms[$_GET['room']]['actions'];
         $message = $_GET['room'];
        } 
        // entrance to this technical maze
} else {
        $_GET['room'] = 'Only character or integer can be used in switch statement';
        $message = $_GET['room'];
};
?> 

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>True & False: technical programming</title>
  <link rel="stylesheet" href="maze.css">
</head>
<body>
<div class="response"><?php echo $message; ?></div>
  <div class="actions">
  <!-- moving from one room to another in this questionable maze -->
    <?php foreach ($rooms[$_GET['room']]['actions'] as $room => $action) : ?>
    <a href="?room=<?php echo $room; ?>" class="action"><?php echo $action; ?></a>
<?php endforeach; ?>
  </div>
</body>
</html>