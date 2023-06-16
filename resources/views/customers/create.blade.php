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
    <form action="{{ route('customers.store') }}" method="POST">
        @csrf
        <input type="text" name="customer_name">
        <input type="text" name="street">
        <input type="text" name="house_no">
        <input type="text" name="postal_code">
        <input type="text" name="city">
        <input type="text" name="country">
        <input type="email" name="email">
        <button class="btn btn-primary">Submit</button>
    </form>
</body>

</html>
