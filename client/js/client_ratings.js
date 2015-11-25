Template.ratings.onRendered(function () {

    $(document).ready(function(){

        $("#ratingOne").click(function () {
            $("#ratingOne").addClass('selectedStar')
            $("#ratingTwo").removeClass('selectedStar')
            $("#ratingThree").removeClass('selectedStar')
            $("#ratingFour").removeClass('selectedStar')
            $("#ratingFive").removeClass('selectedStar')
            $("#ratingSelection").val(1)
        })
        
        $("#ratingTwo").click(function () {
            $("#ratingOne").addClass('selectedStar')
            $("#ratingTwo").addClass('selectedStar')
            $("#ratingThree").removeClass('selectedStar')
            $("#ratingFour").removeClass('selectedStar')
            $("#ratingFive").removeClass('selectedStar')
            $("#ratingSelection").val(2)
        })
        
        $("#ratingThree").click(function () {
            $("#ratingOne").addClass('selectedStar')
            $("#ratingTwo").addClass('selectedStar')
            $("#ratingThree").addClass('selectedStar')
            $("#ratingFour").removeClass('selectedStar')
            $("#ratingFive").removeClass('selectedStar')
            $("#ratingSelection").val(3)
        })
        
        $("#ratingFour").click(function () {
            $("#ratingOne").addClass('selectedStar')
            $("#ratingTwo").addClass('selectedStar')
            $("#ratingThree").addClass('selectedStar')
            $("#ratingFour").addClass('selectedStar')
            $("#ratingFive").removeClass('selectedStar')
            $("#ratingSelection").val(4)
        })
        
        
        $("#ratingFive").click(function () {
            $("#ratingOne").addClass('selectedStar')
            $("#ratingTwo").addClass('selectedStar')
            $("#ratingThree").addClass('selectedStar')
            $("#ratingFour").addClass('selectedStar')
            $("#ratingFive").addClass('selectedStar')
            $("#ratingSelection").val(5)
        })
        
    })

})