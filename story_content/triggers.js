function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5emKGhJgCIZ":
        Script1();
        break;
      case "5V2Z7diVh3h":
        Script2();
        break;
      case "5q9w9ofyuo1":
        Script3();
        break;
      case "6gqdHgyYAYr":
        Script4();
        break;
      case "6IJkeUFipr7":
        Script5();
        break;
      case "65Q2U2TtoRy":
        Script6();
        break;
      case "6mcvTBUEzBN":
        Script7();
        break;
      case "6GNMDM1Xhor":
        Script8();
        break;
      case "6bJ26gfjsKY":
        Script9();
        break;
  }
}

window.InitExecuteScripts = function()
{
var player = GetPlayer();
var object = player.object;
var once = player.once;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
window.Script1 = function()
{
  player.once(() => {
const target = object('5jT9isp2fky');
const duration = 750;
const easing = 'ease-out';
const id = '6CRjEuL9pU9';
const growAmount = 0.2;
const delay = 0;
addToTimeline(
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script2 = function()
{
  player.once(() => {
const target = object('657yEPp4360');
const duration = 750;
const easing = 'ease-out';
const id = '66d1XcbGScN';
const pulseAmount = 0.07;
const delay = 0;
addToTimeline(
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script3 = function()
{
  player.once(() => {
const target = object('67v367S2Xjr');
const duration = 750;
const easing = 'ease-out';
const id = '6J56L1JB7rL';
const pulseAmount = 0.07;
const delay = 5750;
addToTimeline(
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script4 = function()
{
  player.once(() => {
const target = object('6FvamvlBIJi');
const duration = 750;
const easing = 'ease-out';
const id = '6aeLKdC1mYE';
const pulseAmount = 0.07;
const delay = 5750;
addToTimeline(
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script5 = function()
{
  player.once(() => {
const target = object('6gXGkJZsJWf');
const duration = 750;
const easing = 'ease-out';
const id = '5tmiBZWbHKV';
const pulseAmount = 0.07;
const delay = 0;
addToTimeline(
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script6 = function()
{
  player.once(() => {
const target = object('5hK2FD52BHj');
const duration = 750;
const easing = 'ease-out';
const id = '5wE90QKpdbm';
const growAmount = 0.2;
const delay = 3000;
addToTimeline(
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script7 = function()
{
  player.once(() => {
const target = object('65Dfhqh4sjd');
const duration = 750;
const easing = 'ease-out';
const id = '5vZk7pKsro6';
const growAmount = 0.2;
const delay = 3000;
addToTimeline(
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script8 = function()
{
  player.once(() => {
const target = object('5kRavpmdKmi');
const duration = 750;
const easing = 'ease-out';
const id = '5mkcNc4pFex';
const teeterAmount = 4;
const signs = ['-', '', '-'];

const delay = 0;
addToTimeline(
target.animate([
{ rotate: '0deg' },
{ rotate: `${signs[0] + teeterAmount}deg` },
{ rotate: '0deg' },
{ rotate: `${signs[1] + teeterAmount}deg` },
{ rotate: '0deg' },
{ rotate: `${signs[2] + teeterAmount}deg` },
{ rotate: '0deg' }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script9 = function()
{
  player.once(() => {
const target = object('6HUupYPfLi0');
const duration = 750;
const easing = 'ease-out';
const id = '6AVmSWdDCD9';
const teeterAmount = 4;
const signs = ['-', '', '-'];

const delay = 0;
addToTimeline(
target.animate([
{ rotate: '0deg' },
{ rotate: `${signs[0] + teeterAmount}deg` },
{ rotate: '0deg' },
{ rotate: `${signs[1] + teeterAmount}deg` },
{ rotate: '0deg' },
{ rotate: `${signs[2] + teeterAmount}deg` },
{ rotate: '0deg' }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

};
