"use client";

import Image from "next/image";
import clsx from "clsx";
import { useRouter } from "next/navigation";

export default function PersonalDataProcessing() {
	const router = useRouter();

	return (
		<div className={"md:h-auto md:overflow-y-auto h-screen overflow-y-hidden flex flex-col"}>
			<div
				className={
					"bg-slate-50 w-full flex xl:flex-col justify-between gap-10 p-10 items-start xl:items-center xl:px-0 xl:gap-7 md:h-auto md:overflow-y-auto h-full overflow-y-hidden"
				}>
				<Image width={"55"} height={"70"} src={"/img/logo.svg"} alt={"Лого"} />
				<section
					className={
						"p-10 bg-white rounded-2xl w-full flex flex-col gap-8 items-stretch xl:bg-gradient-to-b xl:from-slate-50 xl:to-white xl:overflow-y-auto xl:pt-0 md:h-auto md:overflow-y-auto h-full overflow-y-hidden"
					}>
					<header className={"w-full items-center justify-between flex xl:flex-col-reverse gap-10 xl:gap-7"}>
						<button
							className={
								"w-[180px] h-11 bg-black bg-opacity-5 rounded-lg flex items-center gap-2 justify-center"
							}
							onClick={() => router.back()}>
							<Image width={"20"} height={"20"} src={"/img/icons/arrow-left.svg"} alt={"Стрелка влево"} />
							<span className={"text-center text-zinc-900 text-lg font-semibold  leading-7"}>Назад</span>
						</button>
						<h3 className={"text-center text-zinc-900 text-2xl font-semibold  leading-9 xl:text-lg"}>
							Правила предоставления услуг
						</h3>
					</header>
					<main
						className={
							"flex flex-col gap-8 items-stretch w-full text-black text-opacity-40 text-sm font-normal leading-tight xl:gap-7 overflow-y-auto"
						}>
						<p>
							1. ТЕРМИНЫ И ОПРЕДЕЛЕНИЯ. <br /> 1.1. В Политике используются термины (группы терминов) с
							учетом следующих определений:
						</p>
						<p>
							1.1.1. Компания (Компания Car Wash Priority) – Индивидуальный предприниматель Оводкова Ольга
							Николаевна, именуемое в дальнейшем «Компания», юридическое лицо по законодательству
							Российской Федерации, зарегистрированное в Едином государственном реестре юридических лиц за
							основным государственным регистрационным номером 319366800039790, в лице директора Оводковой
							Ольги Николаевны;
						</p>
						<p>
							1.1.2. Персональные данные – любая информация, относящаяся прямо или косвенно к
							определенному или определяемому физическому лицу (субъекту персональных данных).
						</p>
						<p>
							1.1.3. Общие условия обслуживания Car Wash Priority (Условия Car Wash Priority) – публичный
							договор-оферта, заключаемый Компанией с Клиентом от имени и в интересах Исполнителей
							посредством акцепта и регламентируемый, в том числе, нормами гражданского законодательства
							Российской Федерации о договоре присоединения (статья 428 Гражданского кодекса Российский
							Федерации) и публичной оферте (статья 437 Гражданского кодекса Российской Федерации),
							выполненный в виде электронного документа, размещенного на Сайте Car Wash Priority и в
							Мобильном приложении Car Wash Priority и обращенный к неопределенному кругу лиц.
						</p>
						<p>
							1.1.4. МСО ECO (мойки самообслуживания ECO) – моечные пункты Исполнителей, обозначенные
							товарными знаками ECO, и предназначенные для механизированной (автоматической,
							полуавтоматической) или ручной мойки легковых автомобилей, в том числе с использованием
							оборудования самообслуживания, а также оказания иных услуг, выполнения работ и продаже
							товаров.
						</p>
						<p>
							1.1.5. Партнерские мойки – моечные пункты Исполнителей, не обозначенные товарными знаками
							ECO, и предназначенные для механизированной (автоматической, полуавтоматической) или ручной
							мойки легковых автомобилей, в том числе с использованием оборудования самообслуживания, а
							также оказания иных услуг, выполнения работ и продаже товаров.
						</p>
						<p>
							1.1.6. Клиенты (Клиент) – физические лица (частные клиенты), совершившие действия по
							присоединению (совершивший акцепт) к Общим условиям обслуживания Car Wash Priority.
						</p>
						<p>
							1.1.7. Мобильное приложение Car Wash Priority – программа «Car Wash Priority» для
							портативных электронно-вычислительных машин и мобильных технических устройств (смартфонов,
							планшетов или других портативных устройств), работающих под управлением мобильных
							операционных систем iOS, Android.
						</p>
						<p>
							1.1.8. Сайт Car Wash Priority – совокупность программ для электронных вычислительных машин и
							иной информации, содержащейся в информационной системе, доступ к которой обеспечивается
							посредством информационно-телекоммуникационной сети «Интернет» по доменному имени
							carwashpriority.ru (https://carwashpriority.ru/), включая любые его поддомены и разделы.
						</p>
						<p>
							1.1.9. Обработка персональных данных – любое действие (операция) или совокупность действий
							(операций), совершаемых с использованием средств автоматизации или без использования таких
							средств, с персональными данными, включая сбор, запись, систематизацию, накопление,
							хранение, уточнение (обновление, изменение), извлечение, использование, передачу
							(распространение, предоставление, доступ), обезличивание, блокирование, удаление,
							уничтожение персональных данных.
						</p>
						<p>
							1.1.10. Автоматизированная обработка персональных данных – обработка персональных данных с
							помощью средств вычислительной техники.
						</p>
						<p>
							1.1.11. Предоставление персональных данных – действия, направленные на раскрытие
							персональных данных определенному лицу или определенному кругу лиц.
						</p>
						<p>
							1.1.12. Блокирование персональных данных – временное прекращение обработки персональных
							данных (за исключением случаев, если обработка необходима для уточнения персональных
							данных).
						</p>
						<p>
							1.1.13. Уничтожение персональных данных — действия, в результате которых становится
							невозможным восстановить содержание персональных данных в информационной системе
							персональных данных и (или) в результате которых уничтожаются материальные носители
							персональных данных.
						</p>
						<p>
							1.1.14. Информационная система персональных данных – совокупность содержащихся в базах
							данных персональных данных и обеспечивающих их обработку информационных технологий и
							технических средств.
						</p>
						<p>
							1.1.15. Идентификатор устройства – уникальные данные, позволяющие идентифицировать
							устройство Клиента, на котором установлено мобильное приложение Car Wash Priority,
							предоставляемые самим устройством или рассчитываемые мобильным приложением Car Wash
							Priority.
						</p>
						<p>
							1.2. Термины, определения которых не приведены в Политики, применяются в соответствие с
							определениями, изложенными в Общих условиях обслуживания Car Wash Priority.
						</p>
						<p>
							2. ОСНОВНЫЕ ПОЛОЖЕНИЯ.
							<br />
							2.1. Политика является неотъемлемой частью Общих условий обслуживания Car Wash Priority.
						</p>
						<p>2.2. Персональные данные Клиентов хранятся в Российской Федерации.</p>
						<p>
							2.3. Установка Клиентом на свое устройство мобильного приложения Car Wash Priority либо
							использование мобильного приложения Car Wash Priority любым другим способом (в том числе как
							это предусмотрено в Общих условиях обслуживания Car Wash Priority) означает согласие Клиента
							с условиями Политики, в том числе согласие Клиента на обработку Компанией его персональных
							данных, в случаях, когда положениями действующего законодательства требуется такое согласие.
						</p>
						<p>2.4. В ходе обработки персональных данных Клиент имеет право:</p>
						<p>
							2.4.1. На получение информации, касающейся обработки его персональных данных, в том числе
							содержащей: — подтверждение факта обработки персональных данных; — правовые основания и цели
							обработки персональных данных; — цели и применяемые способы обработки персональных данных; —
							обрабатываемые персональные данные, относящиеся к соответствующему субъекту персональных
							данных, источник их получения, если иной порядок представления таких данных не предусмотрен
							действующим законодательством; — сроки обработки персональных данных, в том числе сроки их
							хранения; — наименование или фамилию, имя, отчество и адрес лица, осуществляющего обработку
							персональных данных по поручению Компании, если обработка поручена или будет поручена такому
							лицу; — иные сведения, предусмотренные действующим законодательством.
						</p>
						<p>
							2.4.2. Требовать от Компании уточнения его персональных данных, их блокирования или
							уничтожения в случае, если персональные данные являются неполными, устаревшими, неточными,
							незаконно полученными или не являются необходимыми для заявленной цели обработки, а также
							принимать предусмотренные законом меры по защите своих прав.
						</p>
						<p>
							2.4.3. Обжаловать действия или бездействие Компании в уполномоченный орган по защите прав
							субъектов персональных данных или в судебном порядке, если Клиент полагает, что Компания
							осуществляет обработку его персональных данных с нарушением требований действующего
							законодательства или иным образом нарушает его права и свободы.
						</p>
						<p>
							2.4.4. На защиту своих прав и законных интересов, в том числе на возмещение убытков и (или)
							компенсацию морального вреда в судебном порядке.
						</p>
						<p>2.5. В ходе обработки персональных данных Компания обязана:</p>
						<p>
							2.5.1. Предоставить Клиенту по его просьбе следующую информацию: — подтверждение факта
							обработки персональных данных; — правовые основания и цели обработки персональных данных; —
							цели и применяемые способы обработки персональных данных; — свое наименование и место
							нахождения, сведения о лицах (за исключением работников), которые имеют доступ к
							персональным данным или которым могут быть раскрыты персональные данные на основании
							договора или на основании действующего законодательства; — обрабатываемые персональные
							данные Клиента, источник их получения, если иной порядок представления таких данных не
							предусмотрен действующим законодательством; — сроки обработки персональных данных, в том
							числе сроки их хранения; — иные сведения, предусмотренные действующим законодательством.
						</p>
						<p>
							2.5.2. Обеспечить принятие мер по предотвращению несанкционированного доступа к персональным
							данным Клиента.
						</p>
						<p>
							2.5.3. Опубликовать или иным образом обеспечить неограниченный доступ к документу,
							определяющему политику в отношении обработки персональных данных, а также к сведениям о
							реализуемых требованиях к защите персональных данных.
						</p>
						<p>2.6. Целями сбора и обработки персональных данных Клиентов являются:</p>
						<p>
							2.6.1. Заключение публичного договора-оферта (Общих условий обслуживания Car Wash Priority).
						</p>
						<p>
							2.6.2. Обеспечение продажи товаров, выполнения работ и (или) оказания услуг МСО ECO и
							Партнерских мойках, и прочее исполнение Компанией, МСО ECO и Партнерскими мойками Общих
							условий обслуживания Car Wash Priority.
						</p>
						<p>2.6.3. Исполнение Компанией Политики.</p>
						<p>2.6.4. Исполнение Компанией и ее партнерами Бонусной программы Car Wash Priority.</p>
						<p>
							2.7. Персональные данные Клиентов хранятся на электронных носителях и обрабатываются с
							использованием автоматизированных систем обработки персональных данных.
						</p>
						<p>2.8. Компания собирает и обрабатывает следующие персональные данные Клиентов:</p>
						<p>2.8.1. Номер мобильного (сотового) телефона;</p>
						<p>2.8.2. Адрес электронной почты (e-mail).</p>
						<p>
							2.9. Уничтожение персональных данных Клиента осуществляется без возможности их последующего
							восстановления.
						</p>
						<p>
							2.10. Компания при обработке персональных данных обеспечивает принятие необходимых правовых,
							организационных и технических мер для защиты персональных данных от неправомерного или
							случайного доступа к ним, уничтожения, изменения, блокирования, копирования, предоставления,
							распространения и иных неправомерных действий в отношении персональных данных.
						</p>
						<p>2.11. Обеспечение безопасности персональных данных достигается, в частности:</p>
						<p>
							2.11.1. Назначением ответственных за организацию обработки персональных данных и обеспечение
							безопасности персональных данных.
						</p>
						<p>
							2.11.2. Изданием локальных нормативных актов по вопросам обработки и защиты персональных
							данных, направленных на предотвращение и выявление нарушений законодательства Российской
							Федерации, устранение последствий таких нарушений
						</p>
						<p>
							2.11.3. Определением угроз безопасности персональных данных при их обработке в
							информационных системах персональных данных.
						</p>
						<p>
							2.11.4. Применением организационных и технических мер по обеспечению безопасности
							персональных данных при их обработке в информационных системах персональных данных,
							необходимых для выполнения требований к защите персональных данных, исполнение которых
							обеспечивает установленные Правительством Российской Федерации уровни защищенности
							персональных данных;
						</p>
						<p>
							2.11.5. Разработкой системы защиты персональных данных при их обработке в информационных
							системах персональных данных и установлением правил доступа к персональным данным.
						</p>
						<p>
							2.11.6. Размещением персональных данных в границах охраняемой территории, а также
							организацией физической защиты носителей персональных данных, мест и средств их обработки.
						</p>
						<p>
							2.11.7. Учетом материальных носителей и хранилищ информационных систем персональных данных и
							контролем за их обращением в целях исключения утраты, хищения, подмены, несанкционированного
							копирования или уничтожения.
						</p>
						<p>
							2.11.8. Определением перечня должностей, при замещении которых осуществляется обработка
							персональных данных.
						</p>
						<p>
							2.11.9. Обнаружением фактов несанкционированного доступа к персональным данным и принятием
							соответствующих мер.
						</p>
						<p>
							2.11.10. Восстановлением персональных данных, модифицированных или уничтоженных вследствие
							несанкционированного доступа к ним.
						</p>
						<p>
							2.11.11. Организацией доступа в помещения, используемые для обработки персональных данных
							и/или хранения их материальных носителей.
						</p>
						<p>
							2.11.12. Организацией доступа к информационным системам персональных данных. Установлением
							правил доступа к персональным данным, обрабатываемым в информационной системе персональных
							данных, а также обеспечением регистрации и учета всех действий, совершаемых с персональными
							данными в информационной системе персональных данных.
						</p>
						<p>
							2.11.13. Контролем за соответствием принимаемых мер по обеспечению безопасности персональных
							данных законодательству Российской Федерации о персональных данных и принятым в его
							исполнение локальным нормативным актам.
						</p>
						<p>
							2.12. Клиент вправе требовать от Компании уточнения (актуализации) его персональных данных,
							их блокирования или уничтожения в случае, если персональные данные являются неполными,
							устаревшими, неточными, незаконно полученными или не являются необходимыми для заявленной
							цели обработки, а также отозвать свое согласие на обработку персональных данных путем
							направления Компании соответствующего запроса и (или) требования в письменной форме заказным
							почтовым отправлением с уведомлением о вручении либо его личного предоставления по месту
							нахождения Компании. Указанный запрос/требование должен содержать номер основного документа,
							удостоверяющего личность Клиента или его представителя, сведения о дате выдачи указанного
							документа и выдавшем его органе, адрес места жительства Клиента, сведения, подтверждающие
							участие Клиента в отношениях с Компанией (номер карты лояльности), либо сведения, иным
							образом подтверждающие факт обработки персональных данных, требование об уточнении,
							блокировании или уничтожении персональных данных Клиента либо уведомление об отзыве согласия
							на обработку персональных данных, подпись Клиента или его представителя. Компания обязана
							дать мотивированный ответ по существу запроса/ требования Клиента в течение 30 календарных
							дней со дня его получения.
						</p>
						<p>
							3. ГЕОЛОКАЦИЯ.
							<br />
							3.1. Компания получает посредством мобильного приложения Car Wash Priority данные о месте
							нахождения Клиента (геолокационные данные). Геолокационные данные передаются Компании только
							во время использования мобильного приложения Car Wash Priority. Клиент по своему усмотрению
							может запретить передачу геолокационных данных путем изменения соответствующих настроек
							своего мобильного устройства, однако это может повлечь невозможность использования
							мобильного приложения Car Wash Priority.
						</p>
						<p>
							4. ИСПОЛЬЗОВАНИЕ БАНКОВСКИХ КАРТ.
							<br />
						</p>
						<p>
							4.1. Для получения возможности оплаты безналичным платежом с использованием банковских карт
							Клиент может осуществить привязку банковской карты к своему личному кабинету в мобильном
							приложении Car Wash Priority. Привязка банковской карты осуществляется Клиентом
							самостоятельно в мобильном приложении Car Wash Priority путем указания следующих данных:
						</p>
						<p>4.1.1. Номер банковской карты.</p>
						<p>4.1.2. Срок действия банковской карты.</p>
						<p>4.1.3. Фамилия и имя держателя банковской карты.</p>
						<p>4.1.4. Защитный код банковской карты.</p>
						<p>
							4.2. Оплата безналичным платежом с использованием банковских карт осуществляется в
							соответствии с правилами международных платежных систем на принципах соблюдения
							конфиденциальности и безопасности совершения платежа. Безопасность предоставляемых Клиентом
							данных обеспечивается соответствием процедур требованиям стандарта безопасности данных
							индустрии платежных карт (Payment Card Industry Data Security Standard) и никто, включая
							Компанию, не может их получить. Ввод данных банковской карты осуществляется на защищенной
							платежной странице банка-эквайера, обеспечивающего возможность безналичной оплаты услуг.
						</p>
						<p>
							5. ПРЕДОСТАВЛЕНИЕ ПЕРСОНАЛЬНЫХ ДАННЫХ ТРЕТЬИМ ЛИЦАМ.
							<br />
							5.1. Клиент настоящим дает согласие, а Компания получает право передавать защищенными
							способами персональные данные Клиента третьим лицам для одной или нескольких из следующих
							целей:
						</p>
						<p>5.1.1. Исполнение Компанией Политики.</p>
						<p>5.1.2. Исполнение Компанией и ее партнерами Бонусной программы Car Wash Priority.</p>
						<p>
							5.1.3. Обеспечение продажи товаров, выполнения работ и (или) оказания услуг МСО ECO и
							Партнерских мойках, и прочее исполнение Компанией Общих условий обслуживания Car Wash
							Priority.
						</p>
						<p>5.1.4. Соблюдение законодательства Российской Федерации о персональных данных.</p>
						<p>
							5.2. Третьими лицами, которым Компания вправе передавать персональные данные Клиентов
							защищенными способами, являются:
						</p>
						<p>5.2.1. Владельцы МСО ECO и Партнерские мойки.</p>
						<p>
							5.2.2. Партнеры Компании, предоставляющие Компании услуги по автоматизированной обработке
							персональных данных и (или) управлению информационной системой персональных данных и (или)
							хранению баз данных Компании, содержащих персональные данные Клиентов.
						</p>
						<p>
							5.2.3. Партнеры Компании, товары, работы и (или) услуги которых могут быть приобретены со
							скидкой с использованием Бонусных баллов ECO в соответствие с условиями Бонусной программы
							Car Wash Priority.
						</p>
						<p>
							5.3. Договорами, заключенными между Компанией и третьими лицами, указанными в пункте 5.2
							Политики, определяется перечень действий (операций) с персональными данными Клиентов,
							которые будут совершаться третьими лицами, цели обработки, устанавливается обязанность
							такого лица соблюдать конфиденциальность персональных данных и обеспечивать безопасность
							персональных данных при их обработке, а также указываются требования к защите обрабатываемых
							персональных данных.
						</p>
						<p>
							5.4. Третьи лица, осуществляющие обработку персональных данных в соответствие с Политикой,
							не обязаны получать согласие Клиентов (субъектов персональных данных) на обработку их
							персональных данных.
						</p>
						<p>
							5.5. В случае, если Компания передает персональные данные Клиентов третьим лицам,
							ответственность перед Клиентами (субъектами персональных данных) за действия третьих лиц
							несет Компания, а указанные лица – несут ответственность перед Компанией.
						</p>
						<p>
							6. РЕКЛАМА В МОБИЛЬНОМ ПРИЛОЖЕНИИ.
							<br />
							6.1. Клиент настоящим дает согласие, а Компания получает право размещать в мобильном
							приложении Car Wash Priority любыми способами и без каких-либо ограничений, кроме
							установленных законодательством, рекламную информацию третьих лиц и рекламировать товары,
							работы и (или) услуги третьих лиц, в том числе не связанные с деятельностью МСО ECO и
							Партнерских моек.
						</p>
						<p>
							6.2. Компания не вправе раскрывать и передавать персональные данные Клиентов рекламодателям,
							кроме владельцев МСО ECO и Партнерских моек на основании заключенных Компанией с
							Исполнителями договоров.
						</p>
						<p>
							7. ЗАКЛЮЧИТЕЛЬНЫЕ ПОЛОЖЕНИЯ.
							<br />
							7.1. Политика вступает в силу с момента ее размещения на сайте Car Wash Priority в сети
							Интернет по адресу публикации, указанному в Политике, и действует до момента ее отзыва
							Компанией.
						</p>
						<p>
							7.2. Политика также может размещаться в ознакомительных целях в мобильном приложении Car
							Wash Priority, при этом в случае противоречий между редакциями Политики, размещенными на
							сайте Car Wash Priority и в мобильном приложении Car Wash Priority, применению во всех
							случаях подлежит редакция Политики, размещенной на сайте Car Wash Priority.
						</p>
						<p>
							7.3. Компания имеет право в любое время без уведомления Участников вносить с любой
							периодичностью и в любом объеме изменения в Политику, и опубликовывать (размещать) новые
							редакции Политики в порядке, предусмотренном пунктом 5.1 Политики. При внесении изменений в
							Политике указывается дата актуальной редакции.
						</p>
						<p>7.4. Риск неознакомления с актуальной (действующей) редакцией Политики несет Клиент.</p>
						<p>
							7.5. Пользование мобильным приложением Car Wash Priority (как то: установка (инсталляция)
							мобильного приложения Car Wash Priority, заполнение персональных данных в мобильном
							приложении Car Wash Priority, прохождение процедуры регистрации в мобильном приложении Car
							Wash Priority, проставление отметки (галочки) в специальном поле (чек-боксе) при регистрации
							в мобильном приложении Car Wash Priority, прохождение процедуры авторизации в мобильном
							приложении Car Wash Priority, заказ и (или) оплата товаров, работ и (или) услуг посредством
							мобильного приложения Car Wash Priority, считывание мобильным устройством через мобильное
							приложение Car Wash Priority QR-кода, размещенного на моечных постах МСО ECO или Партнерских
							моек) считается безусловным согласием Участника с действующей редакцией Политики, в том
							числе после ее публикации в новой редакции.
						</p>
						<p>
							7.6. В случае если Компанией были внесены какие-либо изменения в Политику, с которыми Клиент
							не согласен, он обязан прекратить использование сайта Car Wash Priority и мобильного
							приложения Car Wash Priority.
						</p>
						<p>7.7. Срок обработки персональных данных является неограниченным.</p>
						<p>
							7.8. Отзыв согласия на обработку персональных данных, предложения и вопросы по поводу
							Политики подлежат направлению Компании по почтовому адресу: 396310 Воронежская обл., с.
							Новая Усмань, ул Ленина, д. 272, оф 208 . При этом с момента получения Компанией такого
							отзыва Клиент прекращает свое участие в Общих условиях обслуживания Car Wash Priority и
							Бонусной программе Car Wash Priority, что влечет блокировку счетов, аннулирование Бонусных
							баллов Car Wash Priority и прекращение любых обязательств Компании перед Клиентом.
						</p>
					</main>
				</section>
			</div>
			<footer
				className={clsx(
					"px-10 pb-3 flex md:flex-col-reverse items-center justify-between",
					"max-[800px]:flex-col-reverse max-[800px]:gap-4",
				)}>
				<p>© Car Wash Priority {new Date().getFullYear()}</p>
				<div className="flex md:flex-col items-center gap-12 max-[800px]:flex-col max-[800px]:gap-2">
					<a className={"hover:opacity-75"} href="mailto:info@carwashpriority.ru">
						Поддержка
					</a>
					<a className={"hover:opacity-75"} href="/political-policy">
						Политика конфиденциальности
					</a>
					<a className={"hover:opacity-75"} href="/service-rules">
						Правила предоставления услуг
					</a>
				</div>
			</footer>
		</div>
	);
}
