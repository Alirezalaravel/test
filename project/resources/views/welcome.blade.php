<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <link rel="stylesheet" href="/css/bootstrap.min.css">
    <link rel="stylesheet" href="/css/file.css">
</head>
<body>
    <div id="app"> 
      <example-component></example-component> 
      <router-view></router-view>
  </div>
  <script src="{{asset('/js/app.js')}}"></script>
  <script src="/js/bootstrap.bundle.min.js"></script>
  <script src="/js/file.js"></script>
</body>
</html>
