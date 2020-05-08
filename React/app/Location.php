<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Location extends Model
{
    protected $fillable = [
        'name', 'explain', 'lat',' lng',
    ];
    
    public $timestamps = true;

    // public function user()
    // {
    //     return $this->belongsTo('App\User');
    // }
}
