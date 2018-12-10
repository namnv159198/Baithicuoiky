var btnSubmit  =   document.forms['index-form']['btn-submit'];

btnSubmit.onclick = function () {
    if(valueForm()){
    }
};




function valueForm() {

    var isvalue  = true;
    var isvalueFirstName = true;
    var isvalueEmail  = true;
    var isvalueAvatar  = true;
    var isvaluePhone  = true;




    var txtFirstName = document.forms['index-form']['Name'];
    var msgFirstName = txtFirstName.nextElementSibling;
    if(txtFirstName.value == null || txtFirstName.value.length == 0){
        msgFirstName.classList.remove('msg-success');
        msgFirstName.classList.add('msg-error');
        msgFirstName.innerHTML = ' Name is required !';
        isvalueFirstName = false;
    }
    else if(txtFirstName.value == null || txtFirstName.value.length > 50){
        msgFirstName.classList.remove('msg-success');
        msgFirstName.classList.add('msg-error');
        msgFirstName.innerHTML = ' Name is less than 50 characters  !';
        isvalueFirstName = false;
    }
    else {
        msgFirstName.classList.add('msg-success');
        msgFirstName.classList.remove('msg-error');
        msgFirstName.innerHTML = 'OK!';
    }


    var txtEmail = document.forms['index-form']['Email'];
    var msgEmail = txtEmail.nextElementSibling;
    if(txtEmail.value == null || txtEmail.value.length == 0){
        msgEmail.classList.remove('msg-success');
        msgEmail.classList.add('msg-error');
        msgEmail.innerHTML = 'Email is required !';
        isvalueEmail = false;
    }
    else {
        msgEmail.classList.add('msg-success');
        msgEmail.classList.remove('msg-error');
        msgEmail.innerHTML = 'OK!';
    }

    var txtAvatar = document.forms['index-form']['my-selft'];
    var msgAvatar = txtAvatar.nextElementSibling;
    if(txtAvatar.value == null || txtAvatar.value.length == 0){
        msgAvatar.classList.remove('msg-success');
        msgAvatar.classList.add('msg-error');
        msgAvatar.innerHTML = 'Information of Myself is required !';
        isvalueAvatar = false;
    }
    else {
        msgAvatar.classList.add('msg-success');
        msgAvatar.classList.remove('msg-error');
        msgAvatar.innerHTML = 'OK!';
    }

    var txtPhone = document.forms['index-form']['phone'];
    var msgPhone = txtPhone.nextElementSibling;
    if(txtPhone.value == null || txtPhone.value.length == 0){
        msgPhone.classList.remove('msg-success');
        msgPhone.classList.add('msg-error');
        msgPhone.innerHTML = 'Phone is required !';
        isvaluePhone = false;
    }
    else {
        msgPhone.classList.add('msg-success');
        msgPhone.classList.remove('msg-error');
        msgPhone.innerHTML = 'OK!';
    }

    isvalue = isvalueFirstName  && isvalueAvatar && isvalueEmail && isvaluePhone ;
    return isvalue;
}