<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>

<body>
    <h3>hello</h3>
<<<<<<<< HEAD:resources/views/warehouses/index.blade.php
    <a class="btn btn-primary" href="{{ route('warehouses.create') }}">Create Warehouse</a>
    @foreach ($warehouses as $warehouse)
        <a class="btn btn-primary" href="{{ route('warehouses.edit', $warehouse->id) }}">Edit Warehouse</a>
        <form action="{{ route('warehouses.destroy', $warehouse->id) }}" method="POST">
========
    <a class="btn btn-primary" href="{{ route('users.create') }}">Create User</a>
    @foreach ($users as $user)
        <a class="btn btn-primary" href="{{ route('users.edit', $user->id) }}">Edit User</a>
        <form action="{{ route('users.destroy', $user->id) }}" method="POST">
>>>>>>>> 45e4b7b4b6dabf2fdda13a3bb34b1a9d7a7211b1:resources/views/users/index.blade.php
            @csrf
            @method('DELETE')
            <button type="submit" class="btn btn-danger">Delete</button>
        </form>
    @endforeach



</body>

</html>
