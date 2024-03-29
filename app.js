const program = document.querySelector('.program');
const wishes = document.querySelector('.wish-container-back');
const wishList = document.querySelectorAll('.wish');
let talkTime = '';
let rowElement = '';
window.addEventListener('scroll', fixedPosWishes);
program.addEventListener('click', addTalk);
loadTalksFromLocalStorage ();


function addTalk (evt) {
  const elementClicked = evt.target;
  let talkName = '';
  let talkRoom = '';
  let talkPicked = '';
  if(elementClicked.classList.contains('talk') || elementClicked.classList.contains('talk-name')) {
    if(elementClicked.classList.contains('talk')) {
      rowElement = elementClicked.parentElement;
      talkName = elementClicked.querySelector('.talk-name').textContent;
      talkTime = rowElement.classList.item(1);
      talkRoom = elementClicked.classList.item(1);
      deselectAllTalksInThatRow (rowElement);
      elementClicked.classList.add('talk-selected');
    } else {
      rowElement = elementClicked.parentElement.parentElement;
      talkName = elementClicked.textContent;
      talkTime = rowElement.classList.item(1);
      talkRoom = elementClicked.parentElement.classList.item(1);
      deselectAllTalksInThatRow (rowElement);
      elementClicked.parentElement.classList.add('talk-selected');
    }

    switch (talkRoom) {
      case "loc1":
        talkRoom = 'Labben';
        break;
      case 'loc2':
        talkRoom = 'Verftet';
        break;
      case 'loc3':
        talkRoom = 'Sofakrok A';
        break;
      case 'loc4':
        talkRoom = 'Wesselstuen';
        break;
      case 'loc5':
        talkRoom = 'Sofakrok B';
        break;
      default:
        console.log('No room found.')
    }

    talkPicked = `${talkName}  (<i>${talkRoom}</i>)`;

    switch (talkTime) {
      case "talks1":
        wishList.item(0).firstElementChild.innerHTML = talkPicked;
        window.localStorage.setItem(talkTime, talkPicked);
        break;
      case 'talks2':
        wishList.item(1).firstElementChild.innerHTML = talkPicked;
        window.localStorage.setItem(talkTime, talkPicked);
        break;
      case 'talks3':
        wishList.item(2).firstElementChild.innerHTML = talkPicked;
        window.localStorage.setItem(talkTime, talkPicked);
        break;
      case 'talks4':
        wishList.item(3).firstElementChild.innerHTML = talkPicked;
        window.localStorage.setItem(talkTime, talkPicked);
        break;
      default:
        console.log('No talk found.');
    }

  }
}

function deselectAllTalksInThatRow (rowElement) {
  const talks = rowElement.children;
  for(const talk of talks) {
    talk.classList.remove('talk-selected');
  }
}

function fixedPosWishes(evt) {
  if(window.scrollY > 110 && window.innerWidth < 683) {
    wishes.classList.add('fixed-pos');
    program.classList.add('push-down');
  } else {
    wishes.classList.remove('fixed-pos');
    program.classList.remove('push-down');
  }
}

/*TODO: add select background-color to the program again based on local storage*/
function loadTalksFromLocalStorage () {
  for(let i = 0; i < wishList.length; i++) {
    wishList.item(i).firstElementChild.innerHTML = window.localStorage.getItem(`talks${i+1}`)?window.localStorage.getItem(`talks${i+1}`):"Ikke valgt";
  }
}
