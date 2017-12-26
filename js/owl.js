/**
 * Created by user on 24-12-2017.
 */
// $('input[type="password"]').on('focus', () => {
//     $('*').addClass('password');
// }).on('focusout', () => {
//     $('*').removeClass('password');
// });;
$('input[type="password"]').on('focus', function () {
    $('*').addClass('password');
}).on('focusout', function () {
    $('*').removeClass('password');
});;