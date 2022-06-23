<?php

use Illuminate\Support\Facades\Route;
use App\Models\Project;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});



Route::post('/', 'App\Http\Controllers\ProjectController@store');
// Route::post('/', 'App\Http\Controllers\FormController@store');

Route::get('/infos', function () {
    // $couleurs = Couleur::all();
    // $couleursJson = json_encode($couleurs);
    // return $couleursJson;
    $projects = Project::all();
    $projectsJson = json_encode($projects);
    return $projectsJson;
});

Route::get('/project', function () {
    return view('project');
});
