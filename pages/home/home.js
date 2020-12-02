// pages/home/home.js
Page({
  data: {
   message:"你好小程序",
   firstname:"kobe",
   lastname:"yanyan",
   age:21,
   nowtime:new Date().toLocaleString(),
   isActive:false,
  },
  onLoad(){
    setInterval(
      ()=>{this.setData(
        {
          nowtime:new Date().toLocaleString()
        }
      )}
    )
  },
  handleSwitchColor(){
    this.setData({
      isActive:!this.data.isActive
    })
  },
  handleclick(event){
    console.log(event)
  }
})