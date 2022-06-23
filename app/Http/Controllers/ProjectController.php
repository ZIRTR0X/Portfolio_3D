<?php

namespace App\Http\Controllers;

use App\Models\Project;
use App\Http\Requests\StoreProjectRequest;
use App\Http\Requests\UpdateProjectRequest;
use Symfony\Component\HttpFoundation\Request;

class ProjectController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\StoreProjectRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {

        $title = $request->title;
        $description = $request->description;
        $image = $request->image;
        $link = $request->link;
        $video = $request->video;

        // ---------- IMAGE ----------
        // Storage::disk('public')->put('/pdf/'.$ficheDemande->id.'.pdf', $string);
        // return view('validation');
        $imageName = time().'.'.$image->getClientOriginalExtension();
        $image->move(public_path('img'), $imageName);

        // ---------- FIN IMAGE ----------


        // ---------- VIDEO ----------

        $videoName = time().'.'.$video->getClientOriginalExtension();
        $video->move(public_path('video'), $videoName);

        // ---------- FIN VIDEO ----------

        // ---------- TITLE ----------

        $titleName = time().'.'.$title->getClientOriginalExtension();
        $title->move(public_path('obj'), $titleName);

        // ---------- FIN TITLE ----------

        Project::create([
            'title' => $titleName,
            'description' => $description,
            'image_path' => $imageName,
            'project_url' => $link,
            'video_path' => $videoName,
        ]);

        return view('welcome');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Project  $project
     * @return \Illuminate\Http\Response
     */
    public function show(Project $project)
    {
        
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Project  $project
     * @return \Illuminate\Http\Response
     */
    public function edit(Project $project)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateProjectRequest  $request
     * @param  \App\Models\Project  $project
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateProjectRequest $request, Project $project)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Project  $project
     * @return \Illuminate\Http\Response
     */
    public function destroy(Project $project)
    {
        //
    }
}
