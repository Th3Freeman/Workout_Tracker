$('.completed input').on('change', (event) => {
    const currentCmplt = event.currentTarget
    const currentCmpltVal = currentCmplt.value;
    const repsTracking = $(currentCmplt).parent().siblings();
    console.log(repsTracking);
    const repsGoal = repsTracking.siblings(".goal").text();
    repsTracking.siblings(".remaining").text(repsGoal - currentCmpltVal);
});