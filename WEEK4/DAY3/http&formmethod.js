#Exercises XP
#Exercise 1 : HTML form
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>

    <!-- The sent data will appear in the URL -->
    <form action="" method="get">
        <div>
            <label for="name">Name</label>
            <input type="text" name="name" id="name">
        </div>

        <div>
            <textarea style="margin-top: 10px;" name="message" id="" cols="30" rows="10"></textarea>
        </div>

        <div>
            <button style="margin-top: 10px;" type="submit">Send</button>
        </div>
    </form>

</body>

</html>


Exercise 2 : HTML form #2
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>

    <!-- The sent data will appear in the message body -->
    <!-- The sent data will appear in the DevTools->'Network' -->
    <form action="" method="post">
        <div>
            <label for="name">Name</label>
            <input type="text" name="name" id="name">
        </div>

        <div>
            <textarea style="margin-top: 10px;" name="message" id="" cols="30" rows="10"></textarea>
        </div>

        <div>
            <button style="margin-top: 10px;" type="submit">Send</button>
        </div>
    </form>

</body>

</html>


Exercise 3: Mario
let marioGame = {
    detail: "An amazing game!",
    characters: {
        mario: {
            description: "Small and jumpy. Likes princesses.",
            height: 10,
            weight: 3,
            speed: 12,
        },
        bowser: {
            description: "Big and green, Hates princesses.",
            height: 16,
            weight: 6,
            speed: 4,
        },
        princessPeach: {
            description: "Beautiful princess.",
            height: 12,
            weight: 2,
            speed: 2,
        }
    },
}

console.log(JSON.stringify(marioGame)); //1 The nested objects remain the same
console.log(JSON.stringify(marioGame, null, 2));


Exercise XP Gold
Exercise 1 : HTML Form #3
index.html

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form action="receiver.html" method="get">
        <input type="text" name="name" placeholder="name"><br>
        <input type="text" name="lastName" placeholder=" last name"><br>
        <input type="submit" value="SUBMIT">
    </form>

    <script src="app.js"></script>
</body>
</html>
receiver.html

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>

    <script src="app.js"></script>
</body>
</html>
app.js

let url = window.location.search
console.log('hello')
const urlParams = new URLSearchParams(url)
console.log(urlParams.get("name"))

document.write(urlParams.get('name'))
document.write(urlParams.get('lastName'))


#Daily Challenge : HTML FORM
index.html

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form action="" method="post" class="form">
        <input type="text" name="name" id="name" placeholder="Name">
        <input type="text" name="lastName" id="lastName" placeholder="Last name">
        <input type="submit" value="SUBMIT">
    </form>

    <script src="app.js"></script>
</body>
</html>

#app.js

document.querySelector('.form').addEventListener("submit", function() {
    let name = document.getElementById('name').value
    let lastName = document.getElementById('lastName').value
    let obj={
        name:name,
        lastName:lastName
    }
    let objStr =  JSON.stringify(obj)
    document.write(objStr)
}