@extends('layouts.master')

@section('title', '- Home')

@section('content')

@php

$my_array = ['author'=>'Hijazi', 'company'=>'iReka Soft'];

$data_json_encode = json_encode($my_array);

@endphp

<div id="root" data-custom="{{$data_json_encode}}"></div>

<script src="{{mix('js/pages/HomeIndexPage.js')}}" ></script>

@endsection
