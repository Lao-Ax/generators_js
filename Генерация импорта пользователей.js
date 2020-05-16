// счет в буквенном виде
var str_out = '';
var start_str = 'zz'; // это значение не будет выдано в результате. Только следующее.
var user_id = ABC(start_str, start_str.length-1);
var str_len = user_id.length - 1; // текущий символ обработки - последний
var dep = ['ППЗ УК;','ППЗ УК УСП;','ППЗ УК ЦПФП;','ППЗ УК ЦЧБО;'];
var names = ['Алексей ','Сергей ','Александр ','Дмитрий ','Анатолий ','Владимир ','Николай ','Павел ','Иван ','Петр '];
var fnames = [';Чижиков ',';Кошкин ',';Иванов ',';Петров ',';Дерягин ',';Шумилов ',';Новиков ',';Дмитров ',';Павлов ',';Ракитов '];
var pnames = ['Иванович','Алексеевич','Сергеевич','Дмитриевич','Владимирович','Анатольевич','Петрович','Павлович'];

function ABC(str, j){
    if ((j === 0) && (str[j] === 'z')){ // если все буквы = z
        str_out = 'a' + str_out.slice(1, str_out.length) + 'a'; // заменяем на А...А + новый разряд А
        str_len++; // длина "слова" увеличивается"
        return str_out;
    }
    if (str[j] === 'z') { // если символ строки = z, то
        str_out = str.slice(0, j) + 'a' + str_out.slice(j+1, str_out.length); // итоговая строка = ...A...
        ABC(str.slice(0, j),j-1); // вызываю эту же ф-ию для следующего символа
    } else 
        {
        str_out = str.slice(0, j) + String.fromCharCode(str.charCodeAt(j)+1) + str_out.slice(j+1, str_out.length);
        }
return str_out;
}

function getRandomInt(min, max) {
          return Math.floor(Math.random() * (max - min + 1) + min);
        }

/* // без учета регистра!
function ABC(str, j){
    if ((j === 0) && (str[j] === 'z')){ // если все буквы = z
        str_out = 'A' + str_out.slice(1, str_out.length) + 'A'; // заменяем на А...А + новый разряд А
        str_len++; // длина "слова" увеличивается"
        return str_out;
    }
    if (str[j] === 'z') { // если символ строки = z, то
        str_out = str.slice(0, j) + 'A' + str_out.slice(j+1, str_out.length); // итоговая строка = ...A...
        ABC(str.slice(0, j),j-1); // вызываю эту же ф-ию для следующего символа
    } else 
        if (str[j] == 'Z') {
        str_out = str.slice(0, j) + String.fromCharCode(str.charCodeAt(j)+7) + str_out.slice(j+1, str_out.length);
        } else {
        str_out = str.slice(0, j) + String.fromCharCode(str.charCodeAt(j)+1) + str_out.slice(j+1, str_out.length);
        }
return str_out;
}*/

for(i = 0; i < 10; i++){
        
    s = dep[i%dep.length] + 
        "oper_"+ i + 
        fnames[getRandomInt(0, fnames.length-1)] + names[getRandomInt(0, names.length-1)] + pnames[getRandomInt(0, pnames.length-1)] + 
        ";oper_"+ user_id + 
        ";oper_"+ user_id + 
        ";0";
    console.log(s);
    
   user_id = ABC(user_id, str_len);
}


/*
for(l=0; l<100;l++){
    console.log(ABC(str_in, i));
    str_in = str_out;
}*/