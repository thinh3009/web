//contructor
function Validator(options) {

    function validate(inputElement, rule) {
        var errorMessage = rule.test(inputElement.value);
        var errElement = inputElement.parentElement.querySelector(options.errorSelector);
        if (errorMessage) {
            errElement.innerText = errorMessage;
            inputElement.parentElement.classList.add('invalid');
        }
        else {
            errElement.innerText = '';
            inputElement.parentElement.classList.remove('invalid');
        }
    }
    console.log(options);
    var formElement = document.querySelector(options.form);
    if (formElement) {
        options.rules.forEach(function (rule) {
            var inputElement = formElement.querySelector(rule.selector);
            
            if (inputElement) {
                //xu ly truong hop ra khoi input
                inputElement.onblur = function () {
                    
                    validate(inputElement,rule);

                }
                //xu ly truong hop khi nguoi dung nhap
                inputElement.oninput=function(){
                    var errElement = inputElement.parentElement.querySelector('.form-message');
                    errElement.innerText = '';
                    inputElement.parentElement.classList.add('invalid');
                }
            }


        });
    }
};

//dinh nghia rules
// 1.khi co loi thi tra ra mess loi
//2. khi hop le khong tra ra gi
Validator.isRequired = function (selector) {
    return {
        selector: selector,
        test: function (value) {
            return value.trim() ? undefined : 'vui long nhap truong nay';
        }
    };
};

Validator.isEmail = function (selector) {
    return {
        selector: selector,
        test: function (value) {
            var regex=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            return regex.test(value)?undefined:'vui long nhap mail';
        }
    };
};

Validator.minLength = function (selector,min) {
    return {
        selector: selector,
        test: function (value) {
            
            return value.length>=min?undefined:`toi thieu ${min} ky tu`;
        }
    };
};