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
    <form action="{{ route('warehouses.store') }}" method="POST">
        @csrf
        <input type="text" name="name">
        <select name="customer_id" >
            @foreach ($customers as $customer)
            <option value="{{ $customer->id }}">{{ $customer->customer_name }}</option>
            @endforeach
        </select>
        <button class="btn btn-primary">Submit</button>
    </form>
</body>

</html>
