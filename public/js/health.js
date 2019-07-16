$(document).ready(function(){

    var $newFirstName = $("input.new-FirstName")
    var $newLastName = $("input.new-LastName")
    var $zip = $("input.new-zip")

    var $userContainer = $(".user-container")

    var users = []
    getUsers()

    function createNewRow(){
        var $newinput
    }

    function initializeRows(){
        $userContainer.empty()
        var rowsToAdd = []
        for (var i = 0; i < users.length; i++){
            rowsToAdd.push(createNewRow(users[i]))
        }
        $userContainer.prepend(rowsToAdd)
    }
})