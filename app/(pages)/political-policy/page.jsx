"use client";

import Image from "next/image";
import clsx from "clsx";
import { useRouter } from "next/navigation";

export default function PoliticalPolicy() {
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
							Политика конфиденциальности
						</h3>
					</header>
					<main
						className={
							"flex flex-col gap-8 items-stretch w-full text-black text-opacity-40 text-sm font-normal leading-tight xl:gap-7 overflow-y-auto"
						}>
						<p>
							1. ТЕРМИНЫ И ОПРЕДЕЛЕНИЯ. <br /> 1.1. В Соглашении используются термины (группы терминов) с
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
							1.1.2. Общие условия обслуживания Car Wash Priority (Условия Car Wash Priority) – публичный
							договор-оферта, заключаемый Компанией с Клиентом от имени и в интересах Исполнителей
							посредством акцепта и регламентируемый, в том числе, нормами гражданского законодательства
							Российской Федерации о договоре присоединения (статья 428 Гражданского кодекса Российский
							Федерации) и публичной оферте (статья 437 Гражданского кодекса Российской Федерации),
							выполненный в виде электронного документа, размещенного на Сайте Car Wash Priority и в
							Мобильном приложении Car Wash Priority и обращенный к неопределенному кругу лиц.
						</p>
						<p>
							1.1.3. МСО ECO (мойки самообслуживания ECO) – моечные пункты Исполнителей, обозначенные
							товарными знаками ECO, и предназначенные для механизированной (автоматической,
							полуавтоматической) либо ручной мойки легковых автомобилей, в том числе с использованием
							оборудования самообслуживания, а также оказания иных услуг, выполнения работ и продаже
							товаров.
						</p>
						<p>
							1.1.4. Партнерские мойки – моечные пункты Исполнителей, не обозначенные товарными знаками
							ECO, и предназначенные для механизированной (автоматической, полуавтоматической) либо ручной
							мойки легковых автомобилей, в том числе с использованием оборудования самообслуживания, а
							также оказания иных услуг, выполнения работ и продаже товаров.
						</p>
						<p>
							1.1.5. Клиенты (Клиент) – физические лица (частные клиенты), совершившие действия по
							присоединению (совершивший акцепт) к Общим условиям обслуживания Car Wash Priority.
						</p>
						<p>
							1.1.6. Мобильное приложение Car Wash Priority – программа «Car Wash Priority» для
							портативных электронно-вычислительных машин и мобильных технических устройств (смартфонов,
							планшетов или других устройств), работающих под управлением мобильных операционных систем
							iOS, Android.
						</p>
						<p>
							1.1.7. Сайт Car Wash Priority– совокупность программ для электронных вычислительных машин и
							иной информации, содержащейся в информационной системе, доступ к которой обеспечивается
							посредством информационно-телекоммуникационной сети «Интернет» по доменному имени
							carwashpriority.ru (https://carwashpriority.ru/), включая любые его поддомены и разделы.
						</p>
						<p>
							1.2. Термины, определения которых не приведены в Программе, применяются в соответствие с
							определениями, изложенными в Общих условиях обслуживания Car Wash Priority.
						</p>
						<p>
							2. ОСНОВНЫЕ ПОЛОЖЕНИЯ.
							<br />
							2.1. Соглашение является неотъемлемой частью Общих условий обслуживания Car Wash Priority.
						</p>
						<p>2.2. Условия Соглашения действуют для мобильного приложения Car Wash Priority.</p>
						<p>2.3. Соглашение действует в Российской Федерации.</p>
						<p>
							2.4. Физическое лицо, желающее стать Клиентом Компании, то есть присоединиться (совершить
							акцепт) к Общим условиям обслуживания Car Wash Priority и получить возможность приобретения
							товаров, работ и (или) услуги МСО ECO и Партнерских моек, принадлежащих Исполнителям,
							должно:
						</p>
						<p>
							2.4.1. Установить Мобильное приложение Car Wash Priority на свою электронно-вычислительную
							машину или мобильное техническое устройство (смартфон, планшет или другое портативное
							устройство).
						</p>
						<p>
							2.4.2. Пройти полностью процедуру регистрации в Мобильном приложении Car Wash Priority,
							подтвердив согласие с Общими условиями обслуживания Car Wash Priority и приложениями к ним,
							в том числе Соглашением.
						</p>
						<p>
							2.4.3. Использовать Мобильное приложение Car Wash Priority и выполнять принятые на себя
							обязательства в строгом соответствии с Общими условиями обслуживания Car Wash Priority и
							приложений к ним.
						</p>
						<p>
							2.5. Клиент проинформирован и осознает, то Компания Car Wash Priority не осуществляет
							дистанционную продажу товаров, работ и (или) услуг, описание которых указано на Сайте, в
							Мобильном приложении. Компания Car Wash Priority обеспечивает возможность ознакомления
							Клиента с описанием услуг на Сайте и в Мобильном приложении, а также предоставляет Клиенту
							информацию о МСО ECO и Партнерских моек, а также возможность заказа услуг МСО ECO и
							Партнерских моек посредством использования Мобильного приложения ECO.
						</p>
						<p>
							2.6. Отношения Клиентов с МСО ECO и Партнерскими мойками регулируются в соответствие с
							Общими условиями обслуживания Car Wash Priority и приложениями к ним, а также правилами
							оказания (получения) услуг, размещенными непосредственно на МСО ECO и Партнерских моек.
						</p>
						<p>
							2.7. Компания Car Wash Priority не несет ответственность перед Клиентами за неисполнение
							либо ненадлежащее исполнение обязательств Исполнителями.
						</p>
						<p>
							3. ОГРАНИЧЕНИЕ ОТВЕТСТВЕННОСТИ КОМПАНИИ Car Wash Priority.
							<br />
							3.1. Компания Car Wash Priority предлагает к скачиванию Мобильное приложение Car Wash
							Priority как есть (as is), то есть что за проблемы, возникающие в процессе установки,
							обновления, поддержки и эксплуатации Мобильного приложения Car Wash Priority (в т. ч.
							проблемы совместимости с другими программными продуктами (пакетами, драйверами и др.),
							несоответствия результатов использования Мобильного приложения Car Wash Priority ожиданиям
							Клиента Компания Car Wash Priority ответственности не несет.
						</p>
						<p>
							3.2. Клиент осознает, что несет личную ответственность за возможные проблемы, связанные с
							несовместимостью и конфликтами Мобильного приложения Car Wash Priority , с другим
							программным обеспечением, которое использует Клиент.
						</p>
						<p>
							3.3. Компания Car Wash Priority не гарантирует, что Мобильное приложение Car Wash Priority:
							— соответствует или будет соответствовать требованиям Клиента; — будет предоставляться
							непрерывно, быстро, надежно и без ошибок; — будет отражать начисление Бонусных баллов Car
							Wash Priority по всем операциям Клиента; — услуги и информация, полученные с использованием
							Мобильного приложения Car Wash Priority, будет соответствовать ожиданиям Клиента.
						</p>
						<p>
							3.4. Компания Car Wash Priority не отвечает, не возмещает и не несет ответственности за
							любые убытки, включая упущенную выгоду, моральный и иной вред, причиненные Клиенту или
							третьим лицам в результате использования ими Мобильного приложения Car Wash Priority или в
							связи с функционированием Мобильного приложения Car Wash Priority, в том числе, за убытки,
							связанные с принятием каких-либо решений и действий, основанных на информации, размещенной в
							Мобильном приложении Car Wash Priority.
						</p>
						<p>
							3.5. Компания Car Wash Priority не несет ответственности по сделкам между Клиентом и
							Исполнителями, заключенным в связи использованием Мобильного приложения Car Wash Priority.
						</p>
						<p>
							3.6. Компания Car Wash Priority не несет ответственность за любую информацию, материалы,
							размещенные на МСО ECO и Партнерских моек.
						</p>
						<p>
							3.7. Компания Car Wash Priority не несет ответственность за совершенные действия в Мобильном
							приложении Car Wash Priority Клиента третьими лицами, которые получили доступ к учетным
							данным Клиента в результате неправомерных действий.
						</p>
						<p>
							4. УСТАНОВКА МОБИЛЬНОГО ПРИЛОЖЕНИЯ Car Wash Priority.
							<br />
							4.1. Установка мобильного приложения Car Wash Priority возможна на портативные
							электронно-вычислительные машины и мобильные технические устройства (смартфоны, планшеты или
							другие портативные устройства), работающие под управлением мобильных операционных систем
							iOS, Android.
						</p>
						<p>
							4.2. Установка мобильного приложения Car Wash Priority должность производится исключительно
							из официальных сервисов установки мобильных приложений для операционных систем iOS, Android
							— App Store, Google Play Market, App Gallery, RuStore.
						</p>
						<p>
							4.3. Технические требования к устройству, на которое устанавливается Мобильное приложение
							Car Wash Priority, и условия скачивания (установки) Мобильного приложения Car Wash Priority,
							размещаются непосредственно в сервисах, указанных в пункте 4.2 Соглашения.
						</p>
						<p>4.4. Скачивание Мобильного приложения Car Wash Priority доступно без оплаты (бесплатно).</p>
						<p>
							5. РЕГИСТРАЦИЯ КЛИЕНТА.
							<br />
							5.1. Для регистрации в Мобильном приложении Car Wash Priority (то есть создания учетной
							записи в Мобильном приложении Car Wash Priority) Клиенту следует произвести следующие
							действия:
						</p>
						<p>
							5.1.1. Ввести номер телефона в федеральном формате (+7 ХХХ ХХХ ХХ ХХ); указанный Клиентом
							при регистрации номер телефона будет использоваться в качестве логина учетной записи.
						</p>
						<p>
							5.1.2. Ввести код, предоставляемый Клиенту в виде SMS-сообщения на указанный им номер
							телефона.
						</p>
						<p>
							5.1.3. По желанию предоставить Компании адрес электронной почты, введение кода подразумевает
							под собой согласие с политикой конфиденциальности, а также что Клиент согласен на получение
							от Компании рекламных предложений по сетям электросвязи (SMS, push, email и другое).
						</p>
						<p>
							5.2. Регистрация будет считаться завершенной после корректного ввода Клиентом кода,
							полученного им в SMS–сообщении. Данный код является паролем учетной записи Клиента.
						</p>
						<p>
							5.3. Клиент несет ответственность за точность и правильность, полноту и достоверность
							указания своих личных данных при регистрации учетной записи и за последствия, которые могут
							возникнуть у Клиента, в случае некорректного ввода указанных сведений.
						</p>
						<p>
							5.4. Любые действия, совершенные с использованием логина и пароля учетной записи Клиента,
							считаются совершенными соответствующим Клиентом.
						</p>
						<p>
							5.5. Клиент несет ответственность за любую информацию, которая размещается посредством его
							учетной записи.
						</p>
						<p>
							5.6. Клиенту запрещается передавать данные своей учетной записи третьим лицам. В случае
							передачи Клиентом своего логина и (или) пароля третьему лицу, Клиент несет ответственность
							за несанкционированные действия третьего лица, как за свои собственные.
						</p>
						<p>
							5.7. Клиент обязан незамедлительно уведомить Компанию о любом случае несанкционированного
							доступа к учетной записи Клиента, а также о любом случае нарушения безопасности своего
							логина и пароля (утеря, передача данных третьим лицам, другое).
						</p>
						<p>
							5.8. Компания вправе удалить учетную запись Клиента в случае нарушения последним положений
							Соглашения.
						</p>
						<p>
							6. ИСПОЛЬЗОВАНИЕ МОБИЛЬНОГО ПРИЛОЖЕНИЯ Car Wash Priority. <br /> 6.1. Для получения услуг
							МСО ECO или Партнерской мойки с использованием Мобильного приложения Car Wash Priority,
							Клиент должен:
						</p>
						<p>
							6.1.1. Необходимо запустить Мобильное приложение Car Wash Priority на своем устройстве
							(согласно пункта 2.4.1 Соглашения).
						</p>
						<p>
							6.1.2. На главном экране Мобильного приложения Car Wash Priority нажать на кнопку «начать
							мойку».
						</p>
						<p>
							6.1.3. Мобильное приложение Car Wash Priority уведомит Клиента о том, что необходимо
							поднести телефон к QR-коду, расположенному на пульте управления, находящемуся в боксе (на
							моечном посту) МСО ECO или Партнерской мойки или ввести номер поста ручным способом.
						</p>
						<p>
							6.1.4. После сканирование QR-кода или ввода номера поста, приложение отобразить доступный
							баланс Клиента и при необходимости покажет кнопку “Пополнить баланс”.
						</p>
						<p>
							6.1.5. После необходимо указать адрес электронной почты для получения чека и сумму
							пополнения баланса.
						</p>
						<p>6.1.6. Откроется специальное окно пополнения баланса (Юмани).</p>
						<p>
							6.1.7. После пополнения баланса и выбора поста (с помощью сканирования QR-кода или ввода
							номера поста) происходит зачисления денежных средств на пост, на табло отобразится сумма.
						</p>
						<p>6.1.8. Далее можно выбирать программы и осуществлять мойку автомобиля.</p>
						<p>
							7. ОБЯЗАТЕЛЬСТВО КЛИЕНТА ПО ИСПОЛЬЗОВАНИЮ МОБИЛЬНОГО ПРИЛОЖЕНИЯ Car Wash Priority. <br />
							7.1. Клиент обязуется использовать мобильное приложение Car Wash Priority только в законных
							целях и способами, не нарушающими права третьих лиц. Клиент самостоятельно несет
							ответственность перед третьими лицами за свои действия, связанные с использованием
							мобильного приложения Car Wash Priority, в том числе, если такие действия приведут к
							нарушению прав и законных интересов третьих лиц, а также за соблюдение законодательства
							Российской Федерации при использовании мобильного приложения Car Wash Priority.
						</p>
						<p>
							7.2. Компания не несет ответственность за вред, причиненный технике Клиента в случае, если
							это произошло в результате перехода по гипертекстуальным ссылкам, размещенным в Мобильном
							приложении Car Wash Priority.
						</p>
						<p>
							7.3. Компания вправе приостановить либо полностью отказать Клиенту в использовании
							Мобильного приложения Car Wash Priority в случае нарушения последним Соглашения, Общих
							условий обслуживания Car Wash Priority или иных приложений к ним.
						</p>
						<p>
							8. ИЗМЕНЕНИЯ МОБИЛЬНОГО ПРИЛОЖЕНИЯ Car Wash Priority.
							<br />
							8.1. Компания вправе в любое время и в любом объеме не уведомляя своих Клиентов и третьих
							лиц изменять Мобильное приложение Car Wash Priority, в том числе изменять или добавлять в
							его структуру разделы, менять дизайн и совершать прочие действия, направленные на повышение
							функциональности Мобильного приложения Car Wash Priority и (или) приведения его в
							соответствие с Общими условиями обслуживания Car Wash Priority и приложениями к ним.
						</p>
						<p>
							9. ИСКЛЮЧИТЕЛЬНЫЕ ПРАВА.
							<br />
							9.1. Мобильное приложение Car Wash Priority и любые его элементы, а также объекты, доступные
							при помощи Мобильного приложения Car Wash Priority, в том числе элементы дизайна, текст,
							графические изображения, иллюстрации, фотографии, видео и иные охраняемые законом материалы
							являются объектами исключительных прав Компании Car Wash Priority, если иное прямо не
							указано в Мобильном приложении Car Wash Priority.
						</p>
						<p>
							9.2. Никакие элементы Мобильного приложения Car Wash Priority не могут быть использованы
							иным образом без предварительного разрешения Компании Car Wash Priority, являющейся
							правообладателем объектов исключительного права, указанных в пункте 9.1 Соглашения. Под
							использованием подразумеваются, в том числе: воспроизведение, копирование, переработка,
							распространение на любой основе, и прочие действия. Исключение составляют случаи, прямо
							предусмотренные законодательством Российской Федерации или условиями использования
							Мобильного приложения Car Wash Priority.
						</p>
						<p>
							9.3. Использование Клиентом элементов содержания Мобильного приложения Car Wash Priority для
							личного некоммерческого использования, допускается при условии сохранения всех знаков охраны
							авторского права, смежных прав, товарных знаков, других уведомлений об авторстве, сохранения
							имени (или псевдонима) автора/наименования правообладателя в неизменном виде, сохранении
							соответствующего объекта в неизменном виде. Исключение составляют случаи, прямо
							предусмотренные законодательством Российской Федерации.
						</p>
						<p>
							10. ОБРАЩЕНИЕ КЛИЕНТОВ.
							<br />
							10.1. Компания Car Wash Priority, содействуя Клиентам в получении товаров, работ и (или)
							услуг МСО ECO и Партнерских моек, принимает любые вопросы по качеству товаров, работ и (или)
							услуг МСО ECO и Партнерских моек от Клиентов посредством электронной почты на адрес
							info@carwashpriority.ru или в мобильном приложении Car Wash Priority в разделе “Служба
							поддержки”
						</p>
						<p>
							10.2. Если Клиент считает, что содержимое Мобильного приложения Car Wash Priority нарушает
							его личные неимущественные / исключительные права, соответствующее аргументированное
							уведомление должно быть отправлено на адрес электронной почты info@carwashpriority.ru.
							Уведомление о нарушении личных неимущественных / исключительных прав должно содержать: —
							указание на материалы содержимого Мобильного приложения Car Wash Priority, предположительно
							нарушающие права Клиента; — сведения об объекте, личные неимущественные / исключительные
							права на который предположительно нарушаются в Мобильном приложении Car Wash Priority с
							приложением документов, подтверждающих права Клиента на такой объект. — контактную
							информацию о Клиенте, включая: для физического лица — фамилию, имя, отчество, паспортные
							данные (серия и номер, кем выдан, дата выдачи), адрес, номер телефона, адрес электронной
							почты; для юридического лица — наименование, место нахождения, адрес, номер телефона, адрес
							электронной почты; — подпись Клиента. Уведомления, не соответствующие вышеуказанным
							требованиям Соглашения, не рассматриваются Компанией.
						</p>
						<p>
							11. ЗАКЛЮЧИТЕЛЬНЫЕ ПОЛОЖЕНИЯ.
							<br />
							11.1. Соглашение вступает в силу с момента его размещения на сайте Car Wash Priority в сети
							Интернет по адресу публикации, указанному в Соглашении, и действует до момента его отзыва
							Компанией.
						</p>
						<p>
							11.2. Соглашение также может размещаться в ознакомительных целях в мобильном приложении Car
							Wash Priority, при этом в случае противоречий между редакциями Соглашения, размещенного на
							сайте Car Wash Priority и в мобильном приложении Car Wash Priority, применению во всех
							случаях подлежит редакция Соглашения, размещенного на сайте Car Wash Priority.
						</p>
						<p>
							11.3. Компания имеет право в любое время без уведомления Участников вносить с любой
							периодичностью и в любом объеме изменения в Соглашение, и опубликовывать (размещать) новые
							редакции Соглашения в порядке, предусмотренном пунктом 11.1 Соглашения. При внесении
							изменений в Соглашение указывается дата актуальной редакции Соглашения.
						</p>
						<p>
							11.4. Клиенты обязуются самостоятельно отслеживать действующую редакцию Соглашения. Риск
							неознакомления с актуальной (действующей) редакцией Соглашения несут Участники.
						</p>
						<p>
							11.5. Пользование мобильным приложением Car Wash Priority (как то: установка (инсталляция)
							мобильного приложения Car Wash Priority, заполнение персональной информации в мобильном
							приложении Car Wash Priority, прохождение процедуры регистрации в мобильном приложении Car
							Wash Priority, проставление отметки (галочки) в специальном поле (чек-боксе) при регистрации
							в мобильном приложении Car Wash Priority, прохождение процедуры авторизации в мобильном
							приложении Car Wash Priority, заказ и (или) оплата товаров, работ и (или) услуг посредством
							мобильного приложения Car Wash Priority, считывание мобильным устройством через мобильное
							приложение Car Wash Priority QR-кода, размещенного на моечных постах МСО ECO или Партнерских
							моек) считается безусловным согласием Клиента с действующей редакцией Соглашения, в том
							числе после его публикации в новой редакции.
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
					<a className={"hover:opacity-75"} href="#">
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
