<?php
    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\Exception;

    require "PHPMailer/src/Exception.php";
    require "PHPMailer/src/PHPMailer.php";

    $mail = new PHPMailer(true); 
    $mail->CharSet = "UTF-8"; 
    $mail->IsHTML(true);    

   //  Укажите здесь свою почту
    $mail->addAddress("taxoparkin.borovay@yandex.ru");

    if(isset($_POST['key1'])){
      $phone = $_POST["phoneNumberOne"]; 
      $body = '[Номер телефона]:' . ' ' . $phone;

      $theme = '[Заявка c формы Таксопаркин]';
      }

    if(isset($_POST['key2'])){
      $phone = $_POST["key2"]; 
      $name = $_POST["key3"]; 
      $select = $_POST["key4"]; 
      $body = '[номер телефона]:' . ' ' . $phone . "\n"
        . '[Имя клиента]:' . ' ' . $name . "\n"
        . '[Категория]:' . ' ' . $select . ' ';

      $theme = '[Заявка c формы Таксопаркин]';
      }
      
    // if(isset($_POST['phoneServise'])){
    //   $phone = $_POST["phoneServise"]; 
    //   $nameServise = $_POST["nameServise"]; 
    //   $currentService = $_POST["currentService"]; 
    //   $body = '[номер телефона]:' . ' ' . $phone . "\n"
    //   . '[Имя клиента]:' . ' ' . $nameServise . "\n"
    //   . '[Название услуги]:' . ' ' . $currentService . ' ';
    //   }

  //  if(isset($_POST["key1"])){
  //     $type = $_POST["key1"]; 
  //     $citizenship = $_POST["key2"]; 
  //     $was = $_POST["key3"]; 
  //     $work = $_POST["key4"]; 
  //     $money = $_POST["key5"]; 
  //     $rejection = $_POST["key6"]; 
  //     $name = $_POST["key7"]; 
  //     $email = $_POST["key8"]; 
  //     $phone = $_POST["key9"]; 
  //     $country = $_POST["country"]; 
  //     $body = '[Тип визы]:' . ' ' . $type . "\n"
  //     . '[Гражданство]:' . ' ' . $citizenship . "\n"
  //     . '[Визы каких стран у вас были]:' . ' ' . $was . "\n"
  //     . '[Текущая занятость]:' . ' ' . $work . "\n"
  //     . '[Деньги на счету]:' . ' ' . $money . "\n"
  //     . '[Были ли отказы ранее]:' . ' ' . $rejection .  "\n"
  //     . '[Имя]:' . ' ' . $name .  " \n"
  //     . '[email]:' . ' ' . $email .  " \n"
  //     . '[номер телефона]:' . ' ' . $phone .  ' ';
  //     $theme = '[Заявка c квиза]:' . ' ' . $country;
  //  }

   $mail->Subject = $theme;
   $mail->Body = $body;

   $mail->send();
