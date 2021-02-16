const certificateData = [['Bike tour', 'In the beautiful national park', '$50'],
['Diving', '1 hour diving lesson with instructor', '$65'],
['Fishing', 'Trout fishing on the private lake for couple', '$50'],
['SPA Rihual', '45 min. massage + hamam for couple', '$105'],
['Hot stones', '1-hour massage with hot stones for 1 person', '$89'],
['Swimming pool', '3-hours in the SPA zone of the 5-stars hotel', '$110'],
['Jeep driving', '2-hours jeep driving', '$45'],
['Massage', 'Professional 1-hour full body massage', '$75'],
['Picnic', 'Picnic in nature for couple', '$80'],
['Pool and SPA', '3-hours in the open air SPA zone', '$110'],
['Sauna', 'Unforgettable moments in the Sauna World', '$69'],
['Skydiving', 'One jump with instructor', '$70'],
['SPA Ritual', '2-hours Indonesian SPA Ritual', '$125'],
['Whirlpool', '2-hours rest in our SPA zone with whirlpools', '$71'],
['Yachting', 'Unforgettable 2-hours journey for couple', '$150']];

for(var i = 0; i < document.querySelectorAll(".main_cert_ref").length; i++) {
  var img = document.createElement("img");
  img.className = "main_cert_img";
  img.src = 'img/all/' + i + '.jpg';
  var src = document.querySelectorAll(".main_cert_ref")[i];
  src.appendChild(img);

  document.querySelectorAll(".main_cert_name_ref")[i].innerHTML = certificateData[i][0];
  document.querySelectorAll(".cert_descript")[i].innerHTML = certificateData[i][1];
  document.querySelectorAll(".cert_price")[i].innerHTML = certificateData[i][2];
}
