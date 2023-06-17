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
    <form action="{{ route('users.update', $user->id) }}" method="POST" enctype="multipart/form-data">
        @csrf
        @method('PUT')
        <input type="text" name="first_name" value="{{ $user->first_name }}">
        <input type="text" name="last_name" value="{{ $user->last_name }}">
        <input type="text" name="password" value="{{ $user->password }}">
        <input type="file" name="image" class="form-control" id="image">
         <img class="mt-4" style="width: auto;height: 150px" src="{{ asset('images/User-Picture/'.$user->image) }}" alt="">
        <button class="btn btn-primary">Update</button>
    </form>
</body>

</html>
