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
    <form action="{{ route('customers.update', $customer->id) }}" method="POST">
        @csrf
        @method('PUT')
        <input type="text" name="customer_name" value="{{ $customer->customer_name }}">
        <input type="text" name="street" value="{{ $customer->street }}">
        <input type="text" name="house_no" value="{{ $customer->house_no }}">
        <input type="text" name="postal_code" value="{{ $customer->postal_code }}">
        <input type="text" name="city" value="{{ $customer->city }}">
        <input type="text" name="country" value="{{ $customer->country }}">
        <input type="email" name="email" value="{{ $customer->email }}">
        <button class="btn btn-primary">Update</button>
    </form>
</body>

</html>
