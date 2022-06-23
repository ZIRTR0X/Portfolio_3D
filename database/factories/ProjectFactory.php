<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Project>
 */
class ProjectFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            // 'video_path' => $this->faker->url,
            // 'image_path' => $this->faker->url,
            // 'title' => $this->faker->sentence,
            // 'description' => $this->faker->paragraph,
            // 'project_url' => $this->faker->url,
        ];
    }
}
