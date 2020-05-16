var funds = ['ЗПИФ 6 ПН;', 'ИФонд 5 ПН;', 'Фонд 4 Без П\\П ПН;','Фонд 2 ПН;','ИФонд Не открыт ПН;','Фонд 1 ПН;','ИФонд Закрыт ПН;','ИПИФ 1 ПН;','Фонд 3 Без П\\П ПН;'];
var acc_num;
var names = ['Алексей;','Сергей;','Александр;','Дмитрий;','Анатолий;','Владимир;','Николай;','Павел;','Иван;','Петр;'];
var fnames = ['Чижиков;','Кошкин;','Иванов;','Петров;','Дерягин;','Шумилов;','Новиков;','Дмитров;','Павлов;','Ракитов;'];
var pnames = ['Иванович;','Алексеевич;','Сергеевич;','Дмитриевич;','Владимирович;','Анатольевич;','Петрович;','Павлович;'];
var birthday = "01.01.1990;";
var countries = ['Россия;','Гондурас;','Гватемала;','Шотландия;','Испания;','Тайланд;','Армения;','Англия;','США;'];
var acc_type = [3, 4, 5, 6];
var dolya = [0, 1];
var numerator = [1,2,3,4,5];
var denominator = [10,20,30,40,50];
var doc_type = ['Паспорт гражданина РФ','Национальный паспорт иностранного гражданина','Паспорт моряка','Военный билет','Свидетельство о рождении','Удостоверение личности военнослужащего ВС РФ'];
var doc_seria;
var doc_num;
var doc_date = "01.01.2014;";
var doc_given_by = "УФМС РФ;";
var birth_place = "Россия;";
var inn = "123456789012;";
var kind_of_taking = ['Лично у регистратора;', 'Письмом;', 'В месте подачи заявки;'];
var tel_and_mail = "8-9090-56-07-80, +79090560780, (3412)935643;mail@mail.com;";
var addr = "Россия;427880;респ;Удмуртская Респ.;;Алнашский;с;Алнаши;;;ул;Ленина;106;а;1;";
var bank_info = "043469751;94926927518834981956;94926927518834981956;ОАО КБ 'РЕГИОНАЛЬНЫЙ КРЕДИТ';30101810800000000751;1234567890;Сергеев Сергей Сергеевич;123456789012";

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

for(i = 0; i < 100; i++){
    s = "";
    acc_num = getRandomInt(1000000, 6000000);
    doc_seria = getRandomInt(1000, 9000);
    doc_num = getRandomInt(100000, 900000);
    
    s = funds[getRandomInt(0, funds.length-1)] + 
        acc_num + ';' +
        fnames[getRandomInt(0, fnames.length-1)] + 
        names[getRandomInt(0, names.length-1)] + 
        pnames[getRandomInt(0, pnames.length-1)] + 
        countries[getRandomInt(0, countries.length-1)] +
        acc_type[getRandomInt(0, acc_type.length-1)] + ';' +
        dolya[getRandomInt(0, dolya.length-1)] + ';' +
        numerator[getRandomInt(0, numerator.length-1)] + ';' +
        denominator[getRandomInt(0, denominator.length-1)] + ';' +
        doc_type[getRandomInt(0, doc_type.length-1)] + ';' +
        doc_seria + ';' +
        doc_num + ';' +
        doc_date +
        doc_given_by + 
        birthday + 
        birth_place +
        inn +
        kind_of_taking[getRandomInt(0, kind_of_taking.length-1)] + 
        tel_and_mail +
        addr + addr +
        bank_info;
    console.log(s);
}


/*
for(l=0; l<100;l++){
    console.log(ABC(str_in, i));
    str_in = str_out;
}*/