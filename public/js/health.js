$(document).ready(function(){

    var number = document.getElementById('number');

// Listen for input event on numInput.
number.onkeydown = function(e) {
    if(!((e.keyCode > 95 && e.keyCode < 106)
      || (e.keyCode > 47 && e.keyCode < 58) 
      || e.keyCode == 8)) {
        return false;
    }
}

    // var $newFirstName = $("input.new-FirstName")
    // var $newLastName = $("input.new-LastName")
    // var $zip = $("input.new-zip")

    // var $userContainer = $(".user-container")

    // var users = []
    // getUsers()

    // function createNewRow(){
    //     var $newinput
    // }

    // function initializeRows(){
    //     $userContainer.empty()
    //     var rowsToAdd = []
    //     for (var i = 0; i < users.length; i++){
    //         rowsToAdd.push(createNewRow(users[i]))
    //     }
    //     $userContainer.prepend(rowsToAdd)
    // }
})