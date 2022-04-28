const id = ():string => {
  return "id" + (new Date().getTime() + "" + Math.floor(Math.random() * (999999 - 100000) + 100000)).padStart(22, "0");
}

export default {
  id
}