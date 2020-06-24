<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Item extends Model
{
    //
    protected $fillable = [
        'name',
        'category_id',
        'imageName',
        'price',
        'num_available',
        'discount',
    ];


    public function category() {
        return $this->belongsTo('App\Category');
    }

    public function sizes(){
        return $this->belongsToMany('App\Size');
    }
}
