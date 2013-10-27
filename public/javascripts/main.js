var socket = io.connect('http://localhost:8800');

$(document).ready(function(){
  $(".posts").click(function() {
    socket.emit('get.posts', { action: 'hov' });
  });
  // Emit 'get.posts' on click
  socket.on('posts', function (data) {
    console.log(data);
  });
  // Emit 'get.posts' on click
});