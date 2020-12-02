// compentents/w-control/w-control.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    title:{
      type:Array,
      value:[],
    }

  },

  /**
   * 组件的初始数据
   */
  data: {
   currentIndex:0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleItemClick(event){
      //取出index
      const index=event.currentTarget.dataset.index;
      // console.log('.........')
      this.setData({
        currentIndex:index
      })
      this.triggerEvent("itemclick",{index,title:this.properties.titles[index]},{})



    }
  }
})
