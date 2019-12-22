//click handler for submit?


const exerciseTemplate = (count) => (`
<div class="form-row m-2 exercise">
    <div class="form-group col-sm-2">
        <label for="repsInput${count}">Reps/Minutes:</label>
        <input type="number" class="form-control" name="reps" id="repsInput${count}" placeholder="25">
    </div>
    <div class="col">
        <div class="form-group col-sm-10">
            <label for="exerciseInput${count}">Exercise:</label>
            <input type="text" class="form-control" name="exercise" id="exerciseInput${count}" placeholder="Benchpress">
        </div>
    </div>
</div>
`)

$('#addExercise').on('click', () => {
    const currentExerciseCount = $('.exercise').length;
    $('.exercises').append(exerciseTemplate(currentExerciseCount + 1))
});

$('#create').on('click', () => {
    const $routine = $(document.routine);
    const routineData = { name: '', exercises: [] };

    routineData.name = $routine.find('#routineName').val();
    const exercises = $routine.find('.exercise');

    for (let i = 0; i < exercises.length; i++) {
        const exercise = { name: '', reps: 0 }
        exercise.name = $(exercises[i]).find('input[name="exercise"]').val();
        exercise.reps = $(exercises[i]).find('input[name="reps"]').val();
        routineData.exercises.push(exercise);
    }


    console.log(routineData);
    $.ajax({ type: 'PUT', 
    url: `/api/routines/edit/${document.routine.id}`, 
    data: routineData })
    .done((data) => { console.log(data) })
    .fail((error) => { console.log(error) })
    .always(() => { location.href = "/choose"; });
});