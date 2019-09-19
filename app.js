const program = document.querySelector('.program');
const wishes = document.querySelectorAll('.wish');
program.addEventListener('click', addTalk);

function addTalk (evt) {
  const elementClicked = evt.target;
  let talkName = '';
  let talkTime = '';
  let talkRoom = '';
  let talkPicked = '';
  if(elementClicked.classList.contains('talk') || elementClicked.classList.contains('talk-name')) {
    if(elementClicked.classList.contains('talk')) {
      talkName = elementClicked.querySelector('.talk-name').textContent;
      talkTime = elementClicked.parentElement.classList.item(1);
      talkRoom = elementClicked.classList.item(1);
      elementClicked.parentElement.classList.toggle('talk-selected');
    } else {
      talkName = elementClicked.textContent;
      talkTime = elementClicked.parentElement.parentElement.classList.item(1);
      talkRoom = elementClicked.parentElement.classList.item(1);
      elementClicked.parentElement.parentElement.classList.toggle('talk-selected');
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

    talkPicked = `(${talkRoom}) - <i>${talkName}</i>`;

    switch (talkTime) {
      case "talks1":
        wishes.item(0).firstElementChild.innerHTML = talkPicked;
        break;
      case 'talks2':
        wishes.item(1).firstElementChild.innerHTML = talkPicked;
        break;
      case 'talks3':
        wishes.item(2).firstElementChild.innerHTML = talkPicked;
        break;
      case 'talks4':
        wishes.item(3).firstElementChild.innerHTML = talkPicked;
        break;
      default:
        console.log('No talk found.');
    }

  }
}
