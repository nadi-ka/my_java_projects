const certificateData = [['Bike tour', 'In the beautiful national park', '$50'],
['Diving', '1 hour diving lesson with instructor', '$65'],
['Fishing', 'Trout fishing on the private lake for couple', '$50'],
['SPA Rihual', '45 min. massage + hamam for couple', '$105'],
['Hot stones', '1-hour massage with hot stones for 1 person', '$89'],
['Pool and SPA', '3-hours in the open air SPA zone', '$110'],
['Jeep driving', '2-hours jeep driving', '$45'],
['Massage', 'Professional 1-hour full body massage', '$75'],
['Picnic', 'Picnic in nature for couple', '$80'],
['Pool and SPA', '3-hours in the open air SPA zone', '$110'],
['Sauna', 'Unforgettable moments in the Sauna World', '$69'],
['Skydiving', 'One jump with instructor', '$70'],
['SPA Ritual', '2-hours Indonesian SPA Ritual', '$125'],
['Whirlpool', '2-hours rest in our SPA zone with whirlpools', '$71'],
['Yachting', 'Unforgettable 2-hours journey for couple', '$150']];

const sportCertificates = [
  ['Bike tour', 'In the beautiful national park', '$50'],
  ['Diving', '1 hour diving lesson with instructor', '$65'],
  ['Fishing', 'Trout fishing on the private lake for couple', '$50'],
  ['Jeep driving', '2-hours jeep driving', '$45'],
  ['Skydiving', 'One jump with instructor', '$70'],
  ['Yachting', 'Unforgettable 2-hours journey for couple', '$150']];

const spaCertificates = [
  ['SPA Rihual', '45 min. massage + hamam for couple', '$105'],
  ['Hot stones', '1-hour massage with hot stones for 1 person', '$89'],
  ['Pool and SPA', '3-hours in the open air SPA zone', '$110'],
  ['Massage', 'Professional 1-hour full body massage', '$75'],
  ['Pool and SPA', '3-hours in the open air SPA zone', '$110'],
  ['Sauna', 'Unforgettable moments in the Sauna World', '$69'],
  ['SPA Rihual', '45 min. massage + hamam for couple', '$105'],
  ['Whirlpool', '2-hours rest in our SPA zone with whirlpools', '$71']];

const questCertificates = [
  ['Quest Space', '1-hour space odyssey', '$40'],
  ['Quest Dragon age', 'Dive  into the world of dragons', '$51'],
  ['Quest horror', 'Abandoned hut', '$49']];

const adventureCertificates = [
  ['Jeep driving', '2-hours jeep driving', '$45'],
  ['Yachting', 'Unforgettable 2-hours journey for couple', '$150'],
  ['Picnic', 'Picnic in nature for couple', '$80'],
  ['Little train', 'Walk through the old town', '$74'],
  ['Along the bay', '2-hours walk along the bay', '$115']];

const masterCertificates = [
  ['Chocolatier', 'Learning to make chocolate', '$65'],
  ['Italian spaghetti', 'Master-class with Italian Chef', '$59'],
  ['Modern dance', 'Modern dance master-class', '$55'],
  ['Painting', 'You will paint a picture for 1 hour', '$40'],
  ['Pottery', '2-hours pottery master class', '$60'],
  ['Theatrical art', '1-hour lesson of the theatrical art', '$79']];

const animalsCertificates = [
  ['Safari', '3-hous safari on jeeps', '$105'],
  ['Horse riding', '2-hours romantic ride for couple', '$105'],
  ['Contact zoo', 'Visiting contact zoo for couple', '$57']];

const gastroCertificates = [
  ['Restaurant', 'Romantic dinner for couple', '$95'],
  ['Summer cafe', 'Taste the delicacies in our cafe', '$40'],
  ['French cuisine', 'Dinner from the chef', '$83']];

const tags = ['Sport', 'SPA', 'Quest', 'Adventure', 'Master-Class', 'Animals', 'Gastro'];

// Add tags imgs to upper container;
for(var i = 0; i < document.querySelectorAll(".square").length; i++) {
  var img = document.createElement("img");
  img.className = "main_tag_img";
  img.id = tags[i].toLowerCase();
  img.src = 'img/tag/' + i + '.jpg';
  img.setAttribute('onclick', 'searchCertificates(this)');
  var src = document.querySelectorAll(".square")[i];
  src.appendChild(img);

  document.querySelectorAll(".tag_name")[i].innerHTML = tags[i];
}

// Add certificate's imgs and info to lower container;
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

  function searchCertificates(obj) {
    removeStyleHidden();
      var id = obj.id;
      var typeOfCertificates = defineCertificateType(id);

      for(var i = 0; i < document.querySelectorAll(".main_cert_ref").length; i++) {
        if(i < typeOfCertificates.length) {
          document.querySelectorAll(".main_cert_img")[i].src = 'img/' + id + '/' + i + '.jpg';

          document.querySelectorAll(".main_cert_name_ref")[i].innerHTML = typeOfCertificates[i][0];
          document.querySelectorAll(".cert_descript")[i].innerHTML = typeOfCertificates[i][1];
          document.querySelectorAll(".cert_price")[i].innerHTML = typeOfCertificates[i][2];
        }else {
          document.querySelectorAll(".lower_sqr_container_inn")[i].style.visibility = 'hidden';
        }
      }
      limitScroll();
}

//get input when user types in the search string;
let typingTimer;                //timer identifier
let doneTypingInterval = 3000;  //time in ms (3 seconds)
let myInput = document.getElementById('text_input');

//on keyup, start the countdown
myInput.addEventListener('keyup', () => {
    clearTimeout(typingTimer);
    if (myInput.value) {
        typingTimer = setTimeout(doneTyping, doneTypingInterval);
    }
});

//user finished typing
function doneTyping () {
  var searchCategory = document.getElementById('category_input').value;
  var searchString = document.getElementById('text_input').value;

  switch (searchCategory) {
    case 'tag':
      searchByTag(searchString);
      break;
    case 'name':
      searchByName(searchString);
      break;
    case 'description':
      searchByDescription(searchString);
      break;
    default:
      searchByName(searchString);
  }
}

function searchByTag(searchString) {
    removeStyleHidden();
    var tagForSearch = "";

    for(var i = 0; i < tags.length; i++) {
      if(tags[i].toLowerCase().indexOf(searchString) >= 0) {
        tagForSearch = tags[i].toLowerCase();
      }
    }

    if(tagForSearch !== "") {
      var tagVal = tagForSearch;
      var typeOfCertificates = defineCertificateType(tagVal);

    for(var i = 0; i <document.querySelectorAll(".main_cert_ref").length; i++) {
      if(i < typeOfCertificates.length) {
        document.querySelectorAll(".main_cert_img")[i].src = 'img/' + tagForSearch + '/' + i + '.jpg';
        document.querySelectorAll(".main_cert_name_ref")[i].innerHTML = typeOfCertificates[i][0];
        document.querySelectorAll(".cert_descript")[i].innerHTML = typeOfCertificates[i][1];
        document.querySelectorAll(".cert_price")[i].innerHTML = typeOfCertificates[i][2];
      }else {
        document.querySelectorAll(".lower_sqr_container_inn")[i].style.visibility = 'hidden';
      }
    }
  }
    limitScroll();
}

  function searchByName(searchString) {
    removeStyleHidden();
    var certsByName = [];
    var itemIndex = [];
    for(var i = 0; i < certificateData.length; i++) {
      if(certificateData[i][0].toLowerCase().indexOf(searchString) >= 0) {
        certsByName.push(certificateData[i]);
        itemIndex.push(i);
      }
    }
    addCertificates(certsByName, itemIndex);
  }

  function searchByDescription(searchString) {
    removeStyleHidden();
    var certsByDescription = [];
    var itemIndex = [];
    for(var i = 0; i < certificateData.length; i++) {
      if(certificateData[i][1].toLowerCase().indexOf(searchString) >= 0) {
        certsByDescription.push(certificateData[i]);
        itemIndex.push(i);
      }
    }
    addCertificates(certsByDescription, itemIndex);
  }

function limitScroll() {
    document.body.classList.add("limit-scrolling");
}

function removeStyleHidden() {
  for(var i = 0; i < document.querySelectorAll(".main_cert_ref").length; i++) {
    document.querySelectorAll(".lower_sqr_container_inn")[i].style.visibility = '';
  }
}

function defineCertificateType(str) {
  var typeOfCertificates;
  switch (str) {
    case "sport":
      typeOfCertificates = sportCertificates;
      break;
    case "spa":
      typeOfCertificates = spaCertificates;
      break;
    case "quest":
      typeOfCertificates = questCertificates;
      break;
    case "adventure":
      typeOfCertificates = adventureCertificates;
      break;
    case "master-class":
      typeOfCertificates = masterCertificates;
      break;
    case "animals":
      typeOfCertificates = animalsCertificates;
      break;
    case "gastro":
      typeOfCertificates = gastroCertificates;
      break;
    default:
      typeOfCertificates = certificateData;
  }
  return typeOfCertificates;
}

function addCertificates(arr, itemIndexArr) {
  for(var i = 0; i <document.querySelectorAll(".main_cert_ref").length; i++) {
    if(i < arr.length) {
      document.querySelectorAll(".main_cert_img")[i].src = 'img/' + 'all/' + itemIndexArr[i] + '.jpg';
      document.querySelectorAll(".main_cert_name_ref")[i].innerHTML = arr[i][0];
      document.querySelectorAll(".cert_descript")[i].innerHTML = arr[i][1];
      document.querySelectorAll(".cert_price")[i].innerHTML = arr[i][2];
    }else {
      document.querySelectorAll(".lower_sqr_container_inn")[i].style.visibility = 'hidden';
    }
  }
}
