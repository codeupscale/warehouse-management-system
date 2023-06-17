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
    <a class="btn btn-primary" href="{{ route('users.create') }}">Create User</a>
    @foreach ($users as $user)
        <a class="btn btn-primary" href="{{ route('users.edit', $user->id) }}">Edit User</a>
        <form action="{{ route('users.destroy', $user->id) }}" method="POST">
            @csrf
            @method('DELETE')
            <button type="submit" class="btn btn-danger">Delete</button>
        </form>
    @endforeach



</body>

</html>
