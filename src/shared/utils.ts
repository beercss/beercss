const id = ():string => {
  return "id" + (new Date().getTime() + "" + Math.floor(Math.random() * (999999 - 100000) + 100000)).padStart(22, "0");
}

const wait = async (milliseconds:number) => await new Promise((resolve: any) => setTimeout(resolve, milliseconds));

export default {
  id,
  wait
}