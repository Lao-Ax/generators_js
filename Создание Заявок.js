/* !! Важно не забывать указывать данные пользователя как в запросе так и в XML!! */

/* Приобретение физ. лицом */
var fond = ['Фонд Вечного Благосостояния', 'Фонд Безграничного Счастья', 'Фонд Любителей Пива', 'Фонд Анны Цеткен', 'Фонд Котейки', 'Фонд Билла Г.'];

for(i = 100; i < 102; i++){
    d = new Date();
    time = d.getFullYear() + '-0' +(d.getUTCMonth()+1) + '-' + d.getDate() + ' ' + d.getHours() + ':'+ d.getMinutes() + ':' + d.getSeconds() + '.' + d.getMilliseconds();
    if (i % 2) {b = 'true'} else {b = 'false'};
    if (!(i % 3)) {comment = "'Комментарий_"+i+"'"} else {comment = 'NULL'};
	
    xml = '<com.epam.gzam.apnt.model.ownable.Application><timeStamp>'+ time +' MSK</timeStamp><lastUpdated>'+ time +' MSK</lastUpdated><owner><id>9120c2b1-9f60-406f-b47a-0796ae3d0b1e</id><timeStamp class="sql-timestamp">2013-08-07 13:23:13.433</timeStamp><lastUpdated class="sql-timestamp">2013-08-07 13:24:17.603</lastUpdated><userName>oper1</userName><password>8bff42131151e732324d3d6e64440eb7</password><code>159</code><firstName>Андрей</firstName><patronymic>Павлович</patronymic><lastName>Крылов</lastName><creationDate class="sql-timestamp">2013-08-07 13:23:13.433</creationDate><blocked>false</blocked><fired>false</fired><deleted>false</deleted><allowedAuthorities><com.epam.gzam.apnt.model.ou.Activity><id>00000000-0000-0000-0000-00000000101c</id><timeStamp class="sql-timestamp">2013-08-06 18:30:57.253</timeStamp><lastUpdated class="sql-timestamp">2013-08-06 18:30:57.39</lastUpdated><name>APPLICATION_ATTACH</name><description>Прикрепление к заявке отсканированных копий документов</description></com.epam.gzam.apnt.model.ou.Activity><com.epam.gzam.apnt.model.ou.Activity><id>00000000-0000-0000-0000-000000001021</id><timeStamp class="sql-timestamp">2013-08-06 18:30:57.253</timeStamp><lastUpdated class="sql-timestamp">2013-08-06 18:30:57.393</lastUpdated><name>APPLICATION_CANCEL</name><description>Отмена заявки</description></com.epam.gzam.apnt.model.ou.Activity><com.epam.gzam.apnt.model.ou.Activity><id>00000000-0000-0000-0000-000000001017</id><timeStamp class="sql-timestamp">2013-08-06 18:30:57.253</timeStamp><lastUpdated class="sql-timestamp">2013-08-06 18:30:57.397</lastUpdated><name>APPLICATION_CREATE</name><description>Инициирование создания новой заявки</description></com.epam.gzam.apnt.model.ou.Activity><com.epam.gzam.apnt.model.ou.Activity><id>00000000-0000-0000-0000-00000000101d</id><timeStamp class="sql-timestamp">2013-08-06 18:30:57.253</timeStamp><lastUpdated class="sql-timestamp">2013-08-06 18:30:57.4</lastUpdated><name>APPLICATION_DRAFT</name><description>Печать заявки в черновом варианте</description></com.epam.gzam.apnt.model.ou.Activity><com.epam.gzam.apnt.model.ou.Activity><id>00000000-0000-0000-0000-000000001026</id><timeStamp class="sql-timestamp">2013-08-06 18:30:57.253</timeStamp><lastUpdated class="sql-timestamp">2013-08-06 18:30:57.4</lastUpdated><name>APPLICATION_DUPLICATE</name><description>Восстановление последней зарегистрированной заявки</description></com.epam.gzam.apnt.model.ou.Activity><com.epam.gzam.apnt.model.ou.Activity><id>00000000-0000-0000-0000-000000001018</id><timeStamp class="sql-timestamp">2013-08-06 18:30:57.253</timeStamp><lastUpdated class="sql-timestamp">2013-08-06 18:30:57.403</lastUpdated><name>APPLICATION_FILL</name><description>Заполнение заявки</description></com.epam.gzam.apnt.model.ou.Activity><com.epam.gzam.apnt.model.ou.Activity><id>00000000-0000-0000-0000-000000001020</id><timeStamp class="sql-timestamp">2013-08-06 18:30:57.253</timeStamp><lastUpdated class="sql-timestamp">2013-08-06 18:30:57.407</lastUpdated><name>APPLICATION_FINALIZE</name><description>Отправка заявки на сервер</description></com.epam.gzam.apnt.model.ou.Activity><com.epam.gzam.apnt.model.ou.Activity><id>00000000-0000-0000-0000-000000001024</id><timeStamp class="sql-timestamp">2013-08-06 18:30:57.253</timeStamp><lastUpdated class="sql-timestamp">2013-08-06 18:30:57.41</lastUpdated><name>APPLICATION_INVENTORY</name><description>Формирование описи принятых документов</description></com.epam.gzam.apnt.model.ou.Activity><com.epam.gzam.apnt.model.ou.Activity><id>00000000-0000-0000-0000-00000000101a</id><timeStamp class="sql-timestamp">2013-08-06 18:30:57.253</timeStamp><lastUpdated class="sql-timestamp">2013-08-06 18:30:57.413</lastUpdated><name>APPLICATION_LOAD</name><description>Загрузка заявки из файла</description></com.epam.gzam.apnt.model.ou.Activity><com.epam.gzam.apnt.model.ou.Activity><id>00000000-0000-0000-0000-00000000101f</id><timeStamp class="sql-timestamp">2013-08-06 18:30:57.253</timeStamp><lastUpdated class="sql-timestamp">2013-08-06 18:30:57.417</lastUpdated><name>APPLICATION_PRINT</name><description>Печать заявки после регистрации заявки</description></com.epam.gzam.apnt.model.ou.Activity><com.epam.gzam.apnt.model.ou.Activity><id>00000000-0000-0000-0000-00000000101e</id><timeStamp class="sql-timestamp">2013-08-06 18:30:57.253</timeStamp><lastUpdated class="sql-timestamp">2013-08-06 18:30:57.417</lastUpdated><name>APPLICATION_REGISTER</name><description>Инициирование окончания регистрации заявки</description></com.epam.gzam.apnt.model.ou.Activity><com.epam.gzam.apnt.model.ou.Activity><id>00000000-0000-0000-0000-000000001019</id><timeStamp class="sql-timestamp">2013-08-06 18:30:57.253</timeStamp><lastUpdated class="sql-timestamp">2013-08-06 18:30:57.42</lastUpdated><name>APPLICATION_SAVE</name><description>Сохранение заявки до её регистрации</description></com.epam.gzam.apnt.model.ou.Activity><com.epam.gzam.apnt.model.ou.Activity><id>00000000-0000-0000-0000-00000000101b</id><timeStamp class="sql-timestamp">2013-08-06 18:30:57.253</timeStamp><lastUpdated class="sql-timestamp">2013-08-06 18:30:57.423</lastUpdated><name>APPLICATION_VIEW</name><description>Просмотр заявки</description></com.epam.gzam.apnt.model.ou.Activity><com.epam.gzam.apnt.model.ou.Activity><id>00000000-0000-0000-0000-000000001022</id><timeStamp class="sql-timestamp">2013-08-06 18:30:57.253</timeStamp><lastUpdated class="sql-timestamp">2013-08-06 18:30:57.427</lastUpdated><name>APPLICATION_SIGN</name><description>Подписание заявки электронной подписью</description></com.epam.gzam.apnt.model.ou.Activity><com.epam.gzam.apnt.model.ou.Activity><id>00000000-0000-0000-0000-000000001027</id><timeStamp class="sql-timestamp">2013-08-06 18:30:57.253</timeStamp><lastUpdated class="sql-timestamp">2013-08-06 18:30:57.427</lastUpdated><name>APPLICATION_DOCUMENTS</name><description>Редактирование списка принятых документов</description></com.epam.gzam.apnt.model.ou.Activity><com.epam.gzam.apnt.model.ou.Activity><id>00000000-0000-0000-0000-000000003017</id><timeStamp class="sql-timestamp">2013-08-06 18:30:57.253</timeStamp><lastUpdated class="sql-timestamp">2013-08-06 18:30:57.263</lastUpdated><name>REGISTRY_VIEW</name><description>Просмотр журнала принятых заявок</description></com.epam.gzam.apnt.model.ou.Activity><com.epam.gzam.apnt.model.ou.Activity><id>00000000-0000-0000-0000-000000003018</id><timeStamp class="sql-timestamp">2013-08-06 18:30:57.253</timeStamp><lastUpdated class="sql-timestamp">2013-08-06 18:30:57.277</lastUpdated><name>REGISTRY_SORT</name><description>Сортировка журнала по любому столбцу</description></com.epam.gzam.apnt.model.ou.Activity><com.epam.gzam.apnt.model.ou.Activity><id>00000000-0000-0000-0000-000000003019</id><timeStamp class="sql-timestamp">2013-08-06 18:30:57.253</timeStamp><lastUpdated class="sql-timestamp">2013-08-06 18:30:57.277</lastUpdated><name>REGISTRY_REORDER</name><description>Изменение порядка столбцов журнала</description></com.epam.gzam.apnt.model.ou.Activity><com.epam.gzam.apnt.model.ou.Activity><id>00000000-0000-0000-0000-00000000301b</id><timeStamp class="sql-timestamp">2013-08-06 18:30:57.253</timeStamp><lastUpdated class="sql-timestamp">2013-08-06 18:30:57.43</lastUpdated><name>REGISTRY_FILTER</name><description>Фильтрация журнала</description></com.epam.gzam.apnt.model.ou.Activity><com.epam.gzam.apnt.model.ou.Activity><id>00000000-0000-0000-0000-00000000301f</id><timeStamp class="sql-timestamp">2013-08-06 18:30:57.253</timeStamp><lastUpdated class="sql-timestamp">2013-08-06 18:30:57.297</lastUpdated><name>REGISTRY_PRINT</name><description>Печать выбранной заявки</description></com.epam.gzam.apnt.model.ou.Activity><com.epam.gzam.apnt.model.ou.Activity><id>00000000-0000-0000-0000-000000003023</id><timeStamp class="sql-timestamp">2013-08-06 18:30:57.253</timeStamp><lastUpdated class="sql-timestamp">2013-08-06 18:30:57.307</lastUpdated><name>REGISTRY_EXTERNAL</name><description>Просмотр оповещений об операциях в СД</description></com.epam.gzam.apnt.model.ou.Activity><com.epam.gzam.apnt.model.ou.Activity><id>00000000-0000-0000-0000-000000006019</id><timeStamp class="sql-timestamp">2013-08-06 18:30:57.253</timeStamp><lastUpdated class="sql-timestamp">2013-08-06 18:30:57.433</lastUpdated><name>TESTING_FILL</name><description>Заполнение тестовой заявки</description></com.epam.gzam.apnt.model.ou.Activity><com.epam.gzam.apnt.model.ou.Activity><id>00000000-0000-0000-0000-000000007017</id><timeStamp class="sql-timestamp">2013-08-06 18:30:57.253</timeStamp><lastUpdated class="sql-timestamp">2013-08-06 18:30:57.34</lastUpdated><name>DIRECTORY_FUNDS</name><description>Просмотр справочника Фондов</description></com.epam.gzam.apnt.model.ou.Activity><com.epam.gzam.apnt.model.ou.Activity><id>00000000-0000-0000-0000-000000002017</id><timeStamp class="sql-timestamp">2013-08-06 18:30:57.253</timeStamp><lastUpdated class="sql-timestamp">2013-08-06 18:30:57.437</lastUpdated><name>REFUSAL_CREATE</name><description>Оформление отказа в приеме заявки</description></com.epam.gzam.apnt.model.ou.Activity><com.epam.gzam.apnt.model.ou.Activity><id>00000000-0000-0000-0000-000000002018</id><timeStamp class="sql-timestamp">2013-08-06 18:30:57.253</timeStamp><lastUpdated class="sql-timestamp">2013-08-06 18:30:57.44</lastUpdated><name>REFUSAL_PRINT</name><description>Печать отказа в приеме заявки</description></com.epam.gzam.apnt.model.ou.Activity><com.epam.gzam.apnt.model.ou.Activity><id>00000000-0000-0000-0000-00000000a017</id><timeStamp class="sql-timestamp">2013-08-06 18:30:57.253</timeStamp><lastUpdated class="sql-timestamp">2013-08-06 18:30:57.383</lastUpdated><name>MESSAGE_VIEW</name><description>Просмотр информационных сообщений</description></com.epam.gzam.apnt.model.ou.Activity></allowedAuthorities><forcedAuthorities /><deniedAuthorities /><authenticated>true</authenticated></owner><lastUpdatedBy reference="../owner" /><acceptDate>'+ time +' MSK</acceptDate><applicationTypeName>Заявка на приобретение</applicationTypeName><fundName>789</fundName><clientManagerName>Андрей Крылов</clientManagerName><applicantKindName>Физическое лицо</applicantKindName><specifiedRepresentativeKind>true</specifiedRepresentativeKind><representativeKindName>Физическое лицо</representativeKindName><accountRegisterBookkeepingTypeName>Владелец</accountRegisterBookkeepingTypeName><sharedPropertyExists>false</sharedPropertyExists><unitFundsCost>0</unitFundsCost><unitFundsCostName /><accountInUnitFundsRegistry>true</accountInUnitFundsRegistry><accountToUnitFundRegistry>false</accountToUnitFundRegistry><requestWorksheet>false</requestWorksheet><applicantIndividual><lastname>ФКлиент_'+ i +'</lastname><firstname>ИКлиент_'+ i +'</firstname><patronymic>ОКлиент_'+ i +'</patronymic><birthday>2013-08-05 00:00:00.0 MSK</birthday><documentTypeName>Паспорт РФ</documentTypeName><docSeries>1234</docSeries><docNo>123456</docNo><docIssuedBy>па</docIssuedBy><docDate>2013-08-13 00:00:00.0 MSK</docDate><accountNo /><vipClient>'+ b +'</vipClient></applicantIndividual><applicantLegalPerson><fullName /><docName /><regNo /><regBy /><regNoOld /><regByOld /><accountNo /><vipClient>false</vipClient></applicantLegalPerson><representerIndividual><individualKindName>Уполномоченный представитель (по доверенности)</individualKindName><lastname>ФПредставитель_'+ i +'</lastname><firstname>ИПредставитель_'+ i +'</firstname><patronymic>ОПредставитель_'+ i +'</patronymic><birthday>2013-08-02 00:00:00.0 MSK</birthday><documentTypeName>Паспорт РФ</documentTypeName><docSeries>1234</docSeries><docNo>123456</docNo><docIssuedBy> ОВД РФ по РФ</docIssuedBy><docDate>2013-08-12 00:00:00.0 MSK</docDate><mandateNo>123411</mandateNo><mandateDate>2013-08-10 00:00:00.0 MSK</mandateDate><address><zip /><country /><area /><district /><city /><street /><homeNo /><flatNo /></address><guardianDocAttr><docName /><docNo /><docIssuedBy /></guardianDocAttr></representerIndividual><representativeLegalPerson><fullName /><shortName /><country /><docName /><regNo /><regBy /><representativeLegalPersonInfo><post /><lastname /><firstname /><patronymic /><citizenship>Россия</citizenship><documentTypeName>Паспорт РФ</documentTypeName><docSeries /><docNo /><docIssuedBy /><phone><countryCode /><cityCode /><phoneNo /></phone><faxNo /><email /></representativeLegalPersonInfo><addressFact><zip /><country /><area /><district /><city /><street /><homeNo /><flatNo /></addressFact><addressPost><zip /><country /><area /><district /><city /><street /><homeNo /><flatNo /><match>false</match></addressPost></representativeLegalPerson><bankData><code /><name /><location /><accountCorr /><settlementAccount /><accountNo /><payee /><inn /></bankData><applicantAddress><addressReg><zip>2465</zip><country>Россия</country><area /><district /><city>654</city><street /><homeNo>654</homeNo><flatNo /></addressReg><addressPost><zip>2465</zip><country>Россия</country><area /><district /><city>654</city><street /><homeNo>654</homeNo><flatNo /><match>true</match></addressPost><deliveryWayName /><phone1 /><phone2 /><fax /><email /></applicantAddress></com.epam.gzam.apnt.model.ownable.Application>';

	s = "INSERT INTO GZAM_APNT_TEST_COMPANY.dbo.business_applications ([id],[lastUpdated],[timeStamp],[acceptDate],[agentName],[applicantLastName],[applicationTypeName],[comment],[docList],[fundName],[originalStatusName],[sdStatus],[xmldata],[lastUpdatedBy_id],[owner_id]) VALUES (0x00000000000000000000000000001"+ i +", SYSUTCDATETIME(), SYSUTCDATETIME(), SYSUTCDATETIME(), NULL, 'Клиент_"+ i+ "', 'Заявка на приобретение', "+ comment +", NULL, '"+fond[i % fond.length]+"', NULL, NULL, '"+ xml + "', 0x9120C2B19F60406FB47A0796AE3D0B1E, 0x9120C2B19F60406FB47A0796AE3D0B1E);";
    console.log(s + '\n');
    
    s = "INSERT INTO GZAM_APNT_TEST_COMPANY.dbo.core_HistoryItems ([id],[actionTime],[message],[result],[source],[actionType],[itemId],[userAddress],[userName]) VALUES (1"+ i +", GETUTCDATE(), '', 'SUCCESS', 'NULL', 'OBJECT_CREATE', CONVERT(varbinary, '0x00000000000000000000000000001"+ i +"', 1), '10.27.11.104', 'oper1');";
	console.log(s + '\n');
}

/* Обмен юр. лицом с представителем, вип клиент, */
var fond = ['Фонд Вечного Благосостояния', 'Фонд Безграничного Счастья', 'Фонд Любителей Пива', 'Фонд Анны Цеткен', 'Фонд Котейки', 'Фонд Билла Г.'];

for(i = 100; i < 102; i++){
    d = new Date();
    time = d.getFullYear() + '-0' +(d.getUTCMonth()+1) + '-' + d.getDate() + ' ' + d.getHours() + ':'+ d.getMinutes() + ':' + d.getSeconds() + '.' + d.getMilliseconds();
    if (i % 2) {b = 'true'} else {b = 'false'};
    if (!(i % 3)) {comment = "'Комментарий_"+i+"'"} else {comment = 'NULL'};
	
    xml = '<com.epam.gzam.apnt.model.ownable.Application><timeStamp>'+ time +' MSK</timeStamp><lastUpdated>'+ time +' MSK</lastUpdated><owner><id>9120c2b1-9f60-406f-b47a-0796ae3d0b1e</id><timeStamp class="sql-timestamp">2013-08-07 13:23:13.433</timeStamp><lastUpdated class="sql-timestamp">2013-08-07 13:24:17.603</lastUpdated><userName>oper1</userName><password>8bff42131151e732324d3d6e64440eb7</password><code>159</code><firstName>Андрей</firstName><patronymic>Павлович</patronymic><lastName>Крылов</lastName><creationDate class="sql-timestamp">2013-08-07 13:23:13.433</creationDate><blocked>false</blocked><fired>false</fired><deleted>false</deleted><allowedAuthorities><com.epam.gzam.apnt.model.ou.Activity><id>00000000-0000-0000-0000-00000000101c</id><timeStamp class="sql-timestamp">2013-08-06 18:30:57.253</timeStamp><lastUpdated class="sql-timestamp">2013-08-06 18:30:57.39</lastUpdated><name>APPLICATION_ATTACH</name><description>Прикрепление к заявке отсканированных копий документов</description></com.epam.gzam.apnt.model.ou.Activity><com.epam.gzam.apnt.model.ou.Activity><id>00000000-0000-0000-0000-000000001021</id><timeStamp class="sql-timestamp">2013-08-06 18:30:57.253</timeStamp><lastUpdated class="sql-timestamp">2013-08-06 18:30:57.393</lastUpdated><name>APPLICATION_CANCEL</name><description>Отмена заявки</description></com.epam.gzam.apnt.model.ou.Activity><com.epam.gzam.apnt.model.ou.Activity><id>00000000-0000-0000-0000-000000001017</id><timeStamp class="sql-timestamp">2013-08-06 18:30:57.253</timeStamp><lastUpdated class="sql-timestamp">2013-08-06 18:30:57.397</lastUpdated><name>APPLICATION_CREATE</name><description>Инициирование создания новой заявки</description></com.epam.gzam.apnt.model.ou.Activity><com.epam.gzam.apnt.model.ou.Activity><id>00000000-0000-0000-0000-00000000101d</id><timeStamp class="sql-timestamp">2013-08-06 18:30:57.253</timeStamp><lastUpdated class="sql-timestamp">2013-08-06 18:30:57.4</lastUpdated><name>APPLICATION_DRAFT</name><description>Печать заявки в черновом варианте</description></com.epam.gzam.apnt.model.ou.Activity><com.epam.gzam.apnt.model.ou.Activity><id>00000000-0000-0000-0000-000000001026</id><timeStamp class="sql-timestamp">2013-08-06 18:30:57.253</timeStamp><lastUpdated class="sql-timestamp">2013-08-06 18:30:57.4</lastUpdated><name>APPLICATION_DUPLICATE</name><description>Восстановление последней зарегистрированной заявки</description></com.epam.gzam.apnt.model.ou.Activity><com.epam.gzam.apnt.model.ou.Activity><id>00000000-0000-0000-0000-000000001018</id><timeStamp class="sql-timestamp">2013-08-06 18:30:57.253</timeStamp><lastUpdated class="sql-timestamp">2013-08-06 18:30:57.403</lastUpdated><name>APPLICATION_FILL</name><description>Заполнение заявки</description></com.epam.gzam.apnt.model.ou.Activity><com.epam.gzam.apnt.model.ou.Activity><id>00000000-0000-0000-0000-000000001020</id><timeStamp class="sql-timestamp">2013-08-06 18:30:57.253</timeStamp><lastUpdated class="sql-timestamp">2013-08-06 18:30:57.407</lastUpdated><name>APPLICATION_FINALIZE</name><description>Отправка заявки на сервер</description></com.epam.gzam.apnt.model.ou.Activity><com.epam.gzam.apnt.model.ou.Activity><id>00000000-0000-0000-0000-000000001024</id><timeStamp class="sql-timestamp">2013-08-06 18:30:57.253</timeStamp><lastUpdated class="sql-timestamp">2013-08-06 18:30:57.41</lastUpdated><name>APPLICATION_INVENTORY</name><description>Формирование описи принятых документов</description></com.epam.gzam.apnt.model.ou.Activity><com.epam.gzam.apnt.model.ou.Activity><id>00000000-0000-0000-0000-00000000101a</id><timeStamp class="sql-timestamp">2013-08-06 18:30:57.253</timeStamp><lastUpdated class="sql-timestamp">2013-08-06 18:30:57.413</lastUpdated><name>APPLICATION_LOAD</name><description>Загрузка заявки из файла</description></com.epam.gzam.apnt.model.ou.Activity><com.epam.gzam.apnt.model.ou.Activity><id>00000000-0000-0000-0000-00000000101f</id><timeStamp class="sql-timestamp">2013-08-06 18:30:57.253</timeStamp><lastUpdated class="sql-timestamp">2013-08-06 18:30:57.417</lastUpdated><name>APPLICATION_PRINT</name><description>Печать заявки после регистрации заявки</description></com.epam.gzam.apnt.model.ou.Activity><com.epam.gzam.apnt.model.ou.Activity><id>00000000-0000-0000-0000-00000000101e</id><timeStamp class="sql-timestamp">2013-08-06 18:30:57.253</timeStamp><lastUpdated class="sql-timestamp">2013-08-06 18:30:57.417</lastUpdated><name>APPLICATION_REGISTER</name><description>Инициирование окончания регистрации заявки</description></com.epam.gzam.apnt.model.ou.Activity><com.epam.gzam.apnt.model.ou.Activity><id>00000000-0000-0000-0000-000000001019</id><timeStamp class="sql-timestamp">2013-08-06 18:30:57.253</timeStamp><lastUpdated class="sql-timestamp">2013-08-06 18:30:57.42</lastUpdated><name>APPLICATION_SAVE</name><description>Сохранение заявки до её регистрации</description></com.epam.gzam.apnt.model.ou.Activity><com.epam.gzam.apnt.model.ou.Activity><id>00000000-0000-0000-0000-00000000101b</id><timeStamp class="sql-timestamp">2013-08-06 18:30:57.253</timeStamp><lastUpdated class="sql-timestamp">2013-08-06 18:30:57.423</lastUpdated><name>APPLICATION_VIEW</name><description>Просмотр заявки</description></com.epam.gzam.apnt.model.ou.Activity><com.epam.gzam.apnt.model.ou.Activity><id>00000000-0000-0000-0000-000000001022</id><timeStamp class="sql-timestamp">2013-08-06 18:30:57.253</timeStamp><lastUpdated class="sql-timestamp">2013-08-06 18:30:57.427</lastUpdated><name>APPLICATION_SIGN</name><description>Подписание заявки электронной подписью</description></com.epam.gzam.apnt.model.ou.Activity><com.epam.gzam.apnt.model.ou.Activity><id>00000000-0000-0000-0000-000000001027</id><timeStamp class="sql-timestamp">2013-08-06 18:30:57.253</timeStamp><lastUpdated class="sql-timestamp">2013-08-06 18:30:57.427</lastUpdated><name>APPLICATION_DOCUMENTS</name><description>Редактирование списка принятых документов</description></com.epam.gzam.apnt.model.ou.Activity><com.epam.gzam.apnt.model.ou.Activity><id>00000000-0000-0000-0000-000000003017</id><timeStamp class="sql-timestamp">2013-08-06 18:30:57.253</timeStamp><lastUpdated class="sql-timestamp">2013-08-06 18:30:57.263</lastUpdated><name>REGISTRY_VIEW</name><description>Просмотр журнала принятых заявок</description></com.epam.gzam.apnt.model.ou.Activity><com.epam.gzam.apnt.model.ou.Activity><id>00000000-0000-0000-0000-000000003018</id><timeStamp class="sql-timestamp">2013-08-06 18:30:57.253</timeStamp><lastUpdated class="sql-timestamp">2013-08-06 18:30:57.277</lastUpdated><name>REGISTRY_SORT</name><description>Сортировка журнала по любому столбцу</description></com.epam.gzam.apnt.model.ou.Activity><com.epam.gzam.apnt.model.ou.Activity><id>00000000-0000-0000-0000-000000003019</id><timeStamp class="sql-timestamp">2013-08-06 18:30:57.253</timeStamp><lastUpdated class="sql-timestamp">2013-08-06 18:30:57.277</lastUpdated><name>REGISTRY_REORDER</name><description>Изменение порядка столбцов журнала</description></com.epam.gzam.apnt.model.ou.Activity><com.epam.gzam.apnt.model.ou.Activity><id>00000000-0000-0000-0000-00000000301b</id><timeStamp class="sql-timestamp">2013-08-06 18:30:57.253</timeStamp><lastUpdated class="sql-timestamp">2013-08-06 18:30:57.43</lastUpdated><name>REGISTRY_FILTER</name><description>Фильтрация журнала</description></com.epam.gzam.apnt.model.ou.Activity><com.epam.gzam.apnt.model.ou.Activity><id>00000000-0000-0000-0000-00000000301f</id><timeStamp class="sql-timestamp">2013-08-06 18:30:57.253</timeStamp><lastUpdated class="sql-timestamp">2013-08-06 18:30:57.297</lastUpdated><name>REGISTRY_PRINT</name><description>Печать выбранной заявки</description></com.epam.gzam.apnt.model.ou.Activity><com.epam.gzam.apnt.model.ou.Activity><id>00000000-0000-0000-0000-000000003023</id><timeStamp class="sql-timestamp">2013-08-06 18:30:57.253</timeStamp><lastUpdated class="sql-timestamp">2013-08-06 18:30:57.307</lastUpdated><name>REGISTRY_EXTERNAL</name><description>Просмотр оповещений об операциях в СД</description></com.epam.gzam.apnt.model.ou.Activity><com.epam.gzam.apnt.model.ou.Activity><id>00000000-0000-0000-0000-000000006019</id><timeStamp class="sql-timestamp">2013-08-06 18:30:57.253</timeStamp><lastUpdated class="sql-timestamp">2013-08-06 18:30:57.433</lastUpdated><name>TESTING_FILL</name><description>Заполнение тестовой заявки</description></com.epam.gzam.apnt.model.ou.Activity><com.epam.gzam.apnt.model.ou.Activity><id>00000000-0000-0000-0000-000000007017</id><timeStamp class="sql-timestamp">2013-08-06 18:30:57.253</timeStamp><lastUpdated class="sql-timestamp">2013-08-06 18:30:57.34</lastUpdated><name>DIRECTORY_FUNDS</name><description>Просмотр справочника Фондов</description></com.epam.gzam.apnt.model.ou.Activity><com.epam.gzam.apnt.model.ou.Activity><id>00000000-0000-0000-0000-000000002017</id><timeStamp class="sql-timestamp">2013-08-06 18:30:57.253</timeStamp><lastUpdated class="sql-timestamp">2013-08-06 18:30:57.437</lastUpdated><name>REFUSAL_CREATE</name><description>Оформление отказа в приеме заявки</description></com.epam.gzam.apnt.model.ou.Activity><com.epam.gzam.apnt.model.ou.Activity><id>00000000-0000-0000-0000-000000002018</id><timeStamp class="sql-timestamp">2013-08-06 18:30:57.253</timeStamp><lastUpdated class="sql-timestamp">2013-08-06 18:30:57.44</lastUpdated><name>REFUSAL_PRINT</name><description>Печать отказа в приеме заявки</description></com.epam.gzam.apnt.model.ou.Activity><com.epam.gzam.apnt.model.ou.Activity><id>00000000-0000-0000-0000-00000000a017</id><timeStamp class="sql-timestamp">2013-08-06 18:30:57.253</timeStamp><lastUpdated class="sql-timestamp">2013-08-06 18:30:57.383</lastUpdated><name>MESSAGE_VIEW</name><description>Просмотр информационных сообщений</description></com.epam.gzam.apnt.model.ou.Activity></allowedAuthorities><forcedAuthorities /><deniedAuthorities /><authenticated>true</authenticated></owner><lastUpdatedBy reference="../owner" /><acceptDate>'+ time +' MSK</acceptDate><applicationTypeName>Заявка на обмен</applicationTypeName><fundName>ПНФ 12</fundName><clientManagerName>Андрей Крылов</clientManagerName><applicantKindName>Юридическое лицо</applicantKindName><specifiedRepresentativeKind>true</specifiedRepresentativeKind><representativeKindName>Физическое лицо</representativeKindName><accountRegisterBookkeepingTypeName>Владелец</accountRegisterBookkeepingTypeName><unitFundCount>6000</unitFundCount><unitFundCountName>Шесть тысяч</unitFundCountName><swapForUnitFund>159</swapForUnitFund><unitFundsCost>0</unitFundsCost><unitFundsCostName /><accountInUnitFundsRegistry>false</accountInUnitFundsRegistry><accountInChangeFundExists>true</accountInChangeFundExists><accountToUnitFundRegistry>false</accountToUnitFundRegistry><requestWorksheet>false</requestWorksheet><applicantIndividual><accountType>Лицевой счет владельца</accountType><lastname /><firstname /><patronymic /><citizenship>Россия</citizenship><documentTypeName>Паспорт РФ</documentTypeName><docSeries /><docNo /><docIssuedBy /><accountNo /><inn /><excerptReceptionWayName>В месте подачи заявки</excerptReceptionWayName><vipClient>false</vipClient></applicantIndividual><applicantLegalPerson><accountTypeName>Лицевой счет владельца</accountTypeName><fullName>Организация_'+ i +'</fullName><shortName>ОРГ_'+ i +'</shortName><docName>Документ юр. лица '+ i +'</docName><regNo>РЕГ Номер_'+ i +'</regNo><regDate>2013-08-01 00:00:00.0 MSK</regDate><regBy>МИНЮст</regBy><regNoOld /><regByOld /><inn>1234567890</inn><excerptReceptionWayName>Письмом</excerptReceptionWayName><accountNo /><exchangeAccountNo /><vipClient>'+ b +'</vipClient></applicantLegalPerson><representerIndividual><individualKindName>Уполномоченный представитель (по доверенности)</individualKindName><lastname>ФПредставитель_'+ i +'</lastname><firstname>ИПредставитель_'+ i +'</firstname><patronymic>ОПредставитель_'+ i +'</patronymic><birthday>1968-11-02 00:00:00.0 MSK</birthday><documentTypeName>Военный билет</documentTypeName><docSeries>1544</docSeries><docNo>32178</docNo><docIssuedBy>ВМФ РФ</docIssuedBy><docDate>1986-11-08 00:00:00.0 MSK</docDate><mandateNo>999666333</mandateNo><mandateDate>2013-08-06 00:00:00.0 MSK</mandateDate><address><zip>426000</zip><country>Россия</country><area /><district /><city>Ижевск</city><street /><homeNo>99</homeNo><flatNo /></address><guardianDocAttr><docName /><docNo /><docIssuedBy /></guardianDocAttr></representerIndividual><representativeLegalPerson><fullName /><shortName /><country /><docName /><regNo /><regBy /><representativeLegalPersonInfo><post /><lastname /><firstname /><patronymic /><citizenship>Россия</citizenship><documentTypeName>Паспорт РФ</documentTypeName><docSeries /><docNo /><docIssuedBy /><phone><countryCode /><cityCode /><phoneNo /></phone><faxNo /><email /></representativeLegalPersonInfo><addressFact><zip /><country /><area /><district /><city /><street /><homeNo /><flatNo /></addressFact><addressPost><zip /><country /><area /><district /><city /><street /><homeNo /><flatNo /><match>false</match></addressPost></representativeLegalPerson><bankData><code>04000090201</code><name>СБ</name><location>РФ</location><accountCorr>20165484865321546877</accountCorr><settlementAccount>12345687946513201564</settlementAccount><accountNo>96322101564874654611</accountNo><payee>Получатель_'+ i +'</payee><inn>999554646123</inn></bankData><applicantAddress><addressReg><zip>426000</zip><country>Россия</country><area /><district /><city>Москва</city><street /><homeNo>12</homeNo><flatNo /></addressReg><addressPost><zip>426000</zip><country>Россия</country><area /><district /><city>Москва</city><street /><homeNo>12</homeNo><flatNo /><match>true</match></addressPost><deliveryWayName /><phone1 /><phone2 /><fax /><email /></applicantAddress></com.epam.gzam.apnt.model.ownable.Application>'

	s = "INSERT INTO GZAM_APNT_TEST_COMPANY.dbo.business_applications ([id],[lastUpdated],[timeStamp],[acceptDate],[agentName],[applicantLastName],[applicationTypeName],[comment],[docList],[fundName],[originalStatusName],[sdStatus],[xmldata],[lastUpdatedBy_id],[owner_id]) VALUES (0x00000000000000000000000000001"+ i +", SYSUTCDATETIME(), SYSUTCDATETIME(), SYSUTCDATETIME(), NULL, 'Клиент_"+ i+ "', 'Заявка на обмен', "+ comment +", NULL, '"+fond[i % fond.length]+"', NULL, NULL, '"+ xml + "', 0x9120C2B19F60406FB47A0796AE3D0B1E, 0x9120C2B19F60406FB47A0796AE3D0B1E);";
    console.log(s + '\n');
    
    s = "INSERT INTO GZAM_APNT_TEST_COMPANY.dbo.core_HistoryItems ([id],[actionTime],[message],[result],[source],[actionType],[itemId],[userAddress],[userName]) VALUES (1"+ i +", GETUTCDATE(), '', 'SUCCESS', 'NULL', 'OBJECT_CREATE', CONVERT(varbinary, '0x00000000000000000000000000001"+ i +"', 1), '10.27.11.104', 'oper1');";
	console.log(s + '\n');
}