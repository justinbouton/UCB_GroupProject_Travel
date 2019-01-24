// $(function() {
//     $(".update").on("click", function(event) {
//         let id = $(this).data("id");
//         let changedPrevious = {
//             isPrevious: true
//             };
//         $.ajax("/dashboard/update/" + id, {
//             type: "PUT",
//             data: changedPrevious
//         }).then(
//             function() {
//                 location.reload();
//             }
//         );
//     });
// })