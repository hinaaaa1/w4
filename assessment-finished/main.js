const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

const storyText = '津田の気温は94度だったので、 :insertX:は散歩に出かけた。i:nsertX:は散歩に出かけた。:insertY:のところに着くと、彼らはしばらく恐怖の目で見つめ、そして:insertZ:した。ボブはその一部始終を見たが、驚きはしなかった。';
const insertX = ['ミッキーマウス', 'スヌーピー', 'サンタクロース'];
const insertY = ['千駄ヶ谷', 'ディズニーランド', '津田塾大学'];
const insertZ = ['混雑していた', '雪が降っていた', '雷が鳴っていた'];

randomize.addEventListener('click', result);

function result() {
  let newStory = storyText;

  const xItem = randomValueFromArray(insertX);
  const yItem = randomValueFromArray(insertY);
  const zItem = randomValueFromArray(insertZ);

  newStory = newStory.replace(':insertx:',xItem);
  newStory = newStory.replace(':insertx:',xItem);
  newStory = newStory.replace(':inserty:',yItem);
  newStory = newStory.replace(':insertz:',zItem);

  if (customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replace('Bob', name);
  }

  if (document.getElementById("uk").checked) {
    const weight = `${Math.round(300*0.0714286)} stone`;
    const temperature =  `${Math.round((94-32) * 5 / 9)} centigrade`;
    newStory = newStory.replace('94 fahrenheit', temperature);
    newStory = newStory.replace('300 pounds', weight);
  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}
