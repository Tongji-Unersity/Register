//获取注册表单
var registForm = document.querySelector('#registForm');                
//获取用户名
var userNameInp = document.querySelector('#userName');                   
//获取性别选项状态（男）
var manInp = document.querySelector('#man');                             
//获取性别选项状态（女）
var womanInp = document.querySelector('#woman');                        
//获取登录密码
var passWordInp = document.querySelector('#passWord');                   
//获取确认密码
var confirmPassWordInp = document.querySelector('#confirmPassWord');     
//获取真实姓名
var userRealNameInp = document.querySelector('#userRealName');  
//获取证件号码
var cardCodeInp = document.querySelector('#cardCode');  
//获取邮箱地址         
var emailInp = document.querySelector('#email');      
//获取手机号码               
var mobileNoInp = document.querySelector('#mobileNo');   
//获取协议状态               
var checkAgreeInp = document.querySelector('#checkAgree');      
//重置按钮
var resetBtn = document.querySelector('#reset');  
//错误信息
var error = document.querySelectorAll('.error');  

//错误信息
//用户名长度错误信息
var userNameLenErr = document.querySelector('#userNameLenErr');
//用户名已存在错误信息
var userNameNumErr = document.querySelector('#userNameNumErr');
//用户名空白错误信息
var userNameBlankErr = document.querySelector('#userNameBlankErr');
//用户名格式错误信息
var userNameFormErr = document.querySelector('#userNameFormErr');

//性别选项空白错误信息
var genderBlankErr = document.querySelector('#genderBlankErr');

//密码长度错误信息
var passWordLenErr = document.querySelector('#passWordLenErr');
//密码格式错误信息
var passWordFormErr = document.querySelector('#passWordFormErr');
//密码空白错误信息
var passWordBlankErr = document.querySelector('#passWordBlankErr');

//密码危险
var rankA = document.querySelector('#_div_password_rank_a');
//密码一般
var rankB = document.querySelector('#_div_password_rank_b');
rankB.style.display = 'none';
//密码安全
var rankC = document.querySelector('#_div_password_rank_c');
rankC.style.display = 'none';

//确认密码与登录密码不同错误信息
var confirmPassWordWrongErr = document.querySelector('#confirmPassWordWrongErr');
//确认密码空白错误信息
var confirmPassWordBlankErr = document.querySelector('#confirmPassWordBlankErr');

//真实姓名长度错误信息
var userRealNameLenErr = document.querySelector('#userRealNameLenErr');
//真实姓名空白错误信息
var userRealNameBlankErr = document.querySelector('#userRealNameBlankErr');

//证件号码长度错误信息
var cardCodeFormErr = document.querySelector('#cardCodeFormErr');
//证件号码空白错误信息
var cardCodeBlankErr = document.querySelector('#cardCodeBlankErr');

//邮箱地址格式错误信息
var emailFormErr = document.querySelector('#emailFormErr');

//手机号码格式错误信息
var mobileNoFormErr = document.querySelector('#mobileNoFormErr');
//手机号码空白错误信息
var mobileNoBlankErr = document.querySelector('#mobileNoBlankErr');

//协议未勾选错误信息
var checkAgreeNoErr = document.querySelector('#checkAgreeNoErr');

//检查用户名
function checkUserName(){
    userNameInp.onblur = function(){
        var userName = userNameInp.value;//获取用户输入的用户名的值
        var exp=/^[A-Za-z][\w]{5,19}$/;//正则表达式：6-20位字母、数字或“_”,字母开头
    
        //当按键时，隐藏错误信息
        userNameInp.onkeyup =function(){
            userNameLenErr.style.display = 'none';
            userNameNumErr.style.display = 'none';
            userNameBlankErr.style.display = 'none';
            userNameFormErr.style.display = 'none';
        }
    
        //当输入框失去焦点时，如有错误，则显示错误信息
        if(!userName){
            userNameBlankErr.style.display = 'block';
        }
        else if(userName.length<6){
            userNameLenErr.style.display = 'block';
        }
        else if(!exp.test(userName))
            userNameFormErr.style.display = 'block';
    }
}
checkUserName();

//检查登录密码
function checkPassWord(){
    var exp=/^[\w]{5,19}$/;//正则表达式：6-20位字母、数字或“_”,字母开头
    rankA.style.display = 'block';
    //当按键时，隐藏错误信息，实时监测密码强度并显示
    passWordInp.onkeyup = function(){
        var passWord = passWordInp.value;//获取用户输入的登录密码的值
        passWordLenErr.style.display = 'none';
        passWordFormErr.style.display = 'none';
        passWordBlankErr.style.display = 'none';
        if(!passWord){
            rankA.style.display = 'block';
            rankB.style.display = 'none';
            rankC.style.display = 'none';
        }
        var flag = true;
        if(!passWord||passWord.length<6||!exp.test(passWord))
        {
            flag = false;
        }
        if(flag){
            if((/[\d]/.test(passWord)&&/[\a-zA-Z]/.test(passWord)&&!/[\_]/.test(passWord))||(/[a-zA-Z]/.test(passWord)&&/[\_]/.test(passWord)&&!/[\d]/.test(passWord))||(/[_]/.test(passWord)&&/[\a-zA-Z]/.test(passWord)&&!/[\d]/.test(passWord))){
                rankA.style.display = 'none';
                rankB.style.display = 'block';
                rankC.style.display = 'none';
            }
            else if(/[\d]/.test(passWord)&&/[\a-zA-Z]/.test(passWord)&&/[\_]/.test(passWord)){
                rankA.style.display = 'none';
                rankB.style.display = 'none';
                rankC.style.display = 'block';
            }
        }
    }

    //当输入框失去焦点时，如有错误，则显示错误信息
    passWordInp.onblur = function(){
        var passWord = passWordInp.value;
        if(!passWord){
            passWordBlankErr.style.display = 'block';
        }
        else if(passWord.length<6){
            passWordLenErr.style.display = 'block';
        }
        else if(!exp.test(passWord)){
            passWordFormErr.style.display = 'block';
        }
        var confirmPassWord = confirmPassWordInp.value;//获取用户输入的确认密码的值
        if(confirmPassWord && confirmPassWord != passWord){
            confirmPassWordWrongErr.style.display = 'block';
        }
    }
}
checkPassWord();

//检查确认密码
function checkConfirmPassWord(){
    confirmPassWordInp.onblur = function(){
        var passWord = passWordInp.value;//获取用户输入的登录密码的值
        var confirmPassWord = confirmPassWordInp.value;//获取用户输入的确认密码的值
    
        //当按键时，隐藏错误信息
        confirmPassWordInp.onkeyup =function(){
            confirmPassWordWrongErr.style.display = 'none';
            confirmPassWordBlankErr.style.display = 'none';
        }
    
        //当输入框失去焦点时，如有错误，则显示错误信息
        if(!confirmPassWord){
            confirmPassWordBlankErr.style.display = 'block';
        }
        else if(confirmPassWord != passWord){
            confirmPassWordWrongErr.style.display = 'block';
        }
    }
}
checkConfirmPassWord();

//检查姓名
function checkUserRealName(){
    userRealNameInp.onblur = function(){
        var userRealName = userRealNameInp.value;//获取用户输入的用户名的值
    
        //当按键时，隐藏错误信息
        userRealNameInp.onkeyup =function(){
            userRealNameLenErr.style.display = 'none';
            userRealNameBlankErr.style.display = 'none';
        }
    
        //当输入框失去焦点时，如有错误，则显示错误信息
        if(!userRealName){
            userRealNameBlankErr.style.display = 'block';
        }
        else if(userRealName.length<3){
            userRealNameLenErr.style.display = 'block';
        }
    }
}
checkUserRealName();

//检查证件号码
function checkCardCode(){
    cardCodeInp.onblur = function(){
        var cardCode = cardCodeInp.value;//获取用户输入的证件号码的值
        var exp=/^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/;//正则表达式
    
        //当按键时，隐藏错误信息
        cardCodeInp.onkeyup =function(){
            cardCodeFormErr.style.display = 'none';
            cardCodeBlankErr.style.display = 'none';
        }
    
        //当输入框失去焦点时，如有错误，则显示错误信息
        if(!cardCode){
            cardCodeBlankErr.style.display = 'block';
        }
        else if(!exp.test(cardCode)){
            cardCodeFormErr.style.display = 'block';
        }
    }
}
checkCardCode();

//检查邮箱
function checkEmail(){
    emailInp.onblur = function(){
        var email = emailInp.value;//获取用户输入的邮箱的值
        var exp=/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;//正则表达式
    
        //当按键时，隐藏错误信息
        emailInp.onkeyup =function(){
            emailFormErr.style.display = 'none';
        }
    
        //当输入框失去焦点时，如有错误，则显示错误信息
        if(!exp.test(email) && email){
            emailFormErr.style.display = 'block';
        }
    }
}
checkEmail();

//检查手机号码
function checkMobileNo(){
    mobileNoInp.onblur = function(){
        var mobileNo = mobileNoInp.value;//获取用户输入的手机号码的值
        var exp=/^((13[0-9])|(14[5|7])|(15([0-3]|[5-9]))|(18[0,5-9]))\d{8}$/;//正则表达式
        
        //当按键时，隐藏错误信息
        mobileNoInp.onkeyup =function(){
            mobileNoBlankErr.style.display = 'none';
            mobileNoFormErr.style.display = 'none';
        }
    
        //当输入框失去焦点时，如有错误，则显示错误信息
        if(!mobileNo){
            mobileNoBlankErr.style.display = 'block';
        }
        else if(!exp.test(mobileNo))
            mobileNoFormErr.style.display = 'block';
    }
}
checkMobileNo();

//点击重置按钮，清除所有错误信息
resetBtn.onclick = function(){
    for(var i=0 ; i<error.length ; i++)
        error[i].style.display = 'none';
    rankA.style.display = 'block';
    rankB.style.display = 'none';
    rankC.style.display = 'none';
}

//给form标签绑定一个表单提交事件
registForm.onsubmit = function(e){
    //阻止表单的默认提交行为
    e.preventDefault()
    
    //检查性别及协议选项
    function checkChoice(){
        genderBlankErr.style.display = 'none';
        checkAgreeNoErr.style.display = 'none';

        var man = manInp.checked;
        var woman = womanInp.checked;
        var agree = checkAgreeInp.checked;

        manInp.onclick = function(){
            genderBlankErr.style.display = 'none';
        }
        womanInp.onclick = function(){
            genderBlankErr.style.display = 'none';
        }
        checkAgreeInp.onclick = function(){
            checkAgreeNoErr.style.display = 'none';
        }

        //检查性别选项
        if(!man&&!woman){
            genderBlankErr.style.display = 'block';
        }
        //检查协议是否勾选
        if(!agree){
            checkAgreeNoErr.style.display = 'block';
        }
    }
    checkChoice();

    //拿到用户填写的信息
    var userName = userNameInp.value;
    var passWord = passWordInp.value;
    var userRealName = userRealNameInp.value;
    var cardCode = cardCodeInp.value;
    var email = emailInp.value;
    var mobileNo = mobileNoInp.value;
    var man = manInp.checked;
    var woman = womanInp.checked;
    var agree = checkAgreeInp.checked;

    if((!man&&!woman)||!agree||!userName||!passWord||!userRealName||!cardCode||!mobileNo){
        alert('请完善资料！(标记“*”的选项必填)');
        return false;
    }

    var gender;
    if(manInp.checked)
        gender = '男';
    else
        gender = '女'
    console.log('user_ID=' + userName + '&user_password=' + passWord + '&user_gender' + gender + '&user_real_name=' + userRealName + '&user_person_ID=' + cardCode + '&user_phone_number=' + mobileNo + '&user_email' + email);
}
