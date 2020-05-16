// счет в буквенном виде
var str_out = '';
var user_id = ABC('zz', 1);
var str_len = user_id.length - 1; // текущий символ обработки - последний

function ABC(str, j){
    if ((j === 0) & (str[j] == 'z')){ // если все буквы = z
        str_out = 'a' + str_out.slice(1, str_out.length) + 'a'; // заменяем на А...А + новый разряд А
        str_len++; // длина "слова" увеличивается"
        return str_out;
    }
    if (str[j] == 'z') { // если символ строки = z, то
        str_out = str.slice(0, j) + 'a' + str_out.slice(j+1, str_out.length); // итоговая строка = ...A...
        ABC(str.slice(0, j),j-1); // вызываю эту же ф-ию для следующего символа
    } else 
        {
        str_out = str.slice(0, j) + String.fromCharCode(str.charCodeAt(j)+1) + str_out.slice(j+1, str_out.length);
        }
return str_out;
}

/* // без учета регистра!
function ABC(str, j){
    if ((j === 0) & (str[j] == 'z')){ // если все буквы = z
        str_out = 'A' + str_out.slice(1, str_out.length) + 'A'; // заменяем на А...А + новый разряд А
        str_len++; // длина "слова" увеличивается"
        return str_out;
    }
    if (str[j] == 'z') { // если символ строки = z, то
        str_out = str.slice(0, j) + 'A' + str_out.slice(j+1, str_out.length); // итоговая строка = ...A...
        ABC(str.slice(0, j),j-1); // вызываю эту же ф-ию для следующего символа
    } else 
        if (str[j] == 'Z') {
        str_out = str.slice(0, j) + String.fromCharCode(str.charCodeAt(j)+7) + str_out.slice(j+1, str_out.length);
        } else {
        str_out = str.slice(0, j) + String.fromCharCode(str.charCodeAt(j)+1) + str_out.slice(j+1, str_out.length);
        }
return str_out;*/
}

for(i = 0; i < 100; i++){
        
    s = "INSERT INTO dbo.core_Users ([id],[lastUpdated ],[timeStamp],[blocked],[code],[creationDate],[deleted],[fired],[firstName],[lastName],[password],[patronymic],[userName]) VALUES (0x0000010000000000000000000001"+ i +", GETUTCDATE(), GETUTCDATE(), 0,"+ 5*i +", GETUTCDATE(), 0, 0, 'User_"+ user_id +"', 'User_"+ user_id +"', '4ed7c7d36a9507d1d35ca65fb89ba409', '', 'oper_"+ user_id +"');";
    console.log(s + '\n');
  
    s = "INSERT INTO dbo.core_Hierarchies ([id],[lastUpdated ],[timeStamp],[Name],[type],[parent_id]) VALUES (0x0000020000000000000000000001"+i+", GETUTCDATE(), GETUTCDATE(), NULL, 'POST', 0xCE72B34CDDBB4F698BC2ACAD9CEEDC15);";
    console.log(s + '\n');
    
    s = "INSERT INTO dbo.core_RoleHierarchyMappings ([id],[ou_id],[role_id]) VALUES ("+(600+i)+", 0x0000020000000000000000000001"+i+", 0x00000000000000000000000000000019);";
    console.log(s + '\n');
    
   s = "INSERT INTO dbo.core_UserHierarchyMappings ([id],[ou_id],[user_id]) VALUES ("+(500+i)+", 0x0000020000000000000000000001"+i+", 0x0000010000000000000000000001"+i+");"; 
    console.log(s + '\n');
    
   user_id = ABC(user_id, str_len);
}


/*
for(l=0; l<100;l++){
    console.log(ABC(str_in, i));
    str_in = str_out;
}*/