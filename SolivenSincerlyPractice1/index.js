function validateForm() {
    var eve1 = document.forms["Form"]["Event Type"].value;
    var eve2= document.forms["Form"]["title"].value;
    var eve3 = document.forms["Form"]["one"].value;
    var eve4 = document.forms["Form"]["two"].value;
    var eve5 = document.forms["Form"]["posting"].value;
    var event = true;


    switch(event == true)
    {

        case (eve1 == ""): alert("You need to fill up the Event Type");
                        return false;

        case (eve2 == ""): alert("You need to fill up the Title ");
                        return false;

        case (eve3 == ""): alert("You need to fill up the Events Date when it will start");
                        return false;

        case (eve4 == ""): alert("You need to fill up the Events Date when it will end");
                        return false;

        case (eve5 == ""): alert("You need to fill up the Posting date");
                        return false;

        default: alert("You Submitted the Form");
                document.forms["Form"]["Event Type"].value = "";
                document.forms["Form"]["title"].value = "";
                document.forms["Form"]["one"].value = "";
                document.forms["Form"]["two"].value = "";
                document.forms["Form"]["posting"].value = "";
                return false;
    }   
}
