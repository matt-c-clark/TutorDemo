// Userlist data array for filling in info box
var userListData = [];

// DOM Ready =============================================================
$(document).ready(function() {

    // Add User button click
    $('#btnSearch').on('click', populateTable);



});

// Functions =============================================================

// Fill table with data
function populateTable(event) {
    event.preventDefault();

    // Empty content string
    var tableContent = '';

    // jQuery AJAX call for JSON
    $.getJSON( '/users/tutorlist', function( data ) {

        // Stick our user data array into a userlist variable in the global object
        userListData = data;

        // For each item in our JSON, add a table row and cells to the content string
        $.each(data, function(){
            if($('input.form-control#inputSubject').val().toLowerCase().localeCompare(this.subject) === 0)
            {
            tableContent += '<ul class="list-group-item">';
            tableContent += '<div class="row">';
            tableContent += '<div class="col-xs-3 col-md-2">';
            tableContent += '<h4 class="list-group-item-heading">' + this.fullname + '</h4>';
            tableContent += '<h4 class="list-group-item-heading">' + this.location + '</h4>';
            tableContent += '<h4 class="list-group-item-heading">' + this.rate + ' per hour</h4>';
            tableContent += '</div>';
            tableContent += '<div class="col-xs-8 col-md-10">';
            tableContent += '<h4 class="list-group-item-heading"><a href="mailto:' + this.email + '">' + this.email + '</a></h4>';
            tableContent += '<p class="list-group-item-text">Bio: ' + this.bio + '</p>';
            tableContent += '</div>';
            tableContent += '</div>';
            tableContent += '</ul>';
            }
        });

        if(tableContent === '')
        {
            tableContent += '<h3>Sorry, No Results. Please try another search</h3>';
        }

        // Inject the whole content string into our existing HTML table
        $('#tutorList ul.list-group').html(tableContent);

    });
};

// Show User Info
function showUserInfo(event) {

    // Prevent Link from Firing
    event.preventDefault();

    // Retrieve username from link rel attribute
    var thisUserName = $(this).attr('rel');

    // Get Index of object based on id value
    var arrayPosition = userListData.map(function(arrayItem) { return arrayItem.username; }).indexOf(thisUserName);

    // Get our User Object
    var thisUserObject = userListData[arrayPosition];

    //Populate Info Box
    $('#userInfoName').text(thisUserObject.fullname);
    $('#userInfoAge').text(thisUserObject.age);
    $('#userInfoGender').text(thisUserObject.gender);
    $('#userInfoLocation').text(thisUserObject.location);

};

// Add User
function addUser(event) {
    event.preventDefault();

    populateTable();
};