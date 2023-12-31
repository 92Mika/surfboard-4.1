const validateFields = (form, fieldsArray) => {

    fieldsArray.forEach((field) => {
        field.removeClass("input-error");
        if(field.val().trim() == "") {
            field.addClass("input-error");
        }
    });
        const errorFields = form.find(".input-error");
}

$(".form").submite((e) => {
    e.preventDefault();

    const form = $(e.currentTarget); 
    const name = form.find("[name='name']");
    const phone = form.find("[name='phone']");
    const comment = form.find("[name='comment']");
    const to = form.find("[name='to']");

    const modal = $("modal");
    const content = modal.find(".modal__content");

    modal.removeClass("error-modal");
   
    const isValid = validateField(form, [name, phone, comment, to]);

   if (isValid){
   const request =$.ajax({
        url: "https://webdev-api.loftschhol.com/sendmail",
        method: "post",
        data: {
            name: name.val(),
            phone: phone.val(),
            comment: comment.val(),
            to: to.val(), 
        },
    error:(data) => {}
    });

request.done((data) => {
    content.text(data.message);
    //console.log(data);
});

request.fail((data) => {
    const message = data.responseJSON.message;
    content.text(message);
    modal.addClass("error-modal");
});

request.always(() => {

    $.fancybox.open({
        src:"#modal",
        type:"inline"
});
})
}
});

$(".app-submit-btn").click((e) => {
    e.preventDefault();

    $.fancybox.close();
});