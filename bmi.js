function Bmi()
{
    let weight=document.getElementById('weight').value
let height=document.getElementById('height').value
let bmi=(weight/(height*height))*10000
console.log(bmi  )
document.getElementById('heading').innerHTML='your bmi is'
document.getElementById('bmi_output').innerHTML=bmi
if(bmi<18.5)
{
  document.getElementById('message').innerHTML='under weight'

}
if (bmi>=18.5  && bmi<=24.9)
{
    document.getElementById('message').innerHTML='normal weight'
}
if(bmi>=25 && bmi<=29.9)
{
    document.getElementById('message').innerHTML='over weight'
}
if(bmi>=30)
{
    document.getElementById('message').innerHTML='obesity'
}
}