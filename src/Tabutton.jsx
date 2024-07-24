export default function Tabbutton({children}){
   function eveHandler(val){
    console.log(val)
   }
  return (<li><button onClick={() => eveHandler('my_name')}>{children}</button></li>);
}