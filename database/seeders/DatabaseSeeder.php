<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Project;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // \App\Models\User::factory(10)->create();

        // \App\Models\User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);
        $commentaire = 'Le projet consiste en la création d\'un démineur exclusivement codé en javascript. C\'est un projet personnel. Le projet consiste en la création d\'un démineur exclusivement codé en javascript. C\'est un projet personnel. Fin fin fin fin !!';

        for($i=0;$i<10;$i++) {
            Project::create([
                'video_path' => $i,
                'image_path' => $i.'.png',
                'title' => 'Project '.$i,
                'description' => $i.' '.$commentaire,
                'project_url' => 'https://www.google.com',  
                'created_at' => now(),
                'updated_at' => now(),
            ]);
        }

    }
}
