@extends('layouts.master')

@section('title', '- Home')

@section('content')

@php

$current_user = Auth::user();

$my_array = ['author'=>'Hijazi', 'company'=>'iReka Soft'];

$data_json_encode = json_encode($my_array);

@endphp


<div id="root" data-custom="{{$data_json_encode}}"></div>

<script src="{{mix('js/pages/HomeSecondPage.js')}}" ></script>

@endsection
