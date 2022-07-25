var btns = document.querySelectorAll('.btn');
var str = " ";
Array.from(btns).forEach(function(btn){
    btn.addEventListener('click', function(res){
      var inrhtml = res.target.innerHTML
      if(inrhtml == 'ans'){
          str = eval(str);
          document.querySelector('input').value = str;
      }
      else if(inrhtml == 'del'){
          str = str.slice(0,-1);
          document.querySelector('input').value = str;
      }
      else if(inrhtml == 'clr'){
          str = "";
          document.querySelector('input').value = str;
      }
      else if(inrhtml == '%'){
          str = str / '100';
          document.querySelector('input').value = str;
      }
      else if(inrhtml == '+/-'){
          str = str * '-1';
          document.querySelector('input').value = str;
      }
      else{
          str = str + inrhtml;
          document.querySelector('input').value = str;
      }
    })
})
