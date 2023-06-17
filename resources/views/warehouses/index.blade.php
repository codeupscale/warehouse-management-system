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
    <a class="btn btn-primary" href="{{ route('warehouses.create') }}">Create Warehouse</a>
    @foreach ($warehouses as $warehouse)
        <a class="btn btn-primary" href="{{ route('warehouses.edit', $warehouse->id) }}">Edit Warehouse</a>
        <form action="{{ route('warehouses.destroy', $warehouse->id) }}" method="POST">
            @csrf
            @method('DELETE')
            <button type="submit" class="btn btn-danger">Delete</button>
        </form>
    @endforeach



</body>

</html>
