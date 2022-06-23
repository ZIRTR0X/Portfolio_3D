{{--
    Nom : Julien THÊME
    Année : 2022
    Mail : julientheme@gmail.com 
--}}

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="https://aframe.io/releases/1.3.0/aframe.min.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <script src="https://unpkg.com/aframe-text-geometry-component@^0.5.0/dist/aframe-text-geometry-component.min.js"></script> 

    <link rel="stylesheet" href="{{ asset('css/style.css')}}">
    <title>Portfolio</title>
</head>
<body>
    <div id="addproject-div" class="is-active">
        <h1>Ajouter un projet</h1>

        <form action="/" method="POST" enctype="multipart/form-data">
            @csrf
            <table>
                <tr>
                    <td>
                        <label for="title">Titre</label>
                    </td>
                    <td>
                        <input type="file" name="title" id="title">
                    </td>
                </tr>
                <tr>
                    <td>
                        <label for="description">Description</label>
                    </td>
                    <td>
                        <textarea name="description" id="description" cols="30" rows="10"></textarea>
                    </td>
                </tr>
                <tr>
                    <td>
                        <label for="image">Image</label>
                    </td>
                    <td>
                        <input type="file" name="image" id="image">
                    </td>
                </tr>
                <tr>
                    <td>
                        <label for="video">Video</label>
                    </td>
                    <td>
                        <input type="file" name="video" id="video">
                    </td>
                </tr>
                <tr>
                    <td>
                        <label for="link">URL du projet</label>
                    </td>
                    <td>
                        <input type="text" name="link" id="link">
                    </td>
                </tr>
            </table>
            <div id="button-form">
                <a id="back-button" href="/">Retour</a>
                <input type="submit"></input>
            </div>
        </form>
        <div class="exit-button"><a href="/">X</a></div>
    </div>
</body>
<script src="{{ asset('js/loader.js')}}"></script>
<script src="{{ asset('js/animation.js')}}"></script>
<script src="{{ asset('js/environment.js')}}"></script>
<script src="{{ asset('js/ajax.js')}}"></script>
<script src="{{ asset('js/route.js')}}"></script>
</html>