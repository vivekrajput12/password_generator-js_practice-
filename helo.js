const lower = 'abcdefghijklmnopqrstuvwxyz';
const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const numbers = '1234567890';
const symbols =  '!@#$%^&*\~()_?/';

const pass = document.getElementById("pass-box");
const total = document.getElementById("total-char");
const lowerInput = document.getElementById("lower-case");
const upperInput = document.getElementById("upper-case");
const numberInput = document.getElementById("numbers");
const symbolInput = document.getElementById("symbols");

const getrandomvalue = (dataset)=>{
        return  dataset[Math.floor(Math.random()*dataset.length)];

}
getrandomvalue(lower);

const getpassword = () => {
        let password = '';
        const desiredLength = total.value;
        while (password.length < desiredLength) {
          if (lowerInput.checked && password.length < desiredLength) {
            password += getrandomvalue(lower);
          }
          if (upperInput.checked && password.length < desiredLength) {
            password += getrandomvalue(upper);
          }
          if (numberInput.checked && password.length < desiredLength) {
            password += getrandomvalue(numbers);
          }
          if (symbolInput.checked && password.length < desiredLength) {
            password += getrandomvalue(symbols);
          }
        }
      
        return password;
      };

document.getElementById("btn").addEventListener(
        "click" , function(){
                pass.innerText =  getpassword();
        }
)