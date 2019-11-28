<?php 
// maze room, theme is CODING
$rooms = [
    'Does HTML stand for Hypertext Markup Language?' => [
        'actions' => [
            'The head section of a Web page goes to the Internet and is not visible to the person viewing the page.' => 'True',
            'Trap' => 'False'
        ]
    ],    
    'Trap' => [
        'actions' => ['']
    ],
    'The head section of a Web page goes to the Internet and is not visible to the person viewing the page.' => [
        'actions' => [
            'A lossy format means the file does not get rid of data and lose quality.' => 'True',
            'Trap' => 'False'
        ]
    ], 
    'A lossy format means the file does not get rid of data and lose quality.'=> [
        'actions' => [
            'Trap' => 'True',
            'Cascading Style Sheets is an object orient programming language designed to make web development easier and more attractive.' => 'False'
        ]
    ],
    'Cascading Style Sheets is an object orient programming language designed to make web development easier and more attractive.'=> [
        'actions' => [
            'Trap' => 'True',
            'An internal CSS is used to define a style for a single HTML page' => 'False'
        ]
    ], 
    'An internal CSS is used to define a style for a single HTML page'=> [
        'actions' => [
            'The CSS margin property defines a padding (space) between the text and the border.' => 'True',
            'Trap' => 'False'
        ]
        ],
    'The CSS margin property defines a padding (space) between the text and the border.'=> [
        'actions' => [
            'Trap' => 'True',
            'In Java, a method is a container that holds classes.' => 'False'
        ]
    ],
    'In Java, a method is a container that holds classes.'=> [
        'actions' => [
            'Trap' => 'True',
            'Is this the correct way of making a string in Java: String text = ‘text’;' => 'False'
        ]
    ],
    'Is this the correct way of making a string in Java: String text = ‘text’;'=> [
        'actions' => [
            'Trap' => 'True',
            'JavaScript to program the behavior of web pages' => 'False'
        ]
    ],
    'JavaScript to program the behavior of web pages'=> [
        'actions' => [
            'Exit' => 'True',
            'Trap' => 'False'
        ]
    ],
    'Exit' => [
        'actions' => [
            'Does HTML stand for Hypertext Markup Language?' => 'Start Over'
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
        // entrance to this code maze
} else {
        $_GET['room'] = 'Does HTML stand for Hypertext Markup Language?';
        $message = $_GET['room'];
};
?> 

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>True & False: How to code</title>
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